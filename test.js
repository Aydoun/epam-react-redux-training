const Store = require('./session1');

let store1 = new Store();

describe("Store Testing Suit", function() {
  const mocks = [
  {
    id : 23,
    key : 'jxas',
    url : 'http://somewebsite.com/dog.jpg',
    description : 'Dog Walking on the street'
  },
  {
    
    key : 'jxas',
    url : 'http://somewebsite.com/dog.jpg',
    description : 'Dog Walking on the street'
  },
  {
    
    key : 'jxas',
    url : 'http://somewebsite.com/dog.jpg',
    description : 'Dog Walking on the street'
  }
  ];

  store1.addImage(mocks);

  it("Photo Added to the Collection", function() {
    expect(store1.getAll().length).toBe(3);
  });

  it("Album Store Data Correctness", function() {
  	const addedImage = store1.getImageById(1);
  	expect(addedImage).not.toBe(undefined);
    expect(addedImage.key).toBe('jxas');
  });

  it("Search Functionality", function() {
  	expect(store1.findByTerm('dog').length).toBe(3);
    expect(store1.findByTerm('some non Existing String').length).toBe(0);
  });

  it("Edit Photo Functionality", function() {
  	store1.edit({
  		id : 1,
  		description : 'Cat Drinking Milk',
  		key : 'kowx',
  		url : 'http://somewebsite.com/cat.jpg',
  	});

  	const editedImage = store1.getImageById(1);
  	expect(store1.getAll().length).toBe(3);
  	expect(editedImage.key).toBe('kowx');
  	expect(store1.findByTerm('cat').length).toBe(1);
  });

  it("Delete Photo From Album", function() {
  	store1.removeById(2);
  	expect(store1.getAll().length).toBe(2);
  });

});

