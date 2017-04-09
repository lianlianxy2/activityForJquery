$.extend({
	main_ctrl:function(options){
		var _this		=	this;
		var width		=	$(document).width();
		var height		=	$(document).height();
		var root_main	=	'<div id="w990"><div id="wrapper"><div class="main-wrap"></div></div></div>';
		_this.init=function(){     		
			//_this.addControl();
			//console.log('控制面板  '+width+'   '+height);
			if($("#w990").size()==0){
				$("body").append(root_main);
			}			
		}

		
		
		_this.addControl=function(control){
			if(control==null){
				console.log('空面板');
			}else{
				switch(control){
					case '头图':
					console.log(111);
					break;
					case '热区':
					console.log(222);
					break;
					case '导航条':
					console.log(333);
					break;
					case '大转盘':
					var conf = {width:375,height:'auto',left:0,top:100,opacity:1};
					$('#w990').rotate_ctrl(conf);					
					break;
				}
				//console.log(control);
			}
			//console.log(control);
		}
		_this.init();
		$('body').menu_ctrl();
		$.apply();
		$.loadata();
		return _this;
	}
});