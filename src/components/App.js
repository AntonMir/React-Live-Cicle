import React, { useState, useEffect, memo } from 'react';
// components
import ArticleList from '../components/ArticleList/ArticleList.js'

// setPosts
import articles from '../data/setPosts.js'
// style
import './App.css';

function App(props)  {
   
    const [setArt, setSetArt] = useState(articles)

    const revert = () => {
        setSetArt( setArt.slice().reverse() )
    }

    useEffect(() => {
        console.log('---', 'didMount');
        return () => {
            console.log('---', 'willUnmount');
        };
    }, []);

    useEffect(() => {
        console.log('---', 'didUpdate');
    }, [setArt]);

    return (
        <>
            <h1 className="page-title">Set Posts 
                <button className="post-btn" onClick={revert}>Revert</button>
            </h1>

            <ArticleList articles={setArt}/>
            {/* <ArticleList articles={articles}/> */}

        </>   
    );
    

    
}


export default memo(App)
// export default memo(App, () => {
//     return state ? sdfh : sdh
// });

