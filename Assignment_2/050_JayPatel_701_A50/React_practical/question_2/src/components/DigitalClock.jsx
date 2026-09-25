import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => { setTime(new Date());}, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="card p-5 mt-4 text-center">
            <h2>Digital Clock</h2>
            <h1 className="mt-4">
                {time.toLocaleTimeString()}
            </h1>
        </div>
    );
}
export default DigitalClock;