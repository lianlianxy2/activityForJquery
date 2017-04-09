$.fn.extend({
	rotate_ctrl:function(options){
		var _this	=	this;
		var rotate_root;
		var bRotate = false;
		
		_this.init=function(options){
				console.log(options.width);
				var html =	'<div id="canvas" style="width:'+options.width+'px;left: '+options.left+'px; top: '+options.top+'px; opacity: '+options.opacity+';">'+
							'<div class="zg_opera"><div class="zg_close"></div><div class="zg_unlock"></div><div class="zg_uplayer"></div><div class="zg_downlayer"></div></div>'+
							'<div class="tableBox">'+
					   '<div class="point">我的积分：<span id="jifentotal">0</span></div>'+
						'<!--大转盘-->'+
						'<div class="turntable-bg">'+
						'<div class="pointer"></div>'+
						'<div class="rotate">'+
						'<img id="rotate" src="http://www.webedit.cm/assets/images/zp.png" alt="turntable"/>'+
						'</div>'+
						'</div>'+
						'<!--跑马灯-->'+
						'<div class="t-txt">'+
						'<div id="FontScroll" class="clearfloat">'+
						'<div id="x1" class="xMarquee">'+
						'<ol>'+
						'<li>恭喜 <font>sarah_TT</font>获得 <span>面包机0元购；</span></li>'+
						'<li>恭喜 <font>cookrain</font>获得 <span>2000积分；</span></li>'+
						'</ol>'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<!--活动规则-->'+
						'<div class="rule">'+
						'<p>活动规则：4月2日-4月4日：每人50积分抽一次，</p>'+
						'<p>每天限抽5次，活动期间，每在线支付完成1次订购，</p>'+
						'<p>即可额外增加1次大转盘抽奖机会，上不封顶；</p>'+
						'</div>'+
						'</div>'+
						'</div>';
				//console.log(html);
				$("#w990 #wrapper .main-wrap").append(html);
				$('.pointer').click(function (){
					console.log("大转盘游戏开始");
					$('.rotate').addClass("tableRotate");
				});
				_this.showProperty();
		}
		
		//显示相关属性
		_this.showProperty = function(){
			$(".tableBox").on('click',function(){
				$("#J_addImg_attrib").show();
			})
		}
		
		_this.rotateTimeOut = function (){
			
			$('#rotate').rotate({
				angle:0,
				animateTo:2160,
				duration:8000,
				callback:function (){
					alert('网络超时，请检查您的网络设置！');
				}
			});	
		};
		
		var rotateFn = function (awards, angles, txt){
			bRotate = !bRotate;
			$('#rotate').stopRotate();
			$('#rotate').rotate({
				angle:0,
				animateTo:angles+1800,
				duration:8000,
				callback:function (){
					if(awards==2||awards==7){
						$(".popInfo").show();
					}
					alert(txt);
					bRotate = !bRotate;
				}
			})
		};
		
		var switchRotateFn=function(){
			if(bRotate)return;
			  var item = rnd(0,8);
	
			  switch (item) {
				  case 0:
					  rotateFn(0, 20, '5元零门槛券');
					  break;
				  case 1:
					  rotateFn(1, 60, '100积分');
					  break;
				  case 2:
					  rotateFn(2, 100, '双立人炒锅');
					  break;
				  case 3:
					  rotateFn(3, 140, '15元优惠券');
					  break;
				  case 4:
					  rotateFn(4, 180, '30元优惠券');
					  break;
				  case 5:
					  rotateFn(5, 220, '50元优惠券');
					  break;
				  case 6:
					  rotateFn(6, 260, '35积分');
					  break;
				  case 7:
					  rotateFn(7, 300, '环保购物袋');
					  break;
				  case 8:
					  rotateFn(8, 340, '谢谢参与');
					  break;
				  
			  }
			  console.log(item);
		}
		
		$('.rotate').click(function (){
			$('.rotate').removeClass("tableRotate");
			switchRotateFn();
		})
		
		
		
		
		_this.init(options);
		
	}
})