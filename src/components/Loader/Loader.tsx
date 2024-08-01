import './Loader.scss';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';
import { DetailsSkeleton } from './DetailsSkeleton/DetailsSkeleton';
import { useLocation } from 'react-router-dom';
import { getNumbers, isProductsPage } from '../../utils/service';
import classNames from 'classnames';

type Props = {
  selectedProduct: boolean;
};

export const Loader: React.FC<Props> = ({ selectedProduct }) => {
  const { pathname } = useLocation();

  return (
    <>
      {selectedProduct && <DetailsSkeleton />}
      <div
        className={classNames('skeleton-container', {
          'skeleton-container__fix': selectedProduct,
        })}
      >
        {!isProductsPage(pathname, false) && (
          <div className="skeleton-container__top">
            <div className="skeleton skeleton-container__top--title" />

            <div className="skeleton-container__top--buttons">
              <div className="skeleton skeleton-container__top--button" />
              <div className="skeleton skeleton-container__top--button" />
            </div>
          </div>
        )}

        <div className="skeleton-container__bottom">
          {getNumbers(4).map(child => (
            <div key={child} className="skeleton-container__bottom--child">
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
