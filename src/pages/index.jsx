import { useState } from "react";
import Article from "../components/Article"
import posts from "../posts.json"

export default function Homepage() {

    const [search, setSearch] = useState("")

    const changeSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <>
            <h1>Simple Blog</h1>
            <div>Cari Artikel : <input type="text" onChange={changeSearch} /></div>
            <small>Ditemukan 0 data dengan pencarian kata {search}</small>
            {posts.map(({ title, date, tags }, index) => (
                <Article key={index} {...{ title, date, tags }} />
            ))}
        </>
    )
}