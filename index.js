var log = console.log;

var Store = {
	albumData : [],
	addImage: function(image){
		if (image == null) {
			throw new ReferenceError('Can\'t add a null to the collection');
		}
		if (!image.id){
			//Creating a unique id for the new image
			image.id = new Date().valueOf();
		}
		this.albumData.push(image);
	},
	getImageById: function(id) {
		return this.albumData.find(function(element){
			return id === element.id;
		});
	},
	removeById: function(id) {
		this.albumData = this.albumData.filter(function(element){
			return id !== element.id;
		});
	},
	findByTerm: function(term){
		var searchedImages = [];
		var Length = this.albumData.length;

		//Find All the Occurences of The Term
		for(var i = 0 ; i < Length ; i++){
			var element = this.albumData[i];
			if (element.description && element.description.indexOf(term) >= 0){
				searchedImages.push(element);
			}
		}

		return searchedImages;
	},
	edit: function(image){
		if (image && image.id){
			var imageToEdit = this.getImageById(image.id);
			if (imageToEdit) {
				Object.assign(imageToEdit , image);
				return true;
			}
		}

		return null;
	},
	getAll: function(){
		return this.albumData;
	}
}

var store1 = Object.create(Store);

store1.addImage({});

store1.addImage({
	id : 1,
	url: 'http://there23.com',
	description: 'im tired of this shit'
});

log(store1.getImageById(1), 'number 1');

