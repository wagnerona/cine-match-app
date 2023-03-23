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
    };

    return (
        <div>
            <h2>Movie types</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Genre:
                    <input type="text" value={Genre} onChange={(e) => setGenre(e.target.value)} />
                </label>
                <br />
                <label>
                    Language:
                    <input type="text" value={Language} onChange={(e) => setLanguage(e.target.value)} />
                </label>
                <br />
                <label>
                    Year:
                    <input type="text" value={Year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Categories