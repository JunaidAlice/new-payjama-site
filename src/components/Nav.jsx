import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.svg";
import twitter from "../assets/x.svg";
import fb from "../assets/fb.svg";
import tiktok from "../assets/tick.svg";
import tel from "../assets/tel.svg";
import insta from "../assets/insta.svg";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const linkHoverEffect = {
    initial: { width: 0 },
    hover: { width: '100%', transition: { duration: 0.3 } }
  };

  return (
    <div className=' p-10  max-w-[1400px] mx-auto ' >
      <div className="  rounded-[20px] bg-[#8523a846]">
        <div className="flex items-center justify-between border gap-2  border-[#585471] rounded-[20px] p-4 text-xl text-white">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="Logo"  className='bounce-in-top'/>
            <p className="lg:text-3xl text-xl font-semibold ">pyjamacoin</p>
          </div>

          {/* Desktop Menu */}
          <div className="lg:flex hidden gap-2 items-center">
            {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
              <motion.div 
                className="relative cursor-pointer"
                key={index}
                onClick={handleMenuItemClick}
                whileHover="hover"
                initial="initial"
              >
                <p className="relative z-10">{item}</p>
                <motion.div 
                  className="absolute bottom-[-4px] left-0 h-[2px] bg-[#BA45E3]"
                  variants={linkHoverEffect}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Social Icons and Button */}
          <div className="lg:flex hidden items-center justify-between">
            <div className="flex items-center p-2 gap-2 justify-between">
              <img src={twitter} alt="Twitter" className="cursor-pointer mt-2 w-10 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={tiktok} alt="TikTok" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={tel} alt="Telegram" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={insta} alt="Instagram" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={fb} alt="Facebook" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
            </div>
            <button className='p-2 px-4 min-w-fit rounded-full text-[16px] hover:bg-[#a63ace]  transition-all duration-300 delay-75 bg-[#BA45E3]'>Connect Wallet</button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.div 
            className="flex items-center justify-center lg:hidden cursor-pointer"
            onClick={handleMenuToggle}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <RxCross2 /> : <TiThMenu />}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="absolute  lg:hidden gap-6  bg-black  left-0  top-[185px] p-10 rounded-[20px] rounded-l-none  flex flex-col items-center justify-center text-white z-50"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-end w-full p-4">
              
            </div>
            <div className="flex flex-col items-center gap-4 text-2xl mt-4">
            {['Home', 'About Us', 'Services', 'Contact'].map((item, index) => (
              <motion.div 
                className="relative cursor-pointer"
                key={index}
                onClick={handleMenuItemClick}
                whileHover="hover"
                initial="initial"
              >
                <p className="relative z-10">{item}</p>
                <motion.div 
                  className="absolute bottom-[-4px] left-0 h-[2px] bg-[#BA45E3]"
                  variants={linkHoverEffect}
                />
              </motion.div>
            ))}
            </div>
            <motion.button 
              className='p-2 px-4 min-w-fit rounded-full text  bg-[#BA45E3]'
              whileHover={{ scale: 1.1 }}
            >
              Connect Wallet
            </motion.button>
            <div className="flex items-center p-2 gap-2 mt-6 justify-center">
            <img src={twitter} alt="Twitter" className="cursor-pointer mt-2 w-10 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={tiktok} alt="TikTok" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={tel} alt="Telegram" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={insta} alt="Instagram" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
              <img src={fb} alt="Facebook" className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Nav;
