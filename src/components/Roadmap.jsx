 
import circle from "../assets/circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Roadmap() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for the animations
          once: true, // Whether animation should happen only once or every time you scroll up and down
        });
      }, []);
    return (
        <div className='bgg lg:h-[100vh] py-5 flex flex-col gap-5'>
            <p className="text-6xl font-semibold text-center" data-aos="fade-right">Our Roadmap</p>
            <div className="hidden lg:flex flex-col gap-16">
                <div className="flex gap-5  justify-end px-20 mt-10">
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col" data-aos='fade-down'>
                        <p className="text-xl text-[#ffffff]">Phase 1</p>
                        <p className="text-xl font-bold">Concept & Development</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Idea inception and team formation</li>
                                <li>Initial game design and mechanics planning</li>
                                <li>Creation of digital pet assets and animations</li>
                            </ul>

                            <p className="absolute bottom-[-60px] left-1/2 w-[1px] h-[60px] bg-white"></p>
                            <img src={circle} alt="" className="absolute z-10 bottom-[-75px] left-[190px]" />
                        </div>
                    </div>
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col" data-aos='fade-down'>
                        <p className="text-xl text-[#ffffff]">Phase 2</p>
                        <p className="text-xl font-bold">Presale and Airdrop</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Launch the presale in three phases</li>
                                <li>Implement the airdrop program</li>
                                <li>Commence initial marketing and community building</li>
                                <li>Listing on CoinMarketCap and CoinGecko</li>
                            </ul>

                            <p className="absolute bottom-[-60px] left-1/2 w-[1px] h-[60px] bg-white"></p>
                            <img src={circle} alt="" className="absolute z-10 bottom-[-75px] left-[220px]" />
                        </div>
                    </div>
                </div>

                <p className="lg:w-[980px] mx-auto h-[2px] z-[1] relative right-[10px] bg-white"></p>

                <div className="flex gap-5  justify-start px-20">
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col" data-aos='fade-up'>
                        <p className="text-xl text-[#ffffff]">Phase 3</p>
                        <p className="text-xl font-bold">Smart Contract Development  Audit</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Develop and audit the PyjamaCoin smart<br/> contract</li>
                                <li>Deploy the smart contract on the Solana <br/> blockchain</li>
                                
                            </ul>

                            <p className="absolute top-[-60px] left-1/2 w-[1px] h-[60px] bg-white"></p>
                            <img src={circle} alt="" className="absolute z-10 top-[-75px] left-[200px]" />
                        </div>
                    </div>
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col"  data-aos='fade-up ' >
                        <p className="text-xl text-[#ffffff]">Phase 4</p>
                        <p className="text-xl font-bold">Game Launch and Introduction</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Officially launch the game following the<br/> Raydium listing</li>
                                <li>Integrate an NFT marketplace for accessories</li>
                        
                            </ul>

                            <p className="absolute top-[-60px] left-1/2 w-[1px] h-[60px] bg-white"></p>
                            <img src={circle} alt="" className="absolute top-[-75px] z-10 left-[190px]" />
                        </div>
                    </div>
                </div>
            </div>   

            {/* mobile  */}
            <div className="flex lg:hidden flex-col gap-5">
                <div className="flex gap-5   flex-col justify-end px-5 mt-10">
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col">
                        <p className="text-xl text-[#ffffff]">Phase 1</p>
                        <p className="text-xl font-bold">Concept & Development</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Idea inception and team formation</li>
                                <li>Initial game design and mechanics planning</li>
                                <li>Creation of digital pet assets and animations</li>
                            </ul>

                  
                          
                        </div>
                    </div>
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col">
                        <p className="text-xl text-[#ffffff]">Phase 2</p>
                        <p className="text-xl font-bold">Presale and Airdrop</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Launch the presale in three phases</li>
                                <li>Implement the airdrop program</li>
                                <li>Commence initial marketing and community building</li>
                                <li>Listing on CoinMarketCap and CoinGecko</li>
                            </ul>

                     
                         
                        </div>
                    </div>
                </div>

             

                <div className="flex gap-5  flex-col  justify-start px-5">
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col">
                        <p className="text-xl text-[#ffffff]">Phase 3</p>
                        <p className="text-xl font-bold">Smart Contract Development  Audit</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Develop and audit the PyjamaCoin smart<br/> contract</li>
                                <li>Deploy the smart contract on the Solana <br/> blockchain</li>
                                
                            </ul>

                           
                        </div>
                    </div>
                    <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#261046] flex-col">
                        <p className="text-xl text-[#ffffff]">Phase 4</p>
                        <p className="text-xl font-bold">Game Launch and Introduction</p>
                        <div>
                            <ul style={{ listStyleType: 'disc' }} className='text-[#ffffff]'>
                                <li>Officially launch the game following the<br/> Raydium listing</li>
                                <li>Integrate an NFT marketplace for accessories</li>
                        
                            </ul>

                           
                          
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Roadmap
