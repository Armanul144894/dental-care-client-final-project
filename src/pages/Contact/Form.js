import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
// import emailjs from '@emailjs/browser';
// import { toast, Toaster } from 'react-hot-toast';
// import './Contact.css';
// import UNIVERSAL from '../../../config';
// import useCurrentDateTime from '../../../Hooks/useCurrentDateTime';

const ContactForm = () => {

    // const { emailjs_config } = UNIVERSAL
    const [loading, setLoading] = useState(false);

    // const form = useRef();
    // console.log(form.current)

    // // const { formattedDate, formattedTime } = useCurrentDateTime();
    // const date = formattedDate;
    // const time = formattedTime;

    // const handleSubmit = e => {
    //     setLoading(true);
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.user_name.value;
    //     const email = form.user_email.value;
    //     const phone = form.user_phone.value;
    //     const message = form.message.value;

    //     const msgDetails = {
    //         name,
    //         email,
    //         phone,
    //         message,
    //         date,
    //         time
    //     }
    //     console.log(msgDetails);
    //     // save messages data to the database
    //     fetch('http://localhost:5000/messages', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(msgDetails)
    //     })
    //         .then(res => res.json())
    //         .then(result => console.log(result))

    //     sendEmail()
    //     e.currentTarget.reset();
    // }

    // const sendEmail = () => {
    //     console.log("Inside Send mail func", form.current);
    //     // myGmail
    //     emailjs.sendForm(emailjs_config?.service_id, emailjs_config?.template_id, form.current, emailjs_config?.public_key)

    //         // officeMail
    //         // emailjs.sendForm('service_1q2801l', 'template_ixv64vy', form.current, '37F99TeY-Qp6wRanZ')
    //         .then((result) => {
    //             console.log(result);
    //             if (result.text === "OK") {
    //                 toast.success('Message Sent Successfully.', {
    //                     duration: 4000,
    //                     className: 'toastCls'
    //                 });
    //                 setLoading(false);
    //             }

    //         }, (error) => {
    //             console.log(error.text);
    //         });

    // };

    return (
        <section className='max-w-[1281px] mx-auto px-5 xl:px-0 mt-20 lg:mt-[150px]' id='contactForm'>
            <div className='flex flex-col lg:flex-row justify-center'>

                <div className='font-["Manrope"] w-full lg:w-1/2'>
                    <div className='lg:max-w-[487px]'>
                        <h1 className='text-[#0C0047] text-2xl lg:text-[40px] lg:leading-[60px] font-extrabold text-center lg:text-start'>Get in <span className='text-[#F15524]'>Touch</span> With Us.</h1>

                        <p className='text-[20px] text-[#584F49] lg:leading-[28px] tracking-[0.05em] mt-5 text-justify'>We are committed to helping businesses achieve their goals through innovative and customized software solutions. Our team of experts is dedicated to understanding your unique needs and delivering solutions that meet your specific business requirements. Get in touch with us today to see how we can help you take your business to the next level. Let's work together to achieve your business goals!.</p>
                    </div>
                </div>


                <div className='w-full lg:w-1/2 flex flex-col lg:items-end mt-5 lg:mt-0'>
                    <div className='w-full max-w-[564px] shadow-[0px_80px_85px_rgba(153,171,219,0.2)] p-3 lg:p-12 rounded-[5px] lg:rounded-[20px] border border-[#FA9483]'>
                        {/* onSubmit={sendEmail} */}
                        <form>
                            <div>
                                {/* name  */}
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder='Your Name'
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>

                            {/* email */}
                            <div className='mt-5'>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder='Email Address'
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>

                            {/* mobile */}
                            <div className='mt-5'>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder='Phone Number'
                                    required
                                    className="w-full lg:max-w-[484px] py-[17px]  mx-auto outline-none  px-5 border border-solid border-[#CFCFCF] text-sm md:text-[16px] text-[#584F49] font-['Manrope'] placeholder-[#584F49] md:leading-[26px] rounded-[5px]"
                                />
                            </div>

                            {/* message  */}
                            <div className='mt-5'>
                                <textarea
                                    name="message"
                                    className="form-control block w-full lg:max-w-[484px]  px-5 py-[17px] text-sm md:text-base font-normal text-[#584F49] placeholder-[#584F49] font-['Manrope'] border border-solid border-[#CFCFCF] rounded-[5px] transition ease-in-out m-0 focus:outline-none h-[165px]"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Message"
                                ></textarea>

                            </div>

                            {/* send button  */}
                            <div>
                                {/* <input
                                    type="submit"
                                    value="Send Message"
                                    className='font-["Poppins"] bg-[#006CEC] hover:bg-black rounded-md text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[30px] cursor-pointer  mt-5'
                                /> */}
                                {
                                    loading ? <button className='font-["Poppins"] bg-[#13a998] rounded-md text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[30px] cursor-pointer  mt-5' disabled>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg> Sending...
                                    </button> : <button className='font-["Poppins"] bg-[#13a998] hover:bg-black rounded-md text-white font-medium text-base md:leading-[30px] md:tracking-[-0.02em] py-[10px] px-[30px] cursor-pointer  mt-5'>Send Message</button>

                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default ContactForm;
