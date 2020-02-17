import axios from 'axios';
import SearchArea from '../SearchArea';
import Books from '../Books';
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY";
// const query = SearchArea({handleSearch});

export default {
    search: (e) => axios.get(BASEURL + e + APIKEY),
    getBooks: () => axios.get("/api/books"),
    getBook: (id) => axios.get("/api/books/" + id),
    deleteBook: (id) => axios.delete("/api/books", id),
    // saveBook: () => axios.post("/api/books", saveBook)
};
