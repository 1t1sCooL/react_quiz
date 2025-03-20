import {useState} from 'react';
import './index.scss';

const questions = [
  {
    title: 'Какое свойство указывает задний фон для тега?',
    variants: ['color', 'background-clip', 'display', 'transition', 'background'],
    correct: 4,
  },
  {
    title: 'Как установить ширину объекта?',
    variants: ['При помощи атрибута width', 'За счёт свойства width', 'Оба способа подходят для этого'],
    correct: 2,
  },
  {
    title: 'Какой псевдокласс сработает при установке курсора в текстовое поле?',
    variants: [
      ':hover',
      ':active',
      ':not(:disabled)',
      ':visited',
      ':focus',
    ],
    correct: 4,
  },
  {
    title: 'Что такое «outline»?',
    variants: [
      'Внешнее свечение блока',
      'Установка тени блока',
      'Установка границ для блока',
      'Внешняя обводка блока',
    ],
    correct: 0,
  },
  {
    title: 'Для чего нужен CSS?',
    variants: [
      'Для создания разметки на странице',
      'Для добавления функциональности к странице',
      'Для работы со стилями на страницах сайта',
      'Для работы со стилями в фреймах',
    ],
    correct: 2,
  },
  {
    title: 'Как указать важность для свойства?',
    variants: [
      'Такое сделать нет возможности',
      'Необходимое более важное значение записать последний в селекторе',
      'Указать перед свойством !',
      'После свойства прописать !important',
    ],
    correct: 3,
  },
  {
    title: 'Что делает свойство «clear»?',
    variants: [
      'Очищает объект от обтекания с определенной стороны',
      'Удаляет все отступы у объекта',
      'Очищает содержимое объекта',
      'Очищает объект от всех стилей',
      'Полностью очищает объект от позиционирования',
    ],
    correct: 0,
  },
  {
    title: 'Где верно указано свойство?',
    variants: [
      'back-color: red;',
      'background: #00;',
      'bg: #fafafa;',
      'background_color: white;', 
      'background: #fff;',
    ],
    correct: 4,
  },
  {
    title: 'Где верно создается «плавающий блок»?',
    variants: [
      'div {float: right}',
      'div {position: right}',
      'div {right: 0px}',
      'div {direction: rtl}', 
    ],
    correct: 0,
  },
  {
    title: 'Где неверно записано свойство «Font-family»?',
    variants: [
      'font-family: serif;',
      'font-family: "Gill Sans", sans-serif;',
      'font-family: cursive;',
      'font-family: Georgia, serif;',
      'Все варианты являются верными',  
    ],
    correct: 4,
  },
  {
    title: 'Как много стилей можно добавить к одному объекту?',
    variants: [
      'Не более 20',
      'Не более 50',
      'Не более 100',
      'Неограниченное количество', 
    ],
    correct: 3,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({question, onClickVariant, step}) {
  const persentage = Math.round((step / questions.length)*100);
  console.log(persentage)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index)=>{
            return <li onClick={()=>onClickVariant(index)} key={text}>{text}</li>
          })
        }
      </ul>
    </>
  );
}

function CSSQuiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0)
  const question = questions[step];

  const onClickVariant=(index)=>{
    console.log(step, index);
    setStep(step+1);
    if(index === question.correct){
      setCorrect(correct+1);
    }
  }

  console.log(question)
  return (
    <div className="App">
      {
        step !== questions.length ? <Game question={question} 
        step={step} setStep={setStep} 
        onClickVariant={onClickVariant}/> : 
        <Result correct={correct}/>
      }
    </div>
  );
}

export default CSSQuiz;

