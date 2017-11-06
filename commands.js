var fs = require('fs');

module.exports = {
  'ls': function(){fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  })},
  'pwd': function(){
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },
  'date': function(){
    process.stdout.write(new Date().toUTCString());
    process.stdout.write('\nprompt > ');
  },
  'echo': function(arg){
    var newArg = arg.slice(1).join(' ');
    process.stdout.write(newArg);
    process.stdout.write('\nprompt > ');
  },
  'cat': function(file){
    fs.readFile(file[1], function(err, catFile) {
      if (err) throw err;
      process.stdout.write(catFile);
      process.stdout.write('\nprompt > ');
    });
  },
  'head': function(file){
    fs.readFile(file[1],function(err,catFile){
      if(err) throw err;
      process.stdout.write(catFile);
      process.stdout.write('\nprompt > ');
    });

  }
}