import showForm from "./button_task"

export default class HomePage {
    constructor() {
        // Store the taskManager instance
        this.mainContainer = document.getElementById("main_div");
        this.createHomePage();

        // instantiating home page  
        this.showForm = new showForm()
    }

    createHomePage() {
        // Clear the container
        this.mainContainer.textContent = "";

        // Heading management container
        const head = document.createElement("div");
        head.classList.add("head");

        const heading = document.createElement("h1");
        heading.textContent = "To do's";

        head.appendChild(heading);

        // Add button container
        const addTask = document.createElement("div");
        addTask.classList.add("add_task");

        const addTaskButton = document.createElement("button");
        addTaskButton.id = "add_task_button";
        addTaskButton.textContent = "Add Task";

        addTask.appendChild(addTaskButton);

        // Append elements to the main container
        this.mainContainer.append(head, addTask);


         // Pass the button to ShowForm
         this.showForm.setButton(addTaskButton);

     

    
        
    }

    
}
