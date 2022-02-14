define(['jquery', 'uiComponent', 'ko'], function($, Component, ko) {

    return Component.extend({
        initialize: function () {
            this._super();
            this.sayHello = ko.observable('Hello this is content populated with KO!');
        },
        getText: function () {
            return "call the function here..";
        },
        getDateCust: function () {
            $("#datepicker2").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                minDate: 0,
                maxDate: "+1M +5D"
            });
        },
        inputText: ko.observable(''),
        isVisible: ko.observable(false),

        setTimeout: setTimeout(function () {
            $('.test').addClass('test');
        }, 5000),

        getClick: function () {
            this.isVisible(true);
        },

        firstName: ko.observable(''),
        lastName: ko.observable(''),
        fullName: function () {
            return this.firstName() + ' ' + this.lastName();
        },

        /*--------------------------------------------------------------------------*/

        newTaskTitle: ko.observable(''),

        addTasks: function () {
            this.newTaskTitle('');
        },

        /*ChecklistViewModel: function (checklist) {
            this.checklist = checklist;
            this.newTaskTitle = ko.observable('test');

            this.addTasks = function () {
                this.checklist.addTasks(this.newTaskTitle());
                this.newTaskTitle('');
            };
        },*/

        Checklist: function () {
            this.tasks = [];
            this.completeTasks = [];

            this.addTasks = function (taskTitle) {
                console.log(taskTitle);

                this.tasks.push({
                    id: this.tasks.length,
                    title: taskTitle
                });

                console.log(this.tasks);
            };

            this.removeTask = function (id) {

            };

            this.checkTask = function (id) {

            };

            this.undoTask = function (id) {

            };
        },


      /*  var checklist = new Checklist(),

        this.applyBindings(new ChecklistViewModel(), $('#todoList'))*/
    });

});
