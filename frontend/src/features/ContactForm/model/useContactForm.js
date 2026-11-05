import { useState } from "react";
import { sendContactForm } from "../api/sendContactForm";

const INITIAL_FORM = { name: "", email: "", interest: "", message: "" };
const EMAIL_RE = /^\S+@\S+\.\S+$/;

const validate = (form) => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Please enter your name";
    if (!form.email.trim()) errors.email = "Please enter your email";
    else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Please enter a valid email";
    return errors;
};

export const useContactForm = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const setField = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const nextErrors = validate(form);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;

        setStatus("loading");
        try {
            await sendContactForm(form);
            setStatus("success");
            setForm(INITIAL_FORM);
        } catch {
            setStatus("error");
        }
    };

    const reset = () => setStatus("idle");

    return { form, errors, status, setField, onSubmit, reset };
};