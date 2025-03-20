import {useState} from 'react';
import './index.scss';

const questions = [
  {
    title: 'В чем разница между null и undefined?',
    variants: ['null - это 0, а undefined не нашли', 'Они одинаковы', 'null - значение отсутсвия значения, undefined - значение по умолчанию для переменной которой ничего не присвоили'],
    correct: 2,
  },
  {
    title: 'Для чего используется оператор "&&"?',
    variants: ['Query параметры', 'Логическое "или" в JavaScript, возвращает первое правдивое значение', 'Логическое "И" в JavaScript, возвращает первое ложное значение'],
    correct: 2,
  },
  {
    title: 'Что такое DOM?',
    variants: [
      'Объект',
      'Это то, где живем',
      'Массив',
    ],
    correct: 0,
  },
  {
    title: 'Для чего используется оператор "!!"?',
    variants: [
      'Даем явно показать что мы хотим отрицательное значение',
      'Двойное отрицание, приведение к логическому значению',
      'Для передачи эмоций движку V8',
    ],
    correct: 1,
  },
  {
    title: 'В чем отличие между локальной и глобальной переменной?',
    variants: [
      'Локальные видны повсюду, глобальные только в функциях',
      'Глобальные можно переопределять, локальные нельзя',
      'Локальные можно переопределять, глобальные нельзя',
      'Глобальные видны повсюду, локальные только в функциях',
      'Отличий нет',
    ],
    correct: 3,
  },
  {
    title: 'Что такое условный оператор?',
    variants: [
      'Конструкция, что выполняет код несколько раз',
      'Конструкция для создания определенной переменной',
      'Оператор сравнения значений',
    ],
    correct: 2,
  },
  {
    title: 'Какая переменная записана неверно?',
    variants: [
      'var num = "STRING";',
      'var isDone = 0;',
      'var b = false;',
      'var number = 12,5;',
    ],
    correct: 3,
  },
  {
    title: 'Где верно указан вывод данных?',
    variants: [
      'print(Hello);',
      'prompt("Hello")',
      'console.log("Hello");',
      'write("Hello");',
    ],
    correct: 2,
  },
  {
    title: 'Где верно указан запуск всплывающего окна?',
    variants: [
      'new alert ("Hi")',
      'info ("Hi")',
      'alert ("Hi")',
      'Нет верных вариантов',
    ],
    correct: 2,
  },
  {
    title: 'Какие значения можно хранить в переменных?',
    variants: [
      'Только числа и строки',
      'Строки, числа с точкой и простые числа',
      'Строки, числа с точкой, простые числа и булевые выражения',
    ],
    correct: 2,
  },
  {
    title: 'Где можно использовать JavaScript?',
    variants: [
      'Мобильные приложения',
      'Веб-приложения',
      'Серверные приложения',
      'Прикладное программное обеспечение',
      'Можно во всех перечисленных',
    ],
    correct: 4,
  },
  {
    title: 'Какие циклы есть в языке JavaScript?',
    variants: [
      'for, while, do while',
      'for, forMap, foreach, while',
      'for, forMap, foreach, while, do while',
      'for, while, do while, foreach',
    ],
    correct: 0,
  },
  {
    title: 'Где верно указано имя переменной?',
    variants: [
      'var 2num;',
      'ver num;',
      'var num',
      'var num-1;',
      'var num_1;',
    ],
    correct: 4,
  },
  {
    title: 'В чем разница между confirm и prompt?',
    variants: [
      'Они ничем не отличаются',
      'confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением',
      'prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением',
    ],
    correct: 2,
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

