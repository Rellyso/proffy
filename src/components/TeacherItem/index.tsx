import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../pages/services/api';

import './styles.css';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {

    function addNewConnection () {
        api.post('connections', { user_id: teacher.id })
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
                {/* Entusiasta das melhores tecnologias de química avançada. 
            <br />
                <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000   pessoas já passaram por uma das minhas explosões.
            */}
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>

                <a 
                    href={`https://wa.me/55${teacher.whatsapp}?text=Ol%C3%A1%2C+venho+do+Proffy%2C++queria+participar+das+suas+aulas%21`} 
                    target="_blank"
                    onClick={addNewConnection}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />

                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
