'use strict'

function editRow(btn) {
    var fields = btn.closest('tr').querySelectorAll('.field');

    for (var i = 0; i < fields.length; i++) {
        fields[i].classList.add("editable");
        fields[i].setAttribute('contenteditable', true);
    }

    makeEdit(btn, true);
}

function cancelRow(btn) {
    var fields = btn.closest('tr').querySelectorAll('.field');

    for (var i = 0; i < fields.length; i++) {
        fields[i].classList.remove("editable");
        fields[i].setAttribute('contenteditable', false);
    }

    makeEdit(btn, false);
}

function makeEdit(btn, boolean) {
    var td = btn.parentElement;

    if (boolean) {
        td.querySelector('#cancelBtn').style.display = "inline-block";
        td.querySelector('#saveBtn').style.display = "inline-block";
        td.querySelector('#editBtn').style.display = "none";
        td.querySelector('#deleteBtn').style.display = "none";
    } else {
        td.querySelector('#cancelBtn').style.display = "none";
        td.querySelector('#saveBtn').style.display = "none";
        td.querySelector('#editBtn').style.display = "inline-block";
        td.querySelector('#deleteBtn').style.display = "inline-block";
    }
}

$('#deleteModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var id = button.data('whatever');
    var modal = $(this);
    console.log("id "+ id);
    modal.find('.modal-footer input').val(id)
});
