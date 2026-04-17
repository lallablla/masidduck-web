<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'POST 메서드만 허용됩니다']);
    exit;
}

// 이미지 업로드 디렉토리
$uploadDir = '../uploads/notices/';

// 디렉토리가 없으면 생성
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// 파일 업로드 확인
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => '이미지 업로드에 실패했습니다']);
    exit;
}

$file = $_FILES['image'];
$fileName = $file['name'];
$fileSize = $file['size'];
$fileTmpName = $file['tmp_name'];
$fileType = $file['type'];

// 파일 크기 제한 (5MB)
$maxSize = 5 * 1024 * 1024;
if ($fileSize > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => '파일 크기는 5MB 이하여야 합니다']);
    exit;
}

// 허용된 파일 타입
$allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
if (!in_array($fileType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'JPG, PNG, GIF 파일만 업로드 가능합니다']);
    exit;
}

// 고유한 파일명 생성
$fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
$uniqueFileName = uniqid() . '_' . time() . '.' . $fileExtension;
$uploadPath = $uploadDir . $uniqueFileName;

// 파일 업로드
if (move_uploaded_file($fileTmpName, $uploadPath)) {
    echo json_encode([
        'success' => true,
        'image_url' => 'uploads/notices/' . $uniqueFileName,
        'message' => '이미지가 성공적으로 업로드되었습니다'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => '파일 업로드에 실패했습니다']);
}
?>
