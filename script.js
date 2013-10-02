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
	el: '.toggle', 
	template: _.template($('#todo-template').html()), 
	render:function() {
		this.$el.append(this.template(this.model.toJSON())); 
	}
}); 

$('#new-todo').bind('keypress', function(e) {
	if(event.keyCode== 13){
		console.log(e.keyCode);
	 	var TodoList= 
	 	{
	 		model: new Todo({
	 			title: ''
	 		}), 
	 		view: new TodoView({
	 			el: '.toggle', 
	 			template: _.template($('#todo-template').html()), 
				render:function() {
				this.$el.append(this.template($('.todos-list').html)); 
	 			}
	 		})
 	
 	}
 	
 } 


});

}); 