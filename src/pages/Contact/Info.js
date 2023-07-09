import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import InfoMap from './InfoMap';

const Info = () => {
    return (
        <section className='max-w-[1282px] mx-auto px-5 lg:px-0  mt-5 lg:mt-[90px]'>
            <div className='lg:flex lg:justify-between'>
                {/* left side  */}
                <div>
                    <h1 className='text-[#0C0047] text-[35px] text-["Poppins"] font-semibold leading-[62px] tracking-[0.02em]'>Contact</h1>

                    <p className='text-[#1E1E1E] text-xl font-["Nunito"] leading-[22px] font-normal mt-5 max-w-[800px] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni aliquid fugit ullam incidunt quisquam expedita eaque ea minima quae molestiae dolores optio nemo sapiente, mollitia soluta pariatur quo corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consequatur rerum ab, mollitia maxime eligendi facere ex iure voluptatibus aut possimus enim atque eum deserunt laboriosam, tempore nam dolorem.</p>

                    {/* map  */}
                    <InfoMap></InfoMap>
                </div>

                {/* right side  */}
                <div className='lg:w-[393px] mt-10 lg:mt-[30px] border border-[#006CEC80]  rounded-[20px] px-5 py-8 text-xl'>
                    <h2 className='underline text-[#354895] font-semibold text-xl leading-[25px] font-["Poppins"]'>Contact with us:</h2>
                    <p className='font-["Poppins"] mt-6 leading-[30px]'>
                        <span className='font-medium'>Call us: </span> +8801302-69-0768 <span className='font-medium'> (9AM - 6PM)</span>
                    </p>
                    <p className='font-medium font-["Poppins"] text-xl  leading-[30px]'>E-mail: <span className='text-[#006CEC] font-normal'> <a href="mailto:info@softvalley.net">info@mindcare.net</a></span></p>


                    <p className='text-lg font-medium leading-[30px]'>Sunday - Thursday 9 am to 6 pm</p>

                    <div className='flex gap-5 mt-10'>
                        <a href='/'
                            title='Facebook'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#3d8bff] text-white flex items-center rounded-full justify-center'>
                            <FaFacebookF className='h-5 w-5 cursor-pointer'></FaFacebookF>
                        </a>
                        <a href='/'
                            title='Twiter'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#34c3eb] text-white flex items-center rounded-full justify-center'>
                            <FaTwitter className='h-5 w-5 cursor-pointer'></FaTwitter>
                        </a>
                        <a href='/'
                            title='Instagram'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#ff0000] text-white flex items-center rounded-full justify-center'>
                            <FaInstagramSquare className='h-5 w-5 cursor-pointer'></FaInstagramSquare>
                        </a>
                        <a href='/'
                            title='LinkedIn'
                            target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-[#354895] text-white flex items-center rounded-full justify-center'>
                            <FaLinkedinIn className='h-5 w-5 cursor-pointer'></FaLinkedinIn>
                        </a>
                    </div>
                </div>
            </div>


            {/* second section  */}

            <div className='mt-10 lg:mt-[150px] border border-[#F1552480] p-2 lg:p-10 rounded-[20px]'>
                <div className='lg:flex justify-between items-center'>
                    {/* left  */}
                    <div className='flex gap-5 max-w-[900px]'>
                        {/* <img src={customerCare} className='w-20 h-20 lg:w-[126px] lg:h-[132px]' alt="" /> */}
                        <div>
                            <p className='font-semibold text-xl lg:text-[28px] font-["Poppins"] lg:leading-[42px]'>Empowering Mental Well-being: Predictive Insights and Personalized Consultation</p>
                            <p className='font-normal text-sm lg:text-xl lg:leading-[24px] py-5'>We are always ready to serve you. Please share your ideas and values with us.</p>
                            <p className='font-normal text-sm lg:text-xl lg:leading-[24px]'>Sunday - Thursday 9 am to 6 pm</p>
                        </div>
                    </div>

                    {/* right  */}
                    <div className='mt-5 lg:mt
                    '>
                        <a href="tel:+8801302690768">
                            <div className='flex items-center justify-center'>
                                <button className="text-xl text-white px-[33px] py-[10px] hover:bg-[#008575] bg-[#13a998] rounded-[5px] flex items-center ">
                                    <BsTelephone className='w-[32px] h-[32px]' /> +880 1302690768
                                </button>
                            </div>
                        </a>
                        <p className='text-[#696969] font-light leading-[22px] text-[15px] mt-5 text-center'>* Normal call rate from any number *</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;