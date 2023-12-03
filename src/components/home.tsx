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
            <header className={style.nav}>
                <Navigation />
            </header>

            <body>
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
            </body>

            <footer className={style.footer}>
                <Footer />
            </footer>
        </div>
    );
}
