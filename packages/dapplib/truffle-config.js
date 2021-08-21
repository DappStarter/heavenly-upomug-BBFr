require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind puppy hunt hill flush genuine'; 
let testAccounts = [
"0x892e37f75bcb65791450fae5b245d4c56512be62d39c30c0ce526f3b003f7f24",
"0xd0143b004d511ba2a698d215ab706d197f611ea84c94bcc15246f1f5c4731816",
"0xc245f27b208bb3eca57f7cc5c04e521008551335a49f56852548a604fc83cfad",
"0xf728ddb3324779a94d4c4c69157b4d6d1ac06984b1c8365f8979ff3d7ad9661f",
"0xc3552f32b80f95188fc68e9f915e90d02ff13bdffc492550f367145165053b78",
"0x5edd9d9de98dc7939018a351b024b23da9de4f38224dccffa701ed9d1adf4c88",
"0x4f07566063bac70d47de44651116a466420f7de0a19a79d43cfc6b726ef60669",
"0xeb10f86c1066dce7ec59c26c53731377d676d69e939d80f5a1c7091b44d262a2",
"0x6e850e7e54ffd1ff629f88062cfec2892a04771e4e05b8cfa2c67149c48aaefb",
"0x424b674885bb3b370353801b23d7d7285ab11d3d6021726b7f883e5f458e7a9d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

