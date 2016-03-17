/*
增加天气；
*/

"use strict"
var magon=[],//数据容器
	body=document.body;

//time and day
function getDay () {
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

	//request for local weather
	$.ajax({
		url:"weather/weather.html",
		type:"get",
		cache:false,
		success:function  (data) {
			//匹配html文字，储存在数组中
			var local=$(".location").text(),
				xmlDataArr=$("weather",data),
				day=getDay();
			for (var i = xmlDataArr.length - 1; i >= 0; i--) {
				if ($("city",xmlDataArr[i]).text()===local){
					var weather=$("city",xmlDataArr[i]).text()
					+": 白天-"+$("status1",xmlDataArr[i]).text()
					+$("temperature1",xmlDataArr[i]).text()
					+"℃ 夜间-"+$("status2",xmlDataArr[i]).text()
					+$("temperature2",xmlDataArr[i]).text()+"℃";
				};
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
		txt_del_btn=F_txt_del_btn(getDate),
		divBottom=createBottom("收藏","转发","赞");

	div.append(txt_del_btn,divDeclare,timeDiv,divBottom,createPromoteBox ());
    $("div.send_text").after(div);
    $("."+getDate).hide();
	$("."+getDate).slideDown("fast");
    countNums.html("<strong>140</strong>");
});

//生成 “收藏 转发 赞数”
function createBottom () {
	var items=Array.prototype.slice.call(arguments,0),
		len=items.length,
		div=$("<div class='bottomDock'></div>");

	if (items){
		//skip
	}else{
		div=null;
		return;
	};

	for (var i = 0; i < len; i++) {
		var divChildren=$("<div></div>").addClass("bottom"+i),
			a=$("<a href='javascript:void(0)'></a>").addClass("bottom"+i);

		a.text(items[i]);
		divChildren.append(a);
		div.append(divChildren);
		a.click(function  (e) {
			if ($(e.target).text()===items[0]) {
				var top=$(e.target).parent().position().top,
					left=$(e.target).parent().position().left,
					width=parseInt($(e.target).parent().css("width"));
				$('.promoteBox1').css({
					"top":(top-parseInt($('.promoteBox1').css("height")))+"px",
					"left":left+(width-parseInt($('.promoteBox1').css("width")))/2+"px",
				});
				$('.promoteBox1').fadeToggle();
			}else if($(e.target).text()===items[1]){
				//skip
			}else{
				$(e.target).css("color") === 'rgb(255, 165, 0)'?
				$(e.target).css("color","#999"):$(e.target).css("color","orange");
			}
			e.stopPropagation();
		});
	};
	divChildren=null;
	return div;
};


//写在事件外部,下拉删除按钮
var F_txt_del_btn=function  (getDate) {
	var a=$("<a href='javascript:void(0)'></a>").addClass('txt_del_btn'),
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
        		$("."+getDate).slideUp("fast");
        		setTimeout(function() {
        			$("."+getDate).remove();
        		}, 2000);
        	} else if ($(event.target).text()==="置顶"){
        		if ($("."+getDate).attr("class")==$(".send_text").next().attr("class")){
        			return;
        		}else{
        			$("."+getDate).hide();
	        		$("div.send_text").after($("."+getDate));
	        		$("."+getDate).slideDown("fast");
        		};
        	} else{
        		$("a.bottom2").css("color") === 'rgb(255, 165, 0)'?
				$("a.bottom2").css("color","#999"):$("a.bottom2").css("color","orange");
        	};
        });
    };
    div.append(a,ul);

    a.click(function  (e) {
    	if ($(e.target).next().css("display")==="block") {
    		//skip 冒泡到body click事件。
    	} else{
    		$("ul.ul_del").slideUp("fast");
			$(e.target).next().slideDown("fast");
			e.stopPropagation();
    	};
    	
    });
    return div;
};

$("body").click(function  (e) {
	$("ul.ul_del").hide();
	$('.promoteBox1').hide();
});
//生成提示框
function createPromoteBox () {
	var div1=$('<div><div><input type="button" value="确认"/></div><div><input type="button" value="取消"/></div></div>').addClass("promoteBox1"),
		div2=$('<div></div>').addClass("promoteBox2");
	div1.append(div2);
	return div1;
}
