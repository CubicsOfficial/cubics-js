import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'
import Hash from '../library/hash'

import Auction from '../programs/auction'
import Launch from '../programs/launch'
import Lending from '../programs/lending'
import Lock from '../programs/lock'
import Loot from '../programs/loot'
import Lottery from '../programs/lottery'
import Royalty from '../programs/royalty'
import Staking from '../programs/staking'
import Swap from '../programs/swap'
import Vote from '../programs/vote'

export default {
    /**
     * Create pool
     */
    async create({token, program, name=null, description=null, type=null, candidates=null, rate=null, percentage=null, number=null, expires=null, answers=null, meta=null, minAmount=null, maxAmount=null, minTime=null, maxTime=null, transfersLimit=null, claimsLimit=null, tokenLimit=null, baseLimit=null, tokenTarget=null, baseTarget=null}, tx={}) {
        return Instruction.wrap({
            function: 'pool.create',
            token: token,
            program: program,
            name: name,
            description: description,
            type: type,
            candidates: candidates,
            rate: rate,
            percentage: percentage,
            number: number,
            expires: expires,
            answers: answers,
            meta: meta,
            minAmount: Utils.amount(minAmount),
            maxAmount: Utils.amount(maxAmount),
            minTime: minTime,
            maxTime: maxTime,
            transfersLimit: transfersLimit,
            claimsLimit: claimsLimit,
            tokenLimit: Utils.amount(tokenLimit),
            baseLimit: Utils.amount(baseLimit),
            tokenTarget: Utils.amount(tokenTarget),
            baseTarget: Utils.amount(baseTarget),
        }, tx)
    },
    /**
     * Get pool by hash
     * Return as program instance
     */
    async instance({hash}, args={}) {
        var pool = await this.read({hash: hash})
        if (!pool) return
        return new {
            auction: Auction,
            launch: Launch,
            lending: Lending,
            lock: Lock,
            loot: Loot,
            lottery: Lottery,
            royalty: Royalty,
            staking: Staking,
            swap: Swap,
            vote: Vote,
        }[pool.program](pool)
    },
    /**
     * Read pool by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'pool',
            key: hash,
        }, ...args})
    },
    /**
     * List pools by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'pool',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan pools by token and program, sort by created
     */
    async scanTokenProgramCreated({token, program, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'tokenProgram',
            indexValue: (await Hash.values([token, program])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by creator and program, sort by created
     */
    async scanCreatorProgramCreated({creator, program, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'creatorProgram',
            indexValue: (await Hash.values([creator, program])).slice(-8),
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by name, sort by created
     */
    async scanNameCreated({name, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'name',
            indexValue: name,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by creator, sort by created
     */
    async scanCreatorCreated({creator, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'creator',
            indexValue: creator,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by created
     */
    async scanProgramCreated({program, created=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'created',
            sortValue: created,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by expires
     */
    async scanProgramExpires({program, expires=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'expires',
            sortValue: expires,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by number
     */
    async scanProgramNumber({program, number=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'number',
            sortValue: number,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by baseBalance
     */
    async scanProgramBaseBalance({program, baseBalance=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'baseBalance',
            sortValue: baseBalance,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by tokenBalance
     */
    async scanProgramTokenBalance({program, tokenBalance=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'tokenBalance',
            sortValue: tokenBalance,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by transfersCount
     */
    async scanProgramTransfersCount({program, transfersCount=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'transfersCount',
            sortValue: transfersCount,
            keyValue: hash,
        }, ...args})
    },
    /**
     * Scan pools by active program, sort by type
     */
    async scanProgramType({program, type=null, hash=null}, args={}) {
        return Resource.scan({...{
            type: 'pool',
            index: 'activeProgram',
            indexValue: program,
            sort: 'type',
            sortValue: type,
            keyValue: hash,
        }, ...args})
    },
}