import Socket from 'socket.io-client';

export const socket = Socket.connect('https://reactchatnode.herokuapp.com/');