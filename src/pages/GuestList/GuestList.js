import React, { useCallback, useEffect, useState } from 'react';
import './guestList.scss';
import { Success } from '../../components/Success';
import { Users } from '../../components/Users/Users';

// Тут список пользователей: https://reqres.in/api/users

function GuestList() {

    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    
    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(json => setUsers(json.data))
        .catch(err => {
            console.warn(err);
            alert('Ошибка при получении пользователей :(')
        })
        .finally(() => setIsLoading(false))
        
    }, [])


    const onChangeSearchValue = useCallback((event) => {
        setSearchValue(event.target.value);
    }, [])


    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id))
        }else {
            setInvites((prev) => [...prev, id])
        }
    }

    return (
        <div className='wrapper_users'>
            <div className="users">
                {success ? (
                <Success count={invites.length} />
                ) : (
                <Users 
                    items={users} 
                    isLoading={isLoading}
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    setSuccess={setSuccess}
                />
                )}
            </div>
        </div>
    );
}

export default GuestList;