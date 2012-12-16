hbSetup = function() {
	state = {
		interval: 1000 / 20, // 20 frames per second
		keyboard: new Keyboard()
	};

	state.canvas = document.getElementById('hbgame');
	state.context = state.canvas.getContext('2d');

	state.responder = new InputResponder(state.keyboard);
	state.responder.onKey(37, function() {
		state.black = true;
	});

	var stepStub = function() { step(state); };
	setInterval(stepStub, state.interval);
}

step = function(state) {
	state.context.save();

	state.context.fillStyle = (state.black) ? "orange" : "black";
	state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);

	state.context.restore();

	// call every frame to respond to events and dispatch them.
	state.black = false;
	state.responder.react();
}