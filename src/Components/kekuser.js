import React from 'react';

import axios from 'axios';

export default class Kekuser extends React.Component {
    state = {
        huensons: {}
    };

    onButtonHuy= () => {
        axios.get(`http://localhost:8080/blog/1`, {
            headers: {Authorization: localStorage.getItem("token")}
        })
            .then(res => {
                this.setState({ huensons: res.data });
            })
    };

    render() {
        return (
            <div>
            <button onClick={this.onButtonHuy}>kek</button>
                <div>{JSON.stringify(this.state.huensons)}</div>
            </div>
        )
    }
}