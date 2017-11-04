var tableBombIt =	[
						' ',
						'*',
						'1',
						' ',
						'/n',
						' ',
						' ',
						'*',
						'2',
						'/n',
						'1',
						'*',
						' ',
						' ',
						'/n',
						' ',
						'3',
						'*',
						' ',
					];

var containerBombIt = document.getElementById('container-bomb-it');
var bombIt = document.getElementById('bomb-it');

var drawGameZone = function(array){
	for (var i = 0; i < tableBombIt.length; i++) {
		var cell = document.createElement('div');
		var enter = document.createElement('br');

		if (array[i] == '1' || array[i] == '2' || array[i] == '3'){
			cell.className = 'number';
			cell.innerText = array[i];
			cell.onclick = showNumber;
		}else if (array[i] == ' ') {
			cell.className = 'emptySpace';
			cell.onclick = changeColor;
		}else if (array[i] == '*') {
			cell.className == 'bomb';
			cell.onclick = boom;
		}else if(array[i] == '/n') {
			bombIt.appendChild(enter);
			continue;
		}
		bombIt.appendChild(cell);
	}
	addButtonRestart(); 
};

var showNumber = function(){
	this.className = 'number numberShow';
};

var changeColor = function(){
	this.style.backgroundColor = '#000';
};

var boom = function(){
	containerBombIt.removeChild(bombIt);
	containerBombIt.innerHTML = '<img src="assets/img/Bomba-Explotando-56842.gif" alt="">';
	addButtonRestart(); 
};

var addButtonRestart = function(){
	var buttonRestart = document.createElement('button');
	buttonRestart.innerText = 'Restart!!';
	buttonRestart.addEventListener('click', reStart);
	containerBombIt.appendChild(buttonRestart);
}


var reStart = function(){
	location.reload();
}

drawGameZone(tableBombIt);


