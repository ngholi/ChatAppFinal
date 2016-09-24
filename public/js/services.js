var services = angular.module('services',['ngResource']);

services.factory('FectchData', ['$http', function($http){
	return {
		getUsers: function(users){
			$http.get('/users').then(function(res){
				res.data.users.forEach(function(value){
					users[value.id] = {
						displayName: value.name,
						email: value.email,
						id: value.id,
						avatarUrl: 'images/avatar.jpg'
					}
				}, users);
				console.log(users);
			});
		},
		getJoinedRooms: function(rooms){
			$http.get('rooms/joinedrooms').then(function(res){
				var color = ['gray', 'green', 'yellow', 'blue', 'purple', 'red'];
				var effect = ['bubbles-square', 'cosmicz', 'rain-bros'];
				res.data.rooms.forEach(function(value){
					rooms[value.id] = {
						id: value.id,
						messages: [],
						displayName: 'Cứng hơn trứng',
						messages: [
							{from: 36, text: 'Hello', time: 0},
							{from: 35, text: 'Hi', time: 2}
						],
						usersID: [1, 2,3],
						color: color[Math.floor(Math.random()*color.length)],
						effect: effect[Math.floor(Math.random()*effect.length)],
					}
				});
				console.log('rooms', rooms);
			}, rooms);
		}
	}
}]);