let todo = [];
let req = prompt("Please Enter Your request");
while (true) {
    if(req=="quit"){
        console.log("quiting app");
        break;
    }
    if (req == "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");
    }
    else if (req == "add") {
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("task is added");
    }
    else if (req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log('task deleted');
    }
    else {
        console.log("you entered wrong request");
    }
    req = prompt("Please Enter Your request");
}
