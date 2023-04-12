 import Image from "next/image"
 import Style from "../styles/About.module.css"
 
 
 
 export default function About(){
    return(
        <div className={Style.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            </p>
            <Image 
                src={"/images/charizard.png"}
                width={"300"}
                height={"300"}
                alt={"charizard"}
            />
        </div>
    )
 }