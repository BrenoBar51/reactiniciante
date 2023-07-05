export default function Footer(){
    return(
        <footer className="w-full h-96 bg-black text-white flex  items-center px-10 justify-center">
            <section className="flex  flex-col items-center gap-16">
                <h1>Foolish Developer</h1>
                <p>Foolish Developer it's a blog for beginners, to find tutorials and ways to not kill  yourself in programing</p>
                <div className="flex justify-between gap-5">
                    <span className="w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white">
                        <box-icon type='logo' name='facebook-square' color="#FFFFFF"></box-icon>
                    </span>
                    <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white"><box-icon name='instagram' type='logo' color="#FFFFFF"></box-icon></span>
                    <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white"><box-icon name='twitter' type='logo' color="#FFFFFF"></box-icon></span>
                    <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white"><box-icon name='linkedin-square' type='logo' color="#FFFFFF"></box-icon></span>
                </div>
            </section>
        </footer>
    )
}