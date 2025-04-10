"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/css/forgotpassword.module.css";
import { baseurl } from "../Data/Api";

interface FormData {
    email: string;
}

interface FormErrors {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({ email: "" });
    const [errors, setErrors] = useState<FormErrors>({ email: "" });
    const [message, setMessage] = useState<string>("");

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (label: keyof FormData, value: string): void => {
        let error = "";
        if (label === "email") {
            error = validateEmail(value) ? "" : "Invalid email format";
        }
        setErrors((prev) => ({ ...prev, [label]: error }));
    };

    const onChangeInputHandler = (label: keyof FormData, value: string): void => {
        setFormData((prev) => ({ ...prev, [label]: value }));
        validateForm(label, value);
    };

    const RequestOtpHandler = async () => {
        if (!validateEmail(formData.email)) {
            setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
            return;
        }

        setMessage("");

        try {
            const response = await fetch(`${baseurl}/app/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: formData.email }),
            });

            const data = await response.json();

            if (response.ok && data?.status) {
                setMessage("OTP sent successfully! Check your email.");
                setTimeout(() => {
                    router.push(`/verifyotp?email=${encodeURIComponent(formData.email)}`);
                }, 1000);
            } else {
                setMessage(data?.message || "Something went wrong.");
            }
        } catch (error) {
            setMessage("Server error.");
            setTimeout(() => setMessage(""), 3000);
            console.error("Error:", error);
        }
    };


    return (
        <div className={styles.forgotpassword_container}>
            <div className={styles.forgotpassword_header}>
                <div className={styles.forgotpassword_header_wrapper}>
                    <img src="./images/header/rightintakelogo_website.png" alt="realintakeslogo" width={50} />
                    <h4 className="ms-2">Right Intake</h4>
                </div>
            </div>

            <div className={styles.forgotpassword_wrapper}>
                <div className={styles.forgotpassword_wrapper_content}>
                    <span className={styles.forgotpassword_content_heading}>Reset password</span>
                    <span className={styles.forgotpassword_content_note}>
                        Enter the email address you registered with, and we'll send you an
                        OTP to reset your password.
                    </span>
                    <div className={styles.form_inputes}>
                        <input
                            type="email"
                            placeholder="Enter your mail id"
                            value={formData.email}
                            onChange={(e) => onChangeInputHandler("email", e.target.value)}
                        />
                        {errors.email && (
                            <p className={styles.forgotpassword_error_text}>{errors.email}</p>
                        )}
                    </div>
                    {message && <p className={styles.otp_message}>{message}</p>}
                </div>
                <div
                    className={styles.forgotpassword_button_container}
                    onClick={RequestOtpHandler}
                >
                    <button className={styles.forgotpassword_button}>Request OTP</button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
