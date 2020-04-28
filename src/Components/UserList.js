import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        username: '',
        password: '',
    };

    onclick = event => {
        this.setState({ username: event.target.value });
    };
    onclick2 = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        };


        axios.post(`http://localhost:8080/authenticate`,  user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Personadfgasdfgasdfgadfgadfg Name:
                        <input type="text" onChange={this.onclick} />
                        Your pass:
                        <input type="password" onChange={this.onclick2}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}