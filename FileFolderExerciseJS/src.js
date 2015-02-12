var File = function(name, size){
  this.name = name;
  this.size = size;
};

// --------------

var Folder = function(name){
  this.name = name;
  this.files = [];
};

Folder.prototype.isEmpty = function () {
  return this.files.length === 0;
};

Folder.prototype.addFile = function (file) {
  this.files.push(file);
};

Folder.prototype.filenames = function () {
  var names = [];
  this.forEach(function (file) {
    names.push(file.name);
  });
  return names.join(',');
};

Folder.prototype.totalSize = function () {
  var size = 0;
  this.forEach(function (file) {
    size += file.size;
  });
  return size;
};

Folder.prototype.fileExtractor = function (fn) {
  this.files.forEach(fn);
}

// add file
// add folder
// totalSize
// fileNames
// recursive add?

module.exports = {
  Folder: Folder,
  File: File
};
