$.extend({
	apply:function(obj,params){			
		$("input[name=preview]").on("click",function(){
			width = $("input[name='width']").val();
			opacity=$("input[name='opacity']").val();
			data = {width:width,opacity:opacity};
			console.log(data);
			//alert(data);
			$("#canvas").css(data);
		});
	},	
	loadata:function(){
		
		$("input[name=btncopy]").unbind('click').click(function(){
			var gameid = $("input[name=hotid]").val();
			console.log(gameid)
			$.ajax({
				url:'http://www.webedit.cm/getData.php',
				type:'get',
				data:{id:gameid},
				dataType: 'json',
				success:function(data){
					console.log(data);
					$.each(data,function(i,d){
						$("input[name=facade]").eq(i).val('概率：'+d[2]+'奖品名称：'+d[3])
					})
				}				
			})			
		})		
	}
	
})