import { Container, SocialLink, CONTACTS } from "@/shared";
import logo from "@/shared/images/logo_tbh.webp";
import "./Footer.scss";

const NAV = [
    { label: "School", href: "#school" },
    { label: "Events", href: "#events" },
    { label: "Teachers", href: "#teachers" },
    { label: "Contacts", href: "#contacts" },
];

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__inner">
                    <div className="footer__brand">
                        <img className="footer__logo" src={logo} alt="To Be Heard logo" width="64" height="64" loading="lazy" />
                        <h3 className="footer__name">To Be Heard</h3>
                        <p className="footer__tagline">Become a voice that cannot be ignored</p>
                    </div>

                    <nav className="footer__col" aria-label="Footer navigation">
                        <h4 className="footer__title">Menu</h4>
                        <ul className="footer__list">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <a className="footer__link" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer__col">
                        <h4 className="footer__title">Follow us</h4>
                        <div className="footer__socials">
                            <SocialLink type="instagram" href={CONTACTS.instagram} variant="ghost" label="Instagram" />
                            <SocialLink type="telegram" href={CONTACTS.telegram} variant="ghost" label="Telegram channel" />
                        </div>
                    </div>
                </div>
            </Container>

            <div className="footer__bottom">
                <Container>
                    <p className="footer__copy">
                        © {new Date().getFullYear()} To Be Heard. All rights reserved.
                    </p>
                </Container>
            </div>
        </footer>
    );
};