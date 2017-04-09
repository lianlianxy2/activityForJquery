require.config({
	baseUrl: "/assets/js/controls",
　　paths: {
　　　　"jquery"		:"/assets/js/jquery/jquery1.12.4.min",
		"jqueryui"		:"/assets/js/jquery/jqueryui",
		"awardRotate"	:"/assets/js/jquery/awardRotate"
　　},
	shim: {
		'menu_ctrl':['jquery','jqueryui'],
		'main_ctrl':['jquery','jqueryui'],
		'game_common':['jquery','jqueryui'],
		'rotate_ctrl':['jquery','jqueryui','awardRotate']
	}
});

window.onload=function(){
	require(['jquery','jqueryui','main_ctrl','menu_ctrl','rotate_ctrl','game_common'],function($){	
		$.main_ctrl();
	})
}
