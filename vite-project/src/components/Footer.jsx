import FooterCopyright from "./FooterCopyright";
import FooterText from "./FooterText";
import ListIcon from "./ListIcon";

export default function Footer(){
    return(
        <footer className="w-full h-96 bg-black text-white flex  items-center px-10 justify-center m-0">
            <div className="flex  flex-col items-center gap-16 m-0">
                <FooterText />
                <ListIcon />
                <FooterCopyright />
            </div>
        </footer>
    )
}