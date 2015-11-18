<?php
	if($_POST['name'] && $_POST['mobile']){
		$name=$_POST['name'];
		$mobile=$_POST['mobile'];
		$time=date('H:i:s');
		mail("zakaz@esmoke.in.ua","Консультация с сайта esmoke.in.ua","Клиент заказал консультацию с сайта\nИмя:$name\nТелефон:$mobile\nВремя заявки: $time");
        echo "true";
	}

?>