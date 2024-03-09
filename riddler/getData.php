<?php

// Establish a database connection
$host = "sql6.webzdarma.cz";
$dbname = "riddlerunasc2537";
$username = "riddlerunasc2537";
$password = "16t1Gm,(6hYCilS96l61";

$conn = new mysqli($host, $dbname, $username, $password);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the MySQL table
$sql = "SELECT question, answer FROM questions ORDER BY id";
$result = $conn->query($sql);

// Store the fetched data in an array
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Return the data as JSON
header("Content-Type: application/json");
echo json_encode($data);

?>