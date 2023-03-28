import React from 'react';
import PlusAddInterest from '../assets/svg/PlusAddInterest';

interface CategoryCard {
  categoryName?: string;
}

const CategoryCard: React.FC<CategoryCard> = ({ categoryName = '' }) => {
  return (
    <div
      className={`bg-app-grayLight rounded-2xl overflow-hidden flex justify-center cursor-pointer relative ${
        categoryName ? 'items-end' : 'items-center'
      }`}
    >
      {categoryName ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full overlay-gradient-category-card"></div>
          <span className="text-xl font-bold text-app-grayLighter mb-5 relative">
            {categoryName}
          </span>
        </>
      ) : (
        <PlusAddInterest />
      )}
    </div>
  );
};

export default CategoryCard;
