import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Swap {
    public pool

    /**
     * Init swap pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to swap pool
     */
    transfer({token, amount}, tx={}) {
        return Instruction.wrap({
            function: 'swap.transfer',
            pool: this.pool.hash,
            token: token,
            amount: Utils.amount(amount),
        }, tx)
    }

    /**
     * Deposit to swap pool
     */
    deposit({tokenAmount, baseAmount, unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'swap.deposit',
            pool: this.pool.hash,
            tokenAmount: Utils.amount(tokenAmount),
            baseAmount: Utils.amount(baseAmount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from swap pool
     */
    withdraw({claim, percentage=1}, tx={}) {
        if (percentage > 1) throw Error('percentage:invalid')

        return Instruction.wrap({
            function: 'swap.withdraw',
            pool: this.pool.hash,
            claim: claim,
            percentage: percentage,
        }, tx)
    }
}