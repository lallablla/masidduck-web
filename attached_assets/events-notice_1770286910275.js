// 이벤트 & 공지 페이지 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 요소들 가져오기
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPostForm = document.getElementById('adminPostForm');
    const loginForm = document.getElementById('loginForm');
    const postForm = document.getElementById('postForm');
    const cancelPostBtn = document.getElementById('cancelPostBtn');
    const postsGrid = document.getElementById('postsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // DOM 요소 확인 로그
    console.log('DOM 요소 확인:');
    console.log('postsGrid:', postsGrid);
    console.log('filterBtns:', filterBtns);

    // 모달 요소
    const modal = document.getElementById('noticeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalDate = document.getElementById('modalDate');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    let isAdminLoggedIn = false;
    let currentFilter = 'all';
    
    // 페이지 로드 시 공지사항 자동 로드
    loadPosts();
    
    // 모달 닫기 이벤트
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // 모달 외부 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });

    // 관리자 모드 토글
    adminToggleBtn.addEventListener('click', function() {
        if (isAdminLoggedIn) {
            // 로그아웃
            logout();
        } else {
            // 로그인 폼 표시
            adminLoginForm.style.display = 'block';
            adminPostForm.style.display = 'none';
        }
    });

    // 로그인 폼 제출
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/auth.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                isAdminLoggedIn = true;
                adminToggleBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> 로그아웃';
                adminLoginForm.style.display = 'none';
                adminPostForm.style.display = 'block';
                
                // 공지사항 다시 로드
                loadPosts();
            } else {
                alert('로그인에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    });

    // 로그아웃
    function logout() {
        fetch('/api/logout.php', {
            method: 'POST'
        }).then(() => {
            isAdminLoggedIn = false;
            adminToggleBtn.innerHTML = '<i class="fas fa-user-shield"></i> 관리자 모드';
            adminPostForm.style.display = 'none';
            adminLoginForm.style.display = 'none';
            
            // 공지사항 다시 로드
            loadPosts();
        }).catch(error => {
            console.error('Logout error:', error);
        });
    }

    // 새 글 작성 폼 제출
    postForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        const postData = {
            title: formData.get('postTitle'),
            content: formData.get('postContent'),
            type: formData.get('postType'),
            status: 'published'
        };

        try {
            const response = await fetch('./api/notices.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });

            const data = await response.json();

            if (data.success) {
                alert('글이 성공적으로 등록되었습니다.');
                postForm.reset();
                adminPostForm.style.display = 'none';
                loadPosts();
            } else {
                alert('글 등록에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Post creation error:', error);
            alert('글 등록 중 오류가 발생했습니다.');
        }
    });

    // 취소 버튼
    cancelPostBtn.addEventListener('click', function() {
        adminPostForm.style.display = 'none';
        postForm.reset();
    });

    // 필터 버튼 이벤트
    if (filterBtns && filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                currentFilter = this.getAttribute('data-filter');
                loadPosts();
            });
        });
    }

    // 공지사항 로드
    async function loadPosts() {
        try {
            console.log('이벤트&공지 페이지 - 공지사항 로드 시작');
            const response = await fetch('./api/notices.php');
            const data = await response.json();
            console.log('이벤트&공지 페이지 - API 데이터:', data);
            
            if (data.notices) {
                displayPosts(data.notices);
            }
        } catch (error) {
            console.error('Failed to load posts:', error);
        }
    }

    // 공지사항 표시
    function displayPosts(notices) {
        console.log('displayPosts 함수 호출됨, notices:', notices);
        console.log('postsGrid 요소:', postsGrid);
        
        if (!postsGrid) {
            console.error('postsGrid 요소를 찾을 수 없음');
            return;
        }

        // 필터링
        let filteredNotices = notices;
        if (currentFilter !== 'all') {
            filteredNotices = notices.filter(notice => notice.type === currentFilter);
        }

        // 게시 상태인 것만 표시
        filteredNotices = filteredNotices.filter(notice => notice.status === 'published');

        postsGrid.innerHTML = '';

        if (filteredNotices.length === 0) {
            postsGrid.innerHTML = `
                <div class="no-posts">
                    <p>등록된 글이 없습니다.</p>
                </div>
            `;
            return;
        }

        filteredNotices.forEach(notice => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card clickable';
            postCard.innerHTML = `
                <div class="post-header">
                    <span class="post-type ${notice.type}">${getPostTypeLabel(notice.type)}</span>
                    <span class="post-date">${formatPostDate(notice.created_at)}</span>
                </div>
                <h3 class="post-title">${notice.title}</h3>
                <p class="post-excerpt">${notice.content.substring(0, 150)}${notice.content.length > 150 ? '...' : ''}</p>
                <div class="post-meta">
                    <span class="post-views">조회수: ${notice.views || 0}</span>
                    <span class="view-hint">클릭하여 자세히 보기</span>
                </div>
            `;
            
            // 클릭 이벤트 추가
            postCard.addEventListener('click', () => showNoticeModal(notice));
            postsGrid.appendChild(postCard);
        });
    }

    // 게시글 유형 라벨
    function getPostTypeLabel(type) {
        const labels = {
            'notice': '공지사항',
            'event': '이벤트',
            'important': '중요공지'
        };
        return labels[type] || type;
    }

    // 게시글 날짜 포맷팅
    function formatPostDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR');
    }

    // 모달 표시 함수
    function showNoticeModal(notice) {
        if (!modal || !modalTitle || !modalType || !modalDate || !modalContent) {
            console.error('모달 요소를 찾을 수 없습니다');
            return;
        }
        
        modalTitle.textContent = notice.title;
        modalType.textContent = getPostTypeLabel(notice.type);
        modalType.className = `notice-type-badge ${notice.type}`;
        modalDate.textContent = formatPostDate(notice.created_at);
        modalContent.innerHTML = notice.content.replace(/\n/g, '<br>');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
    
    // 모달 닫기 함수
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 스크롤 복원
        }
    }
    
    // 초기 로드
    loadPosts();
}); 