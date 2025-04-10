"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { baseurl } from '../Data/Api';
import Link from 'next/link';
import styles from "../../components/css/deleteaccount.module.css"
import eyeopen from "./images/deleteaccount/eyes.svg"
import eyeclose from "./images/deleteaccount/crossedeyes.svg"


interface FormData {
    email: string;
    password: string;
}

const DeleteAccount: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError(null);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted', formData);

        try {
            const response = await fetch(`${baseurl}/app/user/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            const { status, message } = data;

            if (status === true) {
                alert(message);
                setFormData({ email: '', password: '' });
            } else {
                setError(message || 'Something went wrong.');
            }
        } catch (err) {
            console.log('Error while submitting:', err);
            setError('Network Error. Please try again later.');
        }
    };

    return (
        <>
            {/* <HeaderComponent /> */}
            <div className={`${styles.delete_account_container}`}>
                <div className={`${styles.delete_account_header}`}>
                    <div className={`${styles.delete_account_header1}`}>
                        <div className={`${styles.delete_account_header2}`}>
                            <div className={`${styles.delete_account_header2_content}`}>
                                <Link href="/">
                                    <img src="/images/deleteaccount/backicon.svg" alt="backicon" width={50} height={50} />

                                </Link>
                                <p>Delete Account</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.delete_account_wrapper}`}>
                    <div className={`${styles.delete_account_card}`}>
                        <div className={`${styles.delete_account_card_section2}`}>
                            <form className={`${styles.delete_account_form}`} onSubmit={handleSubmit}>
                                <div className={`${styles.delete_account_form_wrapper1}`}>
                                    <div className={`${styles.delete_account_form_group}`}>
                                        <label htmlFor="email">Email Id</label>
                                        <input
                                            className={`${styles.delete_account_input}`}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${styles.delete_account_form_group}`}>
                                        <label htmlFor="password">Password</label>
                                        <div className={`${styles.delete_account_password_wrapper}`}>
                                            <input
                                                className={`${styles.delete_account_input}`}
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <img
                                                src={showPassword ? '/images/deleteaccount/crossedeyes.svg' : '/images/deleteaccount/eyes.svg'}
                                                alt="Toggle Password"
                                                className={`${styles.delete_account_toggle_eye}`}
                                                onClick={togglePasswordVisibility}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>

                                    {error && <p style={{ color: 'red', marginTop: 5 }}>{error}</p>}

                                    <p className={`${styles.delete_account_note}`}>
                                        *This action will permanently delete your account and all associated data. This cannot be undone.
                                    </p>
                                </div>

                                <div className={`${styles.delete_submitbutton_div}`}>
                                    <button type="submit" className={`${styles.submit_button}`}>
                                        Delete
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteAccount;
