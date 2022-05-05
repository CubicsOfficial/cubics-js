import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Lottery {
    public pool

    /**
     * Init lottery pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to lottery pool
     */
    transfer(tx={}) {
        return Instruction.wrap({
            function: 'lottery.transfer',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Claim from lottery pool
     */
    claim({claim}, tx={}) {
        return Instruction.wrap({
            function: 'lottery.claim',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Resolve NFT lottery pool
     */
    resolve(tx={}) {
        return Instruction.wrap({
            function: 'lottery.resolve',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Deposit to lottery pool
     */
    deposit({amount=null, unlocks=null}={}, tx={}) {
        return Instruction.wrap({
            function: 'lottery.deposit',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from lottery pool
     */
    withdraw({claim}, tx={}) {
        return Instruction.wrap({
            function: 'lottery.withdraw',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Close lottery pool
     */
    close(tx={}) {
        return Instruction.wrap({
            function: 'lottery.close',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Clear lottery pool
     */
    clear(tx={}) {
        return Instruction.wrap({
            function: 'lottery.clear',
            pool: this.pool.hash,
        }, tx)
    }
}