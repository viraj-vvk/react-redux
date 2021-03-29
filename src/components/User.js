import React, { PureComponent } from 'react'

export default class User extends PureComponent {
    render() {
        return (
            <>
                <h1>The User Page</h1>
                <p><strong>Username: </strong>{this.props.username}</p>
            </>
        )
    }
}
