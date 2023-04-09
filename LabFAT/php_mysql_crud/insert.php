<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data</title>
</head>
<body>
    <?php
        include_once('connection.php');
        if(isset($_POST['save'])){
            $name = $_POST['name'];
            $age = $_POST['age'];
            $email = $_POST['email'];
            $add = $_POST['add'];
            $gender = $_POST['gender'];
            $phone = $_POST['phone'];
            $dept = $_POST['dept'];

            $sql = "INSERT INTO employee (Name,Age,Email,Address,Gender,Phone,Department)
            VALUES ('$name','$age','$email','$add','$gender','$phone','$dept')";
            if (mysqli_query($conn, $sql)) {
                echo "New record created successfully !";
            } else {
                echo "Error: ". mysqli_error($conn);
            }
            //  header("Location: home.php");
            mysqli_close($conn);
        }
    ?>
    <button><a href = "home.php">Go Back to Home</button>
</body>
</html>