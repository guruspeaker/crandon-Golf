/*
    Programmer: Paul Christian


*/

		
		var hole = document.getElementById("hole");
		var par = document.getElementById("par");
		
		var p1_name = document.getElementById("p1_name");
		var p1_score = document.getElementById("p1_score");
		var p1_front = document.getElementById("p1_front");
		var p1_back = document.getElementById("p1_back");
		var p1_total = document.getElementById("p1_total");
	
		var p2_name = document.getElementById("p2_name");
		var p2_score = document.getElementById("p2_score");
		var p2_front = document.getElementById("p2_front");
		var p2_back = document.getElementById("p2_back");
		var p2_total = document.getElementById("p2_total");
		
		var p3_name = document.getElementById("p3_name");
		var p3_score = document.getElementById("p3_score");
		var p3_front = document.getElementById("p3_front");
		var p3_back = document.getElementById("p3_back");
		var p3_total = document.getElementById("p3_total");
		
		var p4_name = document.getElementById("p4_name");
		var p4_score = document.getElementById("p4_score");
		var p4_front = document.getElementById("p4_front");
		var p4_back = document.getElementById("p4_back");
		var p4_total = document.getElementById("p4_total");
		
		var p1h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var p2h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var p3h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var p4h = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		
		var pars = [5,4,3,5,4,3,4,3,4,5,4,3,4,5,4,4,3,5];
		var worst = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		
		
		// init worst
		for (var i = 0; i < 17; i++)
		{
			if (pars[i]==5)
			{
			worst[i].value = 8;
			}
			else
			{
			worst[i].value = 7;
			}
		}
			
function downhole()
{
	var h = hole;
	if (h > 1)
	{
		hole -=  1;
		udpateDisplay();
	}
}
function uphole()
{
	var h = hole;
	if (h < 19)
	{
		hole += 1;
		hole.value = hole;
		udpateDisplay();
	}
}
function updateDisplay()
{
		par.value = pars[hole.vale-1];
		p1_score.value = p1h[hole.value-1];
		p2_score.value = p2h[hole.value-1];
		p3_score.value = p3h[hole.value-1];
		p4_score.value = p4h[hole.value-1];
		updateFronts();
		updateBacks();
}
function updateFronts()
{
	var p1fx = 0;
	var p2fx = 0;
	var p3fx = 0;
	var p4fx = 0;
		for (var j = 0;j<9;j++)
		{
			p1fx = p1fx + p1h[i];
			p2fx = p2fx + p2h[i];
			p3fx = p3fx + p3h[i];
			p4fx = p4fx + p4h[i];
		}
	p1_front.value = p1fx;
	p2_front.value = p2fx;
	p3_front.value = p3fx;
	p4_front.value = p4fx;
}
		
function updateBacks()
{
	var p1bx = 0;
	var p2bx = 0;
	var p3bx = 0;
	var p4bx = 0;
		for (var j = 10;j<18;j++)
		{
			p1bx = p1bx + p1h[i];
			p2bx = p2bx + p2h[i];
			p3bx = p3bx + p3h[i];
			p4bx = p4bx + p4h[i];
		}
	p1_back.value = p1bx;
	p2_back.value = p2bx;
	p3_back.value = p3bx;
	p4_back.value = p4bx;
}
