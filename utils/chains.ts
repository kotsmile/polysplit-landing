export type ChainConfig = {
  name: string
  id: string
  status: boolean
  logo: string
  type: 'testnet' | 'mainnet'
}

export const chainList: ChainConfig[] = [
  {
    status: true,
    name: 'Ethereum Mainnet',
    id: '1',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
    type: 'mainnet',
  },
  {
    status: true,
    name: 'BNB Smart Chain',
    id: '56',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg',
    type: 'mainnet',
  },
  // {
  //   status: true,
  //   name: 'Polygon',
  //   id: '137',
  //   logo: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
  //   type: 'mainnet',
  // },
  // {
  //   status: true,
  //   name: 'Base',
  //   id: '8453',
  //   logo: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg',
  //   type: 'mainnet',
  // },
  // {
  //   status: true,
  //   name: 'Arbitrum One',
  //   id: '42161',
  //   logo: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
  //   type: 'mainnet',
  // },
  // {
  //   status: true,
  //   name: 'Avalanche C-Chain',
  //   id: '43114',
  //   logo: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg',
  //   type: 'mainnet',
  // },
  // {
  //   status: true,
  //   name: 'Fantom Opera',
  //   id: '250',
  //   logo: 'https://icons.llamao.fi/icons/chains/rsz_fantom.jpg',
  //   type: 'mainnet',
  // },
  //   {
  //     status: true,
  //     name: 'Optimism',
  //     id: '10',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg',
  //     type: 'mainnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Linea',
  //     id: '59144',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg',
  //     type: 'mainnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Polygon zkEVM',
  //     id: '1101',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
  //     type: 'mainnet',
  //   },
  //   {
  //     status: true,
  //     name: 'PulseChain',
  //     id: '369',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_pulse.jpg',
  //     type: 'mainnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Mantle',
  //     id: '5000',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_mantle.jpg',
  //     type: 'mainnet',
  //   },
  //
  //   {
  //     status: true,
  //     name: 'Klaytn Cypress',
  //     id: '8217',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_klaytn.jpg',
  //     type: 'mainnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Goerli Testnet',
  //     id: '5',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'BNB Smart Chain Testnet',
  //     id: '97',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Polygon Mumbai Testnet',
  //     id: '80001',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Base Goerli Testnet',
  //     id: '84531',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Arbitrum Goerli Testnet',
  //     id: '421613',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Avalanche Fuji Testnet',
  //     id: '43113',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg',
  //     type: 'testnet',
  //   },
  //   // {
  //   //   status: true,
  //   //   name: 'Fantom Testnet',
  //   //   id: '4002',
  //   //   logo: 'https://icons.llamao.fi/icons/chains/rsz_fantom.jpg',
  //   //   type: 'testnet',
  //   // },
  //   {
  //     status: true,
  //     name: 'Optimism Goerli Testnet',
  //     id: '420',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Linea Testnet',
  //     id: '59140',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Pulse chain testnet v4',
  //     id: '943',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_pulse.jpg',
  //     type: 'testnet',
  //   },
  //   {
  //     status: true,
  //     name: 'Klaytn Baobab Testnet',
  //     id: '1001',
  //     logo: 'https://icons.llamao.fi/icons/chains/rsz_klaytn.jpg',
  //     type: 'testnet',
  //   },
]

export const supportedChainIds = chainList.map((c) => c.id)
