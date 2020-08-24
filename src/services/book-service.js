/**
 * @file
 * Main API class for retrieving books data.
 */
class BookService {
  data = [
    {
      id: 1,
      title: "Eloquent Javascrtipt",
      author: "Marijn Haverbeke",
      price: 25.0,
      image: "https://eloquentjavascript.net/img/cover.jpg",
    },
    {
      id: 2,
      title: "Maintainable JavaScript",
      author: "Nicholas C. Zakas",
      price: 28.34,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51cTF3u7+XL._SX379_BO1,204,203,200_.jpg",
    },
  ];

  /**
   * @returns {Promise<Array>} Books array
   */
  getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}

export default BookService;
