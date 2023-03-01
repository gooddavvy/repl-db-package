import { connectToDB } from "./index.js";

var exampleDatabase = connectToDB("html-to-markdown-download-file-md-file-database", "GoodnessDavid");
console.log(exampleDatabase, typeof exampleDatabase);