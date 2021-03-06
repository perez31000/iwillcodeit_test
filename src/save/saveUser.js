import React, { useContext, useMemo, useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { AppDataContext } from './AppDataContext';
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
                <div className='divTitle' key={data.id}>{data.title}</div>
            ))}
        </div>
    )

}

export default User;