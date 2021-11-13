import { useState, componentDidMount, Link } from "/jk.js"

export default function Home(){

    const [num, setNum] = useState(0, 'Home_num')

    componentDidMount(() => {

        let btn = document.querySelector('button')

        btn.addEventListener('click', () => {
            setNum(prevState => prevState + 1)
        })

    })

    return (/*html*/`
        <span>Click for state change: </span>
        <button>Number + 1</button>
        <div>${num === 0 ? 'My number' : num}</div>
        ${Link('/2', 'link to error')}
    `)
}