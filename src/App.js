import React, { Component } from 'react';
import './App.css';

const JSON = 'https://www.reddit.com/r/javascript/top/.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch(JSON)
            .then(response => response.json())
            .then(data => this.setState({ posts: data.data.children }));
    }

    render() {
        const { posts } = this.state;

        return (
                <div>
                {posts.map(post =>
                           <div id="post">
                               <div id="title">{ post.data.title }</div> by <span id="author">{ post.data.author }</span>
                               <div id="url"><a href={ post.data.url }>{ post.data.url }</a></div>
                           </div>
                          )}
                </div>
        );
    }
}

export default App;
