export default class ShowForm {
    constructor() {
        this.init();
    }

    init() {
        // Create the overlay
        this.overlay = document.createElement("div");
        this.overlay.id = "form_overlay";
        this.overlay.style.display = "none"; // Initially hidden

        // Create the form container
        this.formContainer = document.createElement("div");
        this.formContainer.id = "form_container";

        // Inside the form container, there is a form
        this.form = document.createElement("form");

        // Task Description
        this.taskDescription = document.createElement("textarea");
        this.taskDescription.id = "taskDescription";
        this.taskDescription.cols = "30";
        this.taskDescription.rows = "3";
        this.taskDescription.placeholder = "Enter task description...";

        // Due Date
        this.dueDate = document.createElement("input");
        this.dueDate.type = "date";
        this.dueDate.id = "due_date";

        // Priority Dropdown
        this.prioritySelect = document.createElement("select");
        this.prioritySelect.id = "task_priority";
        ["High", "Medium", "Low"].forEach((priority) => {
            const option = document.createElement("option");
            option.value = priority;
            option.textContent = priority;
            this.prioritySelect.appendChild(option);
        });

        // Submit Button
        this.submit = document.createElement("button");
        this.submit.id = "submit_button";
        this.submit.type = "submit";
        this.submit.textContent = "Submit";

        // Close Button
        this.close = document.createElement("button");
        this.close.id = "close_button";
        this.close.type = "button"; // Change type to button
        this.close.textContent = "Close";

        // Append elements to form
        this.form.append(
            this.taskDescription,
            this.dueDate,
            this.prioritySelect,
            this.submit,
            this.close
        );

        // Append form to form container
        this.formContainer.appendChild(this.form);

        // Append the form container to the overlay
        this.overlay.appendChild(this.formContainer);

        // Append the overlay to the body
        document.body.appendChild(this.overlay);

        // Event listeners
        this.initEventListeners();
    }

    setButton(button) {
        // Add event listener for the button to open the form
        button.addEventListener("click", () => {
            this.overlay.style.display = "flex"; // Show the overlay
            document.body.classList.add("blur-background"); // Add blur effect to background
        });
    }

    initEventListeners() {
        // Close the form when the close button is clicked
        this.close.addEventListener("click", () => {
            this.overlay.style.display = "none"; // Hide the overlay
            document.body.classList.remove("blur-background"); // Remove blur effect
        });

        // Prevent form submission default behavior
        this.submit.addEventListener("click", (event) => {
            event.preventDefault();

            const task = {
                description: this.taskDescription.value.trim(),
                dueDate: this.dueDate.value,
                priority: this.prioritySelect.value,
            };

            if (task.description) {
                const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                tasks.push(task);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                console.log("Task saved:", task);
            } else {
                alert("Please enter a task description.");
            }
        });
    }
}
