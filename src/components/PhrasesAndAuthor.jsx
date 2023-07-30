import { useState, useEffect } from "react"
import './styles/PhrasesAndAuthor.css'

const PhrasesAndAuthor = () => {
    const [phrases, setPhrases] = useState('')

    let listBg = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"]
    let listPlanet = ["bg-planet1", "bg-planet2", "bg-planet3", "bg-planet4", "bg-planet5", "bg-planet6"]

    const imgRandom = listBg[Math.floor(Math.random() * listBg.length)];
    const randomPlanet = listPlanet[Math.floor(Math.random() * listPlanet.length)]

    const handlePhrases = () => {
        fetch('/spaceCuriosities.json')
            .then((res) => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length)
                setPhrases(data[randomNum])
            })
    };

    useEffect(() => {
        handlePhrases()
    }, [])


    return (
        <main className={`bg ${imgRandom}`}>
            <section className="container">
                <div className={`planet ${randomPlanet}`}></div>
                <h1 className="title">InfoGalax</h1>
                <section className="card__container">
                    <p className="author">Author: {phrases.author}</p>
                    <article className="phrase">
                        <p>{phrases.phrase}</p>
                    </article>
                    <button className="btn" onClick={handlePhrases}>
                        <i className='bx bx-sync'></i>
                    </button>
                </section>
                <footer className="footer">Created by &copy; Alan Polanco</footer>
            </section>
        </main>
    )
}

export default PhrasesAndAuthor
