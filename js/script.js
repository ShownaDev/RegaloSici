$( document ).ready(function() {
    let scenario_number = 1;

    const scenario_titles = 
    [
    	"Bienvenida"
    ]

    if(scenario_number == 1){
    	console.log("Hola")
    	$("#scenario_1").css("display", "flex");
    	$("#header_title").html("");
    	$("#header_title").html(scenario_titles[scenario_number - 1]);
    	//$("#scenario_1").fadeTo(2000, "swing", function(){});
    }

    $(".button_scenario_next").click(function(){
    	scenario_number++;
    	$("#scenario_" + scenario_number).css("display", "flex");
    	$("#scenario_" + (scenario_number - 1)).css("display", "none");
    });
});