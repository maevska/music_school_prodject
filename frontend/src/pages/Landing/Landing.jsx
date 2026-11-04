import { Header, SchoolHistory, Events } from "@/pages/Landing/ui";
import { Container } from "@/shared";

export const Landing = () => {
    return (
        <Container>
            <Header/>
            <SchoolHistory/>
            <Events/>
        </Container>
    );
};