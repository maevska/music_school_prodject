import { useState } from "react";
import { register } from "../api/register";

export const useRegisterForm = () => {
  const [form, setForm] = useState({
    lastName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      await register(form);
      setSuccess("Регистрация успешна!");
    } catch {
      setError("Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return { form, onChange, onSubmit, error, success, loading };
};
