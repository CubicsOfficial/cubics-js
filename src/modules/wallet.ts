import Config from '../library/config'

export default {
    /**
     * Set public and private key
     */
    init({publicKey, privateKey=null}) {
        Config.publicKey = publicKey
        Config.privateKey = privateKey
    },
}
