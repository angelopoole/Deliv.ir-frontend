import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'


const Profile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    let handleLogout = () => {
        console.log(localStorage.token)
        localStorage.clear()
        dispatch({
            type: 'CLEAR_USER'
        })

        Swal.fire({
            title: 'You have been logged out!',
            text: 'Have a nice day!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    


    return (
        <div>
            {localStorage.token ? <button onClick={() => handleLogout()}> Logout </button> : null}
            <button> Create tweet </button>
            <h1> {user.username ? user.username : "PLEASE LOG IN devNote: this page should not be visible to someone not logged in" } </h1>
        </div>
    )
}

export default Profile
