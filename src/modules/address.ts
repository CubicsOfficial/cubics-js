import Config from '../library/config'
import { $fetch } from 'ohmyfetch'

export default {
    /**
     * Read address data (balance, profile, pool, token)
     */
    async read({address, fetch=null}) {
        var params = new URLSearchParams({
            address: address,
            dev: Config.dev,
            identity: Config.identity,
        } as any).toString()

        return (fetch || $fetch)(Config.interface+'/address?'+params).catch(e => {
            throw Error(e.data)
        })
    },
}