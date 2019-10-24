import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputPost from './components/InputPost';
import uuid from 'uuid';

class App extends Component {
  state = {
    posts: [],
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
  }
  newPost
  
  render () {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="card" key={post.id}>
            <div className="card-body">
                <h6 className="card-title text-center">
                  <span>
                  <h5 className="text-left">Post Title:</h5>
                  {post.title}
                  </span>
                </h6>
                <div className="card-text mt-2" >
                  <h5 className="text-left">Post:</h5>
                  <p className="mt-2 text-capitalize text-justify" >{post.body}</p>
                </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
      No Posts yet
      </div>
    );
    return (
      <div className="container">
        <h1 className="text-capitalize text-center text-danger my-5">
          Posts
        </h1>
        <p className="container" >
          {postList}
        </p>
        <InputPost />
      </div>
    )
  }
};

export default App;
