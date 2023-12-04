import React, {JSX} from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { FiLinkedin } from "react-icons/fi";

import style from './footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={style.container}>
            <div className={style.footer_container}>
                <div className={style.left}>
                    <div className={style.left_container}>
                        <div className={style.pre_container}>
                            <pre>
                                2261 Market Street #5039
                                San Francisco, CA 94114
                            </pre>
                        </div>

                        <div className={style.logo_container}>
                            <div className={style.logo}><FaXTwitter /></div>
                            <div className={style.logo}><FaGithubAlt /></div>
                            <div className={style.logo}><FiLinkedin /></div>
                            <div className={style.logo}><RxDiscordLogo /></div>
                        </div>
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.right_container}>
                        <div className={style.docs}>
                            <p>Documentation</p>

                            <ul>
                                <li><a href=".">Getting Started</a> </li>
                                <li><a href=".">Api Reference</a> </li>
                                <li><a href=".">Integrations</a> </li>
                                <li><a href=".">Examples</a> </li>
                                <li><a href=".">SDKs</a> </li>
                            </ul>
                        </div>

                        <div className={style.resource}>
                            <p>Resource</p>

                            <ul>
                                <li><a href=".">Changelog</a> </li>
                                <li><a href=".">Pricing</a> </li>
                                <li><a href=".">Status</a> </li>
                                <li><a href=".">Webhooks</a> </li>
                            </ul>
                        </div>

                        <div className={style.company}>
                            <p>Legal</p>

                            <ul className={style.company_list}>
                                <li><a href='.'/>Blog</li>
                                <li><a href='.'/>Contact</li>
                                <li><a href='.'/>Customers</li>
                                <li><a href='.'/>Brand</li>
                            </ul>
                        </div>

                        <div className={style.legal}>
                            <p>Legal</p>

                            <ul className={style.legal_list}>
                                <li><a href='.'/>Acceptable Use</li>
                                <li><a href='.'/>Privacy Policy</li>
                                <li><a href='.'/>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
