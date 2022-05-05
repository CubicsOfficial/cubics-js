import Resource from './resource'

export default {
    /**
     * Read object by hash
     */
    async read({hash}, args={}) {
        return Resource.read({...{
            type: 'object',
            key: hash,
        }, ...args})
    },
    /**
     * List objects by hashes
     */
    async list({hashes}, args={}) {
        return Resource.list({...{
            type: 'object',
            keys: hashes,
        }, ...args})
    },
    /**
     * Scan objects by content, sort by created
     */
    async scanContentCreated({content, created=null, token=null}, args={}) {
        return Resource.scan({...{
            type: 'object',
            index: 'content',
            indexValue: content,
            sort: 'created',
            sortValue: created,
            keyValue: token,
        }, ...args})
    },
    /**
     * Scan objects by fingerprint, sort by created
     */
    async scanFingerprintCreated({fingerprint, created=null, token=null}, args={}) {
        return Resource.scan({...{
            type: 'object',
            index: 'fingerprint',
            indexValue: fingerprint,
            sort: 'created',
            sortValue: created,
            keyValue: token,
        }, ...args})
    },
    /**
     * Scan objects by cluster, sort by created
     */
    async scanClusterCreated({cluster, created=null, token=null}, args={}) {
        return Resource.scan({...{
            type: 'object',
            index: 'cluster',
            indexValue: cluster,
            sort: 'created',
            sortValue: created,
            keyValue: token,
        }, ...args})
    },
}