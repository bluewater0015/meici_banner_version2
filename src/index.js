//index.js
import "./css/reset.css";
import "./css/common.css";
require('./css/index.less');
import { headerLoad,logoLoad,navLoad,specialLoad,specialTopLoad } from "../utils/common.js";
//let Common = require(`../utils/common.js`);
//import getProductServices from "../services/webServices";
$(function(){
	//console.log(Common);
	banner();
	headerLoad();
	logoLoad();
	navLoad();
	specialLoad();
	navMoveEvent();
	specialTopLoad();
	// getProductServices().then( data=>{
	// 	console.log("==="+data);
	// 	for(var i=0;i<data.length;i++){
	// 		$(".recent").append(`
	// 			<div class="recent_product nav_com">
	// 				<ul class="ul_recent">
	// 					<li class="line_list">
	// 						<h3>${data[0].className}</h3>
	// 						<h3>${data[0].className}</h3>
	// 						<h3>${data[0].className}</h3>
	// 					</li>
	// 					<li class="man_list">
	// 						<h3>男仕Man</h3>
	// 						<ul class="ul_list">
	// 							<li>${data[1].goodsName}</li>
	// 							<li>${data[1].goodsName}</li>
	// 							<li>${data[1].goodsName}</li>
	// 							<li>${data[1].goodsName}</li>
	// 						</ul>
	// 					</li>
	// 					<li class="woman_list">
	// 						<h3>女士Woman</h3>
	// 						<ul class="ul_list">
	// 							<li>${data[2].goodsName}</li>
	// 							<li>${data[2].goodsName}</li>
	// 							<li>${data[2].goodsName}</li>
	// 							<li>${data[2].goodsName}</li>
	// 						</ul>
	// 					</li>
	// 					<li class="recoment_list">
	// 						<h3>今日推荐品</h3>
	// 						<dl class="dl">
	// 							<dt>
	// 								<img src="${data[0].goodsListImg}" />
	// 							</dt>
	// 							<dd>
	// 								Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
	// 							</dd>
	// 						</dl>
	// 						<dl class="dl">
	// 							<dt>
	// 								<img src="${data[0].goodsListImg}" />
	// 							</dt>
	// 							<dd>
	// 								Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
	// 							</dd>
	// 						</dl>
	// 						<dl class="dl">
	// 							<dt>
	// 								<img src="${data[0].goodsListImg}" />
	// 							</dt>
	// 							<dd>
	// 								Moschino 莫斯奇诺小牛皮 女士迷你双肩包
	// 							</dd>
	// 						</dl>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		`)
	// 	}
	// })
})
function navMoveEvent(){
	$(".follow_us").mouseenter(function(){
		$(".follow_menu").show();
	}).mouseleave(()=>{
		$(".follow_menu").hide();
	})
	// $(".recent").mouseenter( ()=>{
	// 	$(".recent_product").show();
	// }).mouseleave( ()=>{
	// 	$(".recent_product").hide();
	// })
}
function banner(){
	var timer1 = setInterval(function(){
			i++;
			move();
		},2000);
	var oBanner = $(".banner_ul");
	var imgList = $(".banner_ul li");
	var btn = $(".btn");
	var btnList = $(".btn li");

	//复制第一张图片到最后
	imgList.first().clone().appendTo(oBanner);
	var size = $(".banner_ul li").length;
	var i = 0;//记录图片的下标
	//移动的函数
	//alert(1);
	function move(){
		//如果i小于0(左边界)
		
		if(i <= -1){
			i = size -2;
			oBanner.css("left", -(size-1) * 960);
		}
		if( i == size ){
			i = 1;
			oBanner.css("left",0);
		}
		//移动到第i张图片
		oBanner.stop().animate({left:-i * 960},1000);
		//改变btn的按钮状态
		btnList.eq(i).removeClass().addClass("active").siblings().removeClass("active");
		if(i == size -1 ){
			btnList.eq(0).removeClass().addClass("active").siblings().removeClass("active");
		}
	}
	//上一页
	$(".preBtn").click( ()=>{
		i--;
		move();
	})
	//下一页
	$(".nextBtn").click( ()=>{
		i++;
		move();
	})
	//btnList 按钮
	btnList.hover(function(){
		var index = $(this).index();
		//console.log(index);
		i = index;
		move();
	})
	//移入、移出banner
	
	$(".banner").hover(function(){
		clearInterval(timer1);
	},function(){
		timer1 = setInterval(function(){
			i++;
			move();
		},2000)
	})

}

/*select_ul*/
$(function(){
	 var select = $(".select_ul");
	 var selectList = $(".select_ul li");
	 var size = $(".select_ul li").length;
	 console.log("===size===:"+size);
	 var i = 0;
	 var timer = setInterval( ()=>{
	 	i++;
	 	move();
	 },2000)

	 function move(){
	 	//如果i小于0(左边界)
		// if(i <= -1){
		// 	i = size -2;
		// 	select.css("left", -(size-1) * 186);
		// }
		if( i == size ){
			i = 1;
			select.css("left",0);
		}
	 	select.stop().animate({left: -i*186},1000);
	 }
})


