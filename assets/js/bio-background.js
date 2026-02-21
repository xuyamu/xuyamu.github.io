// assets/js/bio-background.js

(function() {
    let container, scene, camera, renderer, particleSystem;
    let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;
    const particleCount = 1800; 
    const velocities = [];

    // --- 1. 恒星光谱色表与比例分布 (已修复十六进制语法错误) ---
    const starColors = [
        { color: new THREE.Color(0x9bb0ff), weight: 0.01 }, // O: 蓝色
        { color: new THREE.Color(0xaabfff), weight: 0.03 }, // B: 蓝白
        { color: new THREE.Color(0xCAD7FF), weight: 0.10 }, // A: 白色 (已修复)
        { color: new THREE.Color(0xf8f7ff), weight: 0.15 }, // F: 黄白
        { color: new THREE.Color(0xfff4ea), weight: 0.20 }, // G: 黄色 (太阳类)
        { color: new THREE.Color(0xffd2a1), weight: 0.25 }, // K: 橙色
        { color: new THREE.Color(0xffcc6f), weight: 0.26 }  // M: 红橙 (红矮星)
    ];

    // 加权随机选色函数
    function getRandomStarColor() {
        let rand = Math.random();
        let cumulativeWeight = 0;
        for (const star of starColors) {
            cumulativeWeight += star.weight;
            if (rand < cumulativeWeight) return star.color;
        }
        return starColors[starColors.length - 1].color;
    }

    // --- 2. 创建发光圆形纹理 ---
    function createParticleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64; canvas.height = 64;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); 
        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(canvas);
    }

    function init() {
        container = document.getElementById('bio-canvas-container');
        if (!container) return;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 150;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 限制DPR以优化性能
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 450;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 450;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 350;
            
            velocities.push({ 
                x: (Math.random() - 0.5) * 0.02, 
                y: (Math.random() - 0.5) * 0.02, 
                z: (Math.random() - 0.5) * 0.02 
            });

            const sColor = getRandomStarColor();
            colors[i * 3] = sColor.r;
            colors[i * 3 + 1] = sColor.g;
            colors[i * 3 + 2] = sColor.b;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 3.5,
            map: createParticleTexture(),
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        document.addEventListener('mousemove', e => {
            targetMouseX = (e.clientX - window.innerWidth / 2) * 0.05;
            targetMouseY = (e.clientY - window.innerHeight / 2) * 0.05;
        });

        window.addEventListener('resize', onWindowResize);
        animate();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        const posAttr = particleSystem.geometry.attributes.position;
        const positions = posAttr.array;
        const time = Date.now() * 0.0003;

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
            
            positions[ix] += velocities[i].x + Math.sin(time + positions[iz] * 0.005) * 0.02;
            positions[iy] += velocities[i].y + Math.cos(time + positions[ix] * 0.005) * 0.02;

            const dx = positions[ix] - mouseX * 2.5;
            const dy = positions[iy] + mouseY * 2.5;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 70) {
                positions[ix] += dx / dist * 0.4;
                positions[iy] += dy / dist * 0.4;
            }

            if (Math.abs(positions[ix]) > 280) positions[ix] *= -0.95;
            if (Math.abs(positions[iy]) > 280) positions[iy] *= -0.95;
        }
        
        posAttr.needsUpdate = true;
        particleSystem.rotation.y += 0.0003;
        renderer.render(scene, camera);
    }

    // 健壮的初始化逻辑
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();