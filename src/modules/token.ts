import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

export default {
    /**
     * Create token
     */
    async create({name, symbol=null, supply=null, reserve=null, whole=null, description=null, links=null, meta=null, preview=null, owner=null, frozen=null, category=null, object=null, mime=null, content=null}, tx={}) {
        return Instruction.wrap({
            function: 'token.create',
            name: name,
            symbol: symbol,
            whole: whole,
            supply: Utils.amount(supply),
            reserve: Utils.amount(reserve),
            description: description,
            links: links,
            meta: meta,
            preview: preview,
            owner: owner,
            frozen: frozen,
            category: category,
            object: object,
            mime: mime,
            content: content,
        }, tx)
    },
    /**
     * Update specified values of an token
     */
    async update({token, name=null, description=null, links=null, meta=null, preview=null, frozen=null, category=null, mime=null}, tx={}) {
        return Instruction.wrap({
            function: 'token.update',
            token: token,
            name: name,
            description: description,
            links: links,
            meta: meta,
            preview: preview,
            frozen: frozen,
            category: category,
            mime: mime,
        }, tx)
    },
    /**
     * Mint from reserve
     */
    async mint({token, amount}, tx={}) {
        return Instruction.wrap({
            function: 'token.mint',
            token: token,
            amount: Utils.amount(amount),
        }, tx)
    },
    /**
     * Read token by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'token',
            key: hash,
        }, ...args})
    },
    /**
     * List tokens by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'token',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan tokens by creator, sort by created
     */
    async scanCreatorCreated({creator, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'creator',
            indexValue: creator,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by name, sort by created
     */
    async scanNameCreated({name, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'name',
            indexValue: name,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by symbol, sort by created
     */
    async scanSymbolCreated({symbol, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'symbol',
            indexValue: symbol,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by owner, sort by created
     */
    async scanOwnerCreated({owner, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'owner',
            indexValue: owner,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by content, sort by created
     */
    async scanContentCreated({content, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'content',
            indexValue: content,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by owner and category, sort by created
     */
    async scanOwnerCategoryCreated({owner, category, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'ownerCategory',
            indexValue: (await Hash.values([owner, category])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan tokens by creator and category, sort by created
     */
    async scanCreatorCategoryCreated({creator, category, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'token',
            index: 'creatorCategory',
            indexValue: (await Hash.values([creator, category])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
}