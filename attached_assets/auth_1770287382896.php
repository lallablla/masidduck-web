<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

session_start();

// 오류 로깅 활성화
error_reporting(E_ALL);
ini_set('display_errors', 1);

// 요청 데이터 받기
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    error_log("Auth API: No input data received");
    echo json_encode(['success' => false, 'error' => '입력 데이터가 없습니다.']);
    exit;
}

$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

error_log("Auth API: Login attempt for email: " . $email);

// 데이터베이스 연결
require_once '../config/database.php';
$conn = getDBConnection();

if (!$conn) {
    error_log("Auth API: Database connection failed");
    echo json_encode(['success' => false, 'error' => '데이터베이스 연결에 실패했습니다.']);
    exit;
}

try {
    // 사용자 조회
    $stmt = $conn->prepare("SELECT id, email, password, role FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    error_log("Auth API: User query result: " . ($user ? "found" : "not found"));
    
    if ($user && password_verify($password, $user['password'])) {
        // 로그인 성공
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['user_role'] = $user['role'];
        
        error_log("Auth API: Login successful for user: " . $user['email']);
        
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'role' => $user['role']
            ]
        ]);
    } else {
        error_log("Auth API: Login failed - invalid credentials");
        echo json_encode(['success' => false, 'error' => '이메일 또는 비밀번호가 올바르지 않습니다.']);
    }
} catch (PDOException $e) {
    error_log("Auth API: Database error: " . $e->getMessage());
    echo json_encode(['success' => false, 'error' => '데이터베이스 오류가 발생했습니다: ' . $e->getMessage()]);
}
?>
