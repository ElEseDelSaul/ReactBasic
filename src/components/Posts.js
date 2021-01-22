//Fetching Data -> JSONPlaceholder
import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {    //Se va a ejecutar lo siguiente una vez cargue este componente 
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()  //Darle formato JSON
        console.log(data);
        this.setState({ posts: data })
    }

    render() {
        return (
            <div>
                    <h3>Posts</h3>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
