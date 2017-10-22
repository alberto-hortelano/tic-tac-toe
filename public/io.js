console.log('io.js');
import io from 'socket.io-client';
const socket = io(location.origin);
socket.on('connect', () => {
  console.log('connect');
});
socket.on('webpackWatch', () => {
  console.log('webpackWatch');
	location.reload() ;
});
