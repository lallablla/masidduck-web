// Firebase 설정 파일
// Firebase SDK 설정
const firebaseConfig = {
    // 여기에 Firebase 콘솔에서 가져온 설정을 넣으세요
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
const db = firebase.firestore();

// Authentication 초기화
const auth = firebase.auth();

// 실시간 리스너 설정
const enableRealtimeListeners = () => {
    // 공지사항 실시간 업데이트
    db.collection('notices')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
            const notices = [];
            snapshot.forEach((doc) => {
                notices.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            
            // 전역 변수에 저장
            window.globalNotices = notices;
            
            // 페이지별 업데이트 함수 호출
            updateNoticesOnPage();
        });
};

// 페이지별 공지사항 업데이트
const updateNoticesOnPage = () => {
    const notices = window.globalNotices || [];
    
    // 메인 페이지 최신 공지사항 업데이트
    if (window.loadLatestNotice) {
        window.loadLatestNotice();
    }
    
    // 관리자 대시보드 업데이트
    if (window.adminSystem && window.adminSystem.loadDashboard) {
        window.adminSystem.loadDashboard();
    }
    
    // 이벤트&공지 페이지 업데이트
    if (window.updateEventsNoticesPage) {
        window.updateEventsNoticesPage();
    }
};

// Firebase 설정 완료 후 실시간 리스너 활성화
document.addEventListener('DOMContentLoaded', () => {
    // Firebase가 로드되었는지 확인
    if (typeof firebase !== 'undefined') {
        enableRealtimeListeners();
        console.log('Firebase 실시간 리스너가 활성화되었습니다.');
    } else {
        console.error('Firebase가 로드되지 않았습니다.');
    }
});

// 전역 Firebase 객체 노출
window.firebase = firebase;
window.db = db;
window.auth = auth;
