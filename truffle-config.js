require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strategy dash pulse common hidden knife force gaze'; 
let testAccounts = [
"0xc625435f2d1a645435a74665528338d2ef23267a33dc4c17d0b2c2f4026094cb",
"0x60204165e2f6871b30f559c765baa166d8f06c549a68fe317f5ede525516e973",
"0x099cb64d02d186289daf598930237498c198bb16c162f226675d812b67f27122",
"0x99d33ea80b0ac60ccc3541afd251c245d6ebbb3d4418fa45bf3561cb281c303f",
"0x6fdcf230a8dd2bba2dc3b230595fed4aab6fc790c8642fac376614b5bfeb9f5c",
"0x6fdc4ef0b49e0d0c52e299bb1b36bf7004d26c7a7a5f157481059f318e43da78",
"0x05f996f9dd52442f0c1034cbf124e94a4cd1e3416adc548a0cab4e616a123c9a",
"0xefa9097181056022c701349a85f290ca12af3c87fad651a05a8a0d397cb47d84",
"0xc47df305dd6519dc09322965d783c126b06ac2cbba345b288bb778e854a6e33b",
"0xa14a9f635098b5212946a8e58dfc7c7cf3c7edb6afa22b1d95ddd8fc434e133e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
