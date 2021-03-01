import React, { Component } from 'react';
// components
import ArticleList from '../components/ArticleList/ArticleList.js'
// setPosts
import articles from '../data/setPosts.js'
// style
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)  

        this.state = {
            reverted: false,
        }
    }


    render() {

        console.log('---', 'state в render', this.state.reverted);
        return (
            <>
                <h1 className="page-title">Set Posts 
                    <button className="post-btn" onClick={this.revert}>Revert</button>
                </h1>

                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>

            </>   
        );
    }

    revert = () => {
        this.setState({reverted: !this.state.reverted})
        console.log(this.state.reverted);
    }
}


export default App;

