import {getProductServices} from "../services/webServices";
import { getJson } from "../services/baseServices";
function topLoad(){
	$("#top").load("./utils/commonHtml/top.html");
	$("#top").load("../utils/commonHtml/top.html");
}
function headerLoad(){
	$("#header").load("./utils/commonHtml/header.html");
	$("#header").load("../utils/commonHtml/header.html");
}
function logoNavLoad(){
	$(".logo_nav").load(`./utils/commonHtml/logo_nav.html`,function(response,status){
		if( status == "success"){
			getProductServices().then( data=>{
			//console.log(response);
			for(var i=0;i<data.length;i++){
				$(".recent").append(`
					<div class="recent_product nav_com">
						<ul class="ul_recent">
							<li class="line_list">
								<h3>${data[0].className}</h3>
								<h3>${data[0].className}</h3>
								<h3>${data[0].className}</h3>
							</li>
							<li class="man_list">
								<h3>男仕Man</h3>
								<ul class="ul_list">
									<li>${data[1].goodsName}</li>
									<li>${data[1].goodsName}</li>
									<li>${data[1].goodsName}</li>
									<li>${data[1].goodsName}</li>
								</ul>
							</li>
							<li class="woman_list">
								<h3>女士Woman</h3>
								<ul class="ul_list">
									<li>${data[2].goodsName}</li>
									<li>${data[2].goodsName}</li>
									<li>${data[2].goodsName}</li>
									<li>${data[2].goodsName}</li>
								</ul>
							</li>
							<li class="recoment_list">
								<h3>今日推荐品</h3>
								<dl class="dl">
									<dt>
										<img src="${data[0].goodsListImg}" />
									</dt>
									<dd>
										Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
									</dd>
								</dl>
								<dl class="dl">
									<dt>
										<img src="${data[0].goodsListImg}" />
									</dt>
									<dd>
										Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
									</dd>
								</dl>
								<dl class="dl">
									<dt>
										<img src="${data[0].goodsListImg}" />
									</dt>
									<dd>
										Moschino 莫斯奇诺小牛皮 女士迷你双肩包
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				`).mouseenter(()=>{
					$(".nav_com").css("display","block");
				}).mouseleave(()=>{
					$(".nav_com").css("display","none");
				})
				
			}
		})
		}
	});
	$(".logo_nav").load(`../utils/commonHtml/logo_nav.html`,function(response,status){
			if( status == "success"){
				getProductServices().then( data=>{
				//console.log(response);
				for(var i=0;i<data.length;i++){
					$(".recent").append(`
						<div class="recent_product nav_com">
							<ul class="ul_recent">
								<li class="line_list">
									<h3>${data[0].className}</h3>
									<h3>${data[0].className}</h3>
									<h3>${data[0].className}</h3>
								</li>
								<li class="man_list">
									<h3>男仕Man</h3>
									<ul class="ul_list">
										<li>${data[1].goodsName}</li>
										<li>${data[1].goodsName}</li>
										<li>${data[1].goodsName}</li>
										<li>${data[1].goodsName}</li>
									</ul>
								</li>
								<li class="woman_list">
									<h3>女士Woman</h3>
									<ul class="ul_list">
										<li>${data[2].goodsName}</li>
										<li>${data[2].goodsName}</li>
										<li>${data[2].goodsName}</li>
										<li>${data[2].goodsName}</li>
									</ul>
								</li>
								<li class="recoment_list">
									<h3>今日推荐品</h3>
									<dl class="dl">
										<dt>
											<img src="${data[0].goodsListImg}" />
										</dt>
										<dd>
											Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
										</dd>
									</dl>
									<dl class="dl">
										<dt>
											<img src="${data[0].goodsListImg}" />
										</dt>
										<dd>
											Moschino 莫斯奇诺小牛皮<br/> 女士迷你双肩包
										</dd>
									</dl>
									<dl class="dl">
										<dt>
											<img src="${data[0].goodsListImg}" />
										</dt>
										<dd>
											Moschino 莫斯奇诺小牛皮 女士迷你双肩包
										</dd>
									</dl>
								</li>
							</ul>
						</div>
					`).mouseenter(()=>{
						$(".nav_com").css("display","block");
					}).mouseleave(()=>{
						$(".nav_com").css("display","none");
					})
					
				}
			})
			}
		});
	}
