import React from 'react'
import { render } from 'react-dom'
import createReactClass from 'create-react-class'
import NotificationSystem from 'react-notification-system'

const MyComponent = createReactClass({
    _notificationSystem: null,

    _addNotification: function(event) {
        event.preventDefault()

        this._notificationSystem.addNotification({
            message: 'Notification message',
            level: 'success'
        })
    },

    componentDidMount: function() {
        this._notificationSystem = this.refs.notificationSystem
    },

    render: function() {
        return (
            <div>
                <button onClick={this._addNotification}>Add notification</button>
                <NotificationSystem ref='notificationSystem'></NotificationSystem>
            </div>
        )
    }
})


render(
    <MyComponent></MyComponent>,
    document.getElementById('root')
)
