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

        this.handleClick = this.handleClick.bind(this);
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
                    // onButtonClick={this.handleClick.bind(this, article.id)}
                    onButtonClick={() => this.handleClick(article.id)}
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