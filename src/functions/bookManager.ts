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

// fungsi add book
export function addBook(book: TBook): void {
  books.push(book);

  console.log(`\nThe book "${book.title}" was successfully added\n`);
}

// fungsi list book
export function listBooks(): void {
  console.log('\n         === Book List ===');

  // jika list book nya tidak ada
  if (books.length === 0) {
    console.log('\nthere are no books in the collection. \n');
    return;
  }

  // untuk setiap buku yang masuk ke list book
  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

// fungsi search book
export function searchBook(title: string): void {
  console.log('\n    === Book Search Results ===');

  // jika tidak memasukan title saat melakukan pencarian buku
  if (!title) {
    console.log('Enter keyword');
    return;
  }

  // menyesuaikan judul buku yang dicari
  const foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  // jika buku yang dicari tidak ada
  if (foundBooks.length === 0) {
    console.log('\nBook not found\n');
    return;
  }

  foundBooks.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`
    );
  });
}

// fungsi delete book
export function deleteBook(title: string): void {
  const index = books.findIndex(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  // jika judul yang ingin di delete tidak sesuai
  if (index === -1) {
    console.log(`\n"${title}" not found\n`);
    return;
  }

  // menghapus data buku yang sudah ditambahkan ke array, dan menampilkan nama buku yang sudah di delete
  const deleteBook = books.splice(index, 1);
  console.log(`\n"${deleteBook[0].title}" successfully deleted\n`);
}

// listBooks();
