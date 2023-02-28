import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

export function TweetForm() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [tweet, setTweet] = useState("")

    async function createTweet(event: FormEvent) {
        event.preventDefault()

        if(name === "" || surname === "" || tweet === ""){
            alert("Preencha todos os campos")
            return
        }
        
        const fullName = name + " " + surname

        await api.post('tweets', {
            username: fullName,
            text: tweet,
        })

        setName("")
        setSurname("")
        setTweet("")

        alert("Tweet criado com sucesso!")
    }
    
    return (
        <form onSubmit={createTweet} className="flex flex-col gap-3 mt-6" >
            <div className="flex gap-3 justify-center">
                <input 
                    className="bg-[#050d16] rounded-2xl w-44 h-12 text-white pl-4" type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input 
                    className="bg-[#050d16] rounded-2xl w-44 h-12 text-white pl-4" type="text" 
                    placeholder="Sobrenome"
                    value={surname}
                    onChange={event => setSurname(event.target.value)}
                />
            </div>
            <textarea 
                className="bg-[#050d16] rounded-2xl h-60 text-white pt-2 pl-4" 
                placeholder="Tweet"
                value={tweet}
                onChange={event => setTweet(event.target.value)}
            ></textarea>
            <button className="w-full h-14 rounded-full bg-blue-400 text-white transition-colors duration-300 hover:bg-white hover:text-blue-400" type="submit">Enviar</button>
        </form>
    )
}