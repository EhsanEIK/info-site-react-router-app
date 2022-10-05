import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countris = useLoaderData();

    return (
        <div className='mb-24'>
            <h2 className='text-center text-4xl mb-5'>Welcome to the World Tour!!!</h2>
            <hr />
            <p className='text-center text-xl my-5'>Total {countris.length} countries are here.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                {
                    countris.map(country => <Country
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>
        </div >
    );
};

export default Countries;