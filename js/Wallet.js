'use strict'

class Wallet {
	constructor(money){
		let _money = money;
		
		this.getMoney = function(){
			return _money
		}
		
		this.setMoney = function(value){
			console.log(`Wallet ustawiony na ${value}`);
			return _money = value;
		}
		
		this.addMoney = function(value){
			return _money = _money + value;
		}
		
		this.removeMoney = function(value){
			return _money = _money - value;
		}
		
		this.checkEnoughMoney = function(value){
			if(_money >= value) return true;
				return false;
		}
	}
	
	
}
