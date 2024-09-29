export const reconstructURLs = (url: string[]) => {
  const decodedURLs = url.map((segment) => decodeURIComponent(segment));
  return decodedURLs.join("//");
};
