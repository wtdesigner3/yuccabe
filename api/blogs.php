<?php 
require_once "db_connection.php";

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sql = "SELECT * FROM Blogs";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    // Fetch all rows as an associative array
    $blogs = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($blogs);
} else {
    echo json_encode([]);
}
?>
