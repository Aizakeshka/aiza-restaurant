import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&fit=crop"
            alt="AIZA Restaurant"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <p className="hero__pre animate-fade-up" style={{ animationDelay: '0.1s' }}>Добро пожаловать в</p>
          <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.25s' }}>AIZA</h1>
          <p className="hero__sub animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Искусство вкуса. Гармония момента.
          </p>
          <p className="hero__desc animate-fade-up" style={{ animationDelay: '0.55s' }}>
            Изысканная авторская кухня, созданная из отборных ингредиентов.<br/>
            Каждое блюдо — история. Каждый вечер — событие.
          </p>
          <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/menu" className="btn btn--primary">Посмотреть меню</Link>
            <a href="#about" className="btn btn--ghost">Узнать больше</a>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          <span>Прокрутите</span>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container about__inner">
          <div className="about__text">
            <span className="section-label">О нас</span>
            <h2 className="section-title">Ресторан<br/><em>нового поколения</em></h2>
            <p className="about__body">
              AIZA — это пространство, где традиции европейской гастрономии встречаются с современными
              техниками приготовления. Наш шеф создаёт блюда, опираясь на сезонные продукты и идею
              о том, что еда должна приносить не только удовольствие, но и вдохновение.
            </p>
            <p className="about__body">
              Мы верим: в каждой трапезе есть место красоте.
            </p>
            <Link to="/menu" className="btn btn--outline">Открыть меню</Link>
          </div>
          <div className="about__imgs">
            <div className="about__img-main">
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=700&q=80&fit=crop" alt="Интерьер" />
            </div>
            <div className="about__img-small">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80&fit=crop" alt="Шеф повар" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats__grid">
          {[
            { num: '8+', label: 'Лет безупречного сервиса' },
            { num: '40+', label: 'Позиций в авторском меню' },
            { num: '12', label: 'Гастрономических наград' },
            { num: '1000+', label: 'Гостей каждый месяц' },
          ].map((s, i) => (
            <div className="stats__item" key={i}>
              <span className="stats__num">{s.num}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="featured">
        <div className="container">
          <span className="section-label">Избранное</span>
          <h2 className="section-title">Хиты нашего меню</h2>
          <div className="featured__grid">
            {[
              {
                img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=700&q=80&fit=crop',
                name: 'Стейк Рибай',
                cat: 'Основное блюдо',
                price: '3 200 сом',
              },
              {
                img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=80&fit=crop',
                name: 'Тирамису',
                cat: 'Десерт',
                price: '680 сом',
              },
              {
                img: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=700&q=80&fit=crop',
                name: 'Тар-тар из лосося',
                cat: 'Закуска',
                price: '950 сом',
              },
            ].map((item, i) => (
              <div className="featured__card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="featured__card-img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="featured__card-overlay" />
                  <div className="featured__card-info">
                    <span className="featured__card-cat">{item.cat}</span>
                    <h3 className="featured__card-name">{item.name}</h3>
                    <span className="featured__card-price">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="featured__cta">
            <Link to="/menu" className="btn btn--primary">Полное меню</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
