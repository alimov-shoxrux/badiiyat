import { createContext, useState } from "react";

const Context = createContext()

function Provider({ children }) {
    const [search, setSearch] = useState('')

    return (
        <Context.Provider value={{ search, setSearch }}>{children}</Context.Provider>
    )
}

export {Context , Provider }