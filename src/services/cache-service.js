class Cache {
  key = "app-cache";

  saveAll = (items) => {
    if (window) {
      return window.localStorage.setItem(this.key, JSON.stringify(items));
    }
    console.error(`[Cache] window object is not defined.`);
  };

  getAll = () => {
    if (window) {
      const items = window.localStorage.getItem(this.key);
      return JSON.parse(items);
    }
    console.error(`[Cache] window object is not defined.`);
  };
}

export default Cache;
