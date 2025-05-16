document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('book-list');
    const addBookBtn = document.getElementById('add-book-btn');

    // Sample initial books
    const initialBooks = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A story of wealth, love, and the American Dream in the 1920s."
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A powerful story of racial injustice and moral growth in the American South."
        },
        {
            title: "1984",
            author: "George Orwell",
            description: "A dystopian novel about totalitarianism, surveillance, and thought control."
        }
    ];

    // Display initial books
    initialBooks.forEach(book => {
        addBookToDOM(book);
    });

    // Add book button click handler
    addBookBtn.addEventListener('click', function () {
        const title = prompt("Enter the book title:");
        if (!title) return; // Exit if user cancels

        const author = prompt("Enter the author's name:");
        if (!author) return;

        const description = prompt("Enter a short description:");
        if (!description) return;

        const newBook = {
            title,
            author,
            description
        };

        addBookToDOM(newBook);
    });

    // Function to add a book to the DOM
    function addBookToDOM(book) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-description">${book.description}</p>
        `;

        bookList.appendChild(bookCard);
    }
});