import React, { Component } from 'react'
// components
import Article from '../Article/Article.js'
// style
import './articleList.css'

export default class Articles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openArticleId: null,
        }
    }

    handleClick = openArticleId => {
        this.setState({ openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId })
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => 
            <li 
                key={article.id} 
            >
                <Article 
                    article={article} 
                    isOpen={this.state.openArticleId === article.id}

                    handleClick={this.handleClick}
                />
            </li>
        )
    
        return (
            <ul className="articles-list">
                {articleElements}
            </ul>
        )
    }

    
}