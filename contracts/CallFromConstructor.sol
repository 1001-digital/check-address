// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CheckAddress.sol";

/// @title A dummy contract in order to test whether the library
/// works when called from within a contract constructor.
contract OnlyExternal {

    /// @dev A dummy method that should only be called from external addresses.
    /// @return true if the passed account is an external wallet.
    function onlyExternalWallet() external view returns (bool) {
        require(CheckAddress.isExternal(msg.sender), "Must not call from a contract");

        return true;
    }


    /// @dev A dummy method that should only be called from external addresses.
    /// @return true if the passed account is an external wallet.
    function onlyExternalWalletViaSenderOriginCheck() external view returns (bool) {
        require(msg.sender == tx.origin, "Must not call from a contract");

        return true;
    }

}

/// @title A dummy attacker contract that
contract CallerContract {
    bool public circumventedInConstructor;
    OnlyExternal toAttack;

    constructor(address _toAttack) {
        toAttack = OnlyExternal(_toAttack);

        circumventedInConstructor = toAttack.onlyExternalWallet();
    }

    function tryToCircumventAfterConstruction() external view {
        toAttack.onlyExternalWallet();
    }

}
