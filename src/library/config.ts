export default {
    publicKey: null,
    privateKey: null,
    account: null,
    secret: null,
    dev: null,
    identity: null,
    interface: 'https://interface.cubics.com',
    network: 'https://network.cubics.com',
    zero: '11111111111111111111111111111111',
    cubicAddress: '1111111111111111111111111111cubic',
    dollarAddress: '11111111111111111111111111111usd',
    factoryAddress: '11111111111111111111111111factory',
    sponsoredAddress: '1111111111111111111111111sponsored',
    consumedAddress: '11111111111111111111111111consumed',

    /**
     * Set endpoints and environment mode
     */
    init({networkEndpoint=null, interfaceEndpoint=null, dev=null}) {
        if (networkEndpoint) this.network = networkEndpoint
        if (interfaceEndpoint) this.interface = interfaceEndpoint
        if (dev != null) this.dev = dev ? dev : null
    }
}