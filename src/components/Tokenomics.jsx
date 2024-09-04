// import React from 'react';
import DonutChart from './DonutChart';
import line1 from "../assets/line1.svg";
import line from "../assets/line 8.svg";
import lineb from "../assets/line 7.svg";
import linebr from "../assets/line 10.svg";
import l9 from "../assets/l9.svg";
import center from "../assets/center.svg";

function Tokenomics() {
    return (
        <div className='max-w-[1400px] h-[90vh]  lg:h-[120vh] relative p-8 md:p-20 flex flex-col lg:gap-8 items-center justify-center mx-auto'>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="font-bold text-4xl md:text-6xl flex items-center justify-center">Tokenomics</p>
                <p className="text-lg md:text-2xl flex flex-col items-center text-center gap-3 justify-center">
                    <span>Total Supply</span>
                    <span>Max Supply: 1,000,000,000 PyjamaCoins</span>
                </p>
            </div>
<img src={center} alt="" className="absolute top-[520px] lg:top-[500px] lg:left-[630px] w-[100px] lg:w-[150px]" />
            {/* Desktop Layout */}
            <div className="hidden md:flex absolute left-[260px] top-[330px] gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold text-[#72CA3D]">10%</p>
                    <p>Listing</p>
                </div>
                <img src={line1} alt="" className="w-[250px] mt-8 top-0" />
            </div>

            <div className="hidden md:flex absolute right-[130px] top-[330px] gap-8">
                <img src={l9} alt="" className="w-[250px] mt-8 top-0" />
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold text-[#fe6026]">30%</p>
                    <p>Dev & Team</p>
                </div>
            </div>

            <div className="hidden md:flex absolute left-[100px] top-[500px] gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold text-[#39cef3]">15%</p>
                    <p>Marketing</p>
                </div>
                <img src={line} alt="" className="w-[250px]" />
            </div>
{/* mobb */}
         <div className="flex flex-col gap-5 mt-10"> 
            
              <div className="hidden md:flex absolute left-[140px] top-[730px] gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold text-[#39cef3]">20%</p>
                    <p>Air Drops</p>
                </div>
                <img src={lineb} alt="" className="w-[250px]" />
            </div>

            <div className="hidden md:flex absolute right-[180px] top-[730px] gap-8">
                <img src={linebr} alt="" className="w-[250px]" />
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold text-[#39cef3]">25%</p>
                    <p>Presale</p>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex  gap-4 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold text-[#72CA3D]">10%</p>
                    <p>Listing</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold text-[#fe6026]">30%</p>
                    <p>Dev & Team</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold text-[#39cef3]">15%</p>
                    <p>Marketing</p>
                </div>
               
            </div>
            <div className="flex md:hidden gap-4 items-center justify-center"> 
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold text-[#39cef3]">20%</p>
                    <p>Air Drops</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-2xl font-semibold text-[#39cef3]">25%</p>
                    <p>Presale</p>
                </div></div></div>

            <DonutChart />
        </div>
    );
}

export default Tokenomics;
