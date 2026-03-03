import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './DishCard.css'

export default function DishCard({ dish }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(dish)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="dish-card">
      <div className="dish-card__img-wrap">
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-card__img"
          loading="lazy"
        />
        <div className="dish-card__overlay" />
      </div>

      <div className="dish-card__body">
        <h3 className="dish-card__name">{dish.name}</h3>
        <p className="dish-card__desc">{dish.description}</p>

        <div className="dish-card__footer">
          <span className="dish-card__price">{dish.price.toLocaleString('ru-RU')} сом</span>
          <button
            className={`dish-card__btn ${added ? 'dish-card__btn--added' : ''}`}
            onClick={handleAdd}
          >
            {added ? (
              <>
                <CheckIcon />
                <span>Добавлено</span>
              </>
            ) : (
              <>
                <PlusIcon />
                <span>В корзину</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <polyline points="2,7 6,11 12,3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
