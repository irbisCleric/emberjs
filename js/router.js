/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/

'use strict';

Todos.Router.map(function () {
    this.resource('todos', { path: '/' });
});