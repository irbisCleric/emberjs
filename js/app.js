/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/


'use strict';

var App = Ember.Application.create({
    ready: function () {
//        console.log('Мы это сделали!');
    }
});

App.Book = Ember.Object.extend({
    title: null,
    author: null,
    genre: null
});

App.booksController = Ember.ArrayController.create({
    content: [],
    loadBooks: function () {
        var self = this;
        $.getJSON('data/books.json', function (data) {
            data.forEach(function (item) {
                self.pushObject(App.Book.create(item));
            });
        });
    }
});

/*App.Router.map(function () {
    // put your routes here
});

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});*/
