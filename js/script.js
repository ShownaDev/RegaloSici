$( document ).ready(function() {
    let scenario_number = 1;

    const scenario_titles = 
    [
    	"Bienvenida",
    	"¿Lista?",
    	"Salón de la trivia",
    	"Trivia 1", "Trivia 2", "Trivia 3", "Trivia 4",
    	"Salón de la música", "Kpop", "Albúm recuerdo", "Canción recuerdo", 
    	"Camila Cabello", "Escritos para ti", "¿Que implica querer?", "¿Por que a ti?",
    	"Todo es mas lindo", "Adversidades", "Experiencias hermosas", "Final"
    ]

    if(scenario_number == 1){
    	$("#scenario_1").css("display", "flex");
    	$("#header_title").html("");
    	$("#header_title").html(scenario_titles[scenario_number - 1]);
    	//$("#scenario_1").fadeTo(2000, "swing", function(){});
    }

    $(".button_scenario_next").click(function(){
    	scenario_number++;
    	$("#scenario_" + scenario_number).css("display", "flex");
    	$("#scenario_" + (scenario_number - 1)).css("display", "none");
    	$("#header_title").html("");
    	$("#header_title").html(scenario_titles[scenario_number - 1]);
    });

    //Trivia
    $('.pregunta').click(function(){
    	if($(this).attr("valor") == "1"){
    		$('.scenario_popup_container').css("display", "flex");
    		var image_result = '<img src="./img/chulo_verde.png" style="max-width: 50px"><p class="success_ask">¡Acertaste!</p>' +
    		'<p class="classic_text">'+ $(this).attr("mensaje") +'</p><button class="boton_siguiente_trivia">Siguiente trivia</button>';
    		$('.scenario_popup').append(image_result);

    	} else {
    		$('.scenario_popup_container').css("display", "flex");
    		var image_result = '<img src="./img/equis.png" style="max-width: 50px"><p class="fail_ask">Fallaste XD</p>' +
    		'<p class="classic_text">'+ $(this).attr("mensaje") +'</p><button class="boton_siguiente_trivia">Siguiente trivia</button>';
    		$('.scenario_popup').append(image_result);

    	}
    });

    $('.scenario_popup').on('click', '.boton_siguiente_trivia', function(){
    	$('.scenario_popup').empty();
    	$('.scenario_popup_container').css("display", "none");
    	scenario_number++;
    	$("#scenario_" + scenario_number).css("display", "flex");
    	$("#scenario_" + (scenario_number - 1)).css("display", "none");
    	$("#header_title").html("");
    	$("#header_title").html(scenario_titles[scenario_number - 1]);
    });

    //WHY BUTTON
    $('.why_button').click(function(){
    	$('.scenario_popup_container').css("display", "flex");
    	var reason_text = '';

    	switch($(this).attr("cancion")){
    		case "1":
    			reason_text = '<p class="classic_text">Fue la primer canción que te dediqué y la que mas me ' + 
    			'recuerda a ti en general, porque me haces sentir especial, siempre.</p>';
				break;
			case "2":
				reason_text = '<p class="classic_text">Los conocí por ti y por esa misma razón me recuerdan a ' + 
    			'ti, su canción más icónica para mi es esta, Red.</p>';
    			break;
    		case "3":
    			reason_text = '<p class="classic_text">Mi canción favorita de Red Velvet, escucharla es pensar ' + 
    			'acerca del amor, justo lo que  siento por ti.</p>';
    			break;
    		case "4":
    			reason_text = '<p class="classic_text">Me pasa igual que con Red, es una canción que me recuerda ' + 
    			'a ti, porque me mencionaste que te hace feliz y me encanta verte así.</p>';
    			break;
    		case "5":
    			reason_text = '<p class="classic_text">Una sencilla frase que me dijiste y me hizo sentir feliz, ' + 
    			'"Me haces sentir como Easy de Camila".</p>';
    			break;
    		case "6":
    			reason_text = '<p class="classic_text">Mi canción favorita de Camila y la que mas tengo en mi ' + 
    			'corazón, así como a ti.</p>';
    			break;
    		
    		case "7":
    			reason_text = '<p class="classic_text">"There is God in every move, ooh" <br>' + 
    			'"And you are the living proof (oh)".</p>';
    			break;
    		case "8":
    			reason_text = '<p class="classic_text">"No, I never liked windy cities <br>' + 
    			'"But I think maybe when you are with me" <br> "I like everywhere".</p>';
    			break;
    	}

    	reason_text += '<button class="cerrar_popup">Cerrar<button>';

    	$('.scenario_popup').append(reason_text);
    });

    //Cerrar popup
    $('.scenario_popup').on('click', '.cerrar_popup', function(){
    	$('.scenario_popup').empty();
    	$('.scenario_popup_container').css("display", "none");
    });
});