import ListIcon from "./ListIcon";

export default function Footer(){
    return(
        <footer className="w-full h-96 bg-black text-white flex  items-center px-10 justify-center">
            <section className="flex  flex-col items-center gap-16">
                <h1>Foolish Developer</h1>
                <p>Foolish Developer it's a blog for beginners, to find tutorials and ways to not kill  yourself in programing</p>
                <ListIcon />
            </section>
        </footer>
    )
}