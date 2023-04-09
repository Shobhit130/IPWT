<?php
    $xmldoc = new DOMDocument();
    $xmldoc -> load("cdCatalog.xml");

    $q = $_GET["q"];

    $x = $xmldoc -> getElementsByTagName("ARTIST");

    for($i = 0;$i<$x->length;$i++){
        if($q == $x->item($i)->childNodes->item(0)->nodeValue){
            $y = $x->item($i)->parentNode;
        }
    }

    $z = $y->childNodes;

    for($i=0;$i<$z->length;$i++){
        if($z->item($i)->nodeType == 1)
        echo $z->item($i)->nodeName.":".$z->item($i)->childNodes->item(0)->nodeValue."<br>";
    }
?>