import { Button, Container, Card } from '@/shared';
import { RequestCallForm } from '@/features';
import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header-cont">
            <Card className="header-card">
                <Container className="left-header-cont">
                    <h1 className='heading'></h1>
                    <ul className='header-list'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <Button className="header-button" onClick={() => setIsOpen(true)}>Подать заявку</Button>
                    {isOpen && (
                        <div className="header__modal" onClick={() => setIsOpen(false)}>
                            <div className="header__modal-content" onClick={(e) => e.stopPropagation()}>
                                <RequestCallForm onClose={() => setIsOpen(false)} />
                            </div>
                        </div>
                    )}
                </Container>

                <Container className="right-header-cont">
                    <img src="#" alt="ownerSchool" className="header-image" />
                </Container>
            </Card>
        </header>
    );
};


