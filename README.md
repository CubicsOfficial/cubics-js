# Official JavaScript Client for Cubics

Official JavaScript client to interact with Cubics Blockchain and Cubics Blockchain Interface.

Cubics is a serverless layer-1 blockchain for Metaverse, Gaming, and NFT applications that provides infinite scalability, high throughput, sub-second confirmation times, and fees at a tenth of a cent. Cubics achieves this by leveraging serverless compute and storage cloud services while innovating incentive structures and extending the Byzantine Fault Tolerance consensus mechanism for scalability.

# General

Install Cubics through npm, import it, generate a public/private key (or use your existing ones) and start building using the examples below.

```
# Installation
npm install cubics

# Imports
import Cubics from 'cubics' // ESM
const Cubics = require('cubics') // CJS

# Generate and connect a keypair
const keypair = Cubics.crypto.generateKeypair()
Cubics.wallet.init({publicKey: keypair[0], privateKey: keypair[1]})
```

# Interface

The interface methods allow to interact with storage nodes for read-only functionality. Using these methods, you could build a similar frontend app like our [**network explorer**](https://cubics.com). Interface requests are free, but rate-limited and should allow for "regular" usage. Please contact us at developers@cubics.com if you would like to have dedicated limits.

## Transaction

```
Cubics.transaction.poll({hash: hash, interval: number, timeout: number})
Cubics.transaction.read({hash: hash})
Cubics.transaction.list({hashes: [hash])
Cubics.transaction.scanSenderCreated({sender: address})
Cubics.transaction.scanPeriodCreated({period: period})
```

## Transfer

```
Cubics.transfer.read({hash: hash})
Cubics.transfer.list({hashes: [hash])
Cubics.transfer.scanSenderCreated({sender: address})
Cubics.transfer.scanFromCreated({fromAddress: address})
Cubics.transfer.scanToCreated({to: address})
Cubics.transfer.scanTokenCreated({token: token})
Cubics.transfer.scanFromTokenCreated({fromAddress: address, token: token})
Cubics.transfer.scanToTokenCreated({to: address, token: token})
```

## Token

```
Cubics.token.read({address: token})
Cubics.token.list({addresses: [token])
Cubics.token.scanCreatorCreated({creator: address})
Cubics.token.scanNameCreated({name: string})
Cubics.token.scanSymbolCreated({symbol: string})
Cubics.token.scanOwnerCreated({owner: address})
Cubics.token.scanContentCreated({content: hash})
Cubics.token.scanOwnerCategoryCreated({owner: address, category: string})
Cubics.token.scanCreatorCategoryCreated({creator: address, category: string})
```

## Pool

```
Cubics.pool.instance({address: pool})
Cubics.pool.read({address: pool})
Cubics.pool.list({addresses: [pool])
Cubics.pool.scanTokenProgramCreated({token: token, program: string})
Cubics.pool.scanNameCreated({name: string})
Cubics.pool.scanCreatorCreated({creator: address})
Cubics.pool.scanProgramCreated({program: string})
Cubics.pool.scanProgramExpires({program: string})
Cubics.pool.scanProgramNumber({program: string})
Cubics.pool.scanProgramCubicsBalance({program: string})
Cubics.pool.scanProgramTokenBalance({program: string})
Cubics.pool.scanProgramTransfersCount({program: string})
```

## Address

```
Cubics.address.read({address: address})
```

## Allowance

```
Cubics.allowance.read({hash: hash})
Cubics.allowance.list({hashes: [hash])
Cubics.allowance.readAddressSpenderToken({address: address, spender: address, token: token})
Cubics.allowance.scanAddressCreated({address: address})
Cubics.allowance.scanSpenderCreated({spender: address})
```

## Balance

```
Cubics.balance.read({hash: hash})
Cubics.balance.list({hashes: [hash])
Cubics.balance.readAddressToken({address: address, token: token})
Cubics.balance.scanAddressAmount({address: address})
Cubics.balance.scanTokenAmount({token: token})
```

## Candle

```
Cubics.candle.read({interval: interval, token: token, time: time})
Cubics.candle.scanIntervalTokenTime({interval: interval, token: token})
Cubics.candle.scanIntervalTimeTurnover({interval: interval})
Cubics.candle.scanIntervalTimeChange({interval: interval})
```

## Claim

```
Cubics.claim.read({hash: hash})
Cubics.claim.list({hashes: [hash])
Cubics.claim.scanHolderCategoryCreated({holder: address, category: string})
Cubics.claim.scanIssuerCategoryCreated({issuer: address, category: string})
Cubics.claim.scanIssuerAnswer({issuer: address})
Cubics.claim.scanIssuerNumber({issuer: address})
Cubics.claim.scanIssuerTokenAmount({issuer: address})
Cubics.claim.scanIssuerCubicsAmount({issuer: address})
Cubics.claim.scanIssuerCreated({issuer: address})
Cubics.claim.scanHolderCreated({holder: address})
Cubics.claim.scanIssuerTokenCreated({issuer: address, token: token})
Cubics.claim.scanHolderTokenCreated({holder: address, token: token})
Cubics.claim.scanIssuerHolder({issuer: address, holder: address})
Cubics.claim.scanIssuerHolderToken({issuer: address, holder: address, token: token})
```

## Registry

```
Cubics.registry.read({hash: hash})
Cubics.registry.list({hashes: [hash])
Cubics.registry.scanContentCreated({content: string})
Cubics.registry.scanFingerprintCreated({fingerprint: string})
Cubics.registry.scanClusterCreated({cluster: string})
```

## Search

```
Cubics.search.query({query: string})
```

## Statistic

```
Cubics.statistic.read({key: key, time: time})
Cubics.statistic.scan({key: key})
```

# Modules

Modules are wrapper methods that submit transactions to the network endpoint. Fees for methods are fixed and most recent fees can be found on [docs.cubics.com](https://docs.cubics.com). 


## Transfer

```
Cubics.transfer.create({to: address, token: token, amount: amount, fromAddress: address})
```

## Token

```
Cubics.token.create({name: string, symbol: string, supply: amount, reserve: amount, description: string, links: [string], meta: object, preview: url, owner: address, frozen: boolean, category: string, object: url, mime: string, content: string})
Cubics.token.update({name: string, description: string, links: [string], meta: object, preview: url, owner: address, frozen: boolean, category: string, mime: string})
Cubics.token.mint({token: token, amount: amount})
```

## Pool

For pool creation, it is recommended to use the program-specific methods (which are wrappers around this method). Available pool programs are auction, launch, lock, loot, lottery, royalty, staking, swap, vote.

```
Cubics.pool.create({token: token, program: string, expires: timestamp})
```

## Claim
```
Cubics.claim.create({owner: address, token: token, tokenAmount: amount, expires: timestamp})
Cubics.claim.update({claim: claim, tokenAmount: amount})
Cubics.claim.transfer({claim: claim, to: address})
Cubics.claim.resolve({claim: claim})
```

## Profile

```
Cubics.profile.update({name: string, description: string, links: [string], meta: object, preview: url, category: string})
```

## Allowance

```
Cubics.allowance.update({token: token, spender: spender, amount: amount})
```

## Transaction
Approx. 10 instructions can be batched into one request. The exact number depends on reads & writes, and sub-calls made by each instruction. It is required that all instructions have the tx=false flag, to be returned as instruction object. Batch instructions are processed atomically, meaning that if one instruction fails, the transaction throws an error and no instruction is processed.

```
Cubics.transaction.submit([
    Cubics.transfer.create({to: address, token: token, amount: amount}, false),
    Cubics.transfer.create({to: address, token: token, amount: amount}, false),
    Cubics.token.create({name: string, symbol: string, supply: amount}, false),
    Cubics.token.create({name: string}, false),
    Cubics.token.create({name: string}, false),
])
```

# Programs

Pools are based on programs, which are pre-written smart contracts on Cubics. For further details on individual functionalities or requirements check out the [Cubics Docs](https://docs.cubics.com). To get the pool object from pool-address, use the Cubics.pool.instance interface method.

## Auction

```
# Creator methods:
auction = Cubics.pool.create({program: 'auction', token: token, expires: timestamp, baseTarget: amount, baseLimit: amount})
auction.deposit()
auction.close()

# Participant methods:
auction.transfer({amount: amount})
auction.resolve()
auction.cancel()
```

## Launch

```
# Creator methods:
launch = Cubics.pool.create({program: 'launch', token: token, expires: timestamp, baseTarget: amount, baseLimit: amount})
launch.deposit({amount: amount})
launch.withdraw({claim: claim})
launch.close()

# Participant methods:
launch.resolve()
launch.transfer({amount: amount})
launch.claim({claim: claim})
```

## Lending

```
# Creator methods:
lending = Cubics.pool.create({program: 'lending', token: token})
lending.deposit({amount: amount})
lending.withdraw({claim: claim})

# Participant methods:
lending.liquidate({claim: claim})
lending.transfer({amount: amount, collateralization: number})
lending.settle({claim: claim})
```

## Lock

```
# Creator methods:
lock = Cubics.pool.create({program: 'lock', token: token, expires: timestamp})

# Participant methods:
lock.transfer({amount: amount, unlocks: timestamp, address: address})
lock.claim({claim: claim})
```

## Loot

```
# Creator methods:
loot = Cubics.pool.create({program: 'loot', token: token, probability: number, minAmount: amount, maxAmount: amount})
loot.deposit({token: token})
loot.withdraw({claim: claim})
loot.clear()

# Participant methods:
loot.transfer()
```

## Lottery

```
# Creator methods:
lottery = Cubics.pool.create({program: 'lottery', token: token, expires: timestamp, claimsLimit: integer, transfersLimit: integer})
lottery.deposit({amount: amount})
lottery.withdraw({claim: claim})
lottery.close()
lottery.clear()

# Participant methods:
lottery.transfer()
lottery.claim({claim: claim})
lottery.resolve()
```

## Royalty

```
# Creator methods:
royalty = Cubics.pool.create({program: 'royalty', token: token, rate: number})
royalty.deposit({amount: amount})
royalty.withdraw({claim: claim})
royalty.close()

# Participant methods:
royalty.transfer({token: token})
royalty.claim({token: token})
```

## Staking

```
# Creator methods:
staking = Cubics.pool.create({program: 'staking', token: token, rate: number, percentage: number, minTime: integer, maxTime: integer, minAmount: amount, maxAmount: amount})
staking.deposit({amount: amount})
staking.withdraw({claim: claim})

# Participate methods:
staking.transfer({amount: amount, unlocks: timestamp})
staking.claim({claim: claim})
```

## Swap

Swap pools are automatically created for all fungible tokens, with the same pool-address as the token-address.

```
# Liquidity provider methods:
swap.deposit({tokenAmount: amount, baseAmount: amount, unlocks: timestamp})
swap.withdraw({claim: claim, percentage: number})

# Participant methods:
swap.transfer({token: token, amount: amount})
```

## Vote

```
# Creator methods:
vote = Cubics.pool.create({program: 'vote', token: token, expires: timestamp, mechanism: string, maxAmount: amount, candidates: [string])
Cubics.vote.oracle({answer: answer})

# Participant methods:
vote.transfer({amount: amount, answer: string, number: number})
vote.resolve()
vote.claim({claim: claim})
```

# Feedback & Contributions

We encourage contributions to this library. Please also join our social channels in case you have suggestions or require technical help.

[**Website**](https://cubics.com)
[**Twitter**](https://twitter.com/CubicsOfficial)
[**Telegram**](https://t.me/CubicsOfficial)