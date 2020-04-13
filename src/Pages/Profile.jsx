import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import CreatePostModal from '../Components/CreatePostModal'
import TweetDisplay from '../Components/TweetDisplay'


const Profile = (props) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false)
    // const [personalTweets, setPersonalTweets] = useState({})

    // console.log(modalState)

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

    let showModal = (params) => {
        setModalState(!modalState)
    }

    // let pullAllTweets = () => {
    //     let config = {
    //         method: 'GET',
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.token}`
    //         }
    //     }
    //     fetch(`http://localhost:4000/allPosts`, config)
    //         .then(r => r.json())
    //         .then(data => {
    //             console.log(data)
    //             setPersonalTweets({ data })
    //             renderTweets(personalTweets)
    //         })
    // } 

    // console.log(personalTweets)


    let renderTweets = () => {
        // console.log(tweets.map(tweet => tweet.content))
// console.log("inside render tweets", personalTweets)

        
        // return tweets.map(tweet => {
        //     console.log(tweet.content)
        //     // return <TweetDisplay
        //     //     tweet={tweet}
        //     //     id={tweet.id}
        //     // />
        // })

    }
    // console.log(personalTweets)
    // let renderTweets = (data) => data.allPosts.map(tweet => {
    //     return <TweetDisplay
    //     data={tweet}
    //     id={data.id}
    // />
    // })


    useEffect(() => {
        // pullAllTweets()
    }, []);

console.log(props)

    return (
        <div>
            {localStorage.token ? <button onClick={() => handleLogout()}> Logout </button> : null}
            <h1> {user.username ? user.username : "PLEASE LOG IN \\ devNote: this page should not be visible to someone not logged in"} </h1>
            {modalState === false ? null : <CreatePostModal />}
            <button onClick={() => showModal()}> Create tweet </button>
            {/* {renderTweets} */}
        </div>
    )
}

export default Profile
