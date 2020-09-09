import React, { useContext, useMemo, useEffect, useState, useCallback } from 'react';
import { useParams, Link } from "react-router-dom";
import { AppDataContext } from './AppDataContext';
// import { UserDataContext } from './UserDataContext';

function Post() {

    // const slug = useParams();

    // const context = useContext(AppDataContext);

    // const user = useMemo(() => {

    //     return context.users.data.find((user) => {

    //         return (user.id === Number(slug.userId))
    //     })

    // }, [context.users.data, slug.userId])


    // if (context.users.loading) {
    //     return (<div>Chargement</div>)
    // }



    // if (!user) {
    //     return (<div>404</div>)
    // }

    // return (
    //     <div>
    //         <h1>{user.name}</h1>
    //         <button className='goBack'>
    //             <Link
    //                 to={`/user/${user.id}`}>
    //                 Back
    //                 </Link>
    //         </button>
    //         {context.dataUsers.data.map(data => (
    //             <div className='divTitle strong' key={data.id}>
    //                 {data.title}
    //                 <div className='post'>
    //                     {data.body}
    //                 </div>
    //             </div>

    //         ))}
    //     </div>
    // )

    return (
        <div>Hello</div>
    )

}

export default Post;