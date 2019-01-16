var fTocelsius = function(number1){
	return (number1 - 32) * (5/9);
};

var inTocm = function(number1) {
  return number1 * 2.54;
};

var qToliter = function(number1) {
  return number1 / 1.057;
};

var lbTokg = function(number1) {
  return number1 / 2.205;
};

$(document).ready(function() {
  $("form#fTocelsius").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#f1").val());
		var result = fTocelsius(number1);
    $("#outputf").text(result + " c");
  });

	$("form#inTocm").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#i1").val());
		var result = inTocm(number1);
		$("#outputi").text(result + " cm");
	});

	$("form#qToliter").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#q1").val());
		var result = qToliter(number1);
		$("#outputq").text(result + " liters");
	});

	$("form#lbTokg").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#l1").val());
		var result = lbTokg(number1);
		$("#outputl").text(result + " kg");
	});
});
