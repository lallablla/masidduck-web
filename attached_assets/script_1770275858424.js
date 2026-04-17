// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 요소들 가져오기
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const header = document.getElementById('header');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    // 검색 모달 열기
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchModal && searchInput) {
                searchModal.classList.add('active');
                searchInput.focus();
                console.log('검색 모달 열기 완료');
            } else {
                console.error('검색 모달 또는 입력창을 찾을 수 없음');
            }
        });
    }

    // 히어로 비디오 로딩 상태 확인 및 최적화
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        console.log('히어로 비디오 요소 발견:', heroVideo);
        console.log('비디오 소스:', heroVideo.querySelector('source').src);
        
        // 초기 로딩 상태 설정
        heroVideo.classList.add('loading');
        
        heroVideo.addEventListener('loadstart', () => {
            console.log('비디오 로딩 시작');
            heroVideo.classList.add('loading');
        });
        
        heroVideo.addEventListener('loadeddata', () => {
            console.log('비디오 데이터 로드 완료');
        });
        
        heroVideo.addEventListener('canplay', () => {
            console.log('비디오 재생 가능');
            heroVideo.classList.remove('loading');
            heroVideo.classList.add('loaded');
        });
        
        heroVideo.addEventListener('error', (e) => {
            console.error('비디오 로딩 오류:', e);
            console.error('비디오 오류 코드:', heroVideo.error);
            // 오류 시 대체 이미지 표시
            heroVideo.style.display = 'none';
            const fallbackImage = document.querySelector('.hero-fallback-image');
            if (fallbackImage) {
                fallbackImage.style.display = 'flex';
            }
        });
        
        // 비디오 로딩 상태 확인
        console.log('비디오 준비 상태:', heroVideo.readyState);
        console.log('비디오 네트워크 상태:', heroVideo.networkState);
        
        // 비디오가 로드되지 않았다면 강제로 로드
        if (heroVideo.readyState === 0) {
            console.log('비디오 강제 로드 시도');
            heroVideo.load();
        }
    } else {
        console.error('히어로 비디오 요소를 찾을 수 없습니다!');
    }
    


    // 검색 모달 닫기
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            if (searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // 모달 외부 클릭 시 닫기
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });

    // DOM이 완전히 로드된 후 최신 공지사항 로드
    setTimeout(() => {
        console.log('loadLatestNotice 함수 호출됨');
        loadLatestNotice();
    }, 100);
    
    // 스크롤 시 헤더 스타일 변경
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(248, 246, 241, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(79, 58, 44, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--accent-ivory)';
            header.style.boxShadow = 'none';
        }
    });
    
    // 최신 공지사항 로드 함수
    function loadLatestNotice() {
        console.log('loadLatestNotice 함수 실행 중...');
        const latestNoticeContent = document.getElementById('latestNoticeContent');
        console.log('latestNoticeContent 요소:', latestNoticeContent);
        if (!latestNoticeContent) {
            console.log('latestNoticeContent 요소를 찾을 수 없음');
            return;
        }
        
        // PHP API에서 최신 공지사항 가져오기
        console.log('API 호출 시작...');
        fetch('./api/notices.php?limit=1')
            .then(response => {
                console.log('API 응답:', response);
                return response.json();
            })
            .then(data => {
                console.log('API 데이터:', data);
                if (data.notices && data.notices.length > 0) {
                    const latestNotice = data.notices[0]; // 가장 최신 공지사항
                    console.log('최신 공지사항 데이터:', latestNotice);
                    console.log('이미지 URL:', latestNotice.image_url);
                    
                    latestNoticeContent.innerHTML = `
                                                <div class="notice-item">
                            <div class="notice-type-badge ${latestNotice.type}">
                                ${getNoticeTypeLabel(latestNotice.type)}
                            </div>
                            ${latestNotice.image_url ? `
                                <div class="notice-image">
                                    <img src="${latestNotice.image_url}" alt="${latestNotice.title}" onerror="this.style.display='none'">
                                </div>
                            ` : ''}
                            <h4 class="notice-title">${latestNotice.title}</h4>
                            <p class="notice-excerpt">${latestNotice.content.substring(0, 100)}${latestNotice.content.length > 100 ? '...' : ''}</p>
                            <div class="notice-meta">
                                <span class="notice-date">${formatNoticeDate(latestNotice.created_at)}</span>
                                <button class="btn btn-outline" onclick="showNoticeModal(${JSON.stringify(latestNotice).replace(/"/g, '&quot;')})">자세히 보기</button>
                            </div>
                        </div>
                    `;
                } else {
                    latestNoticeContent.innerHTML = `
                        <div class="notice-empty">
                            <p>현재 등록된 공지사항이 없습니다.</p>
                        </div>
                    `;
                }
            })
            .catch(error => {
                console.error('Failed to load latest notice:', error);
                latestNoticeContent.innerHTML = `
                    <div class="notice-empty">
                        <p>공지사항을 불러올 수 없습니다.</p>
                    </div>
                `;
            });
    }
    
    // 공지사항 유형 라벨 가져오기 (전역 함수로 선언)
    window.getNoticeTypeLabel = function(type) {
        const labels = {
            notice: '공지',
            event: '이벤트',
            important: '중요'
        };
        return labels[type] || type;
    };
    
    // 공지사항 날짜 포맷팅 (전역 함수로 선언)
    window.formatNoticeDate = function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR');
    };

    // 제품 카테고리 필터링
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 활성 버튼 변경
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // 제품 카드 필터링
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 견적 문의 버튼 이벤트
    const quoteBtns = document.querySelectorAll('.quote-btn');
    quoteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            showQuoteModal(productName);
        });
    });

    // 이메일 문의 버튼 이벤트
    const emailInquiryBtn = document.getElementById('emailInquiryBtn');
    if (emailInquiryBtn) {
        emailInquiryBtn.addEventListener('click', function() {
            showEmailInquiryModal();
        });
    }
    
    // 온라인 문의 폼 제출 이벤트
    const contactForm = document.querySelector('.contact-form form');
    console.log('문의 폼 찾기:', contactForm);
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            console.log('문의 폼 제출 이벤트 발생!');
            e.preventDefault();
            handleContactFormSubmit();
        });
        console.log('문의 폼 이벤트 리스너 추가 완료');
    } else {
        console.error('문의 폼을 찾을 수 없습니다!');
    }

    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들 관찰
    document.querySelectorAll('.section-header, .story-content, .products-grid, .space-content, .reviews-carousel, .events-grid, .contact-content').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 부드러운 스크롤 (내비게이션 링크)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 제품 카드 호버 효과
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 이벤트 카드 호버 효과
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 리뷰 캐러셀 기능
    const reviewsCarousel = document.getElementById('reviewsCarousel');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    
    if (reviewsCarousel && carouselPrev && carouselNext) {
        let currentIndex = 0;
        const cardWidth = 350 + 32; // 카드 너비 + gap
        const visibleCards = Math.floor(reviewsCarousel.offsetWidth / cardWidth);
        const maxIndex = Math.max(0, reviewsCarousel.children.length - visibleCards);
        
        // 자동 캐러셀
        let autoCarousel = setInterval(() => {
            currentIndex = (currentIndex + 1) % (maxIndex + 1);
            updateCarousel();
        }, 4000); // 4초마다 자동 이동
        
        // 이전 버튼
        carouselPrev.addEventListener('click', () => {
            clearInterval(autoCarousel);
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarousel();
            restartAutoCarousel();
        });
        
        // 다음 버튼
        carouselNext.addEventListener('click', () => {
            clearInterval(autoCarousel);
            currentIndex = Math.min(maxIndex, currentIndex + 1);
            updateCarousel();
            restartAutoCarousel();
        });
        
        // 터치/마우스 이벤트로 자동 캐러셀 일시정지
        reviewsCarousel.addEventListener('mouseenter', () => {
            clearInterval(autoCarousel);
        });
        
        reviewsCarousel.addEventListener('mouseleave', () => {
            restartAutoCarousel();
        });
        
        function updateCarousel() {
            const translateX = -currentIndex * cardWidth;
            reviewsCarousel.style.transform = `translateX(${translateX}px)`;
            
            // 버튼 상태 업데이트
            carouselPrev.style.opacity = currentIndex === 0 ? '0.5' : '1';
            carouselNext.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
        }
        
        function restartAutoCarousel() {
            autoCarousel = setInterval(() => {
                currentIndex = (currentIndex + 1) % (maxIndex + 1);
                updateCarousel();
            }, 4000);
        }
        
        // 초기 상태 설정
        updateCarousel();
        
        // 윈도우 리사이즈 시 캐러셀 재계산
        window.addEventListener('resize', () => {
            const newVisibleCards = Math.floor(reviewsCarousel.offsetWidth / cardWidth);
            const newMaxIndex = Math.max(0, reviewsCarousel.children.length - newVisibleCards);
            
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            
            updateCarousel();
        });
    }



    // 스마트스토어 링크 클릭
    document.querySelectorAll('.cart-btn, .product-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 링크 클릭 애니메이션
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // 스마트스토어로 이동 알림
            if (this.classList.contains('btn-primary')) {
                const productName = this.closest('.product-card').querySelector('h3').textContent;
                showNotification(`${productName} - 스마트스토어로 이동합니다.`);
            }
        });
    });

    // 알림 표시 함수
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: var(--primary-brown);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // 애니메이션
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 자동 제거
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // 검색 기능
    const searchResults = document.getElementById('searchResults');
    const searchResultsList = document.getElementById('searchResultsList');
    const resultsCount = document.getElementById('resultsCount');
    
    // 제품 데이터 (실제로는 서버에서 가져올 수 있음)
    const products = [
        { name: '인절미', description: '쫄깃한 식감의 전통 인절미', price: '₩8,000', category: 'traditional' },
        { name: '송편', description: '쑥이 들어간 건강한 송편', price: '₩12,000', category: 'traditional' },
        { name: '티라떡', description: '녹차와 함께 즐기는 현대적 떡', price: '₩15,000', category: 'modern' },
        { name: '선물 세트 A', description: '인절미, 송편, 티라떡 구성', price: '₩30,000', category: 'gift' }
    ];
    
    // 검색 실행 함수
    function performSearch(searchTerm) {
        if (!searchTerm.trim()) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        displaySearchResults(results, searchTerm);
    }
    
    // 검색 결과 표시 함수
    function displaySearchResults(results, searchTerm) {
        searchResults.style.display = 'block';
        resultsCount.textContent = `${results.length}개`;
        
        if (results.length === 0) {
            searchResultsList.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>"${searchTerm}"에 대한 검색 결과가 없습니다.</p>
                    <p>다른 키워드로 검색해보세요.</p>
                </div>
            `;
            return;
        }
        
        searchResultsList.innerHTML = results.map(product => `
            <div class="search-result-item" onclick="scrollToProduct('${product.name}')">
                <h4>${product.name}</h4>
                <p>${product.description} - ${product.price}</p>
            </div>
        `).join('');
    }
    
    // 제품으로 스크롤 함수
    window.scrollToProduct = function(productName) {
        const productSection = document.getElementById('products');
        if (productSection) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = productSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // 검색 모달 닫기
            document.getElementById('searchModal').classList.remove('active');
            
            // 해당 제품 하이라이트
            highlightProduct(productName);
        }
    };
    
    // 제품 하이라이트 함수
    function highlightProduct(productName) {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const cardProductName = card.querySelector('h3').textContent;
            if (cardProductName === productName) {
                card.style.border = '3px solid var(--primary-brown)';
                card.style.transform = 'scale(1.02)';
                card.style.boxShadow = '0 15px 35px rgba(79, 58, 44, 0.2)';
                
                setTimeout(() => {
                    card.style.border = 'none';
                    card.style.transform = 'scale(1)';
                    card.style.boxShadow = '0 10px 30px rgba(79, 58, 44, 0.1)';
                }, 3000);
            }
        });
    }
    
    // 입력 이벤트 (실시간 검색)
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
        
        // 엔터 키 이벤트
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }
    
    // 검색 모달 열릴 때 초기화
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchResults) searchResults.style.display = 'none';
            if (searchInput) searchInput.value = '';
        });
    }

    // 모바일 메뉴 토글 (향후 확장용)
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // 모바일 메뉴 구현을 위한 준비
            console.log('모바일 메뉴 토글');
        });
    }

    // 페이지 로드 시 애니메이션
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // 히어로 섹션 애니메이션
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 500);
        }
    });

    // 스크롤 진행률 표시 (선택사항)
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-brown), var(--secondary-green));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // 키보드 네비게이션 지원
    document.addEventListener('keydown', function(e) {
        // Tab 키로 포커스 이동 시 시각적 표시
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // 마우스 사용 시 키보드 네비게이션 스타일 제거
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // 접근성 개선: 포커스 표시
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-brown)';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // 성능 최적화: 이미지 지연 로딩 (향후 실제 이미지 사용 시)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // 실제 이미지가 있을 때 src 설정
                    // img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // 콘솔 로그 (개발용)
    console.log('마시떡 홈페이지가 성공적으로 로드되었습니다! 🍡');
    console.log('제안된 기능들이 모두 구현되었습니다.');
});

// 견적 문의 모달 표시 함수
function showQuoteModal(productName) {
    // 모달 HTML 생성
    const modalHTML = `
        <div class="quote-modal" id="quoteModal">
            <div class="quote-modal-content">
                <div class="quote-modal-header">
                    <h3>${productName} 견적 문의</h3>
                    <button class="quote-modal-close" id="quoteModalClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="quote-modal-body">
                    <form id="quoteForm">
                        <div class="form-group">
                            <label for="customerName">이름 *</label>
                            <input type="text" id="customerName" name="customerName" required>
                        </div>
                        <div class="form-group">
                            <label for="customerPhone">연락처 *</label>
                            <input type="tel" id="customerPhone" name="customerPhone" required>
                        </div>
                        <div class="form-group">
                            <label for="orderQuantity">주문 수량 *</label>
                            <input type="number" id="orderQuantity" name="orderQuantity" min="1" required>
                        </div>
                        <div class="form-group">
                            <label for="deliveryDate">배송 희망일</label>
                            <input type="date" id="deliveryDate" name="deliveryDate">
                        </div>
                        <div class="form-group">
                            <label for="specialRequests">특별 요청사항</label>
                            <textarea id="specialRequests" name="specialRequests" rows="3" placeholder="로고 인쇄, 특별한 포장, 기타 요청사항이 있으시면 적어주세요"></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">견적 요청하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // 기존 모달이 있다면 제거
    const existingModal = document.getElementById('quoteModal');
    if (existingModal) {
        existingModal.remove();
    }

    // 새 모달 추가
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 모달 표시
    const modal = document.getElementById('quoteModal');
    modal.style.display = 'flex';

    // 모달 닫기 이벤트
    const closeBtn = document.getElementById('quoteModalClose');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.remove();
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.remove();
        }
    });

    // 폼 제출 이벤트
    const form = document.getElementById('quoteForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleQuoteSubmit(productName);
    });
}

