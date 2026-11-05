import { Container } from "@/shared";
//import { Link } from "react-router-dom";
import { Button } from '@/shared'
import { RequestCallForm } from "@/features";
import { useState } from "react";

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            
            <Button onClick={() => setIsOpen(true)}>Записаться</Button>

            {isOpen && (
                <div className="navbar__modal" onClick={() => setIsOpen(false)}>
                    <div className="navbar__modal-content" onClick={(e) => e.stopPropagation()}>
                        <RequestCallForm onClose={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
            
        </Container>
    );
};
