var start=20;
var cc=0;
var ct=0;
$(document).ready(function(){
    var wh=$(window).height();
    var ww=$(window).width();
    $(".mainblock").css("height",wh);
    $(".blockproduct").click(function(){
       // console.log($(".blockproduct").index(this));
        var indprod=$(".blockproduct").index(this);
        var prod=$(".blockproduct").eq(indprod).text();
        var nameprod=$.trim(prod);
        $(".allprice").html('');
        $(".ordertable").append("<tr><td>"+nameprod+"</td><td><input type='number' onchange='chan(this.value, "+cc+");'  min='0' max='50' value='1'></td><td><select class='''><option value='0'>0</option><option value='3'>3</option><option value='6'>6</option><option value='9'>9</option><option value='12'>12</option><option value='18'>18</option></select></td><td><span class='priceprod'>"+start+"</span></td></tr>");
        var allprice=20;
        for(var i=0;i<cc;i++){
            allprice+=Number($(".priceprod").eq(i).text());
        }
         $(".ordertable").append("<tr class='allprice'><td colspan='4'>К оплате "+allprice+" грн.</td></tr>");
        cc++;
    });
   $(".numberorderr").html("Заказ №"+ Math.round(Math.random()*10000));
    
    
    
				$(".price").click(function(){
					var countsig=$("#countsig").val();
					var pricesig=$("#pricesig").val();
					var countsmol=$("#countsmol").val();
					$(".countsig").html(countsig*30+" шт.");
					$(".countsmol").html(countsig*30*countsmol+" мг.");
					$(".countesmol").html(0);
					$(".pricesig").html((pricesig/20)*countsig*30+" грн.");
					$(".countesig").html("0");
					if(countsig=="" && pricesig=="" && countsmol==""){
						$(".priceesig").html("0 грн.");
					}else {
						$(".priceesig").html("80 грн.");
						if(((pricesig/20)*countsig*30)-80<=0){
							$(".econmoney").html("Что-то пошло не так !!! <img src='img/smile.png' width='64' />");

						}else{
							$(".econmoney").html(((pricesig/20)*countsig*30)-80 + " грн. в месяц");
						}
						if((((pricesig/20)*countsig*30)-80)*12<=0){

						}else{
							$(".year").html((((pricesig/20)*countsig*30)-80)*12 + " грн. в год");
						}

					}
				});
});
    function chan(a,b){
       var ct=0;
       $(".priceprod").eq(b).html(start*a);
        $(".allprice").html('');
        for(var i=0;i<cc;i++){
            ct+=Number($(".priceprod").eq(i).text());
        }
          $(".ordertable").append("<tr class='allprice'><td colspan='4'>К оплате "+ct+" грн.</td></tr>");
    }
