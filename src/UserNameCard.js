import React, { Component } from 'react';

class UserNameCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.updateUserName = this.updateUserName.bind(this);
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    updateUserName(event) {
        event.preventDefault();
        this.props.onUserNameSubmit(this.state.username);
    }

    render() {
        const { username } = this.state;

        return (
            <div className="card text-center mt-4">
                <div className="card-body">
                    <h5 className="card-title">Welcome!</h5>
                    <p className="card-text">Let&apos;s get chatting! What&apos;s your username?</p>

                    <form className="justify-content-center" onSubmit={this.updateUserName}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                value={username}
                                onChange={this.handleUserNameChange}
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="username-btn"
                            />
                        </div>

                        <button
                            disabled={username === ''}
                            className="btn btn-primary mb-2"
                            type="submit"
                            id="username-btn"
                        >
                            Set Username
                        </button>
                    </form>

                </div>
            </div>
        );
    }
}

export default UserNameCard;
