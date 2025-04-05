document.addEventListener("DOMContentLoaded", function () {
    const h4Elements = document.querySelectorAll(".main2 h4");

    h4Elements.forEach((item) => {
        item.style.cursor = "pointer";

        item.addEventListener("click", function () {
            const text = item.textContent.trim().toLowerCase();

            let targetClass = "";
            if (text === "about") targetClass = ".con2";
            else if (text === "skills") targetClass = ".skills";
            else if (text === "projects") targetClass = ".projects";
            else if (text === "contact") targetClass = ".contacts";

            if (targetClass) {
                const targetElement = document.querySelector(targetClass);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
});
