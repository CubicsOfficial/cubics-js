import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Royalty {
    public pool

    /**
     * Init royalty pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to royalty pool
     */
    transfer({token}, tx={}) {
        return this.claim({token}, tx)
    }

    /**
     * Claim from royalty pool
     */
    claim({token}, tx={}) {
        return Instruction.wrap({
            function: 'royalty.claim',
            pool: this.pool.hash,
            token: token,
        }, tx)
    }

    /**
     * Deposit to royalty pool
     */
    deposit({amount, unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'royalty.deposit',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from royalty pool
     */
    withdraw({claim}, tx={}) {
        return Instruction.wrap({
            function: 'royalty.withdraw',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Close royalty pool
     */
    close(tx={}) {
        return Instruction.wrap({
            function: 'royalty.close',
            pool: this.pool.hash,
        }, tx)
    }
}