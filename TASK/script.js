function handleClick(event) {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        if (!this.checkValidity()) {
            return;
        }
        event.preventDefault();
    });
}