var magon={};

var body=document.body;
//body.style.backgroundImage="URL(http://img.t.sinajs.cn/t6/skin/skin026/images/body_bg.jpg?id=1410943047113)";

//time and day
function t_d () {
	var time_arr=Date().split(" ");
	var month=Json_1[time_arr[1]];
	var hour=time_arr[4].split(":");
	var day=month+time_arr[2]+"日   "+hour[0]+":"+hour[1];
	return day;
}

function compare_time (send_time) {
	//................
}

var fabu=document.getElementsByClassName('cus_fabu')[0];
if (w_input) {fabu.disabled=true} else{fabu.disabled=false};
fabu.onclick=function test () {
	var target=w_input.value;
	w_input.value="";
	fabu.disabled="disabled";
	// 替换掉 空格 和 换行符
	target=target.replace(/\n| /g,"");


	//加入html中
	var div=document.createElement("div");
	div.className="append";

	//加入日期
	var div_time=document.createElement("div");
	div_time.className="append kuan_du time";
	var day=t_d();

	div_time.appendChild(document.createTextNode(day));

	//加入发布内容
	var div_fabu=document.createElement("div");
	div_fabu.className="append kuan_du fabu";
	target=document.createTextNode(target);
	div_fabu.appendChild(target);

	var txt_del_btn=F_txt_del_btn();

	div.appendChild(txt_del_btn);
	div.appendChild(div_fabu);
	div.appendChild(div_time);
    body.insertBefore(div,body.children[3]);
    count_chan.innerHTML="<strong>140</strong>";
	//alert(day);
	//alert("11111111");
};

//写在事件外部
var F_txt_del_btn=function  () {
	var a=document.createElement("a");
	a.className="txt_del_btn";
	a.href="javascript:void(0)";

	a.addEventListener("click",function  () {
		ul.style.display=="none"?ul.style.display="block":ul.style.display="none";
	});
	//var i=document.createElement("i");
	//i.appendChild(document.createTextNode(" V "));
	//a.appendChild(i);


	var div =document.createElement("div");
    div.className="txt_del_btn";

    var ul=document.createElement("ul");
    
    var list=["删除","置顶"];
    for (var i = list.length - 1; i >= 0; i--) {
    	var li=document.createElement("li");
    	var aa=document.createElement("a");
    	aa.href="javascript:void(0)";
    	aa.appendChild(document.createTextNode(list[i]))
        li.appendChild(aa);
        ul.appendChild(li);
    };

    aa.addEventListener("click",function  () {
    	body.removeChild(aa.parentNode.parentNode.parentNode.parentNode);
    },false);
    

    div.appendChild(a);
    div.appendChild(ul);
    return div;

}
var a

//设置底部时间
//var time=document.getElementsByClassName("time")[0];
//time.innerHTML="<p>"+Date()+"</p>";
//time.style.fontSize="small";



//计算文本框可输入数字
var w_input=document.getElementsByClassName("w_input")[0];
var count_chan=document.getElementsByClassName("count_chan")[0];

function w_input_f(event) {
	var k=0;
	var target=w_input.value;
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

	//按钮可用否
	(k==0 || k>140)?fabu.disabled="disabled":fabu.disabled="";
	var kk=140-k;
	count_chan.innerHTML="<strong>"+kk+"</strong>";
}

w_input.addEventListener("keyup",w_input_f,false);
w_input.addEventListener("click",w_input_f,false);


//html 中 disabled属性有问题，不得已写在js中
window.onload=function  (e) {
	fabu.disabled="disabled";
}

//
var Json_1={
	"Jan":"1月",
	"Feb":"2月",
	"Mar":"3月",
	"Apr":"4月",
	"Mar":"5月",
	"Jun":"6月",
	"Jul":"7月",
	"Aug":"8月",
	"Sep":"9月",
	"Oct":"10月",
	"Nov":"11月",
	"Dec":"12月"
}