const email = document.getElementById('mail');

email.addEventListener('input', ()=>{
    email.setCustomValidity('');

    if(!email.validity.valid)
    {
        return;
    }
    
    if(!email.value.endsWith('@gmail.com'))
    {
        email.setCustomValidity('the mail should belong to google domain / ends with @gmail.com');
    }
});