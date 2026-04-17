// 고객센터 페이지 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ 토글 기능
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // 모든 FAQ 닫기
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const faqAnswer = faq.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = '0';
            });
            
            // 클릭된 FAQ만 열기
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 연락처 링크 기능
    const phoneLinks = document.querySelectorAll('.contact-card a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            if (confirm(`${phoneNumber}로 전화하시겠습니까?`)) {
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // 이메일 링크 기능
    const emailLinks = document.querySelectorAll('.contact-card a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.getAttribute('href').replace('mailto:', '');
            if (confirm(`${email}로 이메일을 보내시겠습니까?`)) {
                window.location.href = this.getAttribute('href');
            }
        });
    });
    
    // 문의 폼 제출 처리
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 개인정보 수집 동의 확인
            const privacyAgreement = document.getElementById('privacyAgreement');
            if (!privacyAgreement.checked) {
                alert('개인정보 수집 및 이용에 동의해주세요.');
                privacyAgreement.focus();
                return;
            }
            
            // 폼 데이터 수집
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // 이메일 링크 생성 (홈페이지와 동일한 형식)
            const subject = encodeURIComponent('[마시떡] 고객센터 문의');
            const body = encodeURIComponent(`안녕하세요, 마시떡입니다.

새로운 고객센터 문의가 접수되었습니다.

[문의자 정보]
이름: ${formObject.name}
이메일: ${formObject.email}
연락처: ${formObject.phone}

[문의 내용]
${formObject.message}

[문의 접수 시간]
${new Date().toLocaleString('ko-KR')}

---
이 문의는 마시떡 고객센터를 통해 자동으로 접수되었습니다.`);

            const mailtoLink = `mailto:leesh7697@naver.com?subject=${subject}&body=${body}`;
            
            // 이메일 클라이언트 열기
            window.open(mailtoLink);
            
            // 성공 알럿창 표시 (홈페이지와 동일한 내용)
            alert('✅ 문의가 성공적으로 전송되었습니다!\n\n문의 내용이 leesh7697@naver.com으로 전송되었습니다.\n빠른 시일 내에 답변드리겠습니다.\n\n감사합니다! 🥰');
            
            // 폼 초기화
            this.reset();
            
            // 개인정보 수집 동의 체크박스 초기화
            privacyAgreement.checked = false;
        });
    }
});

// 구글맵 초기화 함수 (전역 함수로 선언)
function initMap() {
    try {
        // 마시떡 매장 위치
        const storeLocation = {
            lat: 37.233181,  // 위도
            lng: 127.187577  // 경도
        };

        // 지도 생성
        const map = new google.maps.Map(document.getElementById('map'), {
            center: storeLocation,
            zoom: 15,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [{"color": "#f5f5f5"}]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{"color": "#ffffff"}]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#4f3a2c"}]
                }
            ]
        });

        // 마커 생성
        const marker = new google.maps.Marker({
            position: storeLocation,
            map: map,
            title: '마시떡',
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="18" fill="#4f3a2c" stroke="#ffffff" stroke-width="2"/>
                        <text x="20" y="25" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="12" font-weight="bold">떡</text>
                    </svg>
                `),
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        // 인포윈도우 생성
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="padding:10px;text-align:center;min-width:200px;">
                    <h4 style="margin:0 0 5px 0;color:#4f3a2c;font-size:16px;">마시떡</h4>
                    <p style="margin:0;font-size:12px;color:#666;line-height:1.4;">
                        경기도 용인시 처인구 명지로16번길 9-24<br>
                        진영리더스빌 109-110호
                    </p>
                </div>
            `
        });

        // 마커 클릭 시 인포윈도우 표시
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        // 지도 로드 완료 시 인포윈도우 표시
        google.maps.event.addListenerOnce(map, 'idle', function() {
            infowindow.open(map, marker);
        });

        console.log('구글맵이 성공적으로 초기화되었습니다.');
    } catch (error) {
        console.error('구글맵 초기화 중 오류 발생:', error);
        showMapPlaceholder();
    }
}

// 지도 플레이스홀더 표시 (오류 발생 시)
function showMapPlaceholder() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="map-placeholder">
                <i class="fas fa-map"></i>
                <h3>지도</h3>
                <p>구글맵에서 "마시떡"을 검색하세요</p>
                <a href="https://www.google.com/maps/search/마시떡" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> 구글맵 열기
                </a>
            </div>
        `;
    }
}


