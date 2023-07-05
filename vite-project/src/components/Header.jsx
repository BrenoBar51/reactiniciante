export default function Header({header}){
    return(
        <header className="w-full h-14 bg-black text-white flex justify-between items-center px-10 mb-10">
            <h1 className="font-bold uppercase text-2xl cursor-pointer">{header}</h1>
            <div className="flex gap-8 items-center">
                <ul className="flex gap-1 mr-10 items-center">
                    <li className="cursor-pointer">Contato</li>
                    <li className="cursor-pointer">Serviços</li>
                    <li className="cursor-pointer">Sobre nós</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
                <ul>
                    <li className="cursor-pointer">Sair</li>
                </ul>
            </div>
        </header>
    )
}