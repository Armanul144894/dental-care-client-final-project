import React from 'react';
// import footerBG from '../../../Assets/background/footer.png';
// import footerBG2 from '../../../Assets/background/footer2.png';
import logo from '../../../src/assets/logo/Picture1.png';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <footer className='relative'>
      {/* <img className='md:hidden w-full' src={footerBG} alt="" />
            <img className='md:hidden w-full z-[-1] absolute top-[-2px]' src={footerBG2} alt="" /> */}

      <div className='w-full absolute mt-10 md:mt-[150px] text-white font-["Manrope"] bg-[#008575] pt-5 md:pt-[180px]'>
        <div className='w-full max-w-[1282px] mx-auto px-5 lg:px-0 flex flex-col md:flex-row justify-between'>

          {/* left part  */}
          <div>
            {/* logo */}
            <div className='bg-white w-[220px] flex justify-center rounded-md mb-4 md:mb-6'>
              <img className='w-full' src={logo} alt="" />
            </div>

            {/* small dercription */}
            <p className='font-["Manrope"] text-xl leading-[28px] tracking-[-0.02em] max-w-[330px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ea repellat. Aliquid, aspernatur fuga veritatis excepturi, deserunt, reprehenderit optio natus iusto ducimus praesentium ex at ut. Reprehenderit culpa dolorum a?</p>

            {/* social links */}
            <div className='flex items-center gap-4 mt-6 md:mt-10'>
              <a href='https://www.facebook.com/softvalley.net'
                target='_blank' rel="noopener noreferrer">
                <FaFacebookF className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-black'></FaFacebookF>
              </a>
              <a href='https://twitter.com/SoftValleyNet'
                target='_blank' rel="noopener noreferrer">
                <FaTwitter className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-black'></FaTwitter>
              </a>
              <a href='https://www.instagram.com/soft.valley/'
                target='_blank' rel="noopener noreferrer">
                <FaInstagramSquare className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-black'></FaInstagramSquare>
              </a>
              <a href='https://www.linkedin.com/company/softvalley-net/'
                target='_blank' rel="noopener noreferrer">
                <FaLinkedinIn className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-black'></FaLinkedinIn>
              </a>
              {/* <a href='https://www.facebook.com/softvalley.net'
                                target='_blank' rel="noopener noreferrer">
                                <FaYoutube className='h-5 w-5 cursor-pointer hover:scale-125 hover:text-[#F15524]'></FaYoutube>
                            </a> */}
            </div>
          </div>


          {/* middle part  */}
          <div className='flex flex-col md:flex-row gap-2 lg:gap-20 mt-6 md:mt-0'>
            {/* <div className='w-full border border-dashed border-b-1 border-white m-0 p-0 md:hidden'></div> */}

            {/* compnay  */}
            <div>
              <h3 className='text-[21px] font-bold leading-[24px] mb-6'>Lorem</h3>
              <ul className=''>
                <li className='hover-underline-animation text-xl leading-[24px] mb-[20px]'><Link to=''>Lorem</Link></li>
                <li className='hover-underline-animation text-xl leading-[24px] mb-[20px]'><Link to=''>Lorem</Link></li>
                <li className='hover-underline-animation text-xl leading-[24px] mb-[20px]'><Link to=''>Lorem</Link></li>
                <li className='hover-underline-animation text-xl leading-[24px]'><Link to=''>Lorem</Link></li>
              </ul>
            </div>


            {/* product  */}
            <div>
              <h3 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Lorem</h3>
              <ul>
                <li className='hover-underline-animation text-xl leading-[24px] mb-[20px]'><Link to=''>Lorem</Link></li>
                <li className='hover-underline-animation text-xl leading-[24px] mb-[20px]'><Link to=''>Lorem</Link></li>
              </ul>
            </div>


            {/* Resources  */}
            {/* <div>
                            <h3 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Resources</h3>
                            <ul>
                                <li className='hover-underline-animation text-xl leading-[24px] mb-[18px]'><Link to='/'>Proposal Template</Link></li>
                                <li className='hover-underline-animation text-xl leading-[24px] mb-[18px]'><Link to='/'>Invoice Template</Link></li>
                                <li className='hover-underline-animation text-xl leading-[24px] mb-[18px]'><Link to='/'>Tutorial</Link></li>
                                <li className='hover-underline-animation text-xl leading-[24px]'><Link to='/'>How to write a contract</Link></li>
                            </ul>
                        </div> */}

          </div>

          {/* right part  */}
          <div className='flex flex-col'>
            <h1 className='mt-6 md:mt-0 text-[21px] font-bold leading-[24px] mb-6'>Contact Us</h1>
            <p className='text-xl leading-[24px] mb-[18px] flex items-center gap-1'>
              <CgMail className='w-[22px] h-[22px]'></CgMail>
              <span>info@mindcare.net</span>
            </p>
            <p className='text-xl leading-[24px] mb-[18px] flex items-center gap-1'>
              <MdOutlineWifiCalling3 className='w-[22px] h-[22px]'></MdOutlineWifiCalling3>
              <span>+8801710-00-0000</span>
            </p>
            <p className='text-xl leading-[24px] mb-[18px] flex items-start gap-1'>
              <HiOutlineLocationMarker className='w-[22px] h-[22px]'></HiOutlineLocationMarker>
              <span>House#45(level-5), Road#27, <br /> Block #A, Banani, Dhaka 1213.</span>
            </p>
          </div>

        </div>
        <div className='md:mt-[60px]'>
          <div className='w-full border border-b-[0px] border-slate-200 absolute '></div>
          <div className='text-center py-3 lg:py-[22px] text-xl'><span>Copyright © 2023 Mindcare+.</span></div>
        </div>
      </div>
      {/* <img className='absolute md:h-[787px] z-[-1] w-full hidden md:block' src={footerBG} alt="" />
            <img className='absolute md:h-[787px] mt-[-5px] z-[-2] w-full hidden md:block' src={footerBG2} alt="" /> */}



      {/* <ScrollToTop
                smooth
                color="#F15524"
                top="500"
                className='flex items-center justify-center mb-20'
            /> */}
    </footer>
  );
};

export default Footer;