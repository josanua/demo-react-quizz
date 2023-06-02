import React from "react";
import {useState} from "react";
import './index.scss';
import winIcon from './assets/images/win_icon.png';
import neutrallIcon from './assets/images/neutrall_emoji.jpg';
import sadIcon from './assets/images/sad_emoji.png';



const questions = [
    {
        title: 'React - is ... ?',
        variants: [
            'a library',
            'an framework',
            'an application'
        ],
        correct: 0,
    },
    {
        title: 'Component - is ... ',
        variants: [
            'an application',
            'a part of an app or of a page',
            'I don\'t know'
        ],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
            'It\'s simple  HTML',
            'It\'s a function',
            'It\'s the same HTML, but with possibility to execute JS-code',
        ],
        correct: 2,
    },
];


function Game({step, question, onClickVariant}) {
    const percentage = Math.round((step / questions.length) * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li key={text} onClick={() => onClickVariant(index)}>{text}</li>
                    ))
                }
            </ul>
        </>
    );
}

function Result({ correct }) {

    const homeLink = window.location.origin;
    const selectIconTypeIMGUrl = (correct !== questions.length) ? sadIcon : winIcon;

    return (
        <div className="result">
            <img src={selectIconTypeIMGUrl} />
            <h2>You guessed {correct} answers out of {questions.length}</h2>
            <a href={homeLink} className="button">
                Try again
            </a>
        </div>
    );
}


function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    // step in question arr from state
    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);

        if(index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    return (
        <div className="App">
            {
                step !== questions.length ?
                    <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct}/>
            }
        </div>
    );
}

export default App;
