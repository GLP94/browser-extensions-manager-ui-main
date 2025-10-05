import React, { useState, useMemo } from "react";

function ExtensionsList({ data, onRemove, onToggle }) {

    const [ filter, setFilter ] = useState("all");

    const filteredApps = useMemo(()  => {

        if (filter === "active") {
            return data.filter((d) => d.isActive === true);
        } else if (filter === "inactive") {
            return data.filter((d) => d.isActive === false);
        }

        return data;

    }, [filter, data])

    return (

        <main className="wrapper">

            <div className="buttonssec">

                <h1>Extensions List</h1>

                <div className="buttons">

                    <label>
                        <input 
                        type="radio" 
                        value="all" 
                        name="filter"
                        checked={filter === "all"}
                        onChange={() => setFilter("all")}
                        />
                        All
                    </label>

                    <label>
                        <input 
                        type="radio" 
                        value="active" 
                        name="filter"
                        checked={filter === "active"}
                        onChange={() => setFilter("active")}
                        />
                        Active
                    </label>

                    <label>
                        <input 
                        type="radio" 
                        value="inactive" 
                        name="filter"
                        checked={filter === "inactive"}
                        onChange={() => setFilter("inactive")}
                        />
                        Inactive
                    </label>

                </div>

            </div>

            <ul className="applist">
                {filteredApps.map((app, index) => (
                    <li key={index}>
                        <div className="infowrap">
                            <img src={app.logo} alt={app.name} />
                            <div>
                                <h2>{app.name}</h2>
                                <p>{app.description}</p>
                            </div>
                        </div>
                        <div className="handlebuttons">
                            <button onClick={() => onRemove(app.name)}>Remove</button>
                            <label className="toggle">
                                <input type="checkbox" checked={app.isActive === true ? "checked" : ""} onChange={() => onToggle(app.name)}></input>
                                <span className="slider"></span>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>

        </main>

    )

}

export default ExtensionsList