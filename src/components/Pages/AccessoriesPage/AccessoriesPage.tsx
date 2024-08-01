import { ProductPage } from '../ProductPage';
import { Category, PageName } from '../../../types';

export const AccessoriesPage = () => (
  <ProductPage category={Category.Accessories} title={PageName.Accessories} />
);
