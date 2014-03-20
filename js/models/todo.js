/*jshint bitwise: false*/
/*global Ember:false, _:false, md5:false, alertify:false, _predefined:false*/

'use strict';

Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});