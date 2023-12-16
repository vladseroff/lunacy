export default function (target) {
    const element = document.getElementById(target)
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
        })
    }
}