import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Lending {
    public pool

    /**
     * Init lending pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to lending pool
     */
    transfer({amount, collateralization}, tx={}) {
        return Instruction.wrap({
            function: 'lending.transfer',
            pool: this.pool.hash,
            token: this.pool.token,
            amount: Utils.amount(amount),
            collateralization: collateralization,
        }, tx)
    }

    /**
     * Settle claim from lending pool
     */
    settle({claim}, tx={}) {
        return Instruction.wrap({
            function: 'lending.settle',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Liquidate claim from lending pool
     */
    liquidate({claim}, tx={}) {
        return Instruction.wrap({
            function: 'lending.liquidate',
            pool: this.pool.hash,
            token: this.pool.token,
            claim: claim,
        }, tx)
    }

    /**
     * Deposit to lending pool
     */
    deposit({amount, unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'lending.deposit',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from lending pool
     */
    withdraw({claim, percentage=1}, tx={}) {
        return Instruction.wrap({
            function: 'lending.withdraw',
            pool: this.pool.hash,
            token: this.pool.token,
            claim: claim,
            percentage: percentage,
        }, tx)
    }
}