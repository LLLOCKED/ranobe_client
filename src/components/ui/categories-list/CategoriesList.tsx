import { FC } from 'react';
import CategoryItem from './category-item/CategoryItem';

import styles from './CategoriesList.module.scss';

interface ICategories {
  categories?: { name: string }[];
}

const CategoriesList: FC<ICategories> = ({ categories }) => {
  return (
    <ul className={styles.list}>
      {categories?.map((category) => (
        <CategoryItem key={category.name} name={category.name} />
      ))}
    </ul>
  );
};

export default CategoriesList;
