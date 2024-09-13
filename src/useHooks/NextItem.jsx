import React from "react";

const NextItem = ({ handleNextReview }) => {
  return (
    <img
      src='/images/icon/right.png'
      className='absolute top-1/2 -right-16 cursor-pointer'
      onClick={handleNextReview}
    />
  );
};

export default NextItem;
