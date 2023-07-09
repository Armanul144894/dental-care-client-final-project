import React from 'react';

const Loader = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            {/* <div className="w-16 h-16 border-4 border-[#006CEC] border-dashed border-t-transparent rounded-full animate-spin relative"></div> */}
            <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
            <p>Please Wait...</p>
        </div>
    );
};

export default Loader;