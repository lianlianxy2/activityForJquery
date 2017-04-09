require.config({
	baseUrl: "/activityForJquery/assets/js/controls",
　　paths: {
　　　　"jquery"		:"/activityForJquery/assets/js/jquery/jquery1.12.4.min",
		"jqueryui"		:"/activityForJquery/assets/js/jquery/jqueryui",
		"awardRotate"	:"/activityForJquery/assets/js/jquery/awardRotate"
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
		console.log('test');
		$.main_ctrl();
	})
}
