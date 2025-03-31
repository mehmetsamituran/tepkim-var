document.querySelector('.vote-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const category = e.target.querySelector('select').value;
    const reason = e.target.querySelector('textarea').value;

    console.log(`Email: ${email}, Category: ${category}, Reason: ${reason}`);
    alert('Your vote has been submitted!');
});