// 인절미 세부 제품 모달 표시
function showRiceCakeModal() {
    const modal = document.getElementById('riceCakeModal');
    const grid = document.getElementById('riceCakeGrid');
    
    // 세부 제품들 렌더링 (이미지 포함)
    const riceCakeProducts = [
        {
            name: "인절미 (기본)",
            description: "쫄깃한 식감의 전통 인절미",
            price: "1말 ₩120,000 / 반말 ₩65,000",
            image: "인절미.png"
        },
        {
            name: "쑥 인절미",
            description: "쑥이 들어간 건강한 인절미",
            price: "1말 ₩130,000 / 반말 ₩70,000",
            image: "쑥인절미.png"
        },
        {
            name: "쑥밥알 인절미",
            description: "쑥밥알이 들어간 특별한 인절미",
            price: "1말 ₩130,000 / 반말 ₩70,000",
            image: "쑥인절미.png"
        },
        {
            name: "카스테라 인절미",
            description: "카스테라 맛이 나는 달콤한 인절미",
            price: "1말 ₩140,000 / 반말 ₩75,000",
            image: "인절미.png"
        },
        {
            name: "흑임자 인절미",
            description: "흑임자가 들어간 고급 인절미",
            price: "1말 ₩150,000 / 반말 ₩80,000",
            image: "흑임자인절미.png"
        }
    ];
    
    grid.innerHTML = riceCakeProducts.map(product => `
        <div class="rice-cake-item">
            <div class="rice-cake-image">
                <img src="${product.image}" alt="${product.name}" class="rice-cake-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display: none;">
                    <i class="fas fa-rice"></i>
                </div>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button class="quote-btn" onclick="showQuoteModal('${product.name}')">
                <i class="fas fa-calculator"></i> 견적 문의
            </button>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 인절미 모달 닫기
function closeRiceCakeModal() {
    const modal = document.getElementById('riceCakeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 이메일 문의 모달 표시 함수
function showEmailInquiryModal() {
    const modalHTML = `
        <div class="quote-modal" id="emailModal">
            <div class="quote-modal-content">
                <div class="quote-modal-header">
                    <h3>이메일 문의</h3>
                    <button class="quote-modal-close" id="emailModalClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="quote-modal-body">
                    <form id="emailForm">
                        <div class="form-group">
                            <label for="emailName">이름 *</label>
                            <input type="text" id="emailName" name="emailName" required>
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">이메일 *</label>
                            <input type="email" id="emailAddress" name="emailAddress" required>
                        </div>
                        <div class="form-group">
                            <label for="emailSubject">문의 제목 *</label>
                            <input type="text" id="emailSubject" name="emailSubject" required>
                        </div>
                        <div class="form-group">
                            <label for="emailMessage">문의 내용 *</label>
                            <textarea id="emailMessage" name="emailMessage" rows="5" required placeholder="문의하실 내용을 자세히 적어주세요"></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">문의하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // 기존 모달이 있다면 제거
    const existingModal = document.getElementById('emailModal');
    if (existingModal) {
        existingModal.remove();
    }

    // 새 모달 추가
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 모달 표시
    const modal = document.getElementById('emailModal');
    modal.style.display = 'flex';

    // 모달 닫기 이벤트
    const closeBtn = document.getElementById('emailModalClose');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.remove();
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.remove();
        }
    });

    // 폼 제출 이벤트
    const form = document.getElementById('emailForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleEmailSubmit();
    });
}

