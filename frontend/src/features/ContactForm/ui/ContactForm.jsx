import { Input, Button } from "@/shared";
import { useContactForm } from "../model/useContactForm";
import "./ContactForm.scss";

const INTERESTS = ["Vocals", "Piano", "Vocals & piano"];

export const ContactForm = () => {
    const { form, errors, status, setField, onSubmit, reset } = useContactForm();

    if (status === "success") {
        return (
            <div className="contact-form contact-form--success">
                <span className="contact-form__note-icon">♪</span>
                <h3 className="contact-form__title">Thank you!</h3>
                <p className="contact-form__success-text">
                    Your request has been sent. We will get back to you soon.
                </p>
                <Button onClick={reset}>Send another request</Button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
            <h3 className="contact-form__title">Submit application</h3>
            <p className="contact-form__hint">
                Tell us a little about yourself and we will pick a teacher and a study plan for you.
            </p>

            <div className="contact-form__row">
                <Input
                    label="Your name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    error={errors.name}
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    error={errors.email}
                />
            </div>

            <div className="contact-form__field">
                <span className="contact-form__label">I'm interested in</span>
                <div className="contact-form__chips" role="group" aria-label="I'm interested in">
                    {INTERESTS.map((item) => {
                        const active = form.interest === item;
                        return (
                            <button
                                key={item}
                                type="button"
                                className={`contact-form__chip${active ? " is-active" : ""}`}
                                aria-pressed={active}
                                onClick={() => setField("interest", active ? "" : item)}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="contact-message">
                    Message <span>(optional)</span>
                </label>
                <textarea
                    id="contact-message"
                    className="contact-form__textarea"
                    rows={4}
                    placeholder="Your level, goals, preferred lesson format..."
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                />
            </div>

            {status === "error" && (
                <p className="contact-form__error">Something went wrong. Please try again.</p>
            )}

            <Button type="submit" className="contact-form__submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send request"}
            </Button>
        </form>
    );
};