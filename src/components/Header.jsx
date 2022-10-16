import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const [showBtn, setShowBtn] = useState(false);

    const projects = [
        { "id": "1", "title": "count", "name": "Count" }, 
        { "id": "2", "title": "modal", "name": "Modal" }, 
        { "id": "3", "title": "quiz", "name": "Quiz" }, 
        { "id": "4", "title": "users", "name": "Guest list" }, 
        { "id": "5", "title": "convertor", "name": "Currency convertor" },
        { "id": "6", "title": "gallery", "name": "Photo gallery" }
    ];


    return (
        <header>
            <Link to={'/'}>
                <div className='wrapper_logo'>
                    <img className='img_home' src="/assets/react.svg" alt="Logo" />
                    <h1 className='header_title'>React projects</h1>
                </div>
            </Link>
            <ul>
                {projects.map(({id, title, name}) => (
                    <Link to={`/${title}`}>
                        <li key={id} onClick={() => setShowBtn(true) } className="header_list">
                            {name}
                        </li>
                    </Link>
                ))}
            </ul>
            {showBtn && (
                <Link to={'/'}>
                    <button onClick={() => setShowBtn(false)} className='header_btn'>
                        <img className='header_btn_img' src="/assets/arrow.svg" alt="Came back" />
                        Come back
                    </button>
                </Link>
            )}
        </header>
    )
}

export default Header;