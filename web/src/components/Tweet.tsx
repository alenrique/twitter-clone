import ImagemDePerfil from "../assets/imagemdeperfil.png"

export function Tweet() {
    return (
        <div className="p-4 border-b border-white border-opacity-50">
            <div className="flex justify-start mb-4">
                <img className="w-14 h-14 rounded-full cursor-pointer" src={ImagemDePerfil} alt="imagem de perfil padrão" />
                <div className="ml-4">
                    <h1 className="text-white text-lg font-semibold">Nome da Pessoa</h1>
                    <p className="text-white text-sm text-opacity-50">@nomedapessoa</p>
                </div>
            </div>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem rerum blanditiis modi tenetur harum error accusantium enim in itaque placeat architecto voluptates possimus ut aperiam similique, aliquam molestiae repudiandae?</p>
        </div>
    )
}