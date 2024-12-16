import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'

const injected = injectedModule()
const walletConnect = walletConnectModule({
  projectId: 'YOUR_PROJECT_ID', // You'll need to get this from WalletConnect
  version: 2
})

const onboard = Onboard({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/'
    },
    {
      id: '0x5',
      token: 'ETH',
      label: 'Goerli',
      rpcUrl: 'https://goerli.infura.io/v3/'
    }
  ],
  appMetadata: {
    name: 'Web3 SaaS',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
    description: 'Web3 Node Management Platform'
  }
})

export default onboard