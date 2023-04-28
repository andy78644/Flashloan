// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface NFT {
    function iDeclareBeingRich() external;
    
}

contract FlashoanExecutor {
    
    address public bankToken;
    address public NFTToken;
    address public loan;
    address public owner;

    constructor(address _bankToken, address _NFTToken, address _loan){
        owner = msg.sender;
        bankToken = _bankToken;
        NFTToken = _NFTToken;
        loan = _loan;
    }

    function executeWithMoney(uint256 amount) external {
        NFT(NFTToken).iDeclareBeingRich();
        IERC20(bankToken).transfer(loan, amount);
    }

    function transferNFT(address _to, uint256 tokenId) public {
        require(msg.sender == owner, "you are not owner");
        IERC721(NFTToken).approve(_to, tokenId);
        IERC721(NFTToken).safeTransferFrom(address(this), _to, tokenId);
    }


}