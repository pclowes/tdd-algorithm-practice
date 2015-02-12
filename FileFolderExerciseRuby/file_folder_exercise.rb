class File
  attr_accessor :name, :size
  def initialize(name, size)
    @name = name
    @size = size
  end
end


class Folder
  attr_accessor :name, :files
  def initialize(name)
    @name = name
    @files = []
  end

  def is_empty?
     @files.length == 0 ? true : false
  end

  def add_file(file)
    @files << file
  end

  def file_names
    @files.map do |file|
      file.name
    end.join(', ')
  end

  def file_size
    size = 0
    @files.each do |file|
      size += file.size
    end
    size
  end
end



# ------ code above this line ------

require 'rspec/autorun'

RSpec.describe 'is_empty?' do
  it 'returns true by default' do
    folder = Folder.new('folder')
    expect(folder.is_empty?).to eq(true)
  end

  it 'it is not empty once a file is loaded' do
    folder = Folder.new('folder')
    file = File.new('file', 30)
    folder.add_file(file)
    expect(folder.is_empty?).to eq(false)
  end
end

RSpec.describe 'file_names' do
  it 'outputs the folder\'s file names in a comma delimited list' do
    folder = Folder.new('folder')
    file1 = File.new('file1', 30)
    file2 = File.new('file2', 40)
    folder.add_file(file1)
    folder.add_file(file2)
    expect(folder.file_names).to eq("file1, file2")
  end
end

RSpec.describe 'file_size' do
  it 'returns the cumulative size of all the files in the folder' do
    folder = Folder.new('folder')
    file1 = File.new('file1', 30)
    file2 = File.new('file2', 40)
    folder.add_file(file1)
    folder.add_file(file2)
    expect(folder.file_size).to eq(70)
  end
end
