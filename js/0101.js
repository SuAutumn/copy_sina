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
		$(".promote").text("账户名格式不正确");
		$(".promote").css({"color":"red",
							"font-size":"small"});
	} else{
		//skip
	};
});

$(".passwordText").blur(function  () {
	var password=$(".passwordText").val();
	if (!password) {

		alert("密码不能为空");
	} else{
		//skip
	};
})

$(".send").click(function  () {
	var password=$(".passwordText").val();
	if (password==="1234") {
			//skip
		$(".send").attr("href","../copy01.html");
	} else{
		alert("密码错误");
	};
})