var Store = require('./session1');

var store1 = new Store();

describe("Testing The Basic Album Insertion", function() {
  store1.addImage({});
  it("length comparison", function() {
    a = true;

    expect(store1.getAll().length).toBe(1);
  });
});

