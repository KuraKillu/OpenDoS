import React from 'react';

const ConfirmationPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-accent2">
            <div className="bg-primary text-white p-4 flex flex-col items-center">
                <div className="bg-secondary p-5 rounded-full">✔</div>
                <h1 className='mt-3 text-center text-[#FFFFFF] font-bold'>Sign In Completed</h1>
            </div>
        </div>
    );
};

export default ConfirmationPage;