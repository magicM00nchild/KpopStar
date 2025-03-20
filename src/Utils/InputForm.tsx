import React, { useState } from 'react';
import "./InputForm.css"
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
    // State für das Input-Feld
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); // Navigations-Hook von react-router-dom

    const redirect = (inputValue: string) => {
        navigate(`/audio/${inputValue}`);
    }


    // Funktion, um den Wert des Input-Feldes zu aktualisieren
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    // Funktion, die bei Drücken der Enter-Taste ausgeführt wird
    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            console.log('Eingegebene Zahl:', inputValue); // Gibt den Wert in der Konsole aus
            redirect(inputValue)
        }
    };

    // Optional: Wenn du den Button verwenden möchtest
    const handleSubmit = () => {
        console.log('Eingegebene Zahl:', inputValue); // Gibt den Wert in der Konsole aus
        redirect(inputValue)
    };

    return (
        <div className="container-input">
            <input
                type="text"
                value={inputValue} // Setzt den Wert des Input-Feldes
                onChange={handleChange} // Aktualisiert den Wert bei Eingabe
                onKeyDown={handleKeyPress} // Hört auf die Enter-Taste
                className="input-field"
                placeholder="Gib eine Zahl ein..."
            />
            <button className="button" onClick={handleSubmit}>Absenden</button>
        </div>
    );
};

export default InputForm;
