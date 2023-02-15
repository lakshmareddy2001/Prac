import React, { Component } from 'react'

const NewsItem = (props) =>{
        let {title, description, imageUrl, readMoreUrl,author,date} = props;
        return (
            <div>
                <div className="card mx-3" style={{width: "18rem;"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">By {author} posted on {date} </p>
                            <p className="card-text">{description}...</p>
                            <a href={readMoreUrl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem
