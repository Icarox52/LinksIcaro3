        const themeToggle = document.querySelector('.theme-toggle');
        const icon = themeToggle.querySelector('i');
        

        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
            document.body.classList.add('light-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });


        const linkCards = document.querySelectorAll('.link-card');
        
        linkCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.classList.add('hover-effect');
            });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('hover-effect');
                }, 100);
            });
        });


               const texts = [
            "12 anos",
            "Desenvolvedor FullStack",
            "HTML + CSS + JS",
            "Node.js + Bootstrap + Tailwind + React",
            "Aprendendo mais cada dia!"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;
        
        const typewriterElement = document.getElementById('typewriter-text');
        const cursorElement = document.querySelector('.cursor');
        
        function typeWriter() {
            if (textIndex >= texts.length) {
                textIndex = 0;
            }
            
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    isDeleting = true;
                    setTimeout(typeWriter, 100);
                }, 1500);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex++;
            }
            
            const speed = isDeleting ? 50 : isWaiting ? 0 : 100;
            setTimeout(typeWriter, speed);
        }
        
        // Inicia a animação quando a página carrega
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(typeWriter, 1000);
        });

        