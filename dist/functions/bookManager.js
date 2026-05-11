"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
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
const books_1 = require("../data/books");
function addBook(book) {
    books_1.books.push(book);
    console.log(`The book ${book.title} was successfully added`);
}
function listBooks() {
    console.log('\n         === Book List ===');
    if (books_1.books.length === 0) {
        console.log('there are no books in the collection. ');
        return;
    }
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
    });
}
function searchBook(title) {
    console.log('\n    === Book Search Results ===');
}
// listBooks();
