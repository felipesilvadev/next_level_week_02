import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import formatValue from '../../utils/formateValue';

import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  user_id: number;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('/connections', { user_id: teacher.user_id });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{formatValue(teacher.cost)}</strong>
        </p>
        <a 
          href={`https://wa.me/${teacher.whatsapp}`} 
          onClick={createNewConnection}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;