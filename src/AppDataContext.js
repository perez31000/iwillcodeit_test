import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';

export const AppDataContext = createContext({});

function AppData({ children }) {

    const [users, setAllUsers] = useState({ data: [], loading: true });
    const [dataUsers, setDataUsers] = useState({ data: [], loading: true });

    const fetchUsers = useCallback(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setAllUsers({ data: json, loading: false })

            })
    }, [])

    const fetchData = useCallback(() => {

        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(json => {
                setDataUsers({ data: json, loading: false })

            })
    }, [])

    const actions = useMemo(() => {
        return ({

            fetchUsers, fetchData

        })

    }, [fetchUsers, fetchData]);

    const value = useMemo(() => {

        return ({
            actions, users, dataUsers
        })

    }, [actions, users, dataUsers]);


    useEffect(() => {
        console.log('context fetching users')
        value.actions.fetchUsers()
        console.log('context fetching data')
        value.actions.fetchData()
    }, [value.actions])

    return (
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppData;

