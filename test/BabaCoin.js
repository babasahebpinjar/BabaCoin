var BabaCoin = artifacts.require("./BabaCoin.sol");

contract('BabaCoin',function(accounts){

	it('sets the total supply upoin deployment',function(){
		return BabaCoin.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply()
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1,000,000');
		});
	});
})