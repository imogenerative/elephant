import React, { Component } from 'react';
import './App.css';

const JSON = 'https://www.reddit.com/r/javascript/top/.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            isChronological: true,
        };
    }

    componentDidMount() {
        fetch(JSON)
            .then(response => response.json())
            .then(data => this.setState({ posts: data.data.children }));
    }

    showPosts(isChronological) {
        const { posts } = this.state;

        const posts_sorted = [].concat(posts)
              .sort((a,b) => b.data.created_utc - a.data.created_utc);

        if (isChronological) {
            return posts_sorted;
        }
        return posts;
    }

    render() {
        const { isChronological } = this.state;

        return (
                <div>
                {this.showPosts(isChronological).map(post =>
                     <div id="post">
                     <div id="title">{ post.data.title }</div> by <span id="author">{ post.data.author }</span>
                     <div id="url"><a href={ post.data.url }>{ post.data.url }</a></div>
                     {post.data.created_utc}
                     </div>
                )};
                </div>
        );
    }
}

export default App;
