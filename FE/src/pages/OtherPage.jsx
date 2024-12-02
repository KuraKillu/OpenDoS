import React from 'react';

const Page2 = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-teal-200 text-black p-4 flex flex-col items-center">
                <div className="bg-green-500 p-5 rounded-full">✔</div>
                <h1 className='mt-3 text-center text-black font-bold'>Login Success</h1>
            </div>
        </div>
    );
};

export default Page2;