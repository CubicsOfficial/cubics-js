import Config from '../library/config'
import { $fetch } from 'ohmyfetch'

export default {
    /**
     * Performs a search query
     * If query is valid hash, search returns resource by key (if available)
     * If query is string, search returns tokens & pools matching string in name & symbol
     */
    async query({query, fetch=null}) {
        var params = new URLSearchParams({
            query: query,
            dev: Config.dev,
            identity: Config.identity,
        } as any).toString()

        return (fetch || $fetch)(Config.interface+'/search?'+params).catch(e => {
            throw Error(e.data)
        })
    },
}