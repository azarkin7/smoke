var start=20;
var cc=0;
var ct=0;
$(document).ready(function(){
    var wh=$(window).height();
    var ww=$(window).width();
    $(".priceprs").html(start+" грн");
    $(".mainblock").css("height",wh);
    $(".blockproduct").click(function(){
        $(".ordershowleft").animate({
            opacity:1
        },600);
       $(".instr").fadeOut(200);
       // console.log($(".blockproduct").index(this));
        var indprod=$(".blockproduct").index(this);
        var prod=$(".blockproduct").eq(indprod).text();
        var nameprodw=$.trim(prod);
        $(".allprice").html('');
        $(".ordertable").append("<tr ><td>"+nameprodw+"</td><td><input type='number' onchange='chan(this.value, "+cc+");'  min='0' max='50' value='1'></td><td><select class='''><option value='0'>0</option><option value='3'>3</option><option value='6'>6</option><option value='9'>9</option><option value='12'>12</option><option value='18'>18</option></select></td><td><span class='priceprod'>"+start+"</span></td></tr>");
        var allprice=20;
        for(var i=0;i<cc;i++){
            allprice+=Number($(".priceprod").eq(i).text());
        }
         $(".ordertable").append("<tr class='allprice'><td colspan='4'><span class='endpr'>"+allprice+"</span> грн.</td></tr>");
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
    
    
setInterval('timershow();',1000);
    
$(".saveorder").click(function(){
    $(".pop").fadeIn(100);
});    
$(".callme").click(function(){
    var nn=$("#callname").val();
    var mm=$("#callmobile").val();
    if(nn==""){
        $("#callname").addClass("has_error");
    }
    if(mm==""){
        $("#callmobile").addClass("has_error");
    }
    if(nn!="" && mm!=""){
        $("#callname").removeClass("has_error");
        $("#callmobile").removeClass("has_error");
        $("#callname").addClass("has-success");
        $("#callmobile").addClass("has-success");
        
        $.ajax({
           type:"POST",
            url:"consultation.php",
            data:"name="+nn+"&mobile="+mm,
            success:function(msg){
                if(msg=='true'){
                    $(".callme").html('Заявка отправлена!');
                    
                }
            }
        });
    }
});    
    
$(".saveorder").click(function(){
//         $(".endtable").html("<table class='table table-bordered ordertable'>"+$(".ordertable").html()+"</table>");
            $("#endprices").html("К оплате "+$(".endpr").html()+" грн.");
 });
$("#inputcode").change(function(){
    var code=$("#inputcode").val();
    $.ajax({
        url:"checkcode.php",
        type:"POST",
        data:"code="+code,
        success:function(msg){
            console.log(msg);
        }
    });
});
    
});
    function chan(a,b){
       var ct=0;
       $(".priceprod").eq(b).html(start*a);
        $(".allprice").html('');
        for(var i=0;i<cc;i++){
            ct+=Number($(".priceprod").eq(i).text());
        }
          $(".ordertable").append("<tr class='allprice'><td colspan='4' >К оплате <span class='endpr'>"+ct+"</span> грн.</td></tr>");
    }
function timershow(){
      var dt=new Date();
    var hours=dt.getHours();
    var min=dt.getMinutes();
    var sec=dt.getSeconds();
    
    if(24-hours<=9){
        $("#timer_hour").html("0"+(24-hours));
    }else{
       $("#timer_hour").html(24-hours);
    }

    if(59-min<=9){
        $("#timer_min").html("0"+(59-min));
    }else{
       $("#timer_min").html(59-min);
    }
    
    if(59-sec<=9){
        $("#timer_sec").html("0"+(59-sec));
    }else{
       $("#timer_sec").html(59-sec);
    }
    
}