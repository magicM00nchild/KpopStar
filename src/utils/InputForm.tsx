import React, { useState } from 'react';
import "./InputForm.css"
import { useNavigate } from 'react-router-dom';
import { audioLinks } from '../audioLinks';

const InputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); 

    const redirect = (inputValue: string) => {
        const exists = audioLinks.some((item) => item.id.toString() === inputValue);
        if (exists){
            navigate(`/audio/${inputValue}`);
        } else {
            navigate("/not-found");
        }
    }


    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            redirect(inputValue)
        }
    };

    const handleSubmit = () => {
        redirect(inputValue)
    };

    return (
        <div className="container-input">
            <input
                type="text"
                value={inputValue} 
                onChange={handleChange} 
                onKeyDown={handleKeyPress} 
                className="input-field"
                placeholder="Gib eine Zahl ein..."
            />
            <button className="button" onClick={handleSubmit}>Absenden</button>
        </div>
    );
};

export default InputForm;
