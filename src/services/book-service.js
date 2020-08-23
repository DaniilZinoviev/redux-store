/**
 * @file
 * Main API class for retrieving books data.
 */
class BookService {
  /**
   * @returns {Array} Books array
   */
  getAllBooks() {
    return [
      {
        id: 1,
        title: "Eloquent Javascrtipt",
        author: "Marijn Haverbeke",
      },
      {
        id: 2,
        title: "Maintainable JavaScript",
        author: "Nicholas C. Zakas",
      },
    ];
  }
}

export default BookService;
