// import React from 'react'
import tick from "../assets/tickk.svg";
import p from "../assets/p.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";
import s8 from "../assets/s8.svg";

import s11 from "../assets/s11.svg";
import s12 from "../assets/s12.svg";
import vid from "../assets/video.mp4";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function How() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animations
      once: true, // Whether animation should happen only once or every time you scroll up and down
    });
  }, []);
  return (
    <div className=" bg py-20 px-10 lg:p-20 text-white overflow-hidden">
      <div className=" max-w-[1400px]  mx-auto flex flex-col gap-4 items-center  overflow-x-hidden justify-center ">
        <p className="text-center text-4xl md:text-6xl font-bold "  data-aos="fade-right">
          How to Participate in the PyjamaCoin
          <br /> Presale Using Phantom Wallet
        </p>
        <p className="text-center"  data-aos="fade-left">
          Understand the exciting features of our app that make caring for your
          digital pet both engaging and
          <br /> rewarding. Explore how you can earn Pyjama Coins while enjoying
          a unique gaming experience.
        </p>

        <div className=" grid gap-4 place-content-center lg:grid-cols-4 grid-cols-1">
          <div className=" lg:col-span-2 rounded-lg "  data-aos="fade-right">
            <video className="w-full h-full rounded-lg">
              <source src={vid} />
            </video>
          </div>

          <div className="rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-left">
            <p className="w-full text-xl font-bold">Step 1</p>
            <img src={tick} alt="" className="" />
            <p className="text-xl font-semibold text-center">Choose Your Pet</p>
            <p className="text-center">
              Select your pet and choose between a male or female Shiba Inu.
              Start your journey with a pet that feels just right for you.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-right">
            <p className="w-full text-xl font-bold">Step 2</p>
            <img src={p} alt="" className="" />
            <p className="text-xl font-semibold text-center">Name Your Pet</p>
            <p className="text-center">
              Give your pet a unique name to make it truly yours. Your pet’s
              name adds a personal touch to your gaming experience.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-left">
            <p className="w-full text-xl font-bold">Step 3</p>
            <img src={s3} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Customize Your Pet
            </p>
            <p className="text-center">
              Give your pet a unique name to make it truly yours. Your pet’s
              name adds a personal touch to your gaming experience.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-right">
            <p className="w-full text-xl font-bold">Step 4</p>
            <img src={s4} alt="" className="" />
            <p className="text-xl font-semibold text-center">Track Steps</p>
            <p className="text-center">
              Take your pet for walks and track your steps. Walking your pet
              contributes to its happiness and earns you rewards.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-left">
            <p className="w-full text-xl font-bold">Step 5</p>
            <img src={s5} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Daily Care Tasks
            </p>
            <p className="text-center">
              Keep your pet happy by feeding, bathing, and playing with it.
              Ensure your pet’s well-being with regular care.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-right">
            <p className="w-full text-xl font-bold">Step 6</p>
            <img src={s6} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Engage In Activities
            </p>
            <p className="text-center">
              Pets have three emotions: sad, okay, and happy. Only happy pets
              earn the maximum Pyjama Coins when they sleep in pajamas.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-left">
            <p className="w-full text-xl font-bold">Step 7</p>
            <img src={s7} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Emotion-Based Earnings
            </p>
            <p className="text-center">
              Select your pet and choose between a male or female Shiba Inu.
              Start your journey with a pet that feels just right for you.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-right">
            <p className="w-full text-xl font-bold">Step 8</p>
            <img src={s8} alt="" className="" />
            <p className="text-xl font-semibold text-center">Pet Emotions</p>
            <p className="text-center">
              Monitor your pet’s emotions: sad, okay, and happy. Only happy pets
              earn the maximum Pyjama Coins when they sleep in pajamas.
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center" data-aos="fade-left">
            <p className="w-full text-xl font-bold">Step 9</p>
            <img src={s11} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Sleeping Rewards
            </p>
            <p className="text-center">
              Ensure your pet is happy and dressed in pajamas to earn coins
              while it sleeps. The happier your pet, the more coins you earn!
            </p>
          </div>
          <div className=" rounded-lg bg-[#2b0a49] flex items-center flex-col gap-2 p-8 justify-center"data-aos="fade-right">
            <p className="w-full text-xl font-bold">Step 10</p>
            <img src={s12} alt="" className="" />
            <p className="text-xl font-semibold text-center">
              Receive Notifications
            </p>
            <p className="text-center">
              Get push notifications to stay updated on your pet’s needs. Attend
              to your pet promptly to keep it happy and healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
