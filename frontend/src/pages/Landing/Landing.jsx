import { Header, SchoolHistory, Events, Teachers,FAQ, Contacts} from "@/pages/Landing/ui";
import { Container } from "@/shared";

export const Landing = () => {
    return (
        <Container>
            <Header/>
            <SchoolHistory/>
            <Events/>
            <Teachers/>
            <FAQ/>
            <Contacts/>
        </Container>
    );
};