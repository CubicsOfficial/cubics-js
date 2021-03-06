import Big from 'big.js'
import Utils from './utils'

export default {
    /**
     * Removes certain fields
     */
    stripFields(object, fields?: string[]) {
        if (!fields || !fields.length) return object
        return Object.fromEntries(Object.entries(object).filter(e => !fields.includes(e[0])))
    },
    /**
     * Max field requirements (filter out certain fields)
     */
    filterFields(object, fields?: string[]) {
        if (!fields || !fields.length) return object
        return Object.fromEntries(Object.entries(object).filter(e => fields.includes(e[0])))
    },
    /**
     * Validates required fields or throws error
     */
    requiredFields(object, fields: string[]): void {
        var keys = Object.keys(object)
        fields.forEach(f => {
            if (!keys.includes(f)) throw Error(f+':required')
        })
    },
    /**
     * Guarantee that object contains only specified fields
     */
    exclusiveFields(object, fields: string[]): void {
        var keys = Object.keys(object)
        keys.forEach(k => {
            if (!fields.includes(k)) throw Error(k+':invalid')
        })
    },
    /**
     * Validate formats
     */
    validFormats(object, model) {
        Object.entries(object).forEach(e => {
            var t = model[e[0]][0]
            var f = e[0]
            var v = e[1]

            if (v == undefined || v == null) return
            if (!Object.keys(model).includes(f)) throw Error(f+':invalid')
            var hashRegex = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$', 'g')

            if (t == 'string' && typeof v == 'string' && v.length > 0 && v.length <= 256) return
            else if (t == 'strings' && v instanceof Array && v.length && v.length <= 100 && v.length == Utils.unique(v).length && v.every(v => typeof v == 'string' && v.length > 0 && v.length <= 256)) return
            else if (t == 'number' && typeof v == 'number' && v >= 0 && v <= 1e15 && Big(v).eq(Big(v).round(8))) return
            else if (t == 'numbers' && v instanceof Array && v.length && v.length <= 100 && v.length == Utils.unique(v).length && v.every(v => typeof v == 'number' && v >= 0 && v <= 1e15 && Big(v).eq(Big(v).round(8)))) return
            else if (t == 'hash' && typeof v == 'string' && v.length >= 32 && v.length <= 44 && hashRegex.test(v)) return
            else if (t == 'hashes' && v instanceof Array && v.length && v.length <= 100 && v.length == Utils.unique(v).length && v.every(v => typeof v == 'string' && v.length >= 32 && v.length <= 44 && hashRegex.test(v))) return
            else if (t == 'text' && typeof v == 'string' && v.length <= 8192) return
            else if (t == 'integer' && typeof v == 'number' && Math.round(v) == v && v >= 0 && v <= 1e15) return
            else if (t == 'timestamp' && typeof v == 'number' && Math.round(v) == v && v >= 1e12 && v < 1e13) return
            else if (t == 'amount' && typeof v == 'string' && Big(v).eq(Big(v).round(8)) && Big(v).gte(0) && Big(v).lte(1e15)) return
            else if (t == 'boolean' && typeof v == 'boolean') return
            else if (t == 'object' && v instanceof Object) return
            else if (t == 'index' && typeof v == 'string' && v.length == 8 && hashRegex.test(v)) return
            else throw Error(f+':format')
        })
    },
    TRANSACTION: {
        hash: ['hash'],
        signature: ['string'],
        sender: ['hash'],
        fee: ['amount'],
        instructions: ['object'],
        nonce: ['integer'],
        created: ['timestamp'],
        sponsored: ['boolean'],
        period: ['integer'],
        partition: ['string'],
        outputs: ['object'],
        error: ['string'],
        confirmed: ['timestamp'],
        confirmations: ['integer'],
    },
    TRANSFER: {
        hash: ['hash'],
        sender: ['hash'],
        from: ['hash'],
        to: ['hash'],
        token: ['hash'],
        amount: ['amount'],
        created: ['timestamp'],
        message: ['string'],
        origin: ['hash'],
        fromToken: ['index'],
        toToken: ['index'],
    },
    BALANCE: {
        hash: ['hash'],
        owner: ['hash'],
        token: ['hash'],
        amount: ['amount'],
    },
    ALLOWANCE: {
        hash: ['hash'],
        token: ['hash'],
        creator: ['hash'],
        spender: ['hash'],
        amount: ['amount'],
        created: ['timestamp'],
        origin: ['hash'],
    },
    TOKEN: {
        hash: ['hash'],
        creator: ['hash'],
        name: ['string'],
        created: ['timestamp'],
        origin: ['hash'],

        description: ['string'],
        links: ['strings'],
        meta: ['object'],
        preview: ['string'],

        symbol: ['string'],
        supply: ['amount'],
        reserve: ['amount'],
        whole: ['boolean'],

        owner: ['hash'],
        object: ['string'],
        mime: ['string'],
        content: ['string'],
        frozen: ['boolean'],
        category: ['string'],
        ownerCategory: ['index'],
        creatorCategory: ['index'],
    },
    CLAIM: {
        hash: ['hash'],
        creator: ['hash'],
        created: ['timestamp'],
        owner: ['hash'],
        token: ['hash'],
        tokenAmount: ['amount'],
        baseAmount: ['amount'],
        expires: ['timestamp'],
        unlocks: ['timestamp'],
        origin: ['hash'],
        resolved: ['timestamp'],
        resolution: ['hash'],

        frozen: ['boolean'],
        category: ['string'],
        meta: ['object'],
        answer: ['string'],
        number: ['number'],
        holderCategory: ['index'],
        issuerCategory: ['index'],

        holder: ['index'],
        issuer: ['index'],
        holderToken: ['index'],
        issuerToken: ['index'],
        issuerHolder: ['index'],
        issuerHolderToken: ['index'],
    },
    POOL: {
        hash: ['hash'],
        creator: ['hash'],
        token: ['hash'],
        program: ['string'],
        created: ['timestamp'],
        origin: ['hash'],
        tokenProgram: ['index'],
        creatorProgram: ['index'],
        activeProgram: ['string'],
        
        name: ['string'],
        description: ['string'],
        type: ['string'],
        candidates: ['strings'],
        rate: ['number'],
        percentage: ['number'],
        answers: ['strings'],
        meta: ['object'],

        expires: ['timestamp'],
        minAmount: ['amount'],
        maxAmount: ['amount'],
        minTime: ['integer'],
        maxTime: ['integer'],
        transfersLimit: ['integer'],
        claimsLimit: ['integer'],
        tokenLimit: ['amount'],
        baseLimit: ['amount'],
        tokenTarget: ['amount'],
        baseTarget: ['amount'],

        baseBalance: ['amount'],
        tokenBalance: ['amount'],
        baseTurnover: ['amount'],
        tokenTurnover: ['amount'],
        transfersCount: ['integer'],
        claimsCount: ['integer'],
        closed: ['boolean'],
        number: ['number'],
    },
    CANDLE: {
        key: ['string'],
        period: ['string'],
        time: ['integer'],
        open: ['amount'],
        high: ['amount'],
        low: ['amount'],
        close: ['amount'],
        change: ['number'],
        volume: ['amount'],
        turnover: ['amount'],
        trades: ['integer'],
        first: ['timestamp'],
        last: ['timestamp'],
    },
    STATISTIC: {
        key: ['string'],
        time: ['integer'],
        until: ['integer'],
        value: ['number'],
    },
    OBJECT: {
        hash: ['hash'],
        url: ['string'],
        mime: ['string'],
        content: ['hash'],
        fingerprint: ['string'],
        cluster: ['string'],
        processed: ['timestamp'],
        created: ['timestamp'],
    },
}
