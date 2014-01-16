	$(function(){
			var BOX_NUM = 20;
			var BOX_SIZE = 10;
			var box_list = [];
			var deg = 0;
			
		
			var stepDeg = 360 / BOX_NUM * 2;
			
			
			function create(){
				
				$('<center>');
				for(var i = 0; i < BOX_NUM; i++){
					var box = $('<div>');
					box.css({
						width : BOX_SIZE, height : BOX_SIZE, backgroundColor : 'blue', 
						position : 'absolute'
					});
					$('body').append(box);
					
								box_list.push(box);
				}
				$('</center>');
			}
			

			function update(){
			
				var stageWidth = $(window).width();
				var stageHeight = $(window).height();
				
				
				var top = (stageHeight-BOX_SIZE) >> 1;
				
				var stepWidth = stageWidth / BOX_NUM;
				var stepH = stageHeight / BOX_NUM;
				
				
				for(var i = 0, len = box_list.length; i < len; i++){
					
					var tmpRad = Math.PI / 180 * (deg + stepDeg * i)
					box_list[i].css({
						
						top : stepH * i + (stepH>>1),
						
						
						left: top + Math.sin(tmpRad) * 100
						
					});
				}
			}
			
	
			function wave(){
						deg += 4;
							update();
			}
			
				create();
			
			setInterval(wave, 10);
			
				$(window).on({
				resize : function(){
					update();
				}
			});
		});
		
		$(function(){
			var BOX_NUM = 40;
			var BOX_SIZE = 10;
			var box_list = [];
			var deg = 0;
			
		
			var stepDeg = 360 / BOX_NUM * 2;
			
			
			function create(){
				
				$('<center>');
				for(var i = 0; i < BOX_NUM; i++){
					var box = $('<div>');
					box.css({
						width : BOX_SIZE, height : BOX_SIZE, backgroundColor : 'RED', 
						position : 'absolute'
					});
					$('body').append(box);
					
								box_list.push(box);
				}
				$('</center>');
			}
			

			function update(){
			
				var stageWidth = $(window).width();
				var stageHeight = $(window).height();
				
				
				var top = (stageHeight-BOX_SIZE) >> 1;
				
				var stepWidth = stageWidth / BOX_NUM;
				var stepH = stageHeight / BOX_NUM;
				
				
				for(var i = 0, len = box_list.length; i < len; i++){
					
					var tmpRad = Math.PI / 180 * (deg + stepDeg * i)
					box_list[i].css({
						
						top : stepH * i + (stepH>>1),
						
						
						left: top + Math.sin(tmpRad) * 100
						
					});
				}
			}
			
	
			function wave(){
						deg += 4;
							update();
			}
			
				create();
			
			setInterval(wave, 10);
			
				$(window).on({
				resize : function(){
					update();
				}
			});
		});
		