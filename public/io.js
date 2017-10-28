console.log('############################################### io.js');
import io from 'socket.io-client';
const socket = io(location.origin);
socket.on('connect', () => {
  console.log('connect');
});
socket.on('webpackWatch', (a) => {
	//setTimeout(function () {
		console.log('webpackWatch',a);
		location.reload() ;
	//}, 1000);
});
socket.on('disconnect', () => {
  console.log('disconnect');
	//location.reload();
})
