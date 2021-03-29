import React, { PureComponent } from 'react'

export default class Main extends PureComponent {
    render() {
        return (
            <>
                <h1>The Main Page</h1>
                <button onClick={() => this.props.setUser('Anna')}>Change The Username</button>
            </>
        )
    }
}
