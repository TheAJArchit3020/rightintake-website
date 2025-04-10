// app/resetpassword/ClientResetPassword.tsx
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "@/components/css/forgotpassword.module.css";
import { baseurl } from "../Data/Api";

export default function ClientResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmpassword: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (label: string, value: string) => {
    let error = "";
    if (label === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }
    if (label === "confirmpassword" && value !== formData.password) {
      error = "Passwords do not match";
    }
    setErrors((prev) => ({ ...prev, [label]: error }));
  };

  const onChangeInputHandler = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
    validateForm(label, value);
  };

  const ResetPasswordHandler = async () => {
    if (formData.password !== formData.confirmpassword) {
      setErrors((prev) => ({
        ...prev,
        confirmpassword: "Entered password did not match",
      }));
      return;
    }

    setMessage("");

    try {
      const response = await fetch(`${baseurl}/app/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset successfully!");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMessage(data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error resetting password.");
    }
  };

  return (
    <div className={styles.forgotpassword_container}>
      <div className={styles.forgotpassword_header}>
        <div className={styles.forgotpassword_header_wrapper}>
          <img
            src="/images/header/rightintakelogo_website.png"
            alt="realintakeslogo"
            width={50}
          />
          <h4 className={styles.logo_text}>Right Intake</h4>
        </div>
      </div>

      <div className={styles.forgotpassword_wrapper}>
        <div className={styles.forgotpassword_wrapper_content}>
          <span className={styles.forgotpassword_content_heading}>
            Reset password
          </span>
          <span className={styles.forgotpassword_content_note}>
            Enter your new password to reset your account access.
          </span>

          {/* Password */}
          <div className={styles.form_inputes}>
            <label htmlFor="password">Password</label>
            <div className={styles.input_wrapper}>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  onChangeInputHandler("password", e.target.value)
                }
              />
              <Image
                src={
                  showPassword
                    ? "/images/deleteaccount/crossedeyes.svg"
                    : "/images/deleteaccount/eyes.svg"
                }
                alt="toggle visibility"
                width={20}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eye_icon}
              />
              <span className={styles.pass_note}>
                Password must contain 8 characters including 1 capital letter
                and 1 symbol.
              </span>
            </div>
            {errors.password && (
              <p className={styles.error_text}>{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className={styles.form_inputes}>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <div className={styles.input_wrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmpassword}
                onChange={(e) =>
                  onChangeInputHandler("confirmpassword", e.target.value)
                }
              />
              <Image
                src={
                  showConfirmPassword
                    ? "/images/deleteaccount/crossedeyes.svg"
                    : "/images/deleteaccount/eyes.svg"
                }
                alt="toggle visibility"
                width={20}
                height={20}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.eye_icon}
              />
            </div>
            {errors.confirmpassword && (
              <p className={styles.error_text}>{errors.confirmpassword}</p>
            )}
          </div>

          {/* Message */}
          {message && <p className={styles.otp_message}>{message}</p>}
        </div>

        <div
          className={styles.forgotpassword_button_container}
          onClick={ResetPasswordHandler}
        >
          <button className={styles.forgotpassword_button}>
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
}
