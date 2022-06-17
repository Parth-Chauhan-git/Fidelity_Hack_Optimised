var fs = require('fs');

function deleteFiles(files, callback){
  var i = files.length;
  files.forEach(function(filepath){
    fs.unlink(filepath, function(err) {
      i--;
      if (err) {
        callback(err);
        return;
      } else if (i <= 0) {
        callback(null);
      }
    });
  });
}

var files = ['code-feast.jpg', 'customer-services-homepage.jpg', 'finance-homepage.jpg'];

deleteFiles(files, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('all files removed');
  }
});