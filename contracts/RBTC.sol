// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RBTC is ERC20, Ownable {
    constructor() ERC20("RBTC", "RBTC") public {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    {
}
