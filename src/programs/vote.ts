import Instruction from '../modules/instruction'
import Utils from '../library/utils'

export default class Vote {
    public pool

    /**
     * Init vote pool
     */
    constructor(pool) {
        this.pool = pool
    }

    /**
     * Transfer to vote pool
     */
    transfer({amount=0, answer=null, number=null}={}, tx={}) {
        if ((this.pool.candidates && !answer) || (this.pool.candidates && number)) throw Error('answer:invalid')

        return Instruction.wrap({
            function: 'vote.transfer',
            pool: this.pool.hash,
            amount: Utils.amount(amount),
            answer: answer,
            number: number,
        }, tx)
    }

    /**
     * Claim from vote pool
     */
    claim({claim}, tx={}) {
        return Instruction.wrap({
            function: 'vote.claim',
            pool: this.pool.hash,
            claim: claim,
        }, tx)
    }

    /**
     * Resolve vote pool
     */
    resolve(tx={}) {
        return Instruction.wrap({
            function: 'vote.resolve',
            pool: this.pool.hash,
        }, tx)
    }

    /**
     * Set accepted answer
     */
    oracle({answer}, tx={}) {
        return Instruction.wrap({
            function: 'vote.oracle',
            pool: this.pool.hash,
            answer: answer,
        }, tx)
    }
}