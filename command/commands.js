var { writeFile, unlink } = require('fs');
var path = require('path');

class ExitCommand {
  get name(){
    return 'exit... bye!';
  }

  execute(){
    process.exit(0);
  }
}

class CreateCommand {
  constructor(fileName, text) {
    this.fileName = fileName;
    this.body = text;
    this.fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `create ${this.fileName}`;
  }

  execute() {
    writeFile(this.fullPath, this.body, w => w);
  }

  undo(){
    unlink(this.fullPath, w => w);
  }
}

module.exports = { ExitCommand, CreateCommand}
