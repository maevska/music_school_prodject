import { useEffect, useState } from 'react';
import './Events.scss';
import { Container } from '@/shared';
import img1 from '@/shared/images/events1.png';
import img2 from '@/shared/images/events2.png';
import img3 from '@/shared/images/events3.png';
import img4 from '@/shared/images/events4.png';
import img5 from '@/shared/images/events5.png';

const IMAGES = [img1, img2, img3, img4, img5];
const SWAP_INTERVAL = 5500; // частота перехода между фотографиями

export const Events = () => {
    const [shift, setShift] = useState(0);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        const id = setInterval(() => {
            setShift((prev) => (prev + 1) % IMAGES.length);
        }, SWAP_INTERVAL);

        return () => clearInterval(id);
    }, []);

    return (
        <section className="events-section" id="events">
            <h2 className="events-title">Events</h2>
            <p className="events-description">Concerts, creative performances and themed parties are regularly held for students of our online school.
                This is not only an opportunity to have fun, but also a great chance to show your progress, show your talents and share your successes with other participants.
                Each event creates an atmosphere of inspiration, friendship and support, helping students develop not only in their studies, but also in personal growth.</p>

            <Container className="events-imagesWrapper">
                {IMAGES.map((_, circleIndex) => (
                    <Container key={circleIndex} className="events-imagesContainer">
                        <div className="events-photo">
                            {IMAGES.map((img, imgIndex) => {
                                const isActive = imgIndex === (circleIndex + shift) % IMAGES.length;
                                return (
                                    <img
                                        key={imgIndex}
                                        src={img}
                                        alt={isActive ? `Event ${imgIndex + 1}` : ""}
                                        aria-hidden={!isActive}
                                        className={`events-photo__img${isActive ? " is-active" : ""}`}
                                        style={{ transitionDelay: `${circleIndex * 0.15}s` }}
                                    />
                                );
                            })}
                        </div>
                    </Container>
                ))}
            </Container>
        </section>
    );
};