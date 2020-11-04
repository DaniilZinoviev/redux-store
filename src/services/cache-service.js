/**
 * Class to store some data using any Browser storage.
 */
class Cache {
  key = "app-cache";

  /**
   * @public
   * @param {any} items
   */
  saveAll = (items) => {
    if (window) {
      window.localStorage.setItem(this.key, JSON.stringify(items));
    } else {
      console.error(`[Cache] window object is not defined.`);
    }
  };

  /**
   * @public
   * @return {any} items
   */
  getAll = () => {
    if (window) {
      const items = window.localStorage.getItem(this.key);
      return JSON.parse(items);
    } else {
      console.error(`[Cache] window object is not defined.`);
    }
  };
}

export default Cache;
