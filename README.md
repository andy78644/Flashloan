# flashloan
## Prerequisites
### Install those at local
* nodejs - v18.12.1
* yarn, npm

## Usage
### prerequire
```shell=
npm install
```
Please modify .env.example to .env and complete the component in it

### deploy and verify
deploy transfer NFT contract
```shell=
npx hardhat run scripts/deploy.js
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS --contract contracts/FlashloanExecutor.sol:FlashoanExecutor '0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e' '0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba' '0xbe02727047fADd7fe434E093e001745B42C5F49B'
```


```
