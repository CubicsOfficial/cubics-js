import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

export default {
    /**
     * Read balance by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'balance',
            key: hash,
        }, ...args})
    },
    /**
     * Read balance by owner and token
     */
    async readOwnerToken({owner, token}, args={}) {
        return Resource.read({...{
            type: 'balance',
            key: await Hash.balance({owner: owner, token: token}),
        }, ...args})
    },
    /**
     * List balances by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'balance',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan balances by owner, sort by amount
     */
    async scanOwnerAmount({owner, amount=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'balance',
            index: 'owner',
            indexValue: owner,
            sort: 'amount',
            sortValue: amount,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan balances by token, sort by amount
     */
    async scanTokenAmount({token, amount=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'balance',
            index: 'token',
            indexValue: token,
            sort: 'amount',
            sortValue: amount,
            keyValue: hash,
        }, ...args})
    },
}