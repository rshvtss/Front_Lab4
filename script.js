document.addEventListener("DOMContentLoaded", () => {
    // --- Частина 1: підсвічування li за варіантом ---
    const n = 18;
    const listItems = document.querySelectorAll("li");

    const firstIndex = (n % 10) % listItems.length;        // 8 % 9 = 8 → Freddie Gibbs
    const secondIndex = (firstIndex + 1) % listItems.length; // 0 → Гра на гітарі

    // Додаємо id та клас
    listItems[firstIndex].id = "firstItem";
    listItems[secondIndex].classList.add("secondItem");

    const color1 = { background: "#ffeb3b", text: "#000" };
    const color2 = { background: "#4caf50", text: "#fff" };

    let firstClicked = false;
    let secondClicked = false;

    document.getElementById("firstItem").addEventListener("click", function() {
        if (!firstClicked) {
            this.style.backgroundColor = color1.background;
            this.style.color = color1.text;
        } else {
            this.style.backgroundColor = "";
            this.style.color = "";
        }
        firstClicked = !firstClicked;
    });

    document.querySelector(".secondItem").addEventListener("click", function() {
        if (!secondClicked) {
            this.style.backgroundColor = color2.background;
            this.style.color = color2.text;
        } else {
            this.style.backgroundColor = "";
            this.style.color = "";
        }
        secondClicked = !secondClicked;
    });

    // --- Частина 2: кнопки під зображенням ---
    let img = document.getElementById("cityImage");
    const imgContainer = img ? img.parentNode : null; // контейнер зображення

    const addBtn = document.getElementById("addBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const deleteBtn = document.getElementById("deleteBtn");

    // Додати зображення, якщо його немає
    addBtn.addEventListener("click", () => {
        if (!document.getElementById("cityImage") && imgContainer) {
            const newImg = document.createElement("img");
            newImg.id = "cityImage";
            newImg.src = "imgs/varash.jpg";
            newImg.style.maxWidth = "100%";
            newImg.style.height = "auto";
            imgContainer.appendChild(newImg);
            img = newImg;
        }
    });

    // Збільшити зображення
    increaseBtn.addEventListener("click", () => {
        if (img) img.style.width = (img.width * 1.2) + "px";
    });

    // Зменшити зображення
    decreaseBtn.addEventListener("click", () => {
        if (img) img.style.width = (img.width * 0.8) + "px";
    });

    // Видалити зображення
    deleteBtn.addEventListener("click", () => {
        if (img) {
            img.remove();
            img = null;
        }
    });
});
