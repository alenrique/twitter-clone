import { FormEvent } from "react";

export function TweetForm() {

    function createTweet(event: FormEvent) {
        event.preventDefault()
    }
    
    return (
        <form onSubmit={createTweet} className="flex flex-col gap-3 mt-6" >
            <div className="flex gap-3 justify-center">
                <input 
                    className="bg-[#050d16] rounded-2xl w-44 h-12 text-white pl-4" type="text" 
                    placeholder="Nome"
                />
                <input 
                    className="bg-[#050d16] rounded-2xl w-44 h-12 text-white pl-4" type="text" 
                    placeholder="Sobrenome"
                />
            </div>
            <textarea 
                className="bg-[#050d16] rounded-2xl h-60 text-white pt-2 pl-4" 
                placeholder="Tweet"
            ></textarea>
            <button className="w-full h-14 rounded-full bg-blue-400 text-white transition-colors duration-300 hover:bg-white hover:text-blue-400" type="submit">Enviar</button>
        </form>
    )
}