"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Mulai pengujian di bawah ini
const readline_1 = __importDefault(require("readline"));
const bookManager_1 = require("./functions/bookManager");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}
async function mainMenu() {
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
        switch (choice) {
            case '1':
                (0, bookManager_1.listBooks)();
                break;
            case '2':
                const keyword = await ask('Enter Book Title: ');
                (0, bookManager_1.searchBook)(keyword);
                break;
            case '3':
                const title = await ask('Enter Book Title: ');
                const author = await ask('Enter Author Name: ');
                const year = await ask('Enter Publication Year: ');
                const publicationYear = Number(year);
                if (isNaN(publicationYear) || year.length > 4) {
                    console.log('\nInvalid Publication Year [4 Digit Number]\n');
                    break;
                }
                (0, bookManager_1.addBook)({
                    title,
                    author,
                    publicationYear,
                });
                break;
            case '4':
                const deleteTitle = await ask('Enter the title of the book you want to delete: ');
                (0, bookManager_1.deleteBook)(deleteTitle);
                break;
            case '5':
                console.log('\nEnd Program');
                isRunning = false;
                rl.close();
                break;
            default:
                console.log('Invalid Menu');
        }
    }
}
mainMenu();
(0, bookManager_1.addBook)({
    title: 'test book',
    author: 'karangan sendiri',
    publicationYear: 2026,
});
(0, bookManager_1.addBook)({
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    publicationYear: 2020,
});
(0, bookManager_1.addBook)({
    title: 'Atomic Habits',
    author: 'James Clear',
    publicationYear: 2018,
});
(0, bookManager_1.addBook)({
    title: 'The Principle of Power',
    author: 'Dion Yulianto',
    publicationYear: 2023,
});
(0, bookManager_1.addBook)({
    title: 'Keampuhan Terapi Air Putih',
    author: 'A.S. Hamidin',
    publicationYear: 2012,
});
// listBooks();
// searchBook('title');
// deleteBook('title');
