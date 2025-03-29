import { useEffect, useState } from "react"

export default function Joker() {
    let [Joke, SetJoke] = useState({});
    const url = "https://official-joke-api.appspot.com/random_joke";
    const getJokes = async () => {
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        SetJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(url);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            SetJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
        }
        getFirstJoke();
    }, [])
    return (
        <div>
            <h3>Joker!</h3>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getJokes}>New Joke</button>
        </div>
    )
}