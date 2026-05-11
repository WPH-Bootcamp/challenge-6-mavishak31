// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { books } from '../data/books';
import { TBook } from '../types/index';

export function addBook(book: TBook): void {
  books.push(book);

  console.log(`The book "${book.title}" was successfully added`);
}

export function listBooks(): void {
  console.log('\n         === Book List ===');

  if (books.length === 0) {
    console.log('there are no books in the collection. ');
    return;
  }

  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

export function searchBook(title: string): void {
  console.log('\n    === Book Search Results ===');

  if (!title) {
    console.log('Enter keyword');
    return;
  }

  const foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (foundBooks.length === 0) {
    console.log('Book not found');
    return;
  }

  foundBooks.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

export function deleteBook(title: string): void {
  const index = books.findIndex(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  if (index === -1) {
    console.log(`\n"${title}" not found`);
    return;
  }

  const deleteBook = books.splice(index, 1);
  console.log(`\n"${deleteBook[0].title}" successfully deleted`);
}

// listBooks();
