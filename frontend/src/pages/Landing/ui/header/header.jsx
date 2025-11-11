import { Button, Container, Card } from '@/shared';
import { RequestCallForm } from '@/features';
import { useState } from 'react';
import './Header.scss'
import owner from "@/shared/images/ownerSchool.JPG"

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
                            <li>first</li>
                            <li>second</li>
                            <li>theird</li>
                        </ul>
                        <Button className="header-button" onClick={() => setIsOpen(true)}>
                            Подать заявку
                        </Button>

                        {isOpen && (
                            <div className="header__modal" onClick={() => setIsOpen(false)}>
                                <div className="header__modal-content" onClick={(e) => e.stopPropagation()}>
                                    <RequestCallForm onClose={() => setIsOpen(false)} />
                                </div>
                            </div>
                        )}
                    </Container>

                    <Container className="right-header-cont">
                        <img src={owner} alt="ownerSchool" className="header-image" />
                    </Container>
                </div>
            </Card>
        </header>
    );
};


