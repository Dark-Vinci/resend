import React, { JSX } from "react";
import style from './body.module.scss';

export function Body(): JSX.Element {
    return (
        <div className={style.container}>
            body
        </div>
    );
}
