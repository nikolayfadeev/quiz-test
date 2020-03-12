import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

export default function ActiveQuiz(props) {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber} . </strong>
                    {props.qustion}
                </span>

                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            />
        </div>
    )
}