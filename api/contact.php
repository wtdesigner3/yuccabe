<?php 
    require_once "db_connection.php";

    // Get form data submitted by the user
    $Name = $_POST['your-name']; // Name entered in the form
    $Email = $_POST['email-address']; // Email entered in the form
    $Phone = $_POST['contact-number']; // Phone number entered in the form
    $company = $_POST['company'];
    $Message = $_POST['message']; // Message entered in the form
    

    // SQL query to insert the form data into the database
    $sql = "INSERT INTO `Contact_Form`(`Entry_ID`, `Name`, `Email_Address`, `Contact_Number`, `Company`, `Message`) 
    VALUES ('','$Name','$Email','$Phone','$company','$Message')";

    // Check if the query was executed successfully
    if ($conn->query($sql) === TRUE) {
        // Email details
        $to = 'Testing@chaak.in, praveenpatkuwal29@gmail.com'; // Recipients of the email
        $subject = 'New Inquiry Submitted via Contact Form'; // Subject of the email
        
        // Compose the email message
        $message = "
            Dear Yuccabe Planters Admin Team,<br><br>
            You have received a new inquiry through the contact form on your website. Below are the details:<br><br>
            <strong>Submission Details:</strong><br>
            • Name: $Name<br>
            • Mobile Number: $Phone<br>
            • Email Address: $Email<br>
            • Selected Service: $Interest<br>
            • Message: $Message<br>
            • Company: $company<br>
            • Date & Time of Submission: " . date('Y-m-d H:i:s') . "<br><br>
            Please follow up with the user at the earliest convenience to discuss their requirements further.<br><br>
            Best regards,<br>
            Yuccabe Planters System Notification

        ";

        // Email headers to send HTML email
        $headers = "MIME-Version: 1.0" . "\r\n"; // Specify the MIME version
        $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n"; // Specify HTML email format
        $headers .= "From: Yuccabe Planters <no-reply@yuccabeplanters.com>" . "\r\n"; // Sender email address

        // Send the email and check if it was successful
        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully."; // Success message
        } else {
            echo "Failed to send email."; // Error message if email fails
        }
    } else {
        // Error message if the SQL query fails
        echo "Error: " . $stmt->error;
    }

?>