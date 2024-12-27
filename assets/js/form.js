    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function (event) {
        e.preventDefault();    


       
        const username = form.username.value.trim();
        const title = form.title.value.trim();
        const content = form.content.value.trim();

       

        if (!blogContent) {
            console.log('Must include username, title, and content in order to publish')
            return;
        };
       