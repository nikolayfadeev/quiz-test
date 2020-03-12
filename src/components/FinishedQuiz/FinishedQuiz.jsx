import React from "react";
import classes from "./FinishedQuiz.module.css"

export default function FinishedQuiz(props) {
    return (
        <div className={classes.FinishedQuiz}>
            <h1>Тест закончен</h1>
            <ul>
                <li>
                    <strong>1.</strong>
                    Что в чёрном коте?
                    <i className={''} />
                </li>
            </ul>

            <p>Правильно 3 из 5</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}