<?php
    include_once "connection.php";

    $sql = "SELECT * FROM consumer;";

    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result)>0){?>
        <table>
            <tr>
                <th>ConsumerID</th>
                <th>ConsumerName</th>
                <th>ConnectionType</th>
            </tr>
        
        <?php 
            while($row = mysqli_fetch_assoc($result)){
                echo "<tr><td>".$row["ConsumerId"]."</td><td>".$row["ConsumerName"]."</td><td>".$row["ConnectionType"]."</td></tr>";
            }
            ?>
        </table>
    <?php
    }else{
        echo " No resulta found";
    }

    mysqli_close($conn);
?>