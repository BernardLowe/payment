// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract TestRubyToken is ERC20PresetMinterPauser {

    constructor() ERC20PresetMinterPauser("TestRubyToken", "Ruby") {
    }

    // function pause() external onlyOwner {
    //     _pause();
    // }

    // function unpause() external onlyOwner {
    //     _unpause();
    // }
}
