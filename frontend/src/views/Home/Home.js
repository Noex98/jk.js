import { useState, useEffect, Link } from "/jk.js"

export default function Home(){

    const [num, setNum] = useState([this, 'num'], 0)

    useEffect([this, 'init'], () => {

        jk.home = {}

        jk.home.incrementNum = () => {
            setNum(prevNum => prevNum + 1)
        }
        
    }, [])

    

    return (/*html*/`
        <span>Click for state change: </span>
        <button onclick="jk.home.incrementNum()">Number + 1</button>
        <div>${num === 0 ? 'My number' : num}</div>
        ${Link('/2', 'link to error')}
    `)
}