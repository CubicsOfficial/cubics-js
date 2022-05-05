import Resource from './resource'
import Instruction from './instruction'
import Utils from '../library/utils'

export default {
    /**
     * Read candle by key (interval:token) and time
     */
    async read({interval, token, time}, args={}) {
        if (time == null) time = Math.round(Date.now()/1000 - Date.now()/1000 % (60*60*24))

        return Resource.read({...{
            type: 'candle',
            key: interval+':'+token,
            sort: 'time',
            sortValue: time,
        }, ...args})
    },
    /**
     * Scan candles by token and interval, sort by time
     */
    async scanIntervalTokenTime({interval, token, time=null, key=null}, args={}) {
        return Resource.scan({...{
            type: 'candle',
            index: null,
            indexValue: null,
            sort: 'time',
            sortValue: time,
            keyValue: interval+':'+token,
        }, ...args})
    },
    /**
     * Scan candles by interval and time, sort by turnover
     */
    async scanIntervalTimeTurnover({interval, time, turnover=null, key=null}, args={}) {
        if (time == null) time = Math.round(Date.now()/1000 - Date.now()/1000 % (60*60*24))

        return Resource.scan({...{
            type: 'candle',
            index: 'period',
            indexValue: interval+':'+time,
            sort: 'turnover',
            sortValue: turnover,
            keyValue: key,
        }, ...args})
    },
    /**
     * Scan candles by interval and time, sort by change
     */
    async scanIntervalTimeChange({interval, time, change=null, key=null}, args={}) {
        if (time == null) time = Math.round(Date.now()/1000 - Date.now()/1000 % (60*60*24))

        return Resource.scan({...{
            type: 'candle',
            index: 'period',
            indexValue: interval+':'+time,
            sort: 'change',
            sortValue: change,
            keyValue: key,
        }, ...args})
    },
}