function specialLoad(){
	$(".special").load(`./utils/commonHtml/special.html`,()=>{
		getJsonImage();
	})
}
function getJsonImage(){
	getJson("../src/json/special.json").then( (data)=>{
		//console.log("===getJson===",data);
		$(".getJsonImage").attr("src",data[0].url);
		$(".getJsonImage2").attr("src",data[1].url);
		$(".getJsonImage3").attr("src",data[2].url);
		$(".getJsonImage4").attr("src",data[3].url);
		$(".getJsonImage5").attr("src",data[4].url);
	})
}
function specialTopLoad(){
	$(".fashion_recommend").load(`./utils/commonHtml/specialTop.html`);
}
function footerLoad(){
	$("#footer").load(`./utils/commonHtml/footer.html`);
	$("#footer").load(`../utils/commonHtml/footer.html`);
}
// function goodListLoad(){
// 	$(".list_dl0").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl1").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl2").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl3").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl4").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl5").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl6").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl7").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl8").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl9").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl10").load(`../utils/commonHtml/good_list.html`);
// 	$(".list_dl11").load(`../utils/commonHtml/good_list.html`);
// }
function goodListLoad(){
	//console.log("getProductServices()",getProductServices());
	//getProductServices()???
	getProductServices().then( (data)=>{
		console.log("data.length===",data);
		//$('<div class="good_list"></div>').appendTo($(".page_goods"));
		//$('<dl class="list_dl"></dl>').appendTo($(".good_list"));
		//$('<dt></dt>').appendTo($(".list_dl"));
		//$('<img class="list_img" />').appendTo($("dt"));
		//$(".list_img").attr("src",data[0].goodsListImg)
		//$('<dd class="prada"></dd>').appendTo($(".list_dl"));
		//$('<b class="prada_text"></b>').appendTo($(".prada"));
		//$(".parda_text").text(data[0][7]);
		//$('<p class="p_text fontSize"></p>').appendTo($(".prada"));
		//$('.p_text').text(data[0].goodsName);
		//$('<dd class="list_price space_between"></dd>').appendTo($(".list_dl"));
		//$('<a class="fontSize list_a1"></a>').appendTo($(".list_price"));
		//$('<span class="a1_span1"></span>').appendTo($(".list_a1"));
		//$(".a1_span1").text("￥");
		//$('<span class="a1_span2"></span>').appendTo($(".list_a1"));
		//$(".a1_span2").text(data[0].price);
		//$('<a class="fontSize list_a2"></a>').appendTo($(".list_price"));
		//$('<span class="a2_span1"></span>').appendTo($(".list_a2"));
		//$(".a2_span1").text("￥");
		//$('<span class="a2_span2"></span>').appendTo($(".list_a2"));
		//$(".a2_span2").text(data[0].price);
			// $(".list_img").attr("src",data[0].goodsListImg)
			// $(".parda_text").text(data[0][7]);
			// $('.p_text').text(data[0].goodsName);
			// $(".a1_span1").text("￥");
			// $(".a1_span2").text(data[0].price);
			// $(".a2_span1").text("￥");
			// $(".a2_span2").text(data[0].price);
		// for(let i=0;i<data.length;i++){
		// 	//console.log(i);
		// 	$(".list_img").attr("src",data[i].goodsListImg)
		// 	$(".parda_text").text(data[i][7]);
		// 	$('.p_text').text(data[i].goodsName);
		// 	$(".a1_span1").text("￥");
		// 	$(".a1_span2").text(data[i].price);
		// 	$(".a2_span1").text("￥");
		// 	$(".a2_span2").text(data[i].price);
		// }
		
		//清空数据
		$(".good_list").html("");
		//创建data.length个模板,这里有10个模板
		for(let i = 0; i < data.length; i++){
			$(".good_list").append('<dl class="list_dl"><dl>');
		}
		//加载模板内容
		//这里要注意文件的路径，是相对recent.html而言的
		$(".list_dl").load(`../utils/commonHtml/good_list.html`,function(){
			//调用函数，处理得到的数据
			dealGetData();
		});
		function dealGetData(){
			for(let i=0; i< data.length; i++){
				$(".list_img:eq("+i+")").attr("src",data[i].goodsListImg)
				$(".parda_text").eq(i).text(data[i][7]);
				$('.p_text').eq(i).text(data[i].goodsName);
				$(".a1_span1").eq(i).text("￥");
				$(".a1_span2").eq(i).text(data[i].price);
				$(".a2_span1").eq(i).text("￥");
				$(".a2_span2").eq(i).text(data[i].price);
			}
		}
	})
}
//抛出这个函数
export {
	topLoad,
	headerLoad,
	logoNavLoad,
	specialLoad,
	specialTopLoad,
	footerLoad,
	goodListLoad,
}