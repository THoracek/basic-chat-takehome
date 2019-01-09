import React, {Component} from 'react';

class Messages extends Component {
    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }

    render() {
        const {username, messages} = this.props;

        const listOfMessages = messages.map(message => {
            const isUser = message.username === username;

            const positionClass = isUser ? 'd-flex flex-wrap flex-row-reverse' : 'd-flex flex-wrap flex-row';
            const messageClass = isUser ? 'bg-primary text-white text-right d-block' : 'bg-light text-left text-black d-block';
            const usernameClass = isUser ? 'd-none' : 'text-black text-left m-0 p-0';

            return (
                <ul className="list-group-item border-0 pt-1 pb-1" key={message.uuid}>
                    <div className={positionClass}>
                        <div className="d-flex flex-column">
                            <p className={`${messageClass} rounded p-2 m-0`}
                               style={{wordBreak: 'break-all'}}>{message.message}</p>
                            <p className={usernameClass}>
                                <small>{message.username}</small>
                            </p>
                        </div>
                    </div>
                </ul>
            )
        });

        return (
            <div style={{height: 'calc(100vh - 54px)', overflow: 'auto'}}>
                <ul className="list-group mb-3">
                    {listOfMessages}
                    <li className='list-group-item border-0 h-1 p-0' ref={(el) => {
                        this.messagesEnd = el;
                    }}/>
                </ul>
            </div>
        )
    }
}

export default Messages;