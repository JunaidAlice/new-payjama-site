// import React from 'react'
import gost from '../assets/gost.svg'
import wallet from '../assets/wallet2.svg'
import wallet1 from '../assets/wallet1.svg'
import chain from '../assets/chain.svg'

const Extrapage = () => {
    const Cards=[
        {title:'Step 1', img:{gost}, h:"Download Phantom Wallet",p:"Start by downloading and installing Phantom Wallet from their official website. Follow the setup instructions provided."},
        {title:'Step 2', img:{wallet}, h:"Set Up Your Wallet",   p:"Create your wallet and securely record your Seed Phrase vital for wallet access later.",},

        {title:'Step 3', img:{wallet1}, h:"Fund Your Wallet",p:"Add Solana (SOL) to your Phantom Wallet. Purchase SOL on exchanges like Binance or Coinbase and transfer it to your wallet."},
        {title:'Step 4', img:{chain}, h:"Connect to Presale",p:"Head to the PyjamaCoin Presale page, click Connect Wallet, and link your Phantom Wallet to participate."},
    ]
    
  return (
    <div>
        <div>
            <div  className='text-center  '>
                <h1>Download the Phantom Wallet
              </h1>
              <h4>   A Simple Guide</h4>
            </div><div className='flex justify-center items-center'>
            <div className=' flex flex-col md:flex-row md:justify-center items-center p-14 text-center w-[90%]  gap-4'> 
                {Cards.map((t,i)=>(
                 <div key={i} className='flex flex-col  w-[90%] p-10 rounded-3xl bg-[#BA45E3] bg-opacity-15'> <h1 className='text-start border text-gray-500'>{t.title}</h1>
                    <div className=''>

                        <img src={t.img} alt="#" />
                        <h1 className='font-bold text-lg'>{t.h}</h1>
                        <p>{t.p}</p>

                    </div></div>  
                ))}

            </div></div>


        </div>
      
    </div>
  )}


export default Extrapage
