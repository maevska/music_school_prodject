import { Button, Container, Card } from '@/shared';
import { RequestCall } from '@/features';
import { useState } from 'react';

export const header = () => {
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
                    <Button className="header-button" onClick={() => setIsOpen(true)}>Подавть заявку</Button>
                    {isOpen && <RequestCall onClose={() => setIsOpen(false)} />}
                </Container>

                <Container className="right-header-cont">
                    <img src="#" alt="ownerSchool" className="header-image" />
                </Container>
            </Card>
        </header>
    );
};


