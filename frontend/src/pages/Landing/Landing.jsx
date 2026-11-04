import { Header, SchoolHistory, Events, FAQ } from "@/pages/Landing/ui";
import { Container } from "@/shared";

export const Landing = () => {
    return (
        <Container>
            <Header/>
            <SchoolHistory/>
            <Events/>
            <FAQ/>
        </Container>
    );
};