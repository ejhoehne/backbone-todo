$(document).ready(function() {
var Todo= Backbone.Model.extend({
	defaults: {
		title: '', 
		completed: false
	}
}); 

var TodoView= Backbone.View.extend({
	tagName: 'li',
	className: 'todo',
	template: _.template($('#todo-template').html()), 
	render:function() {
		this.$el.html(this.template(this.model.toJSON())); 
		$('.todos-list').append(this.$el); 
	}
}); 

$("#new-todo").bind('keypress', function(e) {
	var keycode = (e.keyCode ? e.keyCode : e.which);
 	if (keycode != 13) return true; 

	var TodoList= new Todo({
			title: $('#new-todo').val()
		}); 
	var TodoListView= new TodoView({
			model: TodoList
		}); 
	TodoListView.render(); 	
}); 
}); 