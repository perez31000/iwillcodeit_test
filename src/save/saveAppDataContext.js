import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';

export const AppDataContext = createContext({});

function AppData({ children }) {

    const [users, setAllUsers] = useState({ data: [], loading: true });

    const fetchUsers = useCallback(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setAllUsers({ data: json, loading: false })

            })
    }, [])

    const actions = useMemo(() => {
        return ({

            fetchUsers

        })

    }, [fetchUsers]);

    const value = useMemo(() => {

        return ({
            actions, users
        })

    }, [actions, users]);


    useEffect(() => {
        console.log('context fetching users')
        value.actions.fetchUsers()
    }, [value.actions])

    return (
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppData;

