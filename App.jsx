import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import ExtensionsList from "./ExtensionsList";

const App = () => {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch("./data.json")
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    if (!data) {
        return <div className="dark">Loading...</div>
    }

    const handleRemove = (name) => {
        setData(prevData => prevData.filter((a) => a.name !== name))
    }

    const handleToggle = (name) => {
        setData(prevData => prevData.map((a) => a.name === name ? {...a, isActive: !a.isActive} : a))
    }

    return( 
        
        <ThemeToggle>
            <ExtensionsList data={data} onRemove={handleRemove} onToggle={handleToggle}></ExtensionsList>
        </ThemeToggle>

    )
}

export default App