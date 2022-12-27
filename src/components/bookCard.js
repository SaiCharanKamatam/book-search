import React, { useState } from 'react'
import "./bookCard.css"
const BookCard = (props) => {
    const data = props.data
    console.log(data);
    const[In,setIn]= useState(false)
    return (
        <div className='container'>
            <div className='holder' onMouseEnter={(e) => setIn(true)} >
                <img src={data.volumeInfo.imageLinks.smallThumbnail} alt={data.volumeInfo.title}
                    className="image-logo" onClick={() => { window.location = data.volumeInfo.infoLink }} />
                <div className='title'>{data.volumeInfo.title}</div>
            </div>
            <div className= {In ? "hover-card-1" : "hover-card-2"} onMouseLeave={(e) => setIn(false)}
              
            >
                <div className='text' >{data.volumeInfo.title}</div>
                <div className='text' >{data.volumeInfo.authors[0]}</div>
                <div className='text' >pageCount : {data.volumeInfo.pageCount}</div>
            </div>
        </div>
    )
}

export default BookCard
