import React, { useState } from 'react';

const InfoMap = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div className="mapouter relative text-right h-full w-full mt-10">
                    <div class="gmap_canvas overflow-hidden bg-0 h-full w-full">
                        {/* <iframe
                            title='softvalley'
                            className='w-[350px] lg:w-[800px] h-[200px] lg:h-[393px] rounded-[10px]'
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=softvalley banani&t=&z=10&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0">
                        </iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.358572278813!2d90.31758427608158!3d23.876900483906766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1688844600721!5m2!1sen!2sbd" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[350px] lg:w-[800px] h-[200px] lg:h-[393px] rounded-[10px]' title='softvalley'></iframe>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoMap;