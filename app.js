var ul = document.getElementById('list');

function addTodo(){
    var input = document.getElementById('input');

    var li = document.createElement('li');
    var text = document.createTextNode(input.value)
    li.appendChild(text)

    ul.appendChild(li)

    input.value = ""

    var editBtn = document.createElement('i')
    // var editText = document.createTextNode("EDIT")
    // editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","edit(this)");
    // editBtn.setAttribute("class","edit");
    editBtn.setAttribute("class","fa fa-edit edit");

    li.appendChild(editBtn)

    var delBtn = document.createElement('i')
    // var delText = document.createTextNode("DELETE")
    // delBtn.appendChild(delText)
    delBtn.setAttribute("onclick","del(this)");
    delBtn.setAttribute("class","fas fa-trash-alt del");

    li.appendChild(delBtn)
}
function del(e){
    e.parentNode.remove()
}
function delAll(){
    ul.innerHTML=""
}
function edit(e){
    var edit = e.parentNode.childNodes[0].nodeValue;
    // console.log(e.parentNode)
    var update = prompt('Edit Todo.....',edit);
    e.parentNode.firstChild.nodeValue = update;
}