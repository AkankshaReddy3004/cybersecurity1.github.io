<?php
// Database connection parameters
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "cyber";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];

// Prepare SQL statement to insert data into the database
$sql = "INSERT INTO users (name, email, gender) VALUES ('$name', '$email', '$gender')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
