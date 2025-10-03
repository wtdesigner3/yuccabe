<?php
$servername = "localhost";
$username = "u354789080_yuccabeplanter";
$password = "Yuccabeplanters@1234.";
$db = "u354789080_yuccabeplanter";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
