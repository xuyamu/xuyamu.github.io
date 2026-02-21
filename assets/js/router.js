/**
 * YAMU Project - 终极无感刷新路由 (彻底消灭 CSS 冲突与幽灵闪现)
 */

const ROUTER_CONFIG = {
    containerId: 'page-content',
    scrollerId: 'view-scroller',
    fadeTime: 250 // 统一定义转场时间
};

const PageCache = new Map();

// 提前记录已加载的外部库，防止重复请求
window.LoadedScripts = new Set();
document.querySelectorAll('script[src]').forEach(s => window.LoadedScripts.add(new URL(s.src, document.baseURI).href));

const ScrollStore = {
    save() {
        const scroller = document.getElementById(ROUTER_CONFIG.scrollerId);
        if (scroller) {
            const key = 'pos_' + window.location.pathname + window.location.search;
            sessionStorage.setItem(key, scroller.scrollTop);
        }
    },
    // Promise 包装，必须等滚动完了才允许进行下一步
    restore() {
        return new Promise((resolve) => {
            const scroller = document.getElementById(ROUTER_CONFIG.scrollerId);
            const key = 'pos_' + window.location.pathname + window.location.search;
            const savedPos = sessionStorage.getItem(key);

            if (scroller && savedPos) {
                let attempts = 0;
                const check = setInterval(() => {
                    const target = parseInt(savedPos);
                    // 等待内部列表渲染撑开高度
                    if (scroller.scrollHeight >= target || attempts > 15) {
                        scroller.scrollTo({ top: target, behavior: 'instant' });
                        clearInterval(check);
                        sessionStorage.removeItem(key);
                        resolve(); // 滚动完毕，放行！
                    }
                    attempts++;
                }, 20);
            } else {
                resolve();
            }
        });
    }
};

// 绝对按顺序执行脚本
async function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    for (let oldScript of scripts) {
        if (oldScript.src) {
            const absUrl = new URL(oldScript.src, document.baseURI).href;
            if (window.LoadedScripts.has(absUrl)) continue; // 库已存在，秒跳过
            window.LoadedScripts.add(absUrl);
        }
        await new Promise((resolve) => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.innerHTML = oldScript.innerHTML;
            
            if (newScript.src) {
                newScript.onload = resolve;
                newScript.onerror = resolve;
            }
            oldScript.parentNode.replaceChild(newScript, oldScript);
            if (!newScript.src) resolve();
        });
    }
}

window.navigate = async function(url, isBack = false) {
    const container = document.getElementById(ROUTER_CONFIG.containerId);
    const scroller = document.getElementById(ROUTER_CONFIG.scrollerId);
    if (!container || !scroller) return;

    if (!isBack) ScrollStore.save();

    // 1. 强制 JS 掌管动画，覆盖 CSS 里的 0.4s 延迟，立即开始淡出
    container.style.transition = `opacity ${ROUTER_CONFIG.fadeTime}ms ease`;
    container.style.opacity = '0';

    try {
        // 2. 绝对等待！死等它完全变透明，再进行下一步暗箱操作
        await new Promise(r => setTimeout(r, ROUTER_CONFIG.fadeTime + 20));

        let html;
        if (PageCache.has(url)) {
            html = PageCache.get(url);
        } else {
            const response = await fetch(url);
            html = await response.text();
            PageCache.set(url, html);
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.getElementById(ROUTER_CONFIG.containerId);

        if (newContent) {
            // 3. 注入新内容
            container.innerHTML = newContent.innerHTML;
            if (!isBack) history.pushState({ url }, '', url);
        
            // --- 【关键修改：先翻译，后执行】 ---
            // 此时文章列表还没生成，但 <h1>思辨之林</h1> 已经在 DOM 里了
            // 立即调用翻译，让标题瞬间变英文
            if (typeof applyLanguage === 'function') applyLanguage();
        
            // 4. 跑脚本（生成文章列表、画廊等）
            await executeScripts(container);
        
            // 5. 滚动恢复逻辑...
            scroller.style.scrollBehavior = 'auto';
            if (isBack) {
                await ScrollStore.restore();
            } else {
                scroller.scrollTop = 0;
            }
        
            // 6. 再次翻译（兜底翻译脚本动态生成的文字）
            if (typeof applyLanguage === 'function') applyLanguage();

            setTimeout(() => {
                if (typeof bindGlobalSFX === 'function') {
                    console.log("正在为新页面绑定音效...");
                    bindGlobalSFX();
                }
            }, 100);
            
            // 7. 派发事件，通知子页面脚本（如 renderArticles）
            window.dispatchEvent(new Event('pageRendered'));
        
            // 8. 显示页面
            container.style.opacity = '1';
        }
        
    } catch (err) {
        console.warn("路由失败，使用基础跳转", err);
        window.location.href = url;
    }
};

window.onpopstate = (e) => {
    const url = (e.state && e.state.url) ? e.state.url : window.location.pathname + window.location.search;
    window.navigate(url, true);
};

window.bindGlobalSFX = function() {
    const hoverSound = document.getElementById('sound-hover');
    const clickSound = document.getElementById('sound-click');
    document.querySelectorAll('.glass-item, button, .nav-link, .filter-btn').forEach(el => {
        if (el.dataset.sfxBound) return;
        el.addEventListener('mouseenter', () => hoverSound?.play().catch(()=>{}));
        el.addEventListener('click', () => clickSound?.play().catch(()=>{}));
        el.dataset.sfxBound = "true";
    });
};

document.addEventListener('DOMContentLoaded', () => {
    if (!history.state) history.replaceState({ url: window.location.pathname + window.location.search }, '');
    window.bindGlobalSFX();
});