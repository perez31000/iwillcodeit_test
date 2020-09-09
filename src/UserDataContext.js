import React, { createContext, useContext, useMemo, useCallback, useState, useEffect } from 'react';
import { AppDataContext } from './AppDataContext';

// je créé mon nouveau context
export const UserDataContext = createContext({});

// la functio du nouveau context
function UserData({ children }) {

    // hooks d'etat pour la récupération des datas
    const [usersData, setUsersData] = useState({ data: [], loaded: false })

    // je récupere les infos fetchées du context parent pour récupérer le nombre de users
    const appContext = useContext(AppDataContext);

    // object is not iterative donc je passe par un tableau neutre
    const temp_tab = [];

    // function qui permet de remplir le tableau neutre avec toutes les datas
    function addData(json) {
        temp_tab.push(json);
    }

    function handleSetter() {
        // usersData.data = temp_tab
        // setUsersData({ data: temp_tab, loaded: true })

    }

    // je fetch autant d'url que de user présent dans mon context parent
    const fetchData = useCallback(() =>
        appContext.users.data.map(user => (
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then(response => response.json())
                .then(json => {

                    addData(json)

                })
            // pas de seconde dépendence sinon boucle infinie
        )), [appContext.users.data]

    )

    // Memoïsation de mon action
    const actions = useMemo(() => {
        return ({

            fetchData, handleSetter

        })
        // pas de seconde dependence car boucle
    }, [fetchData]);

    // Mémoïsation du contenu de ma value
    const value = useMemo(() => {

        return ({
            actions, usersData
        })

    }, [actions, usersData]);

    // une fois le rendu fait, je fetch
    useEffect(() => {
        console.log('context fetching datas')
        value.actions.fetchData()

        // une fois tout les fetch fait, je lance le setters
        setUsersData({ data: temp_tab, loaded: true })

        // console.log('usersData', usersData.data)

    }, [value.actions])

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    )

}

export default UserData;