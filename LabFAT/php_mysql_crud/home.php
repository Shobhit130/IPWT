<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <form method = "post" action = "insert.php">
            <label for = "name">Name:</label>
            <input type = "text" name = "name"><br>
            <label for = "age">Age:</label>
            <input type = "number" name = "age"><br>
            <label for = "email">Email:</label>
            <input type = "email" name = "email"><br>
            <label for = "add">Address:</label>
            <textarea rows="5" cols="10" name="add"></textarea><br>
            <label for = "gender">Gender:</label><br>
            Male
            <input type = "radio" name = "gender" value="Male">
            Female
            <input type = "radio" name = "gender" value="Female">
            <br>
            <label for = "phone">Phone:</label>
            <input type = "tel" name = "phone"><br>
            <label for = "dept">Department:</label>
            <select name="dept">
                <option value="">--Select a Department--</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
            </select><br>
            <input type="submit" value="Submit" name = "save">
            <button><a href = "delete.php">Delete Employee</a></button>
            <button name = "show"><a href = "show.php">Show Employee</a></button>
            <button name = "update"><a href = "update.php">Update Employee</a></button>
        </form>
    </div>
</body>
</html>