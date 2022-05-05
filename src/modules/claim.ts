import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

export default {
    /**
     * Create claim
     */
    async create({owner, token, tokenAmount, baseAmount=null, expires=null, unlocks=null, frozen=null, category=null, meta=null, answer=null, number=null}, tx={}) {
        return Instruction.wrap({
            function: 'claim.create',
            owner: owner,
            token: token,
            tokenAmount: Utils.amount(tokenAmount),
            baseAmount: Utils.amount(baseAmount),
            expires: expires,
            unlocks: unlocks,
            frozen: frozen,
            category: category,
            meta: meta,
            answer: answer,
            number: number,
        }, tx)
    },
    /**
     * Update claim
     */
    async update({claim, tokenAmount=null, baseAmount=null, expires=null, unlocks=null, frozen=null, category=null, meta=null, answer=null, number=null}, tx={}) {
        return Instruction.wrap({
            function: 'claim.update',
            claim: claim,
            tokenAmount: Utils.amount(tokenAmount),
            baseAmount: Utils.amount(baseAmount),
            expires: expires,
            unlocks: unlocks,
            frozen: frozen,
            category: category,
            meta: meta,
            answer: answer,
            number: number,
        }, tx)
    },
    /**
     * Transfer claim
     */
    async transfer({claim, to}, tx={}) {
        return Instruction.wrap({
            function: 'claim.transfer',
            claim: claim,
            to: to,
        }, tx)
    },
    /**
     * Resolve claim
     */
    async resolve({claim}, tx={}) {
        return Instruction.wrap({
            function: 'claim.resolve',
            claim: claim,
        }, tx)
    },
    /**
     * Read claim by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'claim',
            key: hash,
        }, ...args})
    },
    /**
     * List claims by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'claim',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan claims by holder and category, sort by created
     */
    async scanHolderCategoryCreated({holder, category, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'holderCategory',
            indexValue: (await Hash.values([holder, category])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer and category, sort by created
     */
    async scanIssuerCategoryCreated({issuer, category, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuerCategory',
            indexValue: (await Hash.values([issuer, category])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, sort by answer
     */
    async scanIssuerAnswer({issuer, answer=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuer',
            indexValue: (await Hash.values([issuer])).slice(-8),
            sort: 'answer',
            sortValue: answer,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, sort by number
     */
    async scanIssuerNumber({issuer, number=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuer',
            indexValue: (await Hash.values([issuer])).slice(-8),
            sort: 'number',
            sortValue: number,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, sort by tokenAmount
     */
    async scanIssuerTokenAmount({issuer, tokenAmount=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuer',
            indexValue: (await Hash.values([issuer])).slice(-8),
            sort: 'tokenAmount',
            sortValue: tokenAmount,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, sort by baseAmount
     */
    async scanIssuerBaseAmount({issuer, baseAmount=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuer',
            indexValue: (await Hash.values([issuer])).slice(-8),
            sort: 'baseAmount',
            sortValue: baseAmount,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, sort by created
     */
    async scanIssuerCreated({issuer, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuer',
            indexValue: (await Hash.values([issuer])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by holder, sort by created
     */
    async scanHolderCreated({holder, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'holder',
            indexValue: (await Hash.values([holder])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer and token, sort by created
     */
    async scanIssuerTokenCreated({issuer, token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuerToken',
            indexValue: (await Hash.values([issuer, token])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by holder and token, sort by created
     */
    async scanHolderTokenCreated({holder, token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'holderToken',
            indexValue: (await Hash.values([holder, token])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer and holder, sort by created
     */
    async scanIssuerHolder({issuer, holder, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuerHolder',
            indexValue: (await Hash.values([issuer, holder])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan claims by issuer, holder and token, sort by created
     */
    async scanIssuerHolderToken({issuer, holder, token, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'claim',
            index: 'issuerHolderToken',
            indexValue: (await Hash.values([issuer, holder, token])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
}