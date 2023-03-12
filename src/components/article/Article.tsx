import React from "react";
import './article.css'

export interface IArticle {
    imageUrl: string,
    date: string,
    text: string
}

const Article = ({imageUrl, date, text}: IArticle) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imageUrl} alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article