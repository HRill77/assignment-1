import React, { useState } from 'react'
import Post from './Post';

const NewsFeeds = () => {
    const [post, setPost] = useState<string[]>([]);
    const [newPost, setNewPost ] = useState<any>("");

    const handleClick = () =>{
        setPost([...post, newPost])
    }


  return (
    <div className='newsfeed'>
        <h4>NewsFeeds</h4>
        <div className='post-container'>
        <input type="text" placeholder='Post...' onChange={(e)=> setNewPost(e.target.value)}
        value={newPost} />
        <button onClick={handleClick}>Add Post</button>
        </div>
        {post.map(post => <Post text={post}/>)}

    </div>
  )
}

export default NewsFeeds