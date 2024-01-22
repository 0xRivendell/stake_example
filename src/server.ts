import { Wallet } from '@ethersproject/wallet'
import { JsonRpcProvider } from '@ethersproject/providers'
import { config } from 'dotenv'
import { Riv } from '@rivendell/defi'
config()

const provider = new JsonRpcProvider('https://1rpc.io/holesky')
const wallet = new Wallet(process.env.PKEY as string, provider)

const riv = new Riv('random api key')

const stakeWithSdk = async () => {
    const txObject = await riv.stake({ chainId: '17000', amount: '0.0001' })
    const txReceipt = await wallet.sendTransaction(txObject[0])
    console.log(txReceipt)
}

stakeWithSdk()
