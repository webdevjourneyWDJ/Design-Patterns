class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)){
      return callback(new Error('Can only read Markdown files.'));
    }

    this.fs.readFile(path, format, (err, contents) => {
      if(err){
        console.error(err);
        return callback(err);
      }

      return callback(null, contents);
    })
  }
}

module.exports = FS_Proxy;
