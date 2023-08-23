export const converFormatText = (text) => {
  const camelCaseText = text.replace(/\s+/g, "").toLowerCase();
  return camelCaseText.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};
