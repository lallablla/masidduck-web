// Firebase 인증 관리
class FirebaseAuth {
    constructor() {
        this.currentUser = null;
        this.authStateListener = null;
        this.init();
    }
    
    init() {
        // 인증 상태 변경 리스너 설정
        this.authStateListener = auth.onAuthStateChanged((user) => {
            if (user) {
                // 로그인 성공
                this.currentUser = user;
                console.log('Firebase 로그인 성공:', user.email);
                this.onLoginSuccess();
            } else {
                // 로그아웃 또는 인증 실패
                this.currentUser = null;
                console.log('Firebase 로그아웃 또는 인증 실패');
                this.onLogout();
            }
        });
    }
    
    // 로그인 처리
    async login(email, password) {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Firebase 로그인 오류:', error);
            return { success: false, error: this.getErrorMessage(error.code) };
        }
    }
    
    // 로그아웃 처리
    async logout() {
        try {
            await auth.signOut();
            return { success: true };
        } catch (error) {
            console.error('Firebase 로그아웃 오류:', error);
            return { success: false, error: error.message };
        }
    }
    
    // 사용자 생성 (관리자 계정 생성용)
    async createUser(email, password) {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Firebase 사용자 생성 오류:', error);
            return { success: false, error: this.getErrorMessage(error.code) };
        }
    }
    
    // 현재 사용자 정보 가져오기
    getCurrentUser() {
        return this.currentUser;
    }
    
    // 로그인 상태 확인
    isLoggedIn() {
        return this.currentUser !== null;
    }
    
    // 로그인 성공 시 처리
    onLoginSuccess() {
        // 로컬 스토리지에 로그인 정보 저장
        localStorage.setItem('firebaseAuth', 'true');
        localStorage.setItem('firebaseUser', JSON.stringify({
            email: this.currentUser.email,
            uid: this.currentUser.uid
        }));
        
        // 관리자 대시보드로 리다이렉트
        if (window.location.pathname.includes('admin-login.html')) {
            window.location.href = 'admin-dashboard.html';
        }
    }
    
    // 로그아웃 시 처리
    onLogout() {
        // 로컬 스토리지 정리
        localStorage.removeItem('firebaseAuth');
        localStorage.removeItem('firebaseUser');
        
        // 관리자 페이지에서 로그아웃 시 로그인 페이지로 리다이렉트
        if (window.location.pathname.includes('admin-dashboard.html')) {
            window.location.href = 'admin-login.html';
        }
    }
    
    // Firebase 오류 메시지 한국어 변환
    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/user-not-found': '등록되지 않은 이메일입니다.',
            'auth/wrong-password': '비밀번호가 올바르지 않습니다.',
            'auth/invalid-email': '올바르지 않은 이메일 형식입니다.',
            'auth/weak-password': '비밀번호가 너무 약합니다.',
            'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
            'auth/too-many-requests': '너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요.',
            'auth/network-request-failed': '네트워크 연결을 확인해주세요.',
            'auth/user-disabled': '비활성화된 계정입니다.',
            'auth/operation-not-allowed': '허용되지 않은 작업입니다.',
            'auth/invalid-credential': '잘못된 인증 정보입니다.'
        };
        
        return errorMessages[errorCode] || '알 수 없는 오류가 발생했습니다.';
    }
    
    // 인증 상태 확인 (페이지 로드 시)
    checkAuthState() {
        return new Promise((resolve) => {
            if (this.currentUser) {
                resolve(this.currentUser);
            } else {
                // 로컬 스토리지에서 이전 로그인 정보 확인
                const savedAuth = localStorage.getItem('firebaseAuth');
                const savedUser = localStorage.getItem('firebaseUser');
                
                if (savedAuth && savedUser) {
                    try {
                        const userData = JSON.parse(savedUser);
                        // Firebase에서 사용자 정보 재확인
                        auth.currentUser?.reload().then(() => {
                            resolve(auth.currentUser);
                        }).catch(() => {
                            this.onLogout();
                            resolve(null);
                        });
                    } catch (error) {
                        this.onLogout();
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            }
        });
    }
    
    // 관리자 권한 확인
    async checkAdminRole() {
        if (!this.currentUser) return false;
        
        try {
            // Firestore에서 사용자 역할 확인
            const userDoc = await db.collection('users').doc(this.currentUser.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                return userData.role === 'admin';
            }
            return false;
        } catch (error) {
            console.error('관리자 권한 확인 오류:', error);
            return false;
        }
    }
}

// Firebase 인증 인스턴스 생성
let firebaseAuth;

// 페이지 로드 시 Firebase 인증 초기화
document.addEventListener('DOMContentLoaded', () => {
    if (typeof firebase !== 'undefined') {
        firebaseAuth = new FirebaseAuth();
        window.firebaseAuth = firebaseAuth;
    }
});

// 전역 함수로 노출
window.FirebaseAuth = FirebaseAuth;
