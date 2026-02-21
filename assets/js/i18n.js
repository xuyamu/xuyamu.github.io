/**
 * assets/js/i18n.js
 * 负责语言状态管理、持久化存储及界面文本更新
 */

// 1. 初始化语言状态 (优先读取本地存储)
// 使用 var 或 window.currentLang 确保全局可访问
window.currentLang = localStorage.getItem('site_lang') || 'zh';

/**
 * 切换语言 (绑定在导航栏按钮)
 */
function toggleLanguage() {
    // 切换状态
    window.currentLang = window.currentLang === 'zh' ? 'en' : 'zh';
    
    // 写入本地存储
    localStorage.setItem('site_lang', window.currentLang);
    
    // 应用更改
    applyLanguage();
    
    // [新增] 派发全局事件，通知各页面的独立脚本 (如 visual-synapse.html 的画廊) 进行重绘
    window.dispatchEvent(new Event('langChanged'));
}

/**
 * 应用当前语言设置到 DOM
 */
function applyLanguage() {
    // 0. 安全检查
    if (typeof uiTranslations === 'undefined') {
        console.warn('uiTranslations dictionary not loaded.');
        return;
    }

    // 1. 设置 HTML 语言属性
    document.documentElement.lang = window.currentLang === 'zh' ? 'zh-CN' : 'en';

    // 2. 更新切换按钮文字 (处理 innerHTML 以支持颜色高亮)
    const btn = document.getElementById('lang-toggle');
    if (btn && uiTranslations[window.currentLang]?.['lang_switch']) {
        btn.innerHTML = uiTranslations[window.currentLang]['lang_switch'];
    }

    // 3. 更新所有静态文本 (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (uiTranslations[window.currentLang]?.[key]) {
            el.innerHTML = uiTranslations[window.currentLang][key];
        }
    });

    // 4. 更新声音按钮状态 (根据当前音乐状态获取对应的翻译键值)
    const musicBtnSpan = document.querySelector('#music-toggle span');
    const musicAudio = document.getElementById('bg-music');
    if (musicBtnSpan && musicAudio) {
        const soundKey = musicAudio.paused ? 'sound_off' : 'sound_on';
        if (uiTranslations[window.currentLang]?.[soundKey]) {
            musicBtnSpan.innerText = uiTranslations[window.currentLang][soundKey];
        }
    }

    // -----------------------------------------------------------
    // 5. [保留功能] 卡片标题样式调整
    // -----------------------------------------------------------
    document.querySelectorAll('.card-title').forEach(title => {
        if (window.currentLang === 'en') {
            // === 英文模式 ===
            title.classList.remove('text-3xl');
            title.classList.add('text-[20px]'); 
        } else {
            // === 中文模式 ===
            title.classList.remove('text-[20px]');
            title.classList.add('text-3xl');
        }
    });

    // -----------------------------------------------------------
    // 6. [保留功能] 主标题样式调整 (Hero Title)
    // -----------------------------------------------------------
    const heroH1 = document.getElementById('hero-title');
    if (heroH1) {
        if (window.currentLang === 'en') {
            // === 英文模式 ===
            heroH1.classList.remove('md:text-6xl', 'tracking-[0.15em]');
            heroH1.classList.add('md:text-4xl', 'tracking-widest'); 
        } else {
            // === 中文模式 ===
            heroH1.classList.remove('md:text-4xl', 'tracking-widest');
            heroH1.classList.add('md:text-6xl', 'tracking-[0.15em]');
        }
    }

    // -----------------------------------------------------------
    // 7. [兼容旧逻辑] 尝试触发列表渲染
    // 注：现在推荐使用 dispatchEvent('langChanged')，但为了不破坏旧代码保留此处
    // -----------------------------------------------------------
    try {
        // 如果页面上有 filter 按钮，获取当前 filter，否则默认为 all
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter 
                             || document.querySelector('.filter-btn.active')?.innerText // 兼容有些按钮可能没写 dataset
                             || 'all'; 

        // 规范化 filter (如果是从 innerText 获取的，可能是 "ALL / 全部" 这种格式，需要处理，简单起见传给函数去处理)
        const safeFilter = typeof activeFilter === 'string' && activeFilter.includes('ALL') ? 'all' : activeFilter;

        if (typeof renderBioInsights === 'function') renderBioInsights();
        if (typeof renderArticles === 'function') renderArticles('all'); // 简单化，或者根据逻辑传入
        if (typeof renderGallery === 'function') renderGallery(document.querySelector('.filter-btn.active') ? undefined : 'all'); 
    } catch (e) {
        console.log("Rendering update skipped:", e);
    }
}

// 页面加载完毕执行
document.addEventListener('DOMContentLoaded', () => {
    // 延时确保 uiTranslations 加载完毕
    setTimeout(applyLanguage, 50);
});


// 在 i18n.js 文件最末尾添加
window.updateContent = applyLanguage; 

// 顺便加固一下：确保 currentLang 始终同步
window.currentLang = localStorage.getItem('site_lang') || 'zh';