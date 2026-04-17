<?php
// 관리자 계정 생성 스크립트
require_once 'config/database.php';

$conn = getDBConnection();
if (!$conn) {
    die("데이터베이스 연결 실패");
}

// 새로운 비밀번호 해시 생성
$password = 'dltn2120!!';
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

echo "생성된 해시: " . $hashedPassword . "<br>";

// 기존 admin 계정 삭제 (있다면)
try {
    $stmt = $conn->prepare("DELETE FROM users WHERE email = ?");
    $stmt->execute(['admin@masidduck.com']);
    echo "기존 admin 계정 삭제 완료<br>";
} catch (Exception $e) {
    echo "기존 계정 삭제 중 오류: " . $e->getMessage() . "<br>";
}

// 새로운 admin 계정 생성
try {
    $stmt = $conn->prepare("INSERT INTO users (email, password, role, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute(['admin@masidduck.com', $hashedPassword, 'admin']);
    echo "새로운 admin 계정 생성 완료!<br>";
    echo "이메일: admin@masidduck.com<br>";
    echo "비밀번호: dltn2120!!<br>";
} catch (Exception $e) {
    echo "계정 생성 중 오류: " . $e->getMessage() . "<br>";
}
?>
