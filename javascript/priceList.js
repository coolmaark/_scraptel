var noOfCards = document.querySelectorAll(".pro").length;
for(let i=0; i<noOfCards; ++i) {
    var titleId = document.querySelectorAll(".pro")[i];
    titleId.addEventListener("click", function() {
        var title = this.childNodes[3].childNodes[0].nextElementSibling.innerHTML;
        localStorage.setItem('title', title);
        var price = this.childNodes[3].childNodes[2].nextElementSibling.innerHTML;
        localStorage.setItem('price', price);
        window.location.href = "../html/sell.html"
    });
}