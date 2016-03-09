/*
增加天气；
*/

"use strict"
var magon=[{ulDisplay:0}],//数据容器
	body=document.body;

//time and day
function getTime () {
	var dataSplit=Date().split(" "),
		month=monthJSON[dataSplit[1]],
		hour=dataSplit[4].split(":"),
		day=month+dataSplit[2]+"日   "+hour[0]+":"+hour[1];
	return day;
}
var monthJSON={
	"Jan":"1月",
	"Feb":"2月",
	"Mar":"3月",
	"Apr":"4月",
	"May":"5月",
	"Jun":"6月",
	"Jul":"7月",
	"Aug":"8月",
	"Sep":"9月",
	"Oct":"10月",
	"Nov":"11月",
	"Dec":"12月"
};


$(document).ready(function  () {
	$(".cus_fabu").attr("disabled","disabled");
});

var wInput=$(".w_input"),
	countNums=$(".count_chan");//count the textarea's number

function wInputCount(event) {
	var k=0,target=wInput.val();
	target=target.split("");
	for (var i = target.length - 1; i >= 0; i--) {
        try{
        	var ok=target[i].charCodeAt(0);
        	ok>250?k++:k=k+0.5;
        }catch(err){
        	k++;
        }
	};
	k=Math.ceil(k);
	(k==0 || k>140)?$(".cus_fabu").attr("disabled","disabled"):$('.cus_fabu').removeAttr("disabled");
	var kk=140-k;
	countNums.html("<strong>"+kk+"</strong>");
};

wInput.keyup(wInputCount);
wInput.click(wInputCount);

//fabu button event
$('.cus_fabu').click(function  () {
	var target=wInput.val(),
		getDate=Date.now(),
		div=$("<div></div>").addClass("append "+getDate),
		weather="",
	    timeDiv=$("<div></div>").addClass("append kuan_du time");

	target=target.replace(/\n| /g,"");// replace whitespace and \n;
	//return when target==''
	if (target) {
		//skip
	} else{
		alert("文本不能为空!!!");
		wInput.val("");
		$(".cus_fabu").attr("disabled","disabled");
		return;
	};
	wInput.val("");
	$(".cus_fabu").attr("disabled","disabled");

	//加入日期和天气

	$.ajax({
		url:"weather/weather.html",
		type:"get",
		cache:false,
		success:function  (data) {
			//匹配html文字，储存在数组中
			var local=$(".local").val(),
				xmlDataArr=$("weather",data),
				day=getTime();
			for (var i = xmlDataArr.length - 1; i >= 0; i--) {
				if ($("city",xmlDataArr[i]).text()===local){
					var weather=$("city",xmlDataArr[i]).text()
					+": 白天-"+$("status1",xmlDataArr[i]).text()
					+$("temperature1",xmlDataArr[i]).text()
					+"℃ 夜间-"+$("status2",xmlDataArr[i]).text()
					+$("temperature2",xmlDataArr[i]).text()+"℃"
				}
			};
			timeDiv.text(day+"  "+weather);
		},
		error:function  (jqXHR) {
			alert("请求失败: "+jqXHR.status+" "+jqXHR.readyState+"\n"+jqXHR);
			console.log(jqXHR);
		},
	});
	
	//加入发布内容
	var divDeclare=$('<div class="append kuan_du fabu"></div>').text(target),
		txt_del_btn=F_txt_del_btn(getDate);

	div.append(txt_del_btn);
	div.append(divDeclare);
	div.append(timeDiv);
    $(".body").after(div);
    $("."+getDate).hide();
    $("."+getDate).slideDown();
    countNums.innerHTML="<strong>140</strong>";
});

//写在事件外部,下拉删除按钮
var F_txt_del_btn=function  (getDate) {
	var a=$("<a class='txt_del_btn' href='javascript:void(0)'></a>"),
	div =$("<div class='txt_del_btn'></div>"),
	ul=$("<ul class='txt_del_btn ul_del'></ul>"),
	list=["删除","置顶","赞"];//,"推荐给好友"

    for (var i = list.length - 1; i >= 0; i--) {
    	var li=$("<li></li>"),
    	liChildA=$("<a href='javascript:void(0)'></a>").text(list[i]);

        li.append(liChildA);
        ul.append(li);
        liChildA.click(function  (event) {
        	if ($(event.target).text()==="删除") {
        		$("."+getDate).remove();
        	} else if ($(event.target).text()==="置顶"){
        		$("."+getDate).slideUp("fast");
        		$("."+getDate).hide();
        		magon[0].ulDisplay=0;
        		$(".body").after($("."+getDate));
        		$("."+getDate).slideDown("fast");
        	}
        	
        });
    };
   	

	a.click(function  () {
		if (magon[0].ulDisplay===0){
			magon[1]=ul;
			ul.slideDown("fast");
			magon[0].ulDisplay=1;
		}else if(magon[1] !== ul){
			magon[1].slideUp("fast");
			magon[1]=ul;
			ul.slideDown("fast");
			magon[0].ulDisplay=1;
		}else {
			ul.slideUp("fast");
			magon[0].ulDisplay=0;
		}
	});
    div.append(a);
    div.append(ul);
    return div;
};

$("body").click(function  (event) {
	if (magon[0].ulDisplay ==1 && event.target != "javascript:void(0)"){
		magon[1].slideUp("fast");
		magon[0].ulDisplay=0;
	}
})



function query_father (event) {
	//返回事件对应元素的父节点
	//父节点为body元素的第一个子集；
	var parent_node=event.target.parentNode;
	while (parent_node.nodeName !== "BODY" ){
		var previous=parent_node;
		parent_node=parent_node.parentNode;
	}
	return previous;
	//alert(count+node_name+class_name+state);
}

//


function refreshPrice (arg1) {
	var textarea=document.getElementsByClassName("wInput")[0];
	textarea.value=arg1["0000001"].name;
    //alert(arg1.0000001.name);
}

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

