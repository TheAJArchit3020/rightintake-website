"use client"

import React from 'react'
import styles from './header.module.css'
import { useRouter } from "next/navigation";
import RootLayout from '@/app/layout';

const HeaderComponent: React.FC = () => {

    const router = useRouter();

    return (

        <div className={`${styles.nav_component_container}`} onClick={() => router.push("/")}>
            <div className={`${styles.nav_component_wrapper}`}>
                <div className={`${styles.brand_logo_wrapper}`}>
                    <img src="./images/header/rightintakelogo_website.png" alt="rightintakelogo_website" />
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
