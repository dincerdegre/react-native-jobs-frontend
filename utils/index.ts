export const checkImageURL = (url: string) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};

export const checkURL = (url: string) => {
  if (!url) {
    return false;
  } else if (url.startsWith("http://") || url.startsWith("https://")) {
    return true;
  } else {
    return false;
  }
};
