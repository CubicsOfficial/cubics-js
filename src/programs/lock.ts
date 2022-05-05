import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Lock {
    public pool

    /**
     * Init lock pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to lock pool
     */
    transfer({amount, unlocks=null, expires=null, owner=null}, tx={}) {
        return Instruction.wrap({
            function: 'lock.transfer',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
            expires: expires,
            owner: owner,
        }, tx)
    }

    /**
     * Claim from lock pool
     */
    claim({claim}, tx={}) {
        return Instruction.wrap({
            function: 'lock.claim',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }
}