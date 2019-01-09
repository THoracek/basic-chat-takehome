import React, {Component} from 'react';
import io from "socket.io-client";

import UserNameCard from "./UserNameCard";
import Messages from "./Messages";

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: "http://localhost:4000/",
            messages: [],
            messageInput: '',
            username: '',
        };

        this.onUserNameSubmit = this.onUserNameSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    componentDidMount() {
        const {endpoint} = this.state;

        this.socket = io(endpoint);

        this.socket.on('message', message => {
            const {messages} = this.state;
            messages.push(message);

            this.setState({
                messages
            });
        });
    }

    onUserNameSubmit(username) {
        this.setState({
            username
        });
    }

    sendMessage(event) {
        event.preventDefault();
        const {messageInput, username} = this.state;

        this.socket.emit('message', {
            username,
            message: messageInput
        });

        this.setState({
            messageInput: ''
        });
    }

    handleMessageChange(event) {
        this.setState({
            messageInput: event.target.value
        });
    }

    render() {
        const {messages, messageInput, username} = this.state;

        const userNameCard = !username ? <UserNameCard onUserNameSubmit={this.onUserNameSubmit}/> : null;

        const chatComponent = username ? (
            <>
                <div className="row">
                    <div className="col">
                        <Messages messages={messages} username={username} />
                    </div>
                </div>
                <div className="fixed-bottom pl-2 pr-2">
                    <form onSubmit={this.sendMessage}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                value={messageInput}
                                onChange={this.handleMessageChange}
                                className="form-control"
                                placeholder="Message"
                                aria-label="Message"
                                aria-describedby="send-msg-btn"
                            />
                            <div className="input-group-append">
                                <button
                                    disabled={messageInput === ''}
                                    className="btn btn-primary"
                                    type="submit"
                                    id="send-msg-btn"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        ) : null;

        return (
            <div className="App">
                <div className="container">
                    {userNameCard}
                    {chatComponent}
                </div>
            </div>
        );
    }
}

export default Chat;
