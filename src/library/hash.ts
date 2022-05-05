import Utils from './utils'
import Crypto from './crypto'

export default {
    async transaction(body): Promise<string> {
        return this.values([
            body.sender,
            body.instructions,
            body.nonce])
    },
    async allowance(body): Promise<string> {
        return this.values([
            body.address,
            body.spender,
            body.token])
    },
    async balance(body): Promise<string> {
        return this.values([
            body.address,
            body.token])
    },
    async values(values): Promise<string> {
        var bytes = new TextEncoder().encode(JSON.stringify(values))
        var enc = await Crypto.hash(bytes, 'sha256')
        return Utils.base58encode(enc)
    },
    async string(body, double=true): Promise<string> {
        var bytes = new TextEncoder().encode(body)
        var enc = await Crypto.hash(bytes, 'sha256')
        if (double) enc = await Crypto.hash(enc, 'sha256')
        return Utils.base58encode(enc)
    },
    inverse(hash): string {
        return Utils.base58encode(Utils.base58decode(hash).reverse())
    }
}