document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    addBtn.addEventListener("click", () => {
        console.log("Натиснута кнопка: Додати");
    });

    increaseBtn.addEventListener("click", () => {
        console.log("Натиснута кнопка: Збільшити");
    });

    decreaseBtn.addEventListener("click", () => {
        console.log("Натиснута кнопка: Зменшити");
    });

    deleteBtn.addEventListener("click", () => {
        console.log("Натиснута кнопка: Видалити");
    });
});
