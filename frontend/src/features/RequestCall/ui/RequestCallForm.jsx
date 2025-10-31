import { useState } from "react";
import { Input } from "@/shared";
import { Button } from "@/shared";
import { Card } from "@/shared";
import { useRequestCall } from "../model/useRequestCall";
import "./RequestCallForm.scss";

export const RequestCallForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const { loading, success, error, requestCall } = useRequestCall();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) return;
        requestCall({ name, phone });
    };

    if (success) {
        return (
            <div className="request-call-form success">
                <p> Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                <Button onClick={onClose}>Закрыть</Button>
            </div>
        );
    }

    return (
        <Card className="request-call-form" title = "Заказать звонок">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Ваше имя"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                />
                {error && <p className="request-call-form__error">{error}</p>}

                <Button type="submit" disabled={loading}>
                    {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
            </form>
            <Button className="request-call-form__close" onClick={onClose}>
                ×
            </Button>
        </Card>
    );
};
