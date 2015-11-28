(function() {


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
		xhr('/api/colorwave');
	};

	off.onclick = function(e) {
		e.preventDefault();
		xhr('/api/off');
	}

	var r = document.getElementById('red');
	var g = document.getElementById('green');
	var b = document.getElementById('blue');
	
	slider.addEventListener('mouseup', function(e) {
		var red = parseInt(r.value);
		var green = parseInt(g.value);
		var blue = parseInt(b.value);

		var color = '0' + blue.toString(16) + '0' + green.toString(16) + '0' + red.toString(16);
		sendColor(color);
	});

})();