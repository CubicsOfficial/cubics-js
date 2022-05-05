import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

export default {
    /**
     * Create transfer
     */
    async create({to, token, amount=null, from=null, message=null}, tx={}) {
        return Instruction.wrap({
            function: 'transfer.create',
            to: to,
            token: token,
            amount: Utils.amount(amount),
            from: from,
            message: message,
        }, tx)
    },
    /**
     * Read transfer by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'transfer',
            key: hash,
        }, ...args})
    },
    /**
     * List transfers by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'transfer',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan transfers by sender, sort by created
     */
    async scanSenderCreated({sender, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'sender',
            indexValue: sender,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan transfers by from, sort by created
     */
    async scanFromCreated({from, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'from',
            indexValue: from,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan transfers by to, sort by created
     */
    async scanToCreated({to, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'to',
            indexValue: to,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan transfers by token, sort by created
     */
    async scanTokenCreated({token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'token',
            indexValue: token,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan transfers by fromToken, sort by created
     */
    async scanFromTokenCreated({from, token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'fromToken',
            indexValue: (await Hash.values([from, token])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan transfers by toToken, sort by created
     */
    async scanToTokenCreated({to, token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'transfer',
            index: 'toToken',
            indexValue: (await Hash.values([to, token])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
}