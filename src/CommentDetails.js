import React from 'react'
import Avatar from '@material-ui/core/Avatar';
const CommentDetails = props =>{
  console.log(props)
    
    return(
        <div className="comment">
        <a href="/" className="avatar">
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </a>
        <div className='content'>
          <a href="/" className="author">{props.auther}</a>
          <div className="metadata">
            <span className="date">{props.timeago}</span>
          </div>
          <div className="text">{props.content}</div>
        </div>

      </div>
    )
}

export default CommentDetails;