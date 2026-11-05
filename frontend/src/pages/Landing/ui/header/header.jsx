import { Button, Container, Card, Modal } from '@/shared';
import { ContactForm } from '@/features';
import { useState } from 'react';
import './Header.scss'
import owner from "@/shared/images/ownerSchool.webp"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header-cont">
            <Card className="header-card">
                <div className="header-content">
                    <Container className="left-header-cont">
                        <h3 className="header-title">To Be Heard</h3>
                        <p className="header-subtitle">Become a voice that cannot be ignored</p>
                        <ul className="header-list">
                            <li>Only highly qualified teachers</li>
                            <li>Training according to modern international methods</li>
                            <li>Individual study plan for each student</li>
                        </ul>
                        <Button className="header-button" onClick={() => setIsOpen(true)}>
                            Submit application
                        </Button>

                        {isOpen && (
                            <Modal onClose={() => setIsOpen(false)} label="Submit application">
                                <ContactForm />
                            </Modal>
                        )}
                    </Container>

                    <Container className="right-header-cont">
                        <img
                            src={owner}
                            alt="Anastasia Maevskaya, founder of the school"
                            className="header-image"
                            width="1000"
                            height="1500"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </Container>
                </div>
            </Card>
        </header>
    );
};