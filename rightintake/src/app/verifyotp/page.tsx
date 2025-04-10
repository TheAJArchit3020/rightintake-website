'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import realintakeslogo from './images/header/rightintakelogo_website.png';
import styles from "@/components/css/forgotpassword.module.css"
import { baseurl } from '../Data/Api';

interface LocationState {
    email?: string;
}

const VerifyOtp: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [timer, setTimer] = useState<number>(30);
    const [canResend, setCanResend] = useState<boolean>(false);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    // Simulate getting email from URL state
    useEffect(() => {
        const storedEmail = sessionStorage.getItem('reset_email');
        if (storedEmail) {
            setEmail(storedEmail);
        } else {
            router.push('/forgot-password');
        }
    }, [router]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleOtpChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async () => {
        const otpCode = otp.join('');
        if (otpCode.length < 6) {
            alert('Please enter a 6-digit OTP');
            return;
        }

        try {
            const response = await fetch(`${baseurl}/app/auth/verify-forgot-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    otp: otpCode,
                }),
            });

            if (response.ok) {
                router.push(`/resetpassword?email=${email}`);
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.error('Error submitting OTP:', error);
        }
    };


    const handleResendOtp = async () => {
        setTimer(30);
        setCanResend(false);

        try {
            const response = await fetch(`${baseurl}/app/auth/verify-forgot-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Failed to resend OTP');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error resending OTP:', error);
        }
    };


    return (
        <div className={`${styles.forgotpassword_container}`}>
            <div className={`${styles.forgotpassword_header}`}>
                <div className={`${styles.forgotpassword_header_wrapper}`}>
                    <Image src={realintakeslogo} alt="realintakeslogo" width={50} />
                    <h4 className={`${styles.ms_2}`}>Right Intake</h4>
                </div>
            </div>

            <div className={`${styles.forgotpassword_wrapper}`}>
                <div className={`${styles.forgotpassword_wrapper_content}`}>
                    <span className={`${styles.forgotpassword_content_note}`}>
                        Enter the OTP sent to your registered mail ID to reset your password.
                    </span>

                    <div className={`${styles.verify_otp_inputs}`}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                value={digit}
                                maxLength={1}
                                className={`${styles.verify_otp_input}`}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleBackspace(index, e)}
                            />
                        ))}
                    </div>

                    <div className={`${styles.resend_otp_container}`}>
                        {canResend ? (
                            <span className={`${styles.resend_otp}`} onClick={handleResendOtp}>
                                Resend OTP
                            </span>
                        ) : (
                            <span className={`${styles.resend_otp}`}>Resend OTP in: {timer} sec</span>
                        )}
                    </div>
                </div>

                <div className={`${styles.forgotpassword_button_container}`} onClick={handleSubmit}>
                    <button className={`${styles.forgotpassword_button}`}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
