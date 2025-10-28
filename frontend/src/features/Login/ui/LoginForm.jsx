import { useLoginForm } from "../model/useLoginForm";
import { Input } from "@/shared";
import { Button } from "@/shared";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

export const LoginForm = () => {
    const { form, onChange, onSubmit, error, loading } = useLoginForm();

    return (
        <div className="page">
            <form className="form" onSubmit={onSubmit}>
                <h2 className="form__title">Вход</h2>

                <Input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" />
                <Input type="password" name="password" value={form.password} onChange={onChange} placeholder="Пароль" />

                {error && <div className="form__error">{error}</div>}

                <Button type="submit" disabled={loading}>
                    {loading ? "Загрузка..." : "Войти"}
                </Button>

                <div className="form__footer">
                    Нет аккаунта?{" "}
                    <Link to="/register" className="form__link">
                        Зарегистрироваться
                    </Link>
                </div>
            </form>
        </div>
    );
};
