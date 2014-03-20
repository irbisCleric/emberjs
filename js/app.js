/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/


'use strict';

var Welcome = {};

Welcome = Ember.Application.create({
    ready: function () {
//        alert('you did it!');
    }
});

Welcome.Book = Ember.Object.extend({
    title: null,
    author: null,
    genre: null
});

Welcome.booksController = Ember.ArrayController.create({
    content: []
});

Welcome.booksController = Ember.ArrayController.create({
    content: [],
    loadBooks: function () {
        var self = this;
        $.getJSON('data/books.json', function (data) {
            data.forEach(function (item) {
                self.pushObject(Welcome.Book.create(item));
            });
        });
    }
});