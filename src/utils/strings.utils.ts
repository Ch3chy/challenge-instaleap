export const getTextInitials = (text: string) => {
  const nameSplited = text.split(" ");
  return nameSplited.length >= 2
    ? `${nameSplited[0][0]}${nameSplited[1][0]}`
    : text.slice(0, 2);
};
