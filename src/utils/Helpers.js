// comment users pictures

import userOne from '../img/CommentsPics/userOne.png';
import userTwo from '../img/CommentsPics/userTwo.png';
import userThree from '../img/CommentsPics/userThree.png';
import userFour from '../img/CommentsPics/userFour.png';
import userFive from '../img/CommentsPics/userFive.png';

export { userOne, userTwo, userThree, userFour, userFive };

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
