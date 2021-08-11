// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CheckAddress.sol";

/// @title A dummy contract in order to test whether the library
/// works when called from within a contract constructor.
contract CallFromConstructor {
    bool public isContract;

    constructor(address account) {
        isContract = CheckAddress.isContract(account);
    }
}
