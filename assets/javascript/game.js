$(document).ready(function() { 

	var wins = 0;
	var losses = 0;
	var userTotal = 0;
	var targetNumber = getRandomNumber(19, 120);
	var buttonNumbers = [];
	function resetGame() {
		userTotal = 0;
		$("#userTotal").text(userTotal).hide();
		for (var i = 0; i < 4; i++) {
			buttonNumbers[i] = getRandomNumber(1, 12);

			let buttonId = "#button-" + i; 

			$(buttonId).val(buttonNumbers[i]);	
		};
		targetNumber = getRandomNumber(19, 120);
		$("#targetNumber").html(targetNumber);
	}

	$('#userTotal').text(userTotal).hide();
	$("#targetNumber").html(targetNumber);

	function getRandomNumber(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	};	



	for (var i = 0; i < 4; i++) {
		buttonNumbers[i] = getRandomNumber(1, 12);

		let buttonId = "#button-" + i; 

		$(buttonId).val(buttonNumbers[i]);	
	};

	var clickHandler = function() {
		userTotal += Number($(this).val());
		$("#userTotal").text(userTotal).show();
		
		if (userTotal === targetNumber) {
			alert("YOU WIN");
			wins++;
			resetGame();
		}

		if (userTotal > targetNumber) {
			alert("YOU LOSE");
			losses++;
			resetGame();
		}
	};

	$("#button-0").on("click", clickHandler);
	$("#button-1").on("click", clickHandler);
	$("#button-2").on("click", clickHandler);
	$("#button-3").on("click", clickHandler);

});



