"use strict"
$(".custoName").focus(function(event){
	if ($(".custoName")[0].value =="邮箱或者手机号") {
		$(".custoName")[0].value="";
		$(".custoName").css("color","black");
	};
	
})
$(".custoName").blur(function  (event) {
	if ($(".custoName")[0].value==="" ) {
		$(".custoName")[0].value="邮箱或者手机号";
		$(".custoName").css("color","#999");
	} else{
		
	};
})


