import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

export default {
    /**
     * Update allowance for spender address
     */
    async update({spender, token, amount}, tx={}) {
        return Instruction.wrap({
            function: 'allowance.update',
            spender: spender,
            token: token,
            amount: Utils.amount(amount),
        }, tx)
    },
    /**
     * Read allowance by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'allowance',
            key: hash,
        }, ...args})
    },
    /**
     * List allowances by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'allowance',
            keys: hashes,
        }, ...args})
    },
    /**
     * Read allowance by creator, spender, and token
     */
    async readCreatorSpenderToken({creator, spender, token}, args={}) {
        return Resource.read({...{
            type: 'allowance',
            key: await Hash.allowance({creator: creator, spender: spender, token: token}),
        }, ...args})
    },
    /**
     * Scan allowances by creator, sort by created
     */
    async scanCreatorCreated({creator, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'allowance',
            index: 'creator',
            indexValue: creator,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan allowances by spender, sort by created
     */
    async scanSpenderCreated({spender, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'allowance',
            index: 'spender',
            indexValue: spender,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
}