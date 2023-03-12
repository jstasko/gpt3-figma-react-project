import React from "react";
import './blog.css'
import {Article} from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from "./imports"
import article, {IArticle} from "../../components/article/Article";

const articles: IArticle[] = [
    {
        imageUrl: blog01,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        imageUrl: blog02,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        imageUrl: blog03,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        imageUrl: blog04,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    },
    {
        imageUrl: blog05,
        date: "Sep 26, 2021",
        text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
    }
]

const Blog = () => {
    const secondaryArticles = articles.map((item: IArticle, index:number) => {
        if (index !=0) {
            return <Article imageUrl={item.imageUrl} date={item.date} text={item.text} key={index}/>
        }
    })
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening,
                    We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_main">
                    <Article imageUrl={articles[0].imageUrl} date={articles[0].date} text={articles[0].text}/>
                </div>
                <div className="gpt3__blog-container_secondary">
                    {secondaryArticles}
                </div>
            </div>
        </div>
    )
}

export default Blog