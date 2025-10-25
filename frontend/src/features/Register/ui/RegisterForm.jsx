
import { useRegisterForm } from "../model/useRegisterForm";
import { Input } from "@/shared";
import { Button } from "@/shared";

export const RegisterForm = () => {
  const { form, onChange, onSubmit, error, success, loading } = useRegisterForm();

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__title">Регистрация</h2>

      <Input name="lastName" value={form.lastName} onChange={onChange} placeholder="Фамилия"/>
      <Input name="name" value={form.name} onChange={onChange} placeholder="Имя"/>
      <Input name="email" value={form.email} onChange={onChange} placeholder="Email"/>
      <Input name="password" type="password" value={form.password} onChange={onChange} placeholder="Пароль"/>
      <Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={onChange} placeholder="Подтвердите пароль"/>

      {error && <div className="form__error">{error}</div>}
      {success && <div className="form__success">{success}</div>}

      <Button type="submit" disabled={loading}>{loading ? "Загрузка..." : "Зарегистрироваться"}</Button>
    </form>
  );
};
