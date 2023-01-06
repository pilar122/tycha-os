document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    const messages = document.getElementById('messages');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.getElementById('message').value;
      if (message) {
        const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `
          <p>${message}</p>
          <div class="comments"></div>
        `;
        messages.appendChild(div);
        form.reset();
      }
    });
  
    messages.addEventListener('click', (event) => {
      if (event.target.classList.contains('comment-button')) {
        const messageDiv = event.target.parentElement.parentElement;
        const commentForm = messageDiv.querySelector('.comment-form');
        commentForm.classList.toggle('hidden');
      }
    });
  
    messages.addEventListener('submit', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('comment-form')) {
        const comment = event.target.querySelector('.comment-input').value;
        if (comment) {
          const commentsDiv = event.target.parentElement.querySelector('.comments');
          const commentDiv = document.createElement('div');
          commentDiv.classList.add('comment');
          commentDiv.innerHTML = `<p>${comment}</p>`;
          commentsDiv.appendChild(commentDiv);
          event.target.reset();
        }
      }
    });

    const xhr = new XMLHttpRequest();
        xhr.open('GET', '/messages.php');
        xhr.onload = () => {
    const messages = xhr.responseText.split('\n');
        // Iterate over the messages and add them to the page
        messages.forEach((message) => {
    const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<p>${message}</p>`;
        messages.appendChild(div);
  });
};
xhr.send();
  });