import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Launch {
    public pool

    /**
     * Init launch pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to launch pool
     */
    transfer({amount}, tx={}) {
        return Instruction.wrap({
            function: 'launch.transfer',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
        }, tx)
    }

    /**
     * Resolve launch pool
     */
    resolve(tx={}) {
        return Instruction.wrap({
            function: 'launch.resolve',
            pool: this.pool.hash,
            token: this.pool.token,
        }, tx)
    }

    /**
     * Claim from launch pool
     */
    claim({claim}, tx={}) {
        return Instruction.wrap({
            function: 'launch.claim',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Deposit to launch pool
     */
    deposit({amount, unlocks=null}, tx={}) {
        return Instruction.wrap({
            function: 'launch.deposit',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            unlocks: unlocks,
        }, tx)
    }

    /**
     * Withdraw from launch pool
     */
    withdraw({claim}, tx={}) {
        return Instruction.wrap({
            function: 'launch.withdraw',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Close launch pool
     */
    close(tx={}) {
        return Instruction.wrap({
            function: 'launch.close',
            pool: this.pool.hash,
        }, tx)
    }
}