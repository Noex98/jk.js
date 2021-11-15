import { useState, useEffect, Link } from "/jk.js"

export default function Home(props){

    const [num, setNum] = useState([this, 'num'], 0)

    useEffect([this, 'initGlobals'], () => {

        jk.home = {}

        jk.home.incrementNum = () => {
            setNum(prevNum => prevNum + 1)
        }

        console.log(props)

    }, [])

    return (/*html*/`
        <h1>jk.js</h1>

        <button onclick="jk.home.incrementNum()">Increment num</button>
        <div>${num}</div>

    `)
}