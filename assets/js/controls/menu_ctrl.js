$.fn.extend({
	menu_ctrl:function(options){
		var _this = this;
		var menu_root;
		var menu_div;
		var j_$	=	$;
		_this.init=function(){
			if($("#draggable").size()==0){
				var html	=	'<div id="draggable" class="wd300 ui-widget-content ujc_move ui-draggable ui-widget-content" ></div>';
				$('body').append(html);
				_this.getMenuList();
			}
			
			menu_root = j_$('#draggable');
		}

		_this.getMenuList=function(){
			$.ajax({
				url:'http://www.webedit.cm/menu.php',
				type:'get',
				dataType: 'json',
				success:function(data){
					_this.createMenu(data);
				}				
			})			
		}	
		
		_this.createMenu=function(data){			
			var	html		=	'<div class="ujc_tools_bd ujc_tools_bdy"><div class="zgc-widgets clearfix"><div class="attr-tle"><span>活动模块</span><div class="switch-bar ujc_tools_ss" id="J_upstate" style="display: block;"><span><i class="ujc_tools_open unfold"></i></span></div></div>';
			menu_div	=	'<ul class="clearfix">';
			j_$.each(data,function(i,d){				
				menu_div	+=	'<li class="J_hotArea">'+d+'</li>';		
			})
			html	+=	menu_div+'</ul>';	
			html	+=	'</div></div>';		
			j_$(html).appendTo(menu_root);			
			_this.enableClick();
		}
		
		_this.enableDrag=function(){
			$(menu_root).draggable();
		}	

		_this.enableClick=function(){
			j_$.each(menu_root.find('li'),function(i,d){
				$(d).on('click',function(){					
					new $.main_ctrl().addControl($(this).text());
				})
			})
		}

		
		_this.init();
		_this.enableDrag();
		
		//console.log('菜单组件');
		
	}
});
