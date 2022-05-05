export default {
    publicKey: null,
    privateKey: null,
    account: null,
    secret: null,
    dev: null,
    identity: null,
    interface: 'https://interface.cubics.com',
    network: 'https://network.cubics.com',
    zeroAddress: '11111111111111111111111111111111',
    cubicsAddress: '111111111111111111111111111111cx',
    dollarAddress: '111111111111111111111111111111cd',
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