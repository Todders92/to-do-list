// bBsiness logic below:
function Task(name, description) {
  this.name = name
  this.description = description
}
function ToDoList() {
  this.tasks = [];
  this.currentId = 0;
}
ToDoList.prototype.assignId = function() {
this.currentId +=1;
return this.currentId;
}
ToDoList.prototype.addTask = function(job){
  job.id = this.assignId();
  this.tasks.push(job);
}
// Front end logic below:
$(document).ready(function() {
  var toDoList = new ToDoList();
  $("form").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    var description = $("input#description").val();
    var job = new Task (task, description)
    toDoList.addTask(job);
    console.log(job);
   $(".output").append("<li id=fancy" +job.name+ ">" + job.name+ "</li>" + "<li>" + job.description + "</li>")
  });
  $(".output").on("click", "li", function() {
    $(this).addClass("strikeThrough");
    // var display = toDoList.tasks[0].description;
    // console.log(display);
    // this.removeChild(".output".firstChild);
    // $(".output li").append("<li>" + display + "</li>");
  
  })
})
