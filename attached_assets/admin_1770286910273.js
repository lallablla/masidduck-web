// 관리자 시스템 클래스
class AdminSystem {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.notices = [];
        this.init();
    }

    init() {
        this.checkAuthState();
        this.setupEventListeners();
        this.loadNotices();
    }

    // 인증 상태 확인
    checkAuthState() {
        // 세션 체크 (PHP 세션 기반)
        fetch('/api/auth-check.php')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    this.isLoggedIn = true;
                    this.currentUser = data.user;
                    this.showDashboard();
                } else {
                    this.showLogin();
                }
            })
            .catch(error => {
                console.error('Auth check failed:', error);
                this.showLogin();
            });
    }

    // 이벤트 리스너 설정
    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('submit', (e) => this.handleLogout(e));
        }

        const noticeForm = document.getElementById('noticeForm');
        if (noticeForm) {
            noticeForm.addEventListener('submit', (e) => this.handleNoticeSubmit(e));
        }
    }

    // 로그인 처리
    async handleLogin(e) {
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
                this.isLoggedIn = true;
                this.currentUser = data.user;
                this.showDashboard();
                this.loadNotices();
            } else {
                alert('로그인에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    }

    // 로그아웃 처리
    async handleLogout(e) {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/logout.php', {
                method: 'POST'
            });

            this.isLoggedIn = false;
            this.currentUser = null;
            this.showLogin();
        } catch (error) {
            console.error('Logout error:', error);
            this.showLogin();
        }
    }

    // 공지사항 로드
    async loadNotices() {
        try {
            const response = await fetch('/api/notices.php');
            const data = await response.json();
            
            if (data.notices) {
                this.notices = data.notices;
                this.displayNotices();
            }
        } catch (error) {
            console.error('Failed to load notices:', error);
        }
    }

    // 공지사항 표시
    displayNotices() {
        const noticesTable = document.getElementById('noticesTable');
        if (!noticesTable) return;

        const tbody = noticesTable.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.notices.forEach(notice => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${notice.title}</td>
                <td>${this.getNoticeTypeLabel(notice.type)}</td>
                <td>${this.getStatusLabel(notice.status)}</td>
                <td>${this.formatDate(notice.created_at)}</td>
                <td>${notice.views}</td>
                <td>
                    <button onclick="adminSystem.editNotice(${notice.id})" class="btn btn-small btn-secondary">수정</button>
                    <button onclick="adminSystem.deleteNotice(${notice.id})" class="btn btn-small btn-danger">삭제</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // 통계 업데이트
        this.updateStats();
    }

    // 공지사항 제출 처리
    async handleNoticeSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        let imageUrl = null;
        
        // 이미지 파일이 있는 경우 업로드
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            try {
                const imageFormData = new FormData();
                imageFormData.append('image', imageFile);
                
                const imageResponse = await fetch('./api/upload-image.php', {
                    method: 'POST',
                    body: imageFormData
                });
                
                const imageData = await imageResponse.json();
                
                if (imageData.success) {
                    imageUrl = imageData.image_url;
                } else {
                    alert('이미지 업로드에 실패했습니다: ' + imageData.error);
                    return;
                }
            } catch (error) {
                console.error('Image upload error:', error);
                alert('이미지 업로드 중 오류가 발생했습니다.');
                return;
            }
        }
        
        const noticeData = {
            title: formData.get('title'),
            content: formData.get('content'),
            image_url: imageUrl,
            type: formData.get('type'),
            status: formData.get('status')
        };

        try {
            const response = await fetch('./api/notices.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticeData)
            });

            const data = await response.json();

            if (data.success) {
                alert('공지사항이 성공적으로 생성되었습니다.');
                this.loadNotices();
                this.closeModal();
                e.target.reset();
            } else {
                alert('공지사항 생성에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Notice creation error:', error);
            alert('공지사항 생성 중 오류가 발생했습니다.');
        }
    }

    // 공지사항 수정
    async editNotice(id) {
        const notice = this.notices.find(n => n.id === id);
        if (!notice) return;

        // 모달에 데이터 채우기
        document.getElementById('editTitle').value = notice.title;
        document.getElementById('editContent').value = notice.content;
        document.getElementById('editType').value = notice.type;
        document.getElementById('editStatus').value = notice.status;
        document.getElementById('editId').value = notice.id;

        // 수정 모달 표시
        document.getElementById('editModal').style.display = 'block';
    }

    // 공지사항 수정 제출
    async handleEditSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        let imageUrl = null;
        
        // 이미지 파일이 있는 경우 업로드
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            try {
                const imageFormData = new FormData();
                imageFormData.append('image', imageFile);
                
                const imageResponse = await fetch('./api/upload-image.php', {
                    method: 'POST',
                    body: imageFormData
                });
                
                const imageData = await imageResponse.json();
                
                if (imageData.success) {
                    imageUrl = imageData.image_url;
                } else {
                    alert('이미지 업로드에 실패했습니다: ' + imageData.error);
                    return;
                }
            } catch (error) {
                console.error('Image upload error:', error);
                alert('이미지 업로드 중 오류가 발생했습니다.');
                return;
            }
        } else {
            // 기존 이미지 URL 유지
            const currentNotice = this.notices.find(n => n.id == formData.get('id'));
            if (currentNotice && currentNotice.image_url) {
                imageUrl = currentNotice.image_url;
            }
        }
        
        const noticeData = {
            title: formData.get('title'),
            content: formData.get('content'),
            image_url: imageUrl,
            type: formData.get('type'),
            status: formData.get('status')
        };

        const id = formData.get('id');

        try {
            const response = await fetch(`./api/notices.php?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noticeData)
            });

            const data = await response.json();

            if (data.success) {
                alert('공지사항이 성공적으로 수정되었습니다.');
                this.loadNotices();
                this.closeEditModal();
            } else {
                alert('공지사항 수정에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Notice update error:', error);
            alert('공지사항 수정 중 오류가 발생했습니다.');
        }
    }

    // 공지사항 삭제
    async deleteNotice(id) {
        if (!confirm('정말로 이 공지사항을 삭제하시겠습니까?')) return;

        try {
            const response = await fetch(`/api/notices.php?id=${id}`, {
                method: 'DELETE'
            });

            const data = await response.json();

            if (data.success) {
                alert('공지사항이 성공적으로 삭제되었습니다.');
                this.loadNotices();
            } else {
                alert('공지사항 삭제에 실패했습니다: ' + data.error);
            }
        } catch (error) {
            console.error('Notice deletion error:', error);
            alert('공지사항 삭제 중 오류가 발생했습니다.');
        }
    }

    // 모달 닫기
    closeModal() {
        const modal = document.getElementById('noticeModal');
        if (modal) modal.style.display = 'none';
    }

    closeEditModal() {
        const modal = document.getElementById('editModal');
        if (modal) modal.style.display = 'none';
    }

    // 로그인 화면 표시
    showLogin() {
        const loginSection = document.getElementById('loginSection');
        const dashboardSection = document.getElementById('dashboardSection');
        
        if (loginSection) loginSection.style.display = 'block';
        if (dashboardSection) dashboardSection.style.display = 'none';
    }

    // 대시보드 표시
    showDashboard() {
        const loginSection = document.getElementById('loginSection');
        const dashboardSection = document.getElementById('dashboardSection');
        
        if (loginSection) loginSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'block';
        
        this.loadNotices();
        this.updateStats();
    }

    // 통계 업데이트
    updateStats() {
        const totalNotices = this.notices.length;
        const monthlyNotices = this.getMonthlyNotices();
        const totalViews = this.getTotalViews();
        
        const totalNoticesEl = document.getElementById('totalNotices');
        const monthlyNoticesEl = document.getElementById('monthlyNotices');
        const totalViewsEl = document.getElementById('totalViews');
        
        if (totalNoticesEl) totalNoticesEl.textContent = totalNotices;
        if (monthlyNoticesEl) monthlyNoticesEl.textContent = monthlyNotices;
        if (totalViewsEl) totalViewsEl.textContent = totalViews;
    }

    // 이번 달 공지사항 수
    getMonthlyNotices() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        return this.notices.filter(notice => {
            const noticeDate = new Date(notice.created_at);
            return noticeDate.getMonth() === currentMonth && 
                   noticeDate.getFullYear() === currentYear;
        }).length;
    }

    // 총 조회수
    getTotalViews() {
        return this.notices.reduce((total, notice) => total + (notice.views || 0), 0);
    }

    // 유틸리티 함수들
    getNoticeTypeLabel(type) {
        const labels = {
            'notice': '공지사항',
            'event': '이벤트',
            'important': '중요공지'
        };
        return labels[type] || type;
    }

    getStatusLabel(status) {
        const labels = {
            'published': '게시됨',
            'draft': '임시저장'
        };
        return labels[status] || status;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR');
    }
}

// 페이지 로드 시 관리자 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.adminSystem = new AdminSystem();
});

// 전역 함수들
function openModal() {
    document.getElementById('noticeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('noticeModal').style.display = 'none';
}

function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}
