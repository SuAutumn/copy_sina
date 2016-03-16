"use strict"

$(".custoName").focus(function(event){
	if ($(".custoName").val() ==="邮箱或者手机号") {
		$(".custoName").val("");
		$(".custoName").css("color","black");
	};
	
});
$(".custoName").blur(function  (event) {
	var customer=$(".custoName").val(),
		pattern=/^(?:(1[3,5,6,7,8][0-9]{9}))?(?:([a-zA-Z0-9]*@[a-zA-Z0-9]*\.(?:com|cn)))?$/g,
		result=pattern.exec(customer);

	if ($(".custoName").val()==="" ) {
		$(".custoName").val("邮箱或者手机号");
		$(".custoName").css("color","#999");
	} else{
		//skip
	};
	if (customer !=="邮箱或者手机号") {
		//skip
	} else{
		return;
	};

	if (!result) {
		$(".noteCustomer").text("格式错误");
		$(".noteCustomer").css({"color":"white",
							"font-size":"small"});
	} else{
		$(".noteCustomer").text("");
	};
});

$(".passwordText").blur(function  () {
	var password=$(".passwordText").val();
	if (!password) {
		$(".notePassword").text("密码为空    ");
		$(".notePassword").css({"color":"white",
							"font-size":"small"});
	} else{
		$(".notePassword").text("");
	};
})

$(".send").click(function  () {
	var password=$(".passwordText").val();
	if (password==="1234") {
		$(".send").attr("href","../copy01.html");
	} else{
		alert("密码错误");
	};
})