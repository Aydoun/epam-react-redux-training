var Store = require('./session1');

var store1 = new Store();

describe("Store Testing Suit", function() {
  var mockImage = {
  	id : 1,
  	key : 'jxas',
  	url : 'http://somewebsite.com/dog.jpg',
  	description : 'Dog Walking on the street'
  }

  store1.addImage(mockImage);

  it("Photo Added to the Collection", function() {
    expect(store1.getAll().length).toBe(1);
  });

  it("Album Store Data Correctness", function() {
  	var addedImage = store1.getImageById(1);
  	expect(addedImage).not.toBe(undefined);
    expect(addedImage.key).toBe('jxas');
  });

  it("Search Functionality", function() {
  	expect(store1.findByTerm('dog').length).toBe(1);
    expect(store1.findByTerm('some non Existing String').length).toBe(0);
  });

  it("Edit Photo Functionality", function() {
  	store1.edit({
  		id : 1,
  		description : 'Cat Drinking Milk',
  		key : 'kowx',
  		url : 'http://somewebsite.com/cat.jpg',
  	});

  	var editedImage = store1.getImageById(1);
  	expect(store1.getAll().length).toBe(1);
  	expect(editedImage.key).toBe('kowx');
  	expect(store1.findByTerm('cat').length).toBe(1);
  });

  it("Delete Photo From Album", function() {
  	store1.removeById(1);
  	expect(store1.getAll().length).toBe(0);
  });

});

