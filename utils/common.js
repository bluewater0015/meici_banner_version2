import getProductServices from "../services/webServices";
import { getJson } from "../services/baseServices";
function headerLoad(){
	$("#header").load("./utils/commonHtml/header.html");
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
}
function specialLoad(){
	$(".special").load(`./utils/commonHtml/special.html`,()=>{
		getJsonImage();
	})
}
function getJsonImage(){
	getJson("../src/json/special.json").then( (data)=>{
		console.log("=data=",data);
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
}
//抛出这个函数
export {
	headerLoad,
	logoNavLoad,
	specialLoad,
	specialTopLoad,
	footerLoad,
}