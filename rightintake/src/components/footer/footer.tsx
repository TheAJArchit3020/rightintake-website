"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from "./footer.module.css"

const Footer: React.FC = () => {


    const router = useRouter();

    return (
        <div className={`${styles.footer_container}`}>
            <div className={`${styles.footer_wrapper}`}>
                <div className={`${styles.footer_line_wrapper}`}></div>
                <div
                    className={`${styles.footer_brand_wrapper}`}
                    onClick={() => router.push("/")}
                >
                    <div className={`${styles.brand_logo_wrapper}`}>
                        <img src="./images/header/rightintakelogo_website.png" alt="" />
                    </div>

                    <div className={`${styles.brand_name_wrapper}`}>
                        <span>Right Intake</span>
                    </div>
                </div>
                <div
                    className={`${styles.t_and_c_container}`}
                    onClick={() => router.push("/blog")}
                >
                    <span>Blog</span>
                </div>
                <div
                    className={`${styles.t_and_c_container}`}
                    onClick={() => router.push("/TermsandServices")}
                >
                    <span>Terms and services</span>
                </div>
                <div className={`${styles.contact_us_container}`}>
                    <div className={`${styles.contact_us_heading}`}>
                        <span>Contact Us</span>
                    </div>
                    <div className={`${styles.contact_us_email}`}>
                        <span>contact@rightitnake.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
