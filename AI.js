/*AI ChatBot by GITSALAH

Here is a real AI chatbot where you can train the bot yourself! Talk to it and decide wether or not its response is good!

I have already given it some training data to start with.

I hope you like it!

*/
alert("AI Chat Bot By GITSALAH");
alert("click yes or No if you are satisfied with your answer");
alert("Train Your AI");
window.addEventListener('load', function () {

	var chat = document.getElementById("chatButton");
	var no = document.getElementById("noButton");
	var yes = document.getElementById("yesButton");
	var txt = document.getElementById("textBox");
	var confirm = document.getElementById("confirmation");
	var help = document.getElementById("helpBox");
	var helpBtn = document.getElementById("helpButton");
	var trainingArea = document.getElementById("trainArea");
	var botTalk = ["Hello! I hope you have a good day!", "I am fine, thanks!", "I am GITBOT, but my creators name is GITSALAH!", "23", "I was created in july, 2020.", "I am not human, I am a Humanrobot LOL."];
	var divArr = [];
	var delayVar = 0;

	function newDiv(COLOR, TEXT) {
		var newdiv = document.createElement("div");

		newdiv.style.width = "90%";
		newdiv.style.height = "10%";
		newdiv.style.background = COLOR;
		if (COLOR == "green") {
			newdiv.style.left = "53%";
		} else {
			newdiv.style.left = "47%";
		}
		newdiv.style.bottom = "15%";
		newdiv.style.position = "fixed";
		newdiv.style.borderRadius = "10px";
		newdiv.style.transform = "translate(-50%,0)";
		newdiv.style.paddingLeft = "10px";
		newdiv.style.paddingTop = "5px";
		newdiv.style.fontFamily = "	Verdana, Times, serif";
		newdiv.innerHTML = TEXT;
		newdiv.style.border = "1px solid black";
		newdiv.style.color = "white";
		document.body.appendChild(newdiv);

		divArr.push(newdiv);

		for (y = 0; y < divArr.length - 1; y++) {
			if (divArr[y].style.bottom == "15%") {
				divArr[y].style.bottom = "28%";
			} else if (divArr[y].style.bottom == "28%") {
				divArr[y].style.bottom = "41%";
			} else if (divArr[y].style.bottom == "41%") {
				divArr[y].style.bottom = "54%";
			} else if (divArr[y].style.bottom == "54%") {
				divArr[y].style.bottom = "67%";
			} else if (divArr[y].style.bottom == "67%") {
				divArr[y].style.bottom = "80%";
			} else if (divArr[y].style.bottom == "80%") {
				divArr[y].style.bottom = "93%";
			} else if (divArr[y].style.bottom == "93%") {
				divArr[y].style.bottom = "106%";
			} else if (divArr[y].style.bottom == "106%") {
				divArr[y].style.display = "none";
			}
		}


	}

});
//***********Machine learning**************
//to be continued tomorrow 