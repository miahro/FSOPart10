export const formatThousands = (statInput) => {
  if (statInput > 1000) {
    return `${Math.round((10 * statInput) / 1000) / 10}k`;
  } else {
    return statInput;
  }
};
