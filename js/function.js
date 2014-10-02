var connect = true;
var hall;
var token;
var page = '';
var game = '0';

function number_format(number, decimals, dec_point, thousands_sep) {
	number = (number + '')
	.replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
	prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	s = '',
	toFixedFix = function(n, prec) {
		var k = Math.pow(10, prec);
		return '' + (Math.round(n * k) / k)
		.toFixed(prec);
	};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
	.split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '')
		.length < prec) {
		s[1] = s[1] || '';
	s[1] += new Array(prec - s[1].length + 1)
	.join('0');
		}
		return s.join(dec);
}

function checkConnection() {
	if (navigator.connection) {
		var networkState = navigator.connection.type;
		if (networkState == Connection.NONE) {
			return false;
		}	
	}

	return true;
}

function checkAuth() {
	hall  = localStorage.getItem("hall");
	token = localStorage.getItem("token");
	
	if (hall && token) {
		return true;
	} else {
		return false;
	}
}

function logout() {
	localStorage.removeItem("hall");
	localStorage.removeItem("token");
	window.location.replace("index.html"); 
}

function app() 
{
	var ref = window.open('https://itunes.apple.com/ru/app/bingo-boom/id731852567?mt=8&uo=4', '_system');
}

function link(url)
{
	var ref = window.open(url, '_system');
}

monthName = (
	function() {
		var months = "январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь".split(",");
		return function(num) {
			num = +num;
			--num;
			if(isNaN(num) || num <= 0 || num >= 12 ) return "---";
			 return months[num];
		}
	}
)();


$(document).ready(function(){
	/*	connect = checkConnection();
	 i f (connect *== false) { $('#model_error').modal('show'); }
	 */
	if (!checkAuth()) {
		window.location.replace("index.html");
	} else {
		$("#hall").text(hall);
	}
	
	$('nav#menu').mmenu({
		zposition: "front"
	});
	
	FastClick.attach(document.body);
	
});


/*window.addEventListener('load', function () {
 i f (checkCo*nnection() == false) { $('#model_error').modal('show'); }
 FastClick.attach(document.body);
 }, false);*/