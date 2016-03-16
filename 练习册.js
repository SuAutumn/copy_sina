//promise 实践；
//promise.then(fun).then(fun).catch(fun)
//resolve执行then；resolve指向then里的函数
//reject执行catch；reject指向catch里的函数
//减少过多的嵌套；
var prom={};
var ddd=10
prom.p=new Promise(function  (resolve,reject) {
	console.log("start promise");
	resolve(ddd);
});
function multiply (input) {
	return new Promise(function  (resolve,reject) {
		if (input>10) {
			console.log("multiply:"+input+"x"+input);
			resolve(input*input);
		} else{
			console.log("add:"+input+"+"+input);
			reject(input+input)
		};
	});
}

//function multiply (input) {
//	console.log(input*input);
//}
//prom.p.then(multiply)
prom.p.then(multiply).then(function  (result) {
	console.log("call then"+result);
}).catch(function  (result) {
	console.log("call catch"+result);
});

//jquery
$("img").click(function  () {
	$.ajax({
		url:"img/login.jpg",
		type:"GET",
		success:function  (data) {
			alert("success");
			$("img")[0].src="img/login.jpg";

		},
	});
});

$(".t_ajax").click(function  () {
	alert("点击成功");
	$.ajax({
		url:"weather/weather.json",
		type:"get",
		success:function  (data) {
			$(".t_ajax").html(data["city"]+":"+data["tempreture"]);
		},
		error:function  () {
			alert("失败.");
		}
	});
});