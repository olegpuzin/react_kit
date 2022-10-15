import React, { useEffect, useState } from 'react';

import { Collection } from '../../components/Collection';
import './photoGallery.scss';



function PhotoGallery() {

    const [collections, setCollection] = useState([]);
    const [isLoading, setIsLoadind] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [page, setPage] = useState(0);


    const cats = [
        {"name": "Все"},
        {"name": "Море"},
        {"name": "Горы"},
        {"name": "Архитектура"},
        {"name": "Города"}
    ]


    useEffect(() => {
        setIsLoadind(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(`https://63499f205df95285140437b8.mockapi.io/gallery_travel?page=${page}&limit=3&${category}`)
        .then(res => res.json())
        .then(json => setCollection(json))
        .catch(err => {
            console.log(err);
            alert('Ошибка при получении данных :(')
        })
        .finally(() => setIsLoadind(false))
    }, [categoryId, page])


    return (
        <div className="gallery">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {cats.map((obj, i) => (
                        <li 
                            key={obj.name} 
                            onClick={() => setCategoryId(i)}
                            className={categoryId === i ? 'active' : ''}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
            </div>
            <div className="content">
                {isLoading 
                ? 'Идёт загрузка...' 
                : (collections
                    .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((obj, index) => (
                        <Collection
                        key={index}
                        name={obj.name}
                        images={obj.photos}
                    />
                    ))
                )}
            </div>
            <ul className="pagination">
                {[...Array(5)].map((_, i) => (
                    <li 
                        key={i} 
                        onClick={() => setPage(i + 1)} 
                        className={page === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PhotoGallery;
