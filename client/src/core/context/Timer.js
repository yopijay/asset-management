// Libraries
import { createContext, useState, useRef, useEffect } from "react";

export const TimerCntxt = createContext();
export const TimerPrvdr = props => {
    const { children } = props;
    const [ time, settime ] = useState(180); // Default for 3 mins
    const [ timer, settimer ] = useState('00:00'); // 
    const ref = useRef();

    const getTimeRemaining = e => {
        const total = Date.parse(e) - Date.parse(new Date());
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);

        return { total, minutes, seconds }
    }

    const startTimer = e => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if(total >= 0) { settimer(`${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`); }
    }

    const clearTimer = e => {
        settimer('03:00');

        if(ref.current) clearInterval(ref.current);
        const id = setInterval(() => startTimer(e), 1000);

        ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + time);
        return deadline;
    }

    useEffect(() => clearTimer(getDeadTime()), []);

    return <TimerCntxt.Provider value= {{ timer, settimer, clearTimer, getDeadTime, time, settime }}>{ children }</TimerCntxt.Provider>
}