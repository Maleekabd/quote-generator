import { useEffect, useState } from 'react'
import './App.css'
import Quote from "./quote.json"


const App = () => {

    const [data, newData] = useState(Quote);

    useEffect(() => {
        const quoteGenerator = () => {
            const texts = document.getElementById('text');
            const quote = document.getElementById('new-quote');
            const author = document.getElementById('author');

            const generateQuote = () => {
                const randomIndex = Math.floor(Math.random() * data.length);
                console.log(data.length)
                texts.textContent = data[randomIndex].quote;
                author.textContent = ` - ${data[randomIndex].author}`
            };

            quote.addEventListener('click', generateQuote);
        }

        quoteGenerator();
    }, [])

    return (
        <>
            <div style={{
                display:'flex',
                alignItems:"center",
                justifyContent:'center'
            }}>
                <h1 style={{
                    display: "block",
                    background: "white",
                    position: "absolute",
                    top: 0,
                    fontFamily:"Poppins",
                    textAlign: "center",
                    fontSize: "25px",
                    padding:"20px",
                    borderRadius:"8px"
                }}>Quote Generator V1</h1>
            </div>
            <div className='parent'>
                <div id='text'></div>
                <div id='author'></div>
                <div className='button'>
                    <button id='new-quote' className=''>Generate Quote</button>
                </div>
            </div>
        </>
    )
}
export default App;
