import React from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { socket } from './../../config/socket';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: 'thebylito'+ Math.random(),
      userId: 'asfasfasgasasfd78'+ Math.random(),
    };
    this.socket = socket;


    this.onSend = this.onSend.bind(this);
    
    this.socket.on('message', this.onReceivedMessage);
    this.socket.on('update', this.onUpdate);
    this.socket.on;
  }
  onReceivedMessage = (messages) => {
    this._storeMessages(messages);
  };
  onUpdate = (update) => {
    console.log(update);
  };
  componentDidMount = () => {
    const { username } = this.state;
    this.socket.emit('join', username);
  };

  onSend = (messages) => {
    this.socket.emit('message', messages[0]);
    this._storeMessages(messages);
  };

  _storeMessages(messages) {
    console.log(messages);
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  setNome(nome) {
    this.socket.emit('set_username', { nome });
  }

  render() {
    const { username, userId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{ _id: userId, name: username, user:username }}
        />
      </View>
    );
  }
}
