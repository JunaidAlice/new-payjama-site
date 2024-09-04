
import { useEffect } from "react";
import m1 from "../assets/m1.svg"
import m2 from "../assets/m2.svg";
import m3 from "../assets/m3.svg";
import m4 from "../assets/m4.svg";
import m5 from "../assets/m5.svg";
import m6 from "../assets/m6.svg";
import AOS from 'aos'
import 'aos/dist/aos.css';
function Team() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for the animations
          once: true, // Whether animation should happen only once or every time you scroll up and down
        });
      }, []);
    return (
        <div className='bggteam p-10'>
            <div className="max-w-[1400px]  flex items-center justify-center gap-10 flex-col  lg:py-20   mx-auto">
                <p className="text-6xl font-semibold text-center " data-aos='fade-down' >Our Team</p>
                <div className="flex items-center lg:flex-row flex-col  gap-4 md:px-40 justify-center">
                    <div className="flex flex-col gap-2 " data-aos='fade-right' >
                        <img src={m1} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">Amy Walker</p>
                            <p className="text-[#9B9FAF]">Project Manager</p>


                        </div>



                    </div>
                    <div className="flex flex-col gap-2" data-aos='fade-down' >
                        <img src={m2} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">David Green</p>
                            <p className="text-[#9B9FAF]">Web Developer</p>


                        </div>



                    </div>
                    <div className="flex flex-col gap-2" data-aos='fade-left' >
                        <img src={m3} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">Natalie Jones</p>
                            <p className="text-[#9B9FAF]">Web Designer</p>


                        </div>



                    </div>



                </div>
                <div className="flex items-center gap-4 lg:flex-row flex-col  md:px-40 justify-center">
                    <div className="flex flex-col gap-2" data-aos='fade-right' >
                        <img src={m4} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">Nicky Carter</p>
                            <p className="text-[#9B9FAF]">Project Manager</p>


                        </div>



                    </div>
                    <div className="flex flex-col gap-2"data-aos='fade-up' >
                        <img src={m5} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">Jason Lee</p>
                            <p className="text-[#9B9FAF]">Art Director</p>


                        </div>



                    </div>
                    <div className="flex flex-col gap-2"data-aos='fade-left' >
                        <img src={m6} alt="" className="" />
                        <div className="flex flex-col">
                            <p className="text-2xl text-[#FCFCFC]">John Lewis</p>
                            <p className="text-[#9B9FAF]">Photographer</p>


                        </div>



                    </div>



                </div>



            </div>




        </div>
    )
}

export default Team