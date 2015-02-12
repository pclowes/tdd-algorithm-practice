var fs = require('../src');
var Folder = fs.Folder;
var File = fs.File;

describe('Folder', function() {

  describe('isEmpty()', function() {

    it('returns true by default', function() {
      var folder = new Folder('workspace');
      expect(folder.isEmpty()).toEqual(true);
    });

  });

  describe('addFile()', function() {

    it('is not empty once a file has been added', function() {
      var folder = new Folder('workspace');
      folder.addFile(new File('foo.txt', 24));
      expect(folder.isEmpty()).toEqual(false);
    });

  });

  describe('filenames()', function() {

    it('returns a comma-delimited list of the added filenames', function() {
      var folder = new Folder('workspace');

      var name1 = Math.random();
      folder.addFile(new File('foo' + name1 + '.txt', 24));
      folder.addFile(new File('bar.txt', 24));

      expect(folder.filenames()).toEqual('foo' + name1 + '.txt,bar.txt');
    });

  });

  describe('totalSize()', function() {

    it('returns the total size of all of the files in the folder', function() {
      var folder = new Folder('workspace');

      var size = Math.random();
      folder.addFile(new File('foo.txt', size));
      folder.addFile(new File('bar.txt', 24));

      expect(folder.totalSize()).toEqual(size + 24);
    });

  });
});