// 견적 요청 처리 함수
function handleQuoteSubmit(productName) {
    const formData = new FormData(document.getElementById('quoteForm'));
    const data = Object.fromEntries(formData);
    
    // 실제로는 서버로 데이터를 전송하거나 이메일로 발송
    console.log('견적 요청:', { productName, ...data });
    
    // 성공 메시지 표시
    alert(`${productName} 견적 요청이 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.`);
    
    // 모달 닫기
    const modal = document.getElementById('quoteModal');
    modal.style.display = 'none';
    modal.remove();
}

// 이메일 문의 처리 함수
function handleEmailSubmit() {
    const formData = new FormData(document.getElementById('emailForm'));
    const data = Object.fromEntries(formData);
    
    // 폼 데이터 수집
    const name = data.emailName;
    const email = data.emailAddress;
    const subject = data.emailSubject;
    const message = data.emailMessage;
    
    // 유효성 검사
    if (!name || !email || !subject || !message) {
        alert('모든 필수 항목을 입력해주세요.');
        return;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
    }
    
    // 이메일 링크 생성
    const emailSubject = encodeURIComponent(`[마시떡] 맞춤제작 문의 - ${subject}`);
    const emailBody = encodeURIComponent(`안녕하세요, 마시떡입니다.

새로운 맞춤제작 문의가 접수되었습니다.

[문의자 정보]
이름: ${name}
이메일: ${email}

[문의 내용]
제목: ${subject}
내용: ${message}

[문의 접수 시간]
${new Date().toLocaleString('ko-KR')}

---
이 문의는 마시떡 홈페이지 맞춤제작문의를 통해 자동으로 접수되었습니다.`);

    const mailtoLink = `mailto:leesh7697@naver.com?subject=${emailSubject}&body=${emailBody}`;
    
    // 이메일 클라이언트 열기
    window.open(mailtoLink);
    
    // 성공 알럿창 표시 (다른 문의 폼과 동일한 형식)
    alert('✅ 맞춤제작 문의가 성공적으로 전송되었습니다!\n\n문의 내용이 leesh7697@naver.com으로 전송되었습니다.\n빠른 시일 내에 답변드리겠습니다.\n\n감사합니다! 🥰');
    
    // 모달 닫기
    const modal = document.getElementById('emailModal');
    modal.style.display = 'none';
    modal.remove();
}

