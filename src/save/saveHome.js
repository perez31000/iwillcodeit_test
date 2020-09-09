import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppDataContext } from './AppDataContext';

function Home() {

    const context = useContext(AppDataContext);

    if (context.users.loading) {
        return (<div>Chargement</div>)
    }

    return (
        context.users.data.map(user => (
            <div key={user.name} className="user" >
                {user.name}

                <button>
                    <Link
                        to={`/user/${user.id}`}>
                        DETAILS
                    </Link>
                </button>

            </div>
        ))
    )
}

export default Home;