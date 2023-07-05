export default function ListIcon(){
    return(
    <div className="flex justify-between gap-5 m-0">
        <span className="w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white">
            <box-icon type='logo' name='facebook-square' color="#FFFFFF"></box-icon>
        </span>
        <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white">
            <box-icon name='instagram' type='logo' color="#FFFFFF"></box-icon>
        </span>
        <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white">
            <box-icon name='twitter' type='logo' color="#FFFFFF"></box-icon>
        </span>
        <span className=" w-7 h-7 flex justify-center cursor-pointer rounded-full border border-white">
            <box-icon name='linkedin-square' type='logo' color="#FFFFFF"></box-icon>
        </span>
    </div>
    )
}