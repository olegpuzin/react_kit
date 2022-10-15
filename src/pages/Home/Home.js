import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const points = [
        { "id": "1", "name": "count" }, 
        { "id": "2", "name": "modal" }, 
        { "id": "3", "name": "quiz" }, 
        { "id": "4", "name": "users" }, 
        { "id": "5", "name": "convertor" },
        { "id": "6", "name": "gallery" }
    ];


    return (
        <div>
            {points.map(({id, name}) => (
                
                <Link to={`/${name}`}>
                    <button key={id} className="btn_point">
                        {name}
                    </button>
                </Link>
                
            ))}
        </div>
    )
}

export default Home;