export const truncateText = (text: string) => {
  if (text.length > 15) {
    return text.substring(0, 20) + "...";
  }
  return text;
};
