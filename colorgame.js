var numSquare=6;
var colors = generateRandomColors(numSquare);
var squares=document.querySelectorAll(".squares");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBut=document.querySelector("#reset");
//var easy=document.querySelector("#easy");
//var hard=document.querySelector("#hard");
var modeBut=document.querySelectorAll(".mode");

for(var i=0;i<modeBut.length;i++)
{
	modeBut[i].addEventListener("click",function() {
		
		modeBut[0].classList.remove("selected");
		modeBut[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numSquare=3:numSquare=6;
		reset();

	});
}

function reset()
{
	 colors=generateRandomColors(numSquare);
	 pickedColor=pickColor();
	 colorDisplay.textContent=pickedColor;
	 h1.style.background="steelblue";
	 messageDisplay.textContent="";
	 for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
		
	}
	resetBut.textContent="New Colors";


};


/*easy.addEventListener("click",function () {
	
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquare=3;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}


});

hard.addEventListener("click",function () {
	
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare=6;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
	}
});*/


resetBut.addEventListener("click",function () {

	 reset();
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function () {
			
			//alert("ko");
			var clickedColor=this.style.background;

			//alert(pickedColor);
			//alert(clickedColor);
			if(clickedColor===pickedColor)
			{
				messageDisplay.textContent="Correct!!";
				changeColors(pickedColor);
				h1.style.background=pickedColor;
				resetBut.textContent="Play again?";
			}

			else{
				//alert(this.style.background);
				this.style.background= "#232323";
				messageDisplay.textContent="Try Again!";
			}


	});
}

function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}


	return arr;


}

function randomColor(){


	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}

