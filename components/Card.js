import Image from "next/image"
import Link from "next/link"

import Styles from "/src/styles/Card.module.css"


export default function Card({ pokemon }){
    return(
        <div className={Styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <p className={Styles.id}>#{pokemon.id}</p>
            <h3 className={Styles.title}>{pokemon.name}</h3>
            <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
                <a className={Styles.btn}>Detalhes</a>
            </Link>
        </div>
    )
}