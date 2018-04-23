import React, { Component } from 'react';
import './App.css';

const JSON = 'https://www.reddit.com/r/javascript/top/.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            isChronological: false,
        };

        this.switchOrder = this.switchOrder.bind(this);
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

    switchOrder() {
        this.setState(prevState => ({
            isChronological: !prevState.isChronological
        }));
    }

    render() {
        var { isChronological} = this.state

        return (
                <div>

                <h3>/r/javascript Top Posts</h3>

                <button onClick={ this.switchOrder }>{ isChronological ? 'Top First': 'Newest First' }</button>

                { this.showPosts(isChronological).map(post =>
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
