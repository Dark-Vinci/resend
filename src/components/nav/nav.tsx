import React, {JSX} from "react";
import style from './nav.module.scss';

export function Navigation(): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.overlay}></div>

            <div className={style.content}>
                <div className={style.logo}>
                    <div className={style.logo_container}>
                        <h1>Resend</h1>
                    </div>
                </div>

                <div className={style.nav}>
                    <div className={style.nav_container}>
                        <ul>
                            <li><a href="."/>about</li>
                            <li><a href="."/>blog</li>
                            <li><a href="."/>customers</li>
                            <li><a href="."/>Pricing</li>
                            <li><a href="."/>Enterprise</li>
                            <li><a href="."/>Changelog</li>
                            <li><a href="."/>Docs</li>
                        </ul>
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.right_container}>
                        <div>
                            <button>Sign in</button>
                            { false && <div>Go to Login</div>}
                        </div>

                        <div>
                            <button>Get Started</button>
                            { false && <div>Go to Sign Up</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
