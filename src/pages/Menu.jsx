import React, { useState } from 'react'
import { menuItems, categories } from '../data/menu'
import DishCard from '../components/DishCard'
import './Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters')

  const filtered = menuItems.filter(d => d.category === activeCategory)

  return (
    <main className="menu-page">
      <div className="menu-page__header">
        <div className="container">
          <span className="section-label">Гастрономия</span>
          <h1 className="menu-page__title">Наше Меню</h1>
          <p className="menu-page__sub">
            Каждое блюдо создано с любовью и вниманием к деталям.<br />
            Мы работаем только с лучшими сезонными продуктами.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="menu-page__tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`menu-tab ${activeCategory === cat.id ? 'menu-tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-page__grid">
          {filtered.map((dish, i) => (
            <div key={dish.id} style={{ animationDelay: `${i * 0.08}s` }}>
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
