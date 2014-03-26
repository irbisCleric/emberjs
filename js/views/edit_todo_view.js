/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/

'use strict';

App.EditTodoView = Ember.TextField.extend({
    didInsertElement: function () {
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-todo', App.EditTodoView);