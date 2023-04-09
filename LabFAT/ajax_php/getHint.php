<?php
    $a[] = "Anna";
    $a[] = "Brittany";
    $a[] = "Cinderella";
    $a[] = "Diana";
    $a[] = "Eva";
    $a[] = "Fiona";
    $a[] = "Gunda";
    $a[] = "Hege";
    $a[] = "Inga";
    $a[] = "Johanna";
    $a[] = "Kitty";
    $a[] = "Linda";
    $a[] = "Nina";
    $a[] = "Ophelia";
    $a[] = "Petunia";
    $a[] = "Amanda";
    $a[] = "Raquel";
    $a[] = "Cindy";
    $a[] = "Doris";
    $a[] = "Eve";
    $a[] = "Evita";
    $a[] = "Sunniva";
    $a[] = "Tove";
    $a[] = "Unni";
    $a[] = "Violet";
    $a[] = "Liza";
    $a[] = "Elizabeth";
    $a[] = "Ellen";
    $a[] = "Wenche";
    $a[] = "Vicky";
    $q = $_GET["q"];
    $len = strlen($q);
    $res = "";
    foreach($a as $name){
        if(strtolower($q) == strtolower(substr($name,0,$len))){
            if($res == ""){
                $res = $name;
            }else{
                $res .= ", ".$name;
            }
        }
    }
    if($res == ""){
        echo "No suggestion";
    }else{
        echo $res;
    }
?>

<!-- str_word_count(), str_replace(old,new,string),strpos(string,search_string),strstrtolower(),strtoupper(),strlen(),substr(),count() -->