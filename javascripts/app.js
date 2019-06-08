// Rover Object Goes Here
let rover = {
  direction: 'N',
  x: 0,
	y: 0,
	travelLog: []
}
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
	console.log("turnRight was called!");
  switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'N';
			break;
	}
}

function moveForward(rover){
	console.log("moveForward was called");
  switch (rover.direction) {
		case 'N':
			if (rover.y <= 0) {
				console.log('You cannot move further. You have reached the border.');
			} else {
				rover.y--;
			}
			break;

		case 'E':
		if (rover.x >= 10) {
			console.log('You cannot move further. You have reached the border.');
		} else {
		rover.x++;
		}
			break;

		case 'S':
		if (rover.y >= 10) {
			console.log('You cannot move further. You have reached the border.');
		} else {
		rover.y++;
		}
			break;

		case 'W':
		if (rover.x <= 0) {
			console.log('You cannot move further. You have reached the border.');
		} else {
			rover.x--;
		}
			break;
	}
	rover.travelLog.push([rover.x,rover.y]);
	console.log(`Rover is at [${rover.x},${rover.y}]`);
}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'f':
				moveForward(rover);
				break;

			case 'r':
        turnRight(rover);
				break;

			case 'l':
        turnLeft(rover);
				break;
		}
	}
	return rover.travelLog;
}