import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';

const logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.token) {
            localStorage.clear()
            dispatch({
                type: 'CLEAR_USER'
              });
        }
    })

    return (
        <div>
            this is a logout page
        </div>
    )
}

export default logout
