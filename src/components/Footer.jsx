import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-a">A</span>IZA
          </span>
          <p className="footer__tagline">Искусство вкуса. Гармония момента.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Навигация</h4>
          <Link to="/" className="footer__link">Главная</Link>
          <Link to="/menu" className="footer__link">Меню</Link>
          <Link to="/cart" className="footer__link">Корзина</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Контакты</h4>
          <p className="footer__text">ул. Московская 155, Бишкек</p>
          <p className="footer__text">+996 312 000 000</p>
          <p className="footer__text">hello@aiza.kg</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Часы работы</h4>
          <p className="footer__text">Пн – Чт: 12:00 – 23:00</p>
          <p className="footer__text">Пт – Сб: 12:00 – 01:00</p>
          <p className="footer__text">Вс: 12:00 – 22:00</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <div className="footer__line"></div>
        <p className="footer__copy">© {new Date().getFullYear()} AIZA Restaurant. Все права защищены.</p>
      </div>
    </footer>
  )
}
