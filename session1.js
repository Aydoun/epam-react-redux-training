/**
 * JavaScript Advanced React/Redux Training
 * @file Advanced JavaScript Home Assigment
 * @author Mohamed Amine Aydoun <aydoun@qq.com>
 * @version 0.1
 */
class Store {
   
    /**
     * Create a fresh Album.
     */
    constructor() {
        this.albumData = [];
    }

    /**
   * Add New Photo to The Collection.
   * @param {Object} image - photo Data
   */

	addImage(image){
		if (image == null) {
			throw new ReferenceError('Can\'t add a null to the collection');
		}
		if (!image.id){
			//Creating a unique id for the new image
			image.id = new Date().valueOf();
		}
		this.albumData.push(image);
	}
	/**
   * Select Image By Id.
   * @param {Number} id - Photo id
   * @return {Object} returns The desired object , undefined otherwise
   */
	getImageById(id) {
		return this.albumData.find(function(element){
			return id === element.id;
		});
	}
	/**
   * Remove Photo By Id
   * @param {Number} id - Photo Id
   */
	removeById(id) {
		this.albumData = this.albumData.filter(function(element){
			return id !== element.id;
		});
	}
	/**
   * Search The Photo Album By Description.
   * @param {string} term - The Search Term
   * @return {Array} All The Matched Records
   */
	findByTerm(term){
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
	}
	/**
   * Photo Album Edit Record.
   * @param {Object} image - Override the exiting image with new data
   * @return {Boolean} Update Success Flag
   */
	edit(image){
		if (image && image.id){
			var imageToEdit = this.getImageById(image.id);
			if (imageToEdit) {
				Object.assign(imageToEdit , image);
				return true;
			}
		}

		return false;
	}
	/**
   * @return {Array} All The Photo Collection
   */
	getAll(){
		return this.albumData;
	}
}

module.exports = Store;
