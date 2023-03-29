import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { categories } from '../../lib/data/categories';
import { CategoryMock } from '../../lib/interfaces/categories.interface';
import PlusAddInterest from '../assets/svg/PlusAddInterest';

interface CategoryCard {
  categoryId?: number;
  handleClick?: (category?: CategoryMock) => void;
}

const CategoryCard: React.FC<CategoryCard> = ({ categoryId, handleClick }) => {
  const [category, setCategory] = useState<CategoryMock>();

  const getCategory = (id?: number) => {
    return categories.find((category) => category.id === id);
  };
  useEffect(() => {
    setCategory(getCategory(categoryId));
  }, [categoryId]);

  return (
    <div
      className={`bg-app-grayLight rounded-2xl overflow-hidden flex justify-center cursor-pointer relative ${
        categoryId ? 'items-end' : 'items-center'
      }`}
      {...(handleClick && { onClick: () => handleClick(category) })}
    >
      {category ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full overlay-gradient-category-card"></div>
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={50}
            className={'object-cover w-full h-full absolute'}
          />
          <span className="text-xl font-bold text-app-grayLighter mb-5 relative">
            {category?.name}
          </span>
        </>
      ) : (
        <PlusAddInterest />
      )}
    </div>
  );
};

export default CategoryCard;
