		setInterval(function(){
			var time = moment().format('MMMM Do YYYY, h:mm:ss a');
			$("#clock").html('')
		 $("#clock").append( `<h1> ${time} </h1>`) }, 10);

		//
		$("#mlk").click(function(){
         alert("WELCOME TO RBK");
               });

		// //
         $(document).ready(function(){
         $('#rbk').click(function(){
        $('#sound_tag')[0].play();})

    })

  var image1 = '<img id="image" src="https://media.giphy.com/media/h2ZVjT3kt193cxnwm1/giphy.gif" alt="rbk">';
  var image2 = '<img id="image" src="https://i.pinimg.com/originals/2e/ef/7f/2eef7fcb4b9af1bd6d9c997f33de5352.jpg" alt="rbk">';
  var image3 = '<img id="image" src="https://media.giphy.com/media/105D9aefNvprfG/giphy.gif" alt="rbk">';
  var image4 = '<img id="image" src="https://i.imgflip.com/3a67p6.jpg" alt="rbk">'
  var image5 = '<img id="image" src="https://media.giphy.com/media/xT5LMXj1ORMcLu3VtK/giphy.gif" alt="rbk">'
  var image6 = '<img id="image" src="https://media.giphy.com/media/l378BaFZ8AUJ20NvW/giphy.gif" alt="rbk">'
  var image7 = '<img id="image" src="https://media.giphy.com/media/D0EjguuQzYr9m/giphy.gif" alt="rbk">'



    $(document).ready(function(){ 
    	var morning = 9;
    	var lunch = 12;
    	var evening = 14;
    	var med = 5
    	var talk = 13
    	var hack = 15
    	var hackM = 10



        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
  
        var curTime = hours + ':' + minutes + ':' + seconds; 

        if(hours <= morning){
            $('#test').append(image1);}
         //else if(hours <= morning ){
        // 	$('#test').append(image2);}
        else if(hours >= evening){
        	$('#test').append(image7);
        }else if(hours >= talk){
        	$('#test').append(image5);
        }else if(hours <= hack){
        	$('#test').append(image6);
        }else if(hours >= lunch){
        	$('#test').append(image2);
        }else if(hours > hackM){
        	$('#test').append(image3);
        // }else if(hours <= med){
        // 	$('#test').append(image7);
        // }
        
}
     });
