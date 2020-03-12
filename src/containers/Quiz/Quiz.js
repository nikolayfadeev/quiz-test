import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"

class Quiz extends Component {

    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id:1,
                question: 'Что в чёрном ящике?',
                answers: [
                    {text: "Банан", id: 1},
                    {text: "Астроном", id: 2},
                    {text: "Ящик", id: 3},
                    {text: "Гладиолус", id: 4}
                ],
                rightAnswerId: 4
            },
            {
                id:2,
                question: 'Сколько продлится финансовый кризис в Эстонии?',
                answers: [
                    {text: "Вечность", id: 1},
                    {text: "Что вы хотите от мочевого пузыря", id: 2},
                    {text: "Пиво всем", id: 3},
                    {text: "Гладиолус", id: 4}
                ],
                rightAnswerId: 4
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }


        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })


            if (this.isQuizFinished()) {
                this.setState({
                    isFinished: true
                })
            }else {

                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }
        }else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответье на все вопросы</h1>
                    { this.state.isFinished
                        ? <FinishedQuiz

                        />
                    :<ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            qustion={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz