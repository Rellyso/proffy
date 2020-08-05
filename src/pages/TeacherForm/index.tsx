import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import WarningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState(
        [
            { week_day: 0, from: '', to: ''},
        ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''},
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input label="Nome completo" name="name" />

                    <Input label="Avatar" name="avatar" />

                    <Input label="WhatsApp" name="whatsapp" />

                    <Textarea label="Biografia" name="bio" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        label="Matéria"
                        name="subject"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Filosofia', label: 'Filosofia' },
                        ]}
                    />

                    <Input label="Custo de aula por hora" name="cost" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="submit" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem, index) => {

                        return (
                            <div key={index} className="schedule-item">
                                <Select
                                    label="Dia da Semana"
                                    name="week_day"
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sábado-feira' },
                                    ]}
                                />

                                <Input name="from" label="Das" type="time" />

                                <Input name="to" label="às" type="time" />
                            </div>
                        );
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={WarningIcon} alt="Aviso" />
                        Importante <br />
                        Preencha todos os dados
                    </p>

                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>

            </main>


        </div>
    );
}

export default TeacherForm;