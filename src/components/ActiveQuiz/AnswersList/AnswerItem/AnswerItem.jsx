import React from "react";
import classes from './AnswerItem.module.css'

export default function AnswerItem(props) {
    const cls = [classes.AnswerItem]

    if (props.state) {
        cls.push(classes[props.state])
    }

    return(
        <li className={cls.join(' ')} onClick={props.onAnswerClick.bind(this, props.answer.id)} key={props.key} >
            {props.answer.text}
        </li>
    )
}