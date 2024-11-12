let confirmationText = document.getElementById('confirmText');
let statusP = document.getElementById('orderStatus');
let orderBtn = document.getElementById('orderButton');
let reviewBtn = document.getElementById('reviewButton');
let reviewForm = document.getElementById('reviewForm');
let stars = document.querySelectorAll('.star');
let submitReviewBtn = document.getElementById('submitReview');
let thankYouMessage = document.getElementById('thankYouMessage');
let selectedRating = 0;

function confirmation() {
    confirmationText.innerText = "მადლობა შეკვეთისთვის!";
    statusP.innerHTML = "შეკვეთის სტატუსი: <span id='status'></span>";
    statusText = document.getElementById('status');
    statusText.innerText = "მუშავდება...";
    statusText.style.backgroundColor = 'orange';
    reviewBtn.style.display = "inline-block";
    console.log(statusText.innerText)
    setTimeout(() => {
        orderProduct();
    }, 3000);
}

function orderProduct() {
    let status = 'დამუშავდა';
    statusText.innerText = status;
    console.log(statusText.innerText)
    statusText.style.backgroundColor = 'green';
    setTimeout(() => {
        shipStatus(status);
    }, 3000);
}

function shipStatus(status) {
    status = 'გამოგზავნილია';
    statusText.innerText = status;
    console.log(statusText.innerText)
    statusText.style.backgroundColor = 'orange';
    setTimeout(() => {
        shipDone(status);
    }, 3000);
}

function shipDone(status) {
    status = 'მიღებულია';
    statusText.innerText = status;
    statusText.style.backgroundColor = 'green';
    console.log(statusText.innerText)
}

orderBtn.addEventListener('click', confirmation);

reviewBtn.addEventListener('click', () => {
    reviewForm.style.display = "block";
    reviewBtn.style.display = "none";
});

stars.forEach(star => {
    star.addEventListener('click', function () {
        stars.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        selectedRating = this.getAttribute('data-value');
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }
    });
});

submitReviewBtn.addEventListener('click', () => {
    if (selectedRating === 0) {
        alert("Please select a rating!");
        return;
    }

    thankYouMessage.innerText = `მადლობა შეფასებისთვის!`;
    reviewForm.style.display = "none";
    thankYouMessage.style.display = "block";
});
