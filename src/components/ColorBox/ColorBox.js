import React, { useState } from 'react';
import './ColorBox.scss';

const randomColor = () => {
    const COLOR_LIST = ['green', 'yellow', 'black', 'blue', 'red', 'deeppink'];
    const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(localStorage.getItem('color') ? localStorage.getItem('color') : 'deeppink');

    const onChangeColor = () => {
        const newColor = randomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={onChangeColor}>
        </div>
    );
}

export default ColorBox;