import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/38724010?s=460&u=056b2659d6ac0e487efab430dff6646e49f344fc&v=4" alt="Teste"/>
        <div>
          <strong>Felipe Silva</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta em Física
        <br /><br />
        Apaixonado por Física e tudo mais
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;