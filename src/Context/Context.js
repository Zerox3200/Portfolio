import { createContext, useState } from "react";


export let SideNav = createContext();

export function SideNavProvider({ children }) {
    const [ShowSide, setShowSide] = useState(false);

    return <SideNav.Provider value={{ ShowSide, setShowSide }}>
        {children}
    </SideNav.Provider>
}