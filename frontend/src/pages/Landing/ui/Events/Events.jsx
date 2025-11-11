import './Events.scss';
import { Container } from '@/shared';
import img1 from '@/shared/images/events1.png';
import img2 from '@/shared/images/events2.png';
import img3 from '@/shared/images/events3.png';
import img4 from '@/shared/images/events4.png';
import img5 from '@/shared/images/events5.png';

export const Events = () => {
    const images = [img1, img2, img3, img4, img5];
    return (
        <Container className="events-container">
            <section className="events-section">
                <h2 className="events-title">Events</h2>
                <p className="events-description">Concerts, creative performances and themed parties are regularly held for students of our online school.
                    This is not only an opportunity to have fun, but also a great chance to show your progress, show your talents and share your successes with other participants.
                    Each event creates an atmosphere of inspiration, friendship and support, helping students develop not only in their studies, but also in personal growth.</p>

                <Container className="events-imagesWrapper">
                    {images.map((img, index) => (
                        <Container key={index} className="events-imagesContainer">
                            <img src={img} alt={`Event ${index + 1}`} />
                            <span className="events-img-star">★</span>
                        </Container>

                    ))}
                </Container>
            </section>
        </Container>
    );
};