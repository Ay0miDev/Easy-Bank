import React from 'react'
import './MainContain02.css'
import { articleItems } from './MainContain02DB'

const MainContain02 = () => {
    const articleList = articleItems.map((article) =>(
        <div key={article.id} className='eachArticle'>
            <img src={article.image} alt="" className='articleImg' 
            style={{height: article.image == "img01" ? "166.66px" : "166px"}}/>
            <h3>{article.author}</h3>
            <h2>{article.heading}</h2>
            <p>{article.paragraph}</p>
        </div>
    ))
  return (
    <div className='Container'>
        <div className='listArticle'>
            <h1>List Articles</h1>
            <div className='articleContainer'>
                {articleList}
            </div>
        </div>
    </div>
  )
}

export default MainContain02