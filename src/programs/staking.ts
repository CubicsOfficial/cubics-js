import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Staking {
    public pool

    /**
     * Init staking pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to staking pool
     */
    transfer({amount, unlocks=null}, tx={}) {
        if (unlocks && unlocks < Date.now()+24*60*60*1000) throw Error('invalid:time')

        return Instruction.wrap({
            function: 'staking.transfer',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Claim from staking pool
     */
    claim({claim}, tx={}) {
        return Instruction.wrap({
            function: 'staking.claim',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Deposit to staking pool
     */
    deposit({amount, unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'staking.deposit',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from staking pool
     */
    withdraw({claim, percentage=1}, tx={}) {
        return Instruction.wrap({
            function: 'staking.withdraw',
            pool: this.pool.hash,
            claim: claim,
            percentage: percentage,
        }, tx)
    }
}