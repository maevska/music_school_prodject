import { ContactForm } from "@/features";
import { SocialLink, CONTACTS } from "@/shared";
import "./Contacts.scss";

export const Contacts = () => {
    return (
        <section className="contacts-section" id="contacts">
            <div className="contacts-info">
                <h2 className="contacts-title">Contacts</h2>
                <p className="contacts-subtitle">Let's make your voice heard</p>
                <p className="contacts-text">
                    Leave a request and we will get back to you to choose a teacher and a study plan that fit you.
                </p>

                <ul className="contacts-list">
                    <li>Online lessons in vocals and piano</li>
                    <li>In-person vocal lessons in Amsterdam / Zaandam</li>
                </ul>

                <div className="contacts-social">
                    <p className="contacts-social__label">Follow the founder</p>
                    <div className="contacts-social__links">
                        <SocialLink type="instagram" href={CONTACTS.instagram} variant="lime">
                            Instagram
                        </SocialLink>
                        <SocialLink type="telegram" href={CONTACTS.telegram} variant="ghost">
                            Telegram channel
                        </SocialLink>
                    </div>
                </div>
            </div>

            <div className="contacts-form">
                <ContactForm />
            </div>
        </section>
    );
};