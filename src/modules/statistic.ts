import Resource from './resource'

export default {
    /**
     * Read statistic by key and time
     */
    async read({key, time}, args={}) {
        return Resource.read({...{
            type: 'statistic',
            key: key,
            sort: 'time',
            sortValue: time,
        }, ...args})
    },
    /**
     * Scan statistics by key, sort by time
     */
    async scan({key, time=null}, args={}) {
        return Resource.scan({...{
            type: 'statistic',
            index: null,
            indexValue: null,
            sort: 'time',
            sortValue: time,
            keyValue: key,
        }, ...args})
    },
}