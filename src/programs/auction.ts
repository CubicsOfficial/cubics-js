import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Auction {
    public pool

    /**
     * Init auction pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to auction pool
     */
    transfer({amount}, tx={}) {
        return Instruction.wrap({
            function: 'auction.transfer',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
        }, tx)
    }

    /**
     * Deposit to auction pool
     */
    deposit({unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'auction.deposit',
            pool: this.pool.hash,
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Resolve auction pool
     */
    resolve(tx={}) {
        return Instruction.wrap({
            function: 'auction.resolve',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Cancel auction pool
     */
    cancel(tx={}) {
        return Instruction.wrap({
            function: 'auction.cancel',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Close auction pool
     */
    close(tx={}) {
        return Instruction.wrap({
            function: 'auction.close',
            pool: this.pool.hash,
        }, tx)
    }
}