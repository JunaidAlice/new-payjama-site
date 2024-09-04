import ReactPlayer from "react-player";
import img1 from "../assets/fb.svg";
import img2 from "../assets/tick.svg";
import img3 from "../assets/tel.svg";
import img4 from "../assets/insta.svg";
import img5 from "../assets/fb.svg";
// import from './Extrapage.jsx'

import Scroll from "./Scroll";
import video from "../assets/hero section/video.mp4";

import { useState, useEffect } from "react";

import { IoCopy } from "react-icons/io5";

const Home = () => {
  const imgLinks = [
    { id: 1, title: img1 },
    { id: 2, title: img2 },
    { id: 3, title: img3 },
    { id: 4, title: img4 },
    { id: 5, title: img5 },
  ];

  return (
    <>
      <div className="p-4  grid grid-cols-1 justify-center md:flex gap-6 text-white  font-inter font-weight ">
        <div className="vedio md:w-[65%] border border-[#787878] bg-[#BA45E3]    p-2 bg-opacity-15 flex justify-center items-center flex-col rounded-2xl space-y-5 overflow-hidden">
          <h1 className="text-5xl font-bold text-center">Join the PyjamaCoin Presale</h1>
          <div className=" rounded-2xl border w-[90%] flex justify-center">
            <ReactPlayer className="max-w-[90%] h-auto" controls url={video} />
          </div>
          <div className="loop flex justify-center">
            <div className="">
              <Scroll />
            </div>
          </div>{" "}
          <div className="flex  justify-center md:flex md:justify-around  h-16 md:h-6 w-[90%] items-center ">
            <h1 className="flex text-nowrap  ">
              Join the Pyjama Community Now!
            </h1>
            <div className="flex md:gap-2 w-[90%]  items-center justify-end flex-1">
              {imgLinks.map((t, id) => (
                <a key={id} href={t.Path}>
                  <img className="w-[30px]" src={t.title} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-[#787878] border rounded-2xl bg-[#BA45E3] bg-opacity-15">
          <Aside />
        </div>
      </div>
      <Extrapage/>
      <Thrives/>
    </>
  );
};

// Aside Card Component

const Aside = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <div className="   rounded-2xl ">
      <div className="flex flex-col py-20 items-center justify-center space-y-8">
        <h1  className="text-5xl font-bold text-center">Presale Live Now!</h1>
        <h1 className="text-xl">Second Round</h1>
        {/* Timer */}
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="border p-1 w-[90%] rounded-2xl relative">
          <div className="bg-[#BA45E3] p-2 py-4 rounded-xl w-[40%] ">
            {" "}
            <div className=" w-fit  absolute right-6 top-2"> 35%</div>
          </div>
        </div>

        <h1>
          1 SOL = <span>~25,000 $PYJAMA COIN</span>
        </h1>
        <div className="overflow-hidden flex">
          <button className="font-semibold  text-xs bg-[#BA45E3] px-2 py-1 rounded-l-lg">
            Wallet Address
          </button>{" "}
          <div className="flex justify-around items-center bg-white text-black">
            <div className="text-ellipsis overflow-hidden w-[150px] ">
              jasdfjkhasdfasdfasdfasdfasdfajkh;fhhwelfjkhalksdhasdfasfdfjkhalksdhfI
            </div>
            <div>
              <IoCopy />
            </div>
          </div>
        </div>
        <button className="bg-[#BA45E3] py-2 w-[90%]  rounded-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

// Countdown Timer Function
function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.days }}></span>
        </span>
        <div className=" flex justify-center  ">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex   mb-3 mt-2"></div>
        </div>
        days
      </div>

      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.hours }}></span>
        </span>
        <div className=" flex justify-center  ">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex   mb-3 mt-2"></div>
        </div>
        hours
      </div>
      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.minutes }}></span>
        </span>
        <div className=" flex justify-center  ">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex   mb-3 mt-2"></div>
        </div>
        min
      </div>
      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.seconds }}></span>
        </span>
        <div className=" flex justify-center  ">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex mb-3 mt-2 "></div>
        </div>
        sec
      </div>
    </div>
  );
}

// Calculate time remaining for Countdown
function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default Home;
import Happy2 from "../assets/bgstuf/Happy2.svg";
import appstore from "../assets/bgstuf/appstore.svg";
import Extrapage from "./extrapage";


const Thrives = () => {
  return (<>
    <div className="font-inter font-weight text-white bg-[url('C:\Users\junaidAly\Desktop\pyjama\src\assets\bgstuf\bg.svg')] bg-cover bg-no-repeat">
      <div className="flex justify-center items-center p-10  ">
<div className="md:w-[50%] text-center w-[90%]">
        <h1 className="text-4xl  lg:text-5xl font-bold">Play Earn Thrive Pyjama Coin</h1>{" "}
        <p>
          Unlock the Future of Gaming and Crypto with Pyjama Coin. Step into a
          world where your favorite childhood game meets the cutting-edge
          technology of cryptocurrency. Discover the unique benefits of Pyjama
          Coin today!
        </p></div>
      </div>
      <div className="md:flex md:justify-evenly items-center flex justify-center flex-col md:flex-row">
        <div className="md:w-[25%] w-[90%] md:text-start text-center">
          <h1 className="text-3xl font-bold">The Perfect Blend of Fun and Value</h1>{" "}
          <p>
            Pyjama Coin transforms your gaming experience by merging the joy of
            digital pets with real cryptocurrency rewards. Enjoy endless fun
            while earning coins that hold real value. Join us and start your
            adventure now!
          </p>
        </div>
        <div className=" md:flex justify-center hidden">
          <div className="mockup-phone border-primary md:w-[100%] w-[70%] h-[70%] md:h-[100%]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <div><img className="    " src={Happy2} alt="" /></div>
                <div className="mt-9 md:mr-0 mr-28"> <img src={appstore} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[25%] w-[90%] text-center md:text-start mt-10 md:mt-0">
          <h1 className="text-3xl font-bold">Earn While You Play</h1>{" "}
          <p>
            With Pyjama Coin, every interaction with your virtual pet is
            rewarding. Complete daily tasks, join community events, and watch
            your coin balance grow. Turn your gaming passion into valuable
            rewards!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-10  pb-10"><div className="text-center w-[90%] md:w-[50%]">
        <h1 className="text-3xl font-bold">Shape the Future with Us</h1>{" "}
        <p>
          Be a part of our thriving community. Influence app development through
          our changelog, participate in decision-making, and connect with fellow
          enthusiasts. Your voice matters!
        </p></div> 
      </div>
    </div></>
  );
};
