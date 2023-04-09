<?php
    include_once "connection.php";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $bid = $_POST['bid'];

        $sql = "SELECT booking.BookingId,booking.DeliveryStatus,booking.ConsumerId,consumer.ConsumerName FROM booking INNER JOIN consumer ON booking.ConsumerId = consumer.ConsumerId WHERE booking.BookingId = '".$bid."';";

        $result = mysqli_query($conn,$sql);

        if(mysqli_num_rows($result)>0){
            while($row = mysqli_fetch_assoc($result)){
                echo "Booking ID: ".$row["BookingId"]."Delivery Status: ".$row["DeliveryStatus"]."Consumer ID: ".$row["ConsumerId"]."Consumer Name: ".$row["ConsumerName"]."<br>";
            }
        }else{
            echo "No results found";
        }
    }
    mysqli_close($conn);
?>

<!-- SELECT COUNT(CustomerId) FROM customer GROUP BY Country HAVING COUNT(CustomerId) > 5 ORDER BY COUNT(CustomerId) DESC;-->