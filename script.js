//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');
const select = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
    const selectedIndex = select.selectedIndex;
    
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});