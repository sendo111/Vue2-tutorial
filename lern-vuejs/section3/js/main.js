var app = new Vue({
	el: '	#app',
    data: {
      newItem: '',
      todos: []
    },
	methods: {
  	addItem: function(event) {
        if (this.newItem == '') return;
    	var todo = {
            item: this.newItem,
            isDone: false
        };

        this.todos.push(todo);
        this.newItem = '';
    },
    // どのitemを削除するか判定が必要なので引数はindex
    deleteItem: function(index) {
        this.todos.splice(index, 1)
    }
  }
})