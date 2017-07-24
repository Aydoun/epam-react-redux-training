/**
 * JavaScript Advanced React/Redux Training
 * @file Advanced JavaScript Home Assigment
 * @author Mohamed Amine Aydoun <aydoun@qq.com>
 * @version 0.1
 */
class Store {
	/**
	*
	* Create a fresh Album.
	*/
	constructor() {
		this.albumData = [];
		this.currentIndex = 0;
	}
	/**
	* Add New Photo to The Collection.
	* @param {Object} image - photo Data
	*/
	addImage(images) {
		if (images === null) {
			throw new ReferenceError('Can\'t add a null to the collection');
		}

		if (Array.isArray(images)) {
			images.forEach((image) => {
				image.id = this.getId();
			});
			
			this.albumData = [...this.albumData , ...images];
		} else {
			image.id = this.getId();
			this.albumData.push(image);
		}	
	}
	/**
	* Helper Function Generating Incremental Ids
	*/
	getId() {
		this.currentIndex = this.currentIndex + 1;
		return this.currentIndex;
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
		const index = this.albumData.findIndex((ele) => ele.id === id);
		return this.albumData.splice(index , 1);
	}
	/**
	* Search The Photo Album By Description.
	* @param {string} term - The Search Term
	* @return {Array} All The Matched Records
	*/
	findByTerm(term){
		const searchedImages = [];
		const Length = this.albumData.length;

		//Find All the Occurences of The Term
		for(let i = 0 ; i < Length ; i++){
			let element = this.albumData[i];
			if (element.description && element.description.toLowerCase().indexOf(term) >= 0){
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
		if (image === null || typeof image === 'undefined' || !image.id) {
			throw new Error('Image Format is not Acceptable');
		}
		
		let imageToEdit = this.getImageById(image.id);
		if (typeof imageToEdit === 'undefined') {
			throw new Error('Image Not Found');
		}

		Object.assign(imageToEdit , image);		
		return true;
	}
	/**
	* @return {Array} All The Photo Collection
	*/
	getAll(){
		return this.albumData;
	}
}

module.exports = Store;