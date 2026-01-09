// Script para verificar e carregar imagens com fallback
(function() {
    // Função para tentar carregar imagem com diferentes extensões
    function loadImageWithFallback(imgElement, basePath, altText) {
        const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
        let currentIndex = 0;
        
        function tryNext() {
            if (currentIndex >= extensions.length) {
                // Todas as extensões falharam
                imgElement.style.display = 'none';
                const errorDiv = document.createElement('div');
                errorDiv.style.cssText = 'padding: 1rem; text-align: center; color: #9ca3af; background: rgba(212, 175, 55, 0.1); border: 1px dashed rgba(212, 175, 55, 0.3); border-radius: 8px; margin-top: 1rem;';
                errorDiv.innerHTML = `
                    <p style="color: #d4af37; font-weight: 600; margin-bottom: 0.5rem;">⚠️ Imagem não encontrada</p>
                    <p style="font-size: 0.875rem;">Procure por: <strong>${basePath}.png</strong> ou <strong>${basePath}.jpg</strong></p>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">Na pasta: <code>images/</code></p>
                `;
                imgElement.parentNode.appendChild(errorDiv);
                return;
            }
            
            const testPath = basePath + extensions[currentIndex];
            const testImg = new Image();
            
            testImg.onload = function() {
                imgElement.src = testPath;
                imgElement.style.display = 'block';
            };
            
            testImg.onerror = function() {
                currentIndex++;
                tryNext();
            };
            
            testImg.src = testPath;
        }
        
        tryNext();
    }
    
    // Aguardar o DOM carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        // Logo
        const logoImg = document.querySelector('.logo-img');
        if (logoImg && !logoImg.src.includes('logo.png')) {
            loadImageWithFallback(logoImg, './images/logo', 'Logo');
        }
        
        // Equipe (time.png)
        const equipeImg = document.querySelector('.team-image');
        if (equipeImg && !equipeImg.src.includes('time.png')) {
            loadImageWithFallback(equipeImg, './images/time', 'Equipe');
        }
        
        // Kelwin
        const kelwinImg = document.querySelector('.owner-image');
        if (kelwinImg && !kelwinImg.src.includes('kelwin.png')) {
            loadImageWithFallback(kelwinImg, './images/kelwin', 'Kelwin');
        }
    }
})();

