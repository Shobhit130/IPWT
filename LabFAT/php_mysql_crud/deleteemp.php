<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include_once('connection.php');
        if(isset($_POST['delete'])){ // if($_SERVER["REQUEST_METHOD] == "POST")
            $id = $_POST['id'];

            $sql = "DELETE FROM employee WHERE EmployeeId = ' ".$id."';";
            if(mysqli_query($conn,$sql) && mysqli_affected_rows($conn)>0){
                echo "Record deleted successfully";
            }else{
                echo "Not found";
            }
            // header("Location: home.php");
            mysqli_close($conn);
        }
    ?>
    <button><a href = "home.php">Go Back to Home</button>
</body>
</html>