import React from "react";
import logo from "../assets/logo.svg";
import google from "../assets/footer/googleplaystore.svg";
import app from "../assets/footer/appstore.svg";
import locat from "../assets/footer/location.svg";
import mail from "../assets/footer/mail.svg";
import glob from "../assets/footer/glob.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/footer/twiter.svg";
import insta from "../assets/insta.svg";
import ball from "../assets/footer/ball.svg";

function Footer() {
  return (
    <>
      <footer className="  space-y-6 md:space-y-0 md:flex justify-around  p-10    ">
        <aside className="w-96 space-y-5">
          <div className="flex items-center">
            <img src={logo} alt="" />{" "}
            <div>
              <h1 className="text-3xl font-semibold">PyjamaCoin Limited</h1>{" "}
              <h1 className="font-semibold">Company Number: 15915091</h1>
            </div>
          </div>

          <h1 className="hidden md:flex font-semibold">
            Download the app by clicking the link below :
          </h1>
          <div className="hidden md:flex  gap-4 justify-around  ">
            <a href="#"></a>
            <img className="w-[174px]" src={google} alt="" />
            <a href="#">
              <img className="border" src={app} alt="" />
            </a>
          </div>
        </aside>
        <nav className=" ">
          <div className="grid  space-y-4">
            <h6 className="  font-bold text-xl">Quick Links</h6>
            <a href="#" className="link link-hover font-semibold">
              About
            </a>
            <a href="#" className="link link-hover font-semibold">
              Presales
            </a>
            <a href="#" className="link link-hover font-semibold  ">
              Home
            </a>
            <a href="#" className="link link-hover font-semibold">
              Whitepaper
            </a>
          </div>
        </nav>
        <nav className="grid space-y-4">
          <h6 className="font-bold text-xl">Contack Info</h6>
          <a className="link link-hover items-center gap-2 flex">
            <img src={locat} alt="#" />
            <h1 className="font-semibold">
              128, City Road, London, EC1V 2NX UNITED KINGDOM
            </h1>
          </a>
          <a className="link link-hover items-center gap-2 flex">
            <img src={mail} alt="#" />
            <h1 className="font-semibold">info@pyjama-coin.co</h1>
          </a>
          <a className="link link-hover items-center gap-2 flex">
            <img src={glob} alt="#" />
            <h1 className="font-semibold">www.pyjama-coin.com</h1>
          </a>
        </nav>
        <nav className="grid space-y-4 ">
          <h6 className="font-bold text-xl">Others</h6>
          <a className="link link-hover font-semibold">BODs</a>
          <a className="link link-hover font-semibold">Privacy</a>
          <a className="link link-hover font-semibold">Legal</a>
          <a className="link link-hover font-semibold">Customer Support</a>
        </nav>
        <h1 className="md:hidden flex font-semibold">
          Download the app by clicking the link below :
        </h1>
        <div className="md:hidden flex  gap-4 justify-around  ">
          <a href="#"></a>
          <img className="w-[174px]" src={google} alt="" />
          <a href="#">
            <img className="border" src={app} alt="" />
          </a>
        </div>
      </footer>
      <div className="w-[100%] border rounded-full border-white"></div>
      <div className="flex justify-between mx-16 items-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Pyjama coin. All rights reserved.
        </p>
        <div className="flex ">
          <img src={fb} alt="#" />
          <img src={twitter} alt="#" />
          <img src={ball} alt="#" />
          <img src={insta} alt="#" />

        </div>
      </div>
    </>
  );
}

export default Footer;
