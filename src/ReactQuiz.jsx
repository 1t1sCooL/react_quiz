import {useState} from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Преимущества React',
    variants: [
      'Реактивность, простота изучения, модульность',
      'Крутое название, большой доход',
      'Виртуальный DOM, компонентный подход, высокая производительность',
    ],
    correct: 2,
  },
  {
    title: 'Куда можно встроить готовый код из метода render()?',
    variants: [
      'Только в div',
      'Только в тег, у которого есть id',
      'В div или же в span',
      'В любой тег',
    ],
    correct: 3,
  },
  {
    title: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте?',
    variants: [
      'Не более 3',
      'Не более 10',
      'Неограниченное количество',
      'Всегда 1',
    ],
    correct: 3,
  },
  {
    title: 'Чем свойства отличаются от состояний?',
    variants: [
      'Состояния можно изменять, свойства нельзя',
      'Свойства можно изменять, состояния нельзя',
      'Свойства для работы со значениями, состояния для работы с функциями',
      'Состояния для работы со значениями, свойства для работы с функциями',
    ],
    correct: 0,
  },
  {
    title: 'Как много компонентов может быть на сайте?',
    variants: [
      'Не более 10',
      'Не более 100',
      'Не более 50',
      'Не более 300',
      'Неограниченное количество', 
    ],
    correct: 4,
  },
  {
    title: 'Какая компания разработала React JS?',
    variants: [
      'Twitter',
      'GitHub',
      'Google',
      'Amazon',
      'Facebook', 
    ],
    correct: 4,
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

function ReactQuiz() {
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

export default ReactQuiz;

