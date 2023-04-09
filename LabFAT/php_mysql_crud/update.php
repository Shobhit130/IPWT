<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Data</title>
</head>
<body>
    <form method = "post" action="updateemp.php">
        <label for = "id">Enter ID:</label>
        <input type="text" name="id"><br>
        <label for = "age">Age:</label>
        <input type = "number" name = "age"><br>
        <input type="submit" value="Update" name="update">
        <button><a href = "home.php">Go Back to Home</button>
    </form>
</body>
</html>