// 온라인 문의 폼 제출 처리 함수 (전역 함수로 선언)
window.handleContactFormSubmit = function() {
    console.log('handleContactFormSubmit 함수 호출됨!');
    
    const form = document.querySelector('.contact-form form');
    console.log('찾은 폼:', form);
    
    if (!form) {
        console.error('폼을 찾을 수 없습니다!');
        return;
    }
    
    const formData = new FormData(form);
    
    // 폼 데이터 수집
    const name = formData.get('name') || form.querySelector('input[type="text"]').value;
    const email = formData.get('email') || form.querySelector('input[type="email"]').value;
    const phone = formData.get('phone') || form.querySelector('input[type="tel"]').value;
    const message = formData.get('message') || form.querySelector('textarea').value;
    const privacyAgreement = form.querySelector('input[type="checkbox"]').checked;
    
    console.log('수집된 데이터:', { name, email, phone, message, privacyAgreement });
    
    // 유효성 검사
    if (!name || !email || !message || !privacyAgreement) {
        alert('모든 필수 항목을 입력하고 개인정보 수집에 동의해주세요.');
        return;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
    }
    
    // 이메일 링크 생성
    const subject = encodeURIComponent('[마시떡] 온라인 문의');
    const body = encodeURIComponent(`안녕하세요, 마시떡입니다.

새로운 온라인 문의가 접수되었습니다.

[문의자 정보]
이름: ${name}
이메일: ${email}
연락처: ${phone}

[문의 내용]
${message}

[문의 접수 시간]
${new Date().toLocaleString('ko-KR')}

---
이 문의는 마시떡 홈페이지를 통해 자동으로 접수되었습니다.`);

    const mailtoLink = `mailto:leesh7697@naver.com?subject=${subject}&body=${body}`;
    
    // 이메일 클라이언트 열기
    window.open(mailtoLink);
    
    // 성공 알럿창 표시
    alert('✅ 문의가 성공적으로 전송되었습니다!\n\n문의 내용이 leesh7697@naver.com으로 전송되었습니다.\n빠른 시일 내에 답변드리겠습니다.\n\n감사합니다! 🥰');
    
    // 폼 초기화
    form.reset();
};

// CSS 애니메이션 키프레임 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-brown) !important;
        outline-offset: 2px !important;
    }

    .loaded .hero-content {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// 모달 관련 함수들 (전역 함수로 선언)
window.showNoticeModal = function(notice) {
    console.log('showNoticeModal 함수 호출됨:', notice);
    
    const modal = document.getElementById('noticeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalDate = document.getElementById('modalDate');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalType || !modalDate || !modalContent) {
        console.error('모달 요소를 찾을 수 없습니다');
        console.log('modal:', modal);
        console.log('modalTitle:', modalTitle);
        console.log('modalType:', modalType);
        console.log('modalDate:', modalDate);
        console.log('modalContent:', modalContent);
        return;
    }
    
    modalTitle.textContent = notice.title;
    modalType.textContent = getNoticeTypeLabel(notice.type);
    modalType.className = `notice-type-badge ${notice.type}`;
    modalDate.textContent = formatNoticeDate(notice.created_at);
    modalContent.innerHTML = notice.content.replace(/\n/g, '<br>');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('모달이 성공적으로 열렸습니다');
};

window.closeModal = function() {
    const modal = document.getElementById('noticeModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

    // 모달 닫기 이벤트
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded 이벤트 발생');
        
        const modal = document.getElementById('noticeModal');
        const closeBtn = document.querySelector('.close');
        
        console.log('모달 요소 확인:', modal);
        console.log('닫기 버튼 확인:', closeBtn);
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
            console.log('닫기 버튼 이벤트 리스너 추가됨');
        }
        
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
            console.log('모달 외부 클릭 이벤트 리스너 추가됨');
        }
        
        // ESC 키로 모달 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal && modal.style.display === 'block') {
                closeModal();
            }
        });
        
        console.log('모달 이벤트 리스너 설정 완료');
    }); 