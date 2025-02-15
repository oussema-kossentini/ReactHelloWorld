
import React from 'react';

export function Greetings() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button onClick={handleClick}>hello</button>
    );
}