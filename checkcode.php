<?php
if($_POST['code']){
    include "config.php";
    $code=$_POST['code'];
    $search=mysql_query("SELECT * FROM code WHERE code='{$code}' AND status='true'"); 
    if(mysql_num_rows($search)==1){
        echo "true";
    }else{
        echo "false";
    }
}

?>