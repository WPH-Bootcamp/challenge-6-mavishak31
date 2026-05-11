// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

// Mulai pengujian di bawah ini

import readline from 'readline';

// import action menu
import {
  addBook,
  listBooks,
  searchBook,
  deleteBook,
} from './functions/bookManager';

// pakai readline untuk question interface menu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// looping menu utama
async function mainMenu(): Promise<void> {
  let isRunning = true;

  while (isRunning) {
    console.log('\nBook Management Application ');
    console.log('=============================');
    console.log('1. Book List');
    console.log('2. Search Book');
    console.log('3. Add Book');
    console.log('4. Delete Book');
    console.log('5. Exit');

    const choice = await ask('\nChoose Menu: ');

    // switch case untuk setiap pilihan pada menu
    switch (choice) {
      // list book
      case '1':
        listBooks();
        break;

      // search Book
      case '2':
        const keyword = await ask('Enter Book Title: ');
        searchBook(keyword);
        break;

      // add book
      case '3':
        const title = await ask('Enter Book Title: ');
        const author = await ask('Enter Author Name: ');
        const year = await ask('Enter Publication Year: ');

        // pada bagian add book supaya max number year nya 4 digit dan harus number
        const publicationYear = Number(year);
        if (isNaN(publicationYear) || year.length > 4) {
          console.log('\nInvalid Publication Year [4 Digit Number]\n');
          break;
        }

        addBook({
          title,
          author,
          publicationYear,
        });
        break;

      // delete book
      case '4':
        const deleteTitle = await ask(
          'Enter the title of the book you want to delete: '
        );
        deleteBook(deleteTitle);
        break;

      // exit program
      case '5':
        console.log('\nEnd Program');
        isRunning = false;
        rl.close();
        break;

      default:
        console.log('\nInvalid Menu\n');
    }
  }
}

// start program
mainMenu();

// test list book
addBook({
  title: 'test book',
  author: 'karangan sendiri',
  publicationYear: 2026,
});

addBook({
  title: 'The Psychology of Money',
  author: 'Morgan Housel',
  publicationYear: 2020,
});

addBook({
  title: 'Atomic Habits',
  author: 'James Clear',
  publicationYear: 2018,
});

// addBook({
//   title: 'The Principle of Power',
//   author: 'Dion Yulianto',
//   publicationYear: 2023,
// });

// addBook({
//   title: 'Keampuhan Terapi Air Putih',
//   author: 'A.S. Hamidin',
//   publicationYear: 2012,
// });

// listBooks();
// searchBook('title');
// deleteBook('title');
