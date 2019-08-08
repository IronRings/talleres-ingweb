var diasEnero = {"firstWeekDay": "tue", "days": 31}
var eventosEnero = [];
var diasFebrero = {"firstWeekDay": "fri", "days": 28}
var eventosFebrero = [];
var diasMarzo = {"firstWeekDay": "fri", "days": 31}
var eventosMarzo = [];
var diasAbril = {"firstWeekDay": "mon", "days": 30}
var eventosAbril = [];
var diasMayo = {"firstWeekDay": "wed", "days": 31}
var eventosMayo = [];
var diasJunio = {"firstWeekDay": "sat", "days": 30}
var eventosJunio = [];
var diasJulio = {"firstWeekDay": "mon", "days": 31}
var eventosJulio = [];
var diasAgosto = {"firstWeekDay": "thu", "days": 31}
var eventosAgosto = [];
var diasSeptiembre = {"firstWeekDay": "sun", "days": 30}
var eventosSeptiembre = [];
var diasOctubre = {"firstWeekDay": "tue", "days": 31}
var eventosOctubre = [];
var diasNoviembre = {"firstWeekDay": "fri", "days": 30}
var eventosNoviembre = [];
var diasDiciembre = {"firstWeekDay": "sun", "days": 31}
var eventosDiciembre = [];

function addEventToDay(month, day) {
    var eventText = window.prompt("Ingrese texto del evento: ");
	switch(parseInt(month)){
		case 0:eventosEnero[day] = eventText;
		case 1:eventosFebrero[day] = eventText;
		case 2:eventosMarzo[day] = eventText;
		case 3:eventosAbril[day] = eventText;
		case 4:eventosMayo[day] = eventText;
		case 5:eventosJunio[day] = eventText;
		case 6:eventosJulio[day] = eventText;
		case 7:eventosAgosto[day] = eventText;
		case 8:eventosSeptiembre[day] = eventText;
		case 9:eventosOctubre[day] = eventText;
		case 10:eventosNoviembre[day] = eventText;
		case 11:eventosDiciembre[day] = eventText;
    }
	
    renderSelectedMonth(month);
}
	
var Index = function (day) {
	if (day=="mon") {return 0;}
	if (day=="tue") {return 1;}
	if (day=="wed") {return 2;}
	if (day=="thu") {return 3;}
	if (day=="fri") {return 4;}
	if (day=="sat") {return 5;}
	if (day=="sun") {return 6;}
}

var getEventsMonth = function (month) {
	switch(parseInt(month)){
	case 0:return [eventosEnero, diasEnero];
	case 1:return [eventosFebrero, diasFebrero];
	case 2:return [eventosMarzo, diasMarzo];
	case 3:return [eventosAbril, diasAbril];
	case 4:return [eventosMayo, diasMayo];
	case 5:return [eventosJunio, diasJunio];
	case 6:return [eventosJulio, diasJulio];
	case 7:return [eventosAgosto, diasAgosto];
	case 8:return [eventosSemptiembre, diasSeptiembre];
	case 9:return [eventosOctubre, diasOctubre]; 
	case 10:return [eventosNoviembre, diasNoviembre];
	case 11:return [eventosDiciembre, diasDiciembre];
    }
}
	
	
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" ";
    dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += day;
	var eventosMes = getEventsMonth(month)[0];
    if(eventosMes[day]) {
		dayHTML += "<hr/>";
		dayHTML += eventosMes[day];
    }
    dayHTML += "</td>";
    return dayHTML;
}


function getHTMLForMonthTable(selectedMonth) {
	var monthInfo = getEventsMonth(selectedMonth);
	var weekDayIdx = Index(monthInfo[1].firstWeekDay);
    var newHTML = "";
    var newSemanaHTML = "";   
	for (var j=0 ; j < weekDayIdx ; j++) {
	 	newSemanaHTML += getHTMLForMonthDay(selectedMonth, " ");
	}
    for(var i = 1; i <= monthInfo[1].days; i++) {
		if(weekDayIdx == 0) {
	    	newSemanaHTML += "<tr>";
		}
		newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);
		if(weekDayIdx == 6 || (i + 1) > monthInfo[1].days) {
	    	newSemanaHTML += "</tr>";
	    	newHTML += newSemanaHTML;
	    	newSemanaHTML = "";
		}
		weekDayIdx = (weekDayIdx + 1) % 7;	
    }
    return newHTML;
}



function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return "Enero";
    case 1: return "Febrero";
    case 2: return "Marzo";
    case 3: return "Abril";
    case 4: return "Mayo";
    case 5: return "Junio";
    case 6: return "Julio";
    case 7: return "Agosto";
    case 8: return "Septiembre";
    case 9: return "Octubre";
    case 10: return "Noviembre";
    case 11: return "Diciembre";
    }
    throw new Error("No existe mes con indice: " + month);
}


function renderSelectedMonth(selectedMonth) {
    var monthName = getMonthName(selectedMonth);
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";
    newHTML += getHTMLForMonthTable(selectedMonth);
    newHTML += "</table>";
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}
