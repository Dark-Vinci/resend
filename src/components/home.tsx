import React, { JSX } from 'react';

import style from './home.module.scss';
import {Navigation} from "./nav";
import {Footer} from "./footer";
import {Other} from "./other";
import {Mid} from "./mid/mid";
import {Body} from "./body1";
import {Header} from "./header";

export function Home(): JSX.Element {
    return (
        <div className={style.container}>
            <section className={style.nav}>
                <Navigation />
            </section>

            <section className={style.header}>
                <Header />
            </section>

            <section className={style.body}>
                <Body />
            </section>

            <section className={style.mid}>
                <Mid />
            </section>

            <section className={style.other}>
                <Other />
            </section>

            <section className={style.footer}>
                <Footer />
            </section>
        </div>
    );
}
