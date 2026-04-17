// Navigation and Footer Loader
class NavigationLoader {
    constructor() {
        this.navContainer = document.getElementById('nav-container');
        this.footerContainer = document.getElementById('footer-container');
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('index.html') || path === '/' || path === '') return 'home';
        if (path.includes('brand-story.html')) return 'brand-story';
        if (path.includes('brand-identity.html')) return 'brand-identity';
        if (path.includes('products.html')) return 'products';
        if (path.includes('events-notice.html')) return 'events-notice';
        if (path.includes('terms.html')) return 'terms';
        return 'home';
    }

    async init() {
        await this.loadNavigation();
        await this.loadFooter();
        this.setActiveNavItem();
        this.initializeEventListeners();
    }

    async loadNavigation() {
        if (!this.navContainer) return;
        
        try {
            const response = await fetch('nav.html');
            const html = await response.text();
            this.navContainer.innerHTML = html;
            
            // 모바일 메뉴 초기 상태를 숨김으로 설정
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.style.display = 'none';
            }
        } catch (error) {
            console.error('Navigation loading failed:', error);
        }
    }

    async loadFooter() {
        if (!this.footerContainer) return;
        
        try {
            const response = await fetch('footer.html');
            const html = await response.text();
            this.footerContainer.innerHTML = html;
        } catch (error) {
            console.error('Footer loading failed:', error);
        }
    }

    setActiveNavItem() {
        // Wait for navigation to be loaded
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (this.isCurrentPage(link.href)) {
                    link.classList.add('active');
                }
            });
            
            // Set active state for dropdown items
            if (this.currentPage === 'brand-story' || this.currentPage === 'brand-identity') {
                const brandDropdown = document.querySelector('.dropdown > a');
                if (brandDropdown) {
                    brandDropdown.classList.add('active');
                }
            }
        }, 100);
    }

    isCurrentPage(href) {
        const path = window.location.pathname;
        if (this.currentPage === 'home' && (href.includes('index.html') || href.includes('#'))) {
            return true;
        }
        if (this.currentPage === 'brand-story' && href.includes('brand-story.html')) {
            return true;
        }
        if (this.currentPage === 'brand-identity' && href.includes('brand-identity.html')) {
            return true;
        }
        if (this.currentPage === 'products' && href.includes('products.html')) {
            return true;
        }
        if (this.currentPage === 'events-notice' && href.includes('events-notice.html')) {
            return true;
        }
        if (this.currentPage === 'terms' && href.includes('terms.html')) {
            return true;
        }
        return false;
    }

    initializeEventListeners() {
        // Wait for elements to be loaded
        setTimeout(() => {
            this.setupSearchModal();
            this.setupMobileMenu();
            this.setupDropdownMenu();
        }, 200);
    }

    setupSearchModal() {
        const searchBtn = document.getElementById('searchBtn');
        const searchModal = document.getElementById('searchModal');
        const closeSearchModal = document.getElementById('closeSearchModal');

        if (searchBtn && searchModal) {
            searchBtn.addEventListener('click', () => {
                searchModal.style.display = 'flex';
            });
        }

        if (closeSearchModal && searchModal) {
            closeSearchModal.addEventListener('click', () => {
                searchModal.style.display = 'none';
            });
        }

        if (searchModal) {
            searchModal.addEventListener('click', (e) => {
                if (e.target === searchModal) {
                    searchModal.style.display = 'none';
                }
            });
        }
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.getElementById('closeMobileMenu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.style.display = 'flex';
                mobileMenu.classList.add('active');
            });
        }

        if (closeMobileMenu && mobileMenu) {
            closeMobileMenu.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
                mobileMenu.classList.remove('active');
            });
        }

        if (mobileMenu) {
            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    mobileMenu.style.display = 'none';
                    mobileMenu.classList.remove('active');
                }
            });
        }
    }

    setupDropdownMenu() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('a');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (dropdownLink && dropdownMenu) {
                dropdownLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!dropdown.contains(e.target)) {
                        dropdown.classList.remove('active');
                    }
                });
            }
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavigationLoader();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
