'use strict'

class Draw {
	constructor(){
		this.options = ['red', 'green', 'blue'];
		let _result = this.setResult()
		
		this.getResult = function(){
			return _result;
		}
		
	}
	
	getOptions(){
		return this.options;
	}
		
	setResult(){
		let colors = [];
		const iterationNumber = this.getOptions().length;
		
		for(let i = 0; i < iterationNumber; i++){
			let rand = Math.floor(Math.random() * 3);
			colors.push(this.getOptions()[rand]);
			
		}
		console.log(colors);
		return colors
	}	
	
}

//const draw = new Draw();