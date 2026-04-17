<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$conn = getDBConnection();

if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => '데이터베이스 연결 실패']);
    exit;
}

switch ($method) {
    case 'GET':
        // 공지사항 조회
        if (isset($_GET['id'])) {
            // 특정 공지사항 조회
            $stmt = $conn->prepare("SELECT * FROM notices WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            $notice = $stmt->fetch();
            
            if ($notice) {
                // 조회수 증가
                $updateStmt = $conn->prepare("UPDATE notices SET views = views + 1 WHERE id = ?");
                $updateStmt->execute([$_GET['id']]);
                
                echo json_encode($notice);
            } else {
                http_response_code(404);
                echo json_encode(['error' => '공지사항을 찾을 수 없습니다']);
            }
        } else {
            // 전체 공지사항 목록 조회
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
            $offset = ($page - 1) * $limit;
            
            $stmt = $conn->prepare("
                SELECT * FROM notices 
                WHERE status = 'published' 
                ORDER BY created_at DESC 
                LIMIT " . (int)$limit . " OFFSET " . (int)$offset
            );
            $stmt->execute();
            $notices = $stmt->fetchAll();
            
            // 전체 개수 조회
            $countStmt = $conn->prepare("SELECT COUNT(*) as total FROM notices WHERE status = 'published'");
            $countStmt->execute();
            $total = $countStmt->fetch()['total'];
            
            echo json_encode([
                'notices' => $notices,
                'total' => $total,
                'page' => $page,
                'limit' => $limit,
                'totalPages' => ceil($total / $limit)
            ]);
        }
        break;
        
    case 'POST':
        // 공지사항 생성
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['title']) || !isset($data['content'])) {
            http_response_code(400);
            echo json_encode(['error' => '제목과 내용은 필수입니다']);
            exit;
        }
        
        $stmt = $conn->prepare("
            INSERT INTO notices (title, content, image_url, type, status) 
            VALUES (?, ?, ?, ?, ?)
        ");
        
        $result = $stmt->execute([
            $data['title'],
            $data['content'],
            $data['image_url'] ?? null,
            $data['type'] ?? 'notice',
            $data['status'] ?? 'published'
        ]);
        
        if ($result) {
            $id = $conn->lastInsertId();
            echo json_encode(['success' => true, 'id' => $id]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => '공지사항 생성 실패']);
        }
        break;
        
    case 'PUT':
        // 공지사항 수정
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'ID가 필요합니다']);
            exit;
        }
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        $stmt = $conn->prepare("
            UPDATE notices 
            SET title = ?, content = ?, image_url = ?, type = ?, status = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE id = ?
        ");
        
        $result = $stmt->execute([
            $data['title'],
            $data['content'],
            $data['image_url'] ?? null,
            $data['type'] ?? 'notice',
            $data['status'] ?? 'draft',
            $_GET['id']
        ]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => '공지사항 수정 실패']);
        }
        break;
        
    case 'DELETE':
        // 공지사항 삭제
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'ID가 필요합니다']);
            exit;
        }
        
        $stmt = $conn->prepare("DELETE FROM notices WHERE id = ?");
        $result = $stmt->execute([$_GET['id']]);
        
        if ($result) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => '공지사항 삭제 실패']);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => '허용되지 않는 메서드입니다']);
        break;
}
?>
