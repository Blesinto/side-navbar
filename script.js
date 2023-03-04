let arrow = document.querySelectorAll(".arrow")
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement
        console.log(arrowParent)
        arrowParent.classList.toggle("ShowMenu")
    })

}
let sidebar = document.querySelector(".sidebar")
let sidebarbtn = document.querySelector(".bx-menu")
sidebarbtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})