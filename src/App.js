import React, { Component } from 'react';
import Header from './header.js'
import './App.css';

const JSON = 'https://www.reddit.com/r/javascript/top/.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            isChronological: false,
            isLoading: false,
        };

        this.switchOrder = this.switchOrder.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true});

        fetch(JSON)
            .then(response => response.json())
            .then(data => this.setState({ posts: data.data.children, isLoading: false }));
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
        const { isChronological, isLoading } = this.state

        if (isLoading) {
            return (
                    <div>
                    <Header />
                    <p>Loading JSON, please wait...</p>
                    </div>
            );
        }

        return (
                <div id="posts">
                <Header />

                <div class="button"><button onClick={ this.switchOrder }>{ isChronological ? 'Top First': 'Newest First' }</button></div>

                <ol class="posts">
                { this.showPosts(isChronological).map(post =>
                     <li class="post">
                     <span class="title">{ post.data.title }</span> by <span class="author">{ post.data.author }</span>
                     <div class="url"><a href={ post.data.url }>{ post.data.url }</a></div>
                     </li>
                )}
                </ol>
                </div>
        );
    }
}

export default App;
