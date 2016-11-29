/**
 * Created by Liza on 9/12/2016.
 */
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
    url: root + '/cars',
    method: 'GET'
}).then(function(data) {
    console.log(data);
});