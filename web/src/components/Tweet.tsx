import ImagemDePerfil from "../assets/imagemdeperfil.png"

interface TweetProps {
    text: string;
    username: string;
}

export function Tweet({ text, username }: TweetProps) {
    const user = "@" + username.split(' ').join('').toLowerCase()

    return (
        <div className="p-4 border-b border-white border-opacity-50">
            <div className="flex justify-start mb-4">
                <img className="w-14 h-14 rounded-full cursor-pointer" src={ImagemDePerfil} alt="imagem de perfil padrão" />
                <div className="ml-4">
                    <h1 className="text-white text-lg font-semibold">{username}</h1>
                    <p className="text-white text-sm text-opacity-50">{user}</p>
                </div>
            </div>
            <p className="text-white">{text}</p>
        </div>
    )
}