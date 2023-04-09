<?php
    include_once 'connection.php';
    $sql = "SELECT * FROM employee";
    $result = mysqli_query($conn,$sql);
?>
<!DOCTYPE html>
<html>
 <head>
 <title> Retrive data</title>
 </head>
<body>
<?php
if (mysqli_num_rows($result) > 0) 
{
?>
  <table>
  
  <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Age</td>
    <td>Email</td>
    <td>Address</td>
    <td>Gender</td>
    <td>Phone</td>
    <td>Department</td>
  </tr>
<?php
while($row = mysqli_fetch_assoc($result)) {
?>
<tr>
    <td><?php echo $row["EmployeeId"]; ?></td>
    <td><?php echo $row["Name"]; ?></td>
    <td><?php echo $row["Age"]; ?></td>
    <td><?php echo $row["Email"]; ?></td>
    <td><?php echo $row["Address"]; ?></td>
    <td><?php echo $row["Gender"]; ?></td>
    <td><?php echo $row["Phone"]; ?></td>
    <td><?php echo $row["Department"]; ?></td>
</tr>
<?php
}
?>
</table>
 <?php
}
else{
    echo "No result found";
}
mysqli_close($conn);
?>
<button><a href = "home.php">Go Back to Home</button>
 </body>
</html>