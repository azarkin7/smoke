<?php
$server="localhost";
$user="root";
$pass="";
if(mysql_connect($server,$user,$pass)){
    if(mysql_select_db("esmoke")){
        mysql_query("set charset 'utf8'") or die(mysql_error());
        
//        for($i=0;$i<=500;$i++){
//            $rand=rand('9999','999999999');
//            mysql_query("INSERT INTO code(code,status) VALUES($rand,'true')") or die(mysql_error());
//           
//        }
    }
}
?>