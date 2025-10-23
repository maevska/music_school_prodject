import { useState } from "react";
import "./Search.scss";

export const Search = ({ placeholder = "Search..." }) => {
    const [query, setQuery] = useState("");

    return (
        <div className='search'>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};
