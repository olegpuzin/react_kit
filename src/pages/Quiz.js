import React from 'react';

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
];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='Present' />
            <h2>Вы ответили {correct} правильно из {questions.length}</h2>
            <a href="/quiz">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({step, question, onClickVariant}) {

const percentage = Math.round(step / questions.length * 100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, i) => (
                        <li key={text} onClick={() => onClickVariant(i)}>{text}</li>
                    ))
                }
            </ul>
        </>
    );
}

function Quiz() {

    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }



    return (
        <div className='wrapper_quiz'>
            <div className="quiz">
                {
                    step !== questions.length 
                    ? <Game step={step} question={question} onClickVariant={onClickVariant} /> 
                    : <Result correct={correct} />
                }
            
            
        </div>
        </div>
        
    );
}

export default Quiz;