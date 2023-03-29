import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";




const Form = ({ onSubmit }) => {

    const [formData, setFormData] = useState({ Genre: "", Language: "", Year: "" })
    const navigate = useNavigate();


    const handleChange = (e) => {

        // After submit button:
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate("/picks");
    }

    return (
        <div name="Form" className='w-full md:h-screen text-[#212529]'>
            <div className='max-w-[500px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl text-center un'>Movie types</h1>
                <form onSubmit={handleSubmit}>
                    <label className="font-medium text-lg pt-3">
                        Genre:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2'
                            placeholder="Action, Thriller, Comedy..."
                            type="text"
                            name="genre"
                            value={formData.g}
                            onChange={handleChange}
                        />
                    </label >
                    <br />
                    <label className="font-medium text-lg pt-3">
                        Year:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2'
                            placeholder="2005"
                            type="text"
                            name="year"
                            value={formData.y}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label className="font-medium text-lg pt-3">
                        Original Language:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2'
                            placeholder="Spanish, French, German ..."
                            type="text"
                            name="language"
                            value={formData.l}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button
                        className='rounded-md bg-gray-400 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500'
                        type="submit"
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form