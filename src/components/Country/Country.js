import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    const { name, capital, area, flags } = country;
    return (
        <div className='border-2 rounded-lg border-neutral-500 relative md:m-0 m-5'>
            <div className='text-lg mb-3 p-5'>
                <img className='w-full h-48' src={flags.png} alt={`flag-${name?.common}`} />
                <h2 className='mt-2'><span className='font-bold mr-2'>Country:</span> {name?.common}</h2>
                <h2><span className='font-bold mr-2'>Capital:</span> {capital ? capital[0] : 'N/A'}</h2>
                <h2><span className='font-bold mr-2'>Area:</span> {area}</h2>
            </div>
            <div className='flex justify-center'>
                <button className='bg-teal-600 text-white rounded-sm w-full px-2 py-3 hover:bg-teal-700'>Get Details</button>
            </div>
        </div >
    );
};

export default Country;