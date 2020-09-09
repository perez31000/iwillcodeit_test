import React, { useContext, useMemo, useEffect, useState, useCallback } from 'react';
import { useParams, Link, Router, Route, Routes } from "react-router-dom";
import { AppDataContext } from './AppDataContext';
import Post from './Post';
// import { UserDataContext } from './UserDataContext';

function User() {

    const slug = useParams();

    const context = useContext(AppDataContext);

    const user = useMemo(() => {

        return context.users.data.find((user) => {

            return (user.id === Number(slug.userId))
        })

    }, [context.users.data, slug.userId])

    // const data = useMemo(() => {
    //     return (context.dataUsers.data)
    // })

    // console.log('data', data)


    if (context.users.loading) {
        return (<div>Chargement</div>)
    }

    if (!user) {
        return (<div>404</div>)
    }

    return (
        <div>
            <h1>{user.name}</h1>
            {context.dataUsers.data.map(data => (
                <button>
                    <Link
                        to={`/user/${user.id}/1`}>
                        {data.title}
                    </Link>
                </button>
                // <div className='divTitle' key={data.id}>{data.title}</div>
            ))}

        </div>
    )

}

export default User;