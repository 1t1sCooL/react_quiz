import {useState} from 'react';
import './index.scss';

const questions = [
  {
    title: 'Какие единицы измерения могут использоваться для атрибута ширины?',
    variants: ['Пиксели и %', 'Миллиметры и сантиметры', 'Пиксели и миллиметры'],
    correct: 0,
  },
  {
    title: 'Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
    variants: ['<title> … </title>', '<header> … </header>', '<body> … </body>'],
    correct: 0,
  },
  {
    title: 'Что содержит в себе атрибут href?',
    variants: [
      'Имя страницы, на которую произойдет перенаправление',
      'URL страницы, на которую произойдет перенаправление',
      'Указание на то, где будет открываться новая страница: в том же или новом окне',
    ],
    correct: 1,
  },
  {
    title: 'Какие из перечисленных тэгов относятся к созданию таблицы?',
    variants: [
      '<header> <body> <footer>',
      '<table> <tr> <td>',
      '<ul> <li> <tr> <td>',
    ],
    correct: 1,
  },
  {
    title: 'Укажите тэг, который соответствует элементу списка:',
    variants: [
      '<li>',
      '<ul>',
      '<ol>',
      '<span>',
    ],
    correct: 0,
  },
  {
    title: 'Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
    variants: [
      'Submit',
      'Checkbox',
      'Radiobutton',
      'Plaseholder',
    ],
    correct: 0,
  },
  {
    title: 'Какие тэги делают шрифт текста жирным?',
    variants: [
      '<ins> и <del>',
      '<li> и <ul>',
      '<b> и <strong>',
      '<i> и <em>',
    ],
    correct: 2,
  },
  {
    title: 'Неотображаемые комментарии в HTML задаются следующим образом:',
    variants: [
      '<! - Your comment -!>',
      '<! - - Your comment - -!>',
      '<!p> Your comment </!p>',
      '/*    */', 
    ],
    correct: 1,
  },
  {
    title: 'Укажите, какой элемент HTML5 отвечает за воспроизведение видео:',
    variants: [
      '<video>',
      '<media>',
      '<movie>',
      '<youtube>',
      '<vkvideo>', 
    ],
    correct: 0,
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

function HTMLQuiz() {
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

export default HTMLQuiz;

