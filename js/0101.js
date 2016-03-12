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
		$(".pCustomer").text("账户名格式不正确");
		$(".pCustomer").css({"color":"white",
							"font-size":"small"});
	} else{
		$(".pCustomer").text("");
	};
});

$(".passwordText").blur(function  () {
	var password=$(".passwordText").val();
	if (!password) {
		$(".pPassword").text("密码不能为空");
		$(".pPassword").css({"color":"white",
							"font-size":"small"});
	} else{
		$(".pPassword").text("");
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