$(document).ready(function() {
	var kilogram = $("#kilograms").val();
	var pound = $("#pounds").val();
	
	$("#submit").click(function() {
		var weight,check;
		weight = getValue(weight);
		//weight = convertToKilograms(weight);
		//weight = convertToPounds(weight);
		check = checked(kilogram,pound);

		if(check == "Kilograms") {
			weight = convertToKilograms(weight);
			$("p span").text(weight + " kg");
			//console.log(weight + " kg");
			//console.log("Here is Kilograms");
		} else {
			weight = convertToPounds(weight);
			$("p span").text(weight + " lbs");
			//console.log(weight + " lbs");
			//console.log("Here is Pounds");
		}
	});

	$("#reset").click(function(){
		$("p span").text("");
	});

	/*Section for Functions*/

	/*This function lets get the value of the weight
	that was entered in the input box*/
	function getValue(value) {
		var value = $("#weight").val();
		console.log(value);
		return value;
	}

	/*This functions will convert pounds into
	Kilograms. Requires a parameter*/
	function convertToKilograms(pound) {
		//Formula - lbs / 2.2 = kilograms
		var pound = pound / 2.2;
		pound = Math.ceil(pound * 10) / 10;
		return pound;
	}

	/*This function will convert kilograms into
	pounds. Requires a parameter*/
	function convertToPounds(kilogram) {
		//Formula - kg x  2.2 = pounds
		var kilogram = kilogram * 2.2;
		kilogram = Math.ceil(kilogram * 10) / 10;
		return kilogram;
	}

	/*This function will check to see if radio button
	kilogram or pound is clicked on*/
	function checked(kilogram,pound) {
		var pound,kilograms;
		kilogram = $("#kilograms").val();
		if(document.getElementById("kilograms").checked) {
			console.log(kilogram);
			return kilogram;
		} else {
			pound = $("#pounds").val();
			console.log(pound);
			return pound;
		}
	}
});