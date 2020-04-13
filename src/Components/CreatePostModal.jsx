import React, { useState } from 'react'
import "../Styles/modal.scss"

const CreatePostModal = () => {

    const [tweetContent, settweetContent] = useState({ tweet: '' })

    let handleChange = (e) => settweetContent({ ...tweetContent, [e.target.name]: e.target.value });
    console.log(tweetContent)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("working, tweetContent: ", tweetContent)

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${localStorage.token}`
            },
            body: JSON.stringify(tweetContent)
        }

        fetch(`http://localhost:4000/createTweet`, config)
            .then(r => r.json())
            .then(post => console.log(post))
    }


    return (
        <div className="modal">
            Create your tweet!
            <form onSubmit={(e) => handleSubmit(e)} >
                <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name='tweet'
                    value={tweetContent.tweet}
                />
            </form>
        </div>
    )
}

export default CreatePostModal
