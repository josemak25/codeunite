export const formatDate = date => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en', options);
};

export const urlValidator = url => {
  return url
    .toLowerCase()
    .replace(/[“”,?():]/g, '')
    .split(' ')
    .join('-');
};
