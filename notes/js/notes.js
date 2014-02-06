window.notes = function() {
	'use strict';

	var notesList = null;
	var inputField = null;
	var storageName = 'todoItems';

	var noteNum = 0;
	var todoList = [];

	var createNote = function(txt) {
		return {
			'done': 0,
			'text': txt
		};
	};

	var setTodoList = function() {
		localStorage.setItem(storageName, JSON.stringify(todoList));
	};

	var getListItems = function() {
		var data = JSON.parse(localStorage.getItem(storageName) || '{}');
		if(data.length > 0){
			todoList = data;
			$.each(todoList, function(i, note){
				writeToNotes(note, false);
			});
		} else {
			writeToNotes(createNote('Hi there. This is a simple to do list. Just type, hit return and make your list!'));
		}
	};

	var setListItems = function(note) {
		todoList.push(note);
		setTodoList();
	};

	var writeToNotes = function(note, append) {
		var done = note.done ? ' done' : '';
		var checked = note.done ? 'checked' : '';
		notesList.append('<li id="note-'+noteNum+'" class="'+done+'" data-id="'+noteNum+'"><input type="checkbox" id="done-'+noteNum+'" class="checkbox" '+checked+' /><span class="note-text">'+note.text+'</span><span class="close">x</span></li>');
		notesList.find('li#note-'+noteNum).fadeIn(100);
		if(append){
			setListItems(note);
		}
		resetNoteInput();
		noteNum++;
	};

	var removeListItem = function(index) {
		var position = todoList.indexOf(index);
		todoList.splice(position, 1);
		setTodoList();
	};

	var focusEventOn = function() {
		$(document).on('keydown', focusOnInput);
	};

	var focusEventOff = function() {
		$(document).off('keydown');
	};

	var changeNoteState = function() {
		var _this = $(this);
		var index = _this.parent().data('id'),
			checked = _this.prop('checked');

		if(checked) {
			_this.parent().addClass('done');
			todoList[index].done = 1;
		} else {
			_this.parent().removeClass('done');
			todoList[index].done = 0;
		}
		setTodoList();
	};

	var removeNote = function() {
		var index = $(this).parent().data('id');
		removeListItem(index);
		$(this).parent().remove();
		noteNum--;
	};

	var focusOnInput = function() {
		$(inputField).focus();
		focusEventOff();
	};

	var focusOffInput = function() {
		$(inputField).focus();
		focusEventOff();
	};

	var resetNoteInput = function() {
		inputField.val('');
	};

	return {
		init: function() {
			jQuery(document).ready(function() {
				inputField = $('input#notes-input');
				notesList = $('#notes-list');

				getListItems();
				focusOnInput();

				$('body').click(focusOnInput);

				inputField.on('keypress', function(e){
					focusOnInput();
					if(e.keyCode===13){
						if($(this).val().length>0){
							writeToNotes(createNote($(this).val()), true);
						}
					}
				}).blur(focusEventOn);

				$('input.checkbox').live('click', changeNoteState);
				$('section li span.close').live('click', removeNote);
			});
		}
	};
}();