import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, totalPrice } = useCart()
  const [ordered, setOrdered] = useState(false)

  const handleOrder = () => {
    setOrdered(true)
    clearCart()
  }

  if (ordered) {
    return (
      <main className="cart-page">
        <div className="container cart-success">
          <div className="cart-success__icon">✓</div>
          <h2 className="cart-success__title">Заказ оформлен!</h2>
          <p className="cart-success__text">
            Спасибо! Ваш заказ принят. Мы свяжемся с вами в ближайшее время.
          </p>
          <Link to="/menu" className="btn btn--primary">Вернуться к меню</Link>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="container cart-empty">
          <div className="cart-empty__icon">
            <BagIcon />
          </div>
          <h2 className="cart-empty__title">Корзина пуста</h2>
          <p className="cart-empty__text">Добавьте блюда из нашего меню, чтобы оформить заказ.</p>
          <Link to="/menu" className="btn btn--primary">Перейти в меню</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="container">
        <div className="cart-page__header">
          <span className="section-label">Ваш заказ</span>
          <h1 className="cart-page__title">Корзина</h1>
        </div>

        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item__info">
                  <h3 className="cart-item__name">{item.name}</h3>
                  <p className="cart-item__desc">{item.description}</p>
                  <span className="cart-item__unit-price">
                    {item.price.toLocaleString('ru-RU')} сом / шт
                  </span>
                </div>
                <div className="cart-item__controls">
                  <div className="cart-item__qty">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQty(item.id, -1)}
                      aria-label="Уменьшить"
                    >−</button>
                    <span className="cart-item__qty-val">{item.qty}</span>
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQty(item.id, 1)}
                      aria-label="Увеличить"
                    >+</button>
                  </div>
                  <span className="cart-item__total">
                    {(item.price * item.qty).toLocaleString('ru-RU')} сом
                  </span>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                    aria-label="Удалить"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3 className="cart-summary__title">Итого</h3>

            <div className="cart-summary__rows">
              {items.map(item => (
                <div key={item.id} className="cart-summary__row">
                  <span>{item.name} × {item.qty}</span>
                  <span>{(item.price * item.qty).toLocaleString('ru-RU')} сом</span>
                </div>
              ))}
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__total">
              <span>Итого к оплате</span>
              <span className="cart-summary__total-price">
                {totalPrice.toLocaleString('ru-RU')} сом
              </span>
            </div>

            <button className="cart-summary__order-btn" onClick={handleOrder}>
              Оформить заказ
            </button>

            <button className="cart-summary__clear" onClick={clearCart}>
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

function BagIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6l-1 14H6L5 6"/>
      <path d="M10 11v6M14 11v6"/>
      <path d="M9 6V4h6v2"/>
    </svg>
  )
}
