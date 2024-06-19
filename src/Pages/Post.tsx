import React from 'react'
interface Post{
    text: string
}

const Post: React.FC<Post>= ({text}: any) => {
    const date = new Date().toDateString();
  return (
    <div className='post'>
       <strong>{text}</strong>
       <br/>
       {<span className='date'> posted last {date}</span>}
    </div>
  )
}

export default Post