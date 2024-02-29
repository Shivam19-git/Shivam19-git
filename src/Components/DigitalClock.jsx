import React, { useState, useEffect } from "react";

export const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { (clearInterval(intervalId)) };

    }, [time]);

    function timeFormat() {
        let hours = time.getHours();// 24 hour format
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let am_pm = hours <= 12 ? "AM" : "PM";
        hours = hours % 12 || 12;

        return (
            `${paddingZero(hours)}:${paddingZero(minutes)}:${paddingZero(seconds)} ${am_pm}`
        )
    }
    function paddingZero(number) {
        return number < 10 ? "0" + number : number;
    }

    return (
        <div className="mainContainer">
            <span className="clock">{timeFormat()}</span>
        </div>
    )
}