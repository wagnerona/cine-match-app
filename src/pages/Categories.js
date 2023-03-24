import React, { useState } from 'react'
import { fetchData } from '../Utils/movie-api'



const Categories = () => {

    const [Genre, setGenre] = useState("");
    const [Language, setLanguage] = useState("");
    const [Year, setYear] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // After submit button:
        const data = await fetchData(Genre, Language, Year);
        console.log(data);
        MovieCards(data)
    };

    return (
        <div name="categories" className='w-full md:h-screen text-[#212529]'>
            <div className='max-w-[500px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl text-center un'>Movie types</h1>
                <form className='flex flex-col pt-10' onSubmit={handleSubmit}>
                    <label className="font-medium text-lg pt-3">
                        Genre:
                        <input className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2' type="text" placeholder="Action, Thriller, Comedy..." value={Genre} onChange={(e) => setGenre(e.target.value)} />
                    </label>
                    <label className="font-medium text-lg pt-3">
                        Language:
                        <input className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2' type="text" placeholder="In short format 'en' = english" value={Language} onChange={(e) => setLanguage(e.target.value)} />
                    </label>
                    <label className="font-medium text-lg pt-3 pb-5">
                        Year:
                        <input className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2' type="text" placeholder="2007" value={Year} onChange={(e) => setYear(e.target.value)} />
                    </label>
                    <button className='rounded-md bg-gray-400 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Categories