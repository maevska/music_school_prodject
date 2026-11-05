import { Container, Button, Modal } from "@/shared";
import { ContactForm } from "@/features";
import { useState } from "react";

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <Button onClick={() => setIsOpen(true)}>Записаться</Button>

            {isOpen && (
                <Modal onClose={() => setIsOpen(false)} label="Submit application">
                    <ContactForm />
                </Modal>
            )}
        </Container>
    );
};