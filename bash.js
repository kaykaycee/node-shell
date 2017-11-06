

var commands = require('./commands.js');
var fs = require('fs');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
	var cmd = data.toString().trim(); // remove the newline

	//process.stdout.write('You typed: ' + cmd);

	var arg = cmd.split(' ');
	cmd = cmd.split(' ')[0];

	commands[cmd](arg);

	

});
