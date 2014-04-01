/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/

'use strict';

App.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        // additional child routes
    });
});

App.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
    }
});

App.TodosIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('todos');
    }
});