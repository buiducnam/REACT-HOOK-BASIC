import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};

function formatTime(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const timeCurrent = formatTime(date);
            setTimeString(timeCurrent);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {timeString}
        </div>
    );
}

export default Clock;