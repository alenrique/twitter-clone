import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Tweet } from "./Tweet";

type Tweets =  {
    id: string
    createdAt: Date;
    text: string;
    username: string;
}[]

export function Feed() {
    const [tweets, setTweets] = useState<Tweets>([])
    
    useEffect(() => {
        api.get('tweets').then(response => {
            setTweets(response.data)
        })
    }, [])

    return (
        <div className="max-w-2xl border-x border-white border-opacity-50 w-full h-[100vh] max-md:h-auto">
            <div className="border-b border-white border-opacity-50">
                <h1 className="p-4 text-white text-2xl font-semibold">Página Inicial</h1>
            </div>
            {
                tweets.map(tweet => (
                    <Tweet 
                        key={tweet.id} 
                        text={tweet.text} 
                        username={tweet.username} 
                    />
                ))
            }
        </div>
    )
}