import "./styles.css";

import HomePage from "./home";
import ShowForm from "./button_task";

document.addEventListener("DOMContentLoaded", () => {
    const homePage = new HomePage(); // Create the HomePage
    new ShowForm(); // Initialize ShowForm after HomePage sets up the DOM
});

