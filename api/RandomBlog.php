<?php 
require_once "db_connection.php";

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sql = "SELECT * FROM Blogs ORDER BY RAND() LIMIT 3";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $blogs = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($blogs);
} else {
    echo json_encode([]);
}
?>
