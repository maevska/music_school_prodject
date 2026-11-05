import { useEffect, useRef, useState } from 'react';
import './Events.scss';
import { Container } from '@/shared';
import img1 from '@/shared/images/events1.webp';
import img2 from '@/shared/images/events2.webp';
import img3 from '@/shared/images/events3.webp';
import img4 from '@/shared/images/events4.webp';
import img5 from '@/shared/images/events5.webp';

const IMAGES = [img1, img2, img3, img4, img5];
const SWAP_INTERVAL = 3500; // частота перехода между фотографиями, мс

export const Events = () => {
    const sectionRef = useRef(null);
    const [shift, setShift] = useState(0);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const id = setInterval(() => {
            if (document.hidden) return;
            setShift((prev) => (prev + 1) % IMAGES.length);
        }, SWAP_INTERVAL);

        return () => clearInterval(id);
    }, [inView]);

    return (
        <section className="events-section" id="events" ref={sectionRef}>
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
                                        width="640"
                                        height="640"
                                        loading="lazy"
                                        decoding="async"
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