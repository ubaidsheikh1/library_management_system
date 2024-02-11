let library = [];

function addBook() {
  const bookId = document.getElementById('bookId').value;
  const bookTitle = document.getElementById('bookTitle').value;
  const authorName = document.getElementById('authorName').value;

  
  if (!bookId || !bookTitle || !authorName) {
    document.getElementById('feedbackMessage').innerText = 'Please fill in all fields.';
    return;
  }

  
  if (library.some(book => book.id === bookId)) {
    document.getElementById('feedbackMessage').innerText = 'Book with the same ID already exists.';
    return;
  }

  const newBook = {
    id: bookId,
    title: bookTitle,
    author: authorName,
    isBorrowed: false,
  };

  library.push(newBook);
  displayBooks();
  document.getElementById('feedbackMessage').innerText = 'Book added successfully.';
}

function borrowReturnBook(index) {
  library[index].isBorrowed = !library[index].isBorrowed;
  displayBooks();
}

function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  library.forEach((book, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${book.id} - ${book.title} by ${book.author}</span>
                         <button onclick="borrowReturnBook(${index})">${book.isBorrowed ? 'Return' : 'Borrow'}</button>`;
    bookList.appendChild(listItem);
  });
}

function searchBook() {
  const searchTitle = document.getElementById('searchTitle').value.toLowerCase();

  const searchResults = library.filter(book => book.title.toLowerCase().includes(searchTitle));

  displayBooks();
  
  if (searchResults.length > 0) {
    document.getElementById('feedbackMessage').innerText = 'Search results:';
  } else {
    document.getElementById('feedbackMessage').innerText = 'No results found.';
  }
}
