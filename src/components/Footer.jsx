import React from 'react'
import logo from "../assets/logo.svg";
import telv from "../assets/telv.svg";
import v1 from "../assets/v1.svg";
import v2 from "../assets/v2.svg";
import v3 from "../assets/v3.svg";
import v4 from "../assets/v4.svg";

function Footer() {
    return (
        <div className=' h-[115vh] lg:h-auto pt-10 overflow-hidden gap-10 lg:gap-0 flex flex-col items-center  '>
            <div className="max-w-[1400px]  lg:p-20 flex flex-col gap-5 mx-auto">


                <div className="flex flex-col items-center  justify-center gap-4">
                    <img src={logo} alt="" className="w-20" />

                </div>
                <div className="flex flex-col items-center  justify-center gap-4"></div>
                <p className="text-center">Get the best blog stories</p>
                <p className="text-center">into your inbox!</p>
            </div>
            <div className="flex w-[330px] lg:w-[440px] bg-[#10112e] rounded-full ">
                <input type="text" placeholder='Enter Your Email Address' className="lg:w-[300px] outline-none px-4 p-2 rounded-l-full bg-[#10112e] " />
                <div className="w-[1px] h-[30px] my-auto bg-[#262740]"></div>
                <div className="text-center lg:w-[140px] p-2 flex gap-2 items-center justify-center"> <img src={telv} alt="" className="cursor-pointer" />Subscribe</div>
            </div>

            <div className="flex  gap-2 my-5"> 
<input type="checkbox" id='p' /> <label htmlFor="p" className='flex  gap-2 my-5'><p className="">I agree to the </p> <a className="border-b cursor-pointer ">Privacy Policy</a></label>

            </div>
<div className="w-[80%] mx-auto h-[.5px] bg-white mt-10">


</div>
<div className="w-[102%] lg:px-40 p-4 border text-[#8E8EAC] gap-5  flex  flex-col lg:flex-row items-center justify-between mx-auto border-r-0 border-l-0   my-10">  
<p className="text-center">Pyjamacoin © 2024. All Rights <br/> Reserved.</p>

<div className="flex gap-5  items-center justify-center ">
    <p className="">Home</p>
    <p className="">About</p>
    <p className="">Team</p>
    <p className="">Store</p>
    <p className="">Contacts</p>
    
       </div>
<div className="flex gap-2 items-center justify-center">
 <div className="border-[#262741] w-10 bg-whitw h-10 rounded-full flex items-center justify-center border group"> <img src={v1} alt="" className="group-hover:scale-125 duration-300 delay-75" />   </div>
 <div className="border-[#262741] w-10 bg-whitw h-10 rounded-full flex items-center justify-center border group"> <img src={v2} alt="" className="group-hover:scale-125 duration-300 delay-75" />   </div>
 <div className="border-[#262741] w-10 bg-whitw h-10 rounded-full flex items-center justify-center border group"> <img src={v3} alt="" className="group-hover:scale-125 duration-300 delay-75" />   </div>
 <div className="border-[#262741] w-10 bg-whitw h-10 rounded-full flex items-center justify-center border group"> <img src={v4} alt="" className="group-hover:scale-125 duration-300 delay-75" />   </div>



</div>
</div>






        </div>
    )
}

export default Footer