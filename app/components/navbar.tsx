import Link from "next/link";

export default function Navbar(){
    return(
        <div className="w-[100%] h-[3rem] bg-green-600 flex gap-[1rem] justify-between items-center fixed z-20 opacity-90 shadow-xl">
            <div className="flex gap-[1rem] ml-[2rem]">
            <Link href={"/"} id="link">Home</Link>
            <Link href={"/"} id="link">Product</Link>
            <Link href={"/"} id="link">Team</Link>
            <Link href={"/"} id="link">About</Link>
            </div>
            <div className="flex mr-[1rem]">
            <Link href={"/"} id="link">🌿</Link>
            </div>
            
        </div>
    )
}