'use strict';

class App {

	constructor(){
		this.addEventListeners();
	}

	addEventListeners(){
		$('body').on('click', '.btn-trash', function(e){
			e.preventDefault();
			var note = $(this).parents('.note');
			//note.remove();
			note.hide(400, ()=> {
				$(this).remove();
			});
		});
	}

};


$(document).ready(function(){
	var app = new App();
});