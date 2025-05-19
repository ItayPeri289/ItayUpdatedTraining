class Utils {
  static sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}

export default Utils;
