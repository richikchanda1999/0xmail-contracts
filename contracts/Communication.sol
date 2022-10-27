// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Communication {
    event EmailAdded(uint256 chainId, string emailHash, address walletAddress, address sender, uint256 timestamp);

    function createLink(uint256 chainId, string memory emailHash, address walletAddress) external {
        require(block.chainid == chainId, "Chain ID does not match");
        emit EmailAdded(chainId, emailHash, walletAddress, msg.sender, block.timestamp);
    }
}