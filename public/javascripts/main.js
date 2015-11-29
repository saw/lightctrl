(function() {

	var isOff = false;
	var interval;

	function xhr(uri) {
		var req = new XMLHttpRequest();
		req.open('POST', uri);
		req.send(null);
	}

	function sendColor(color) {
		xhr('/api/setcolor/' + color);
	}

	var slider = document.querySelector('form.colors');
	var off = document.getElementById('off');
	var wave = document.getElementById('wave');

	wave.onclick = function(e) {
		e.preventDefault();
		isOff = true;
		xhr('/api/colorwave');
	};

	off.onclick = function(e) {
		e.preventDefault();
		isOff = true;
		xhr('/api/off');
	};

	var r = document.getElementById('red');
	var g = document.getElementById('green');
	var b = document.getElementById('blue');
	var set = document.getElementById('set');
	var swatch = document.querySelector('.swatch');

	function updateColor() {
		isOff = false;
		var red = parseInt(r.value);
		var green = parseInt(g.value);
		var blue = parseInt(b.value);
		var s = set.value;
		// debugger;

		var color = '0' + blue.toString(16) + '0' + green.toString(16) + '0' + red.toString(16);
		swatch.style.background = '#' + red.toString(16) + red.toString(16) + green.toString(16) + green.toString(16) + blue.toString(16) + blue.toString(16);
		if(s === 'all') {
			sendColor(color);
		}  else {
			xhr('/api/setcolorset/' + parseInt(s).toString(16) + '/' + color);
		}
		
	}
	
	slider.addEventListener('mousedown', function() {
		updateColor();
		clearInterval(interval);
		interval = setInterval(function() {
			if(!isOff) {
				updateColor();
			}
		}, 150);

	});
	slider.addEventListener('mouseup', function() {
		updateColor();
		clearInterval(interval);
	});

	// document.addEventListener('mousemove', updateColor);

})();