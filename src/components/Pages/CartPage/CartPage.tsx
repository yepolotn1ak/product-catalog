import './CartPage.scss';
import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import { PageName } from '../../../types';
import { NavigationPath } from '../NavigationPath/NavigationPath';
import { CatalogContext } from '../../../context/CatalogContext';
import { CartItem } from '../CartItem/CartItem';
import { Modale } from './Modale/Modale';
import { Images } from '../../../images/images';
import { disableScroll, getQuantityText } from '../../../utils/service';

export const CartPage = () => {
  const {
    cart,
    totalCartQuantity,
    totalCheckout,
    checkoutIsClicked,
    setCheckoutIsClicked,
  } = useContext(CatalogContext);

  useEffect(() => {
    document.title = PageName.Cart;
  }, []);

  useEffect(() => disableScroll(checkoutIsClicked), [checkoutIsClicked]);

  return (
    <>
      <section className="container cart">
        <NavigationPath />

        {!cart.length && !checkoutIsClicked && (
          <article className="cart__empty">
            <h1>{`Your ${PageName.Cart.toLowerCase()} is empty`}</h1>

            <img
              src={Images.EmptyCart}
              alt="emptyCart"
              className="cart__empty--photo"
            />
          </article>
        )}

        {!!cart.length && (
          <>
            <h1>{PageName.Cart}</h1>

            <div className="cart__grid">
              <ul className="cart__list">
                {cart.map(cartProduct => (
                  <CartItem key={cartProduct.id} cartProduct={cartProduct} />
                ))}
              </ul>

              <div className="cart__priceContainer">
                <article className="cart__totalPrice">
                  <div className="cart__totalPrice--priceInfo">
                    <h2 className="cart__totalPrice--priceInfo-price">{`$${totalCheckout}`}</h2>
                    <p className="body-text">
                      {getQuantityText(totalCartQuantity)}
                    </p>
                  </div>

                  <button
                    className={classNames('cart-button', {
                      'cart-button__selected': checkoutIsClicked,
                    })}
                    onClick={() => setCheckoutIsClicked(true)}
                  >
                    Checkout
                  </button>
                </article>
              </div>
            </div>
          </>
        )}
      </section>

      {checkoutIsClicked && <Modale />}
    </>
  );
};
