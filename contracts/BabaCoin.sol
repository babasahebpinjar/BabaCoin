pragma solidity ^0.4.2;

contract BabaCoin{
	// constructor
	// Set the total number of tokens
	// Read the total number of tokens

	uint256 public totalSupply;
	function BabaCoin() public{
		totalSupply = 1000000;//state variable- accesible to entire contract-writes to disk
	}
}