const lessons = document.querySelectorAll(".lesson");

lessons.forEach((lesson) => {
    lesson.addEventListener("click", () => {
        lesson.classList.toggle("active");
    });
});