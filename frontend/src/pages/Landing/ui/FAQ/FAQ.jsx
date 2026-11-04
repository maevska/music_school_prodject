
import { useState } from "react";
import "./FAQ.scss";

const FAQ_ITEMS = [
    {
        question: "Do I need any singing experience to join?",
        answer:
            "Not at all! Our vocal lessons are suitable for complete beginners as well as experienced singers. We will adapt the learning process to your current level and help you develop your voice step by step.",
    },
    {
        question: "Is there an age limit for learning to sing?",
        answer:
            "There is no strict age limit! We believe that everyone can discover and develop their voice. Lessons are adapted to each student's age, experience and individual goals.",
    },
    {
        question: "What will I learn during vocal lessons?",
        answer:
            "You will work on breathing techniques, vocal control, pitch, rhythm, diction and stage confidence. We will also help you develop your own unique sound and express yourself through music.",
    },
    {
        question: "What music styles can I learn?",
        answer:
            "You can explore different musical styles, including pop, jazz, soul, R&B, rock and more. We will focus on the music you enjoy and help you find your own artistic style.",
    },
    {
        question: "Can I choose between online and in-person lessons?",
        answer:
            "Yes! We offer both online vocal lessons and in-person classes. You can choose the format that works best for your location, schedule and personal preferences.",
    },
    {
        question: "Where can I attend in-person vocal lessons?",
        answer:
            "In-person vocal lessons are available for students in Amsterdam and Zaandam. Get in touch with us to find out more about the available options.",
    },
    {
        question: "How long does it take to improve my singing?",
        answer:
            "Every voice develops at its own pace. With regular practice and guidance from your vocal teacher, you can start noticing improvements in your technique, confidence and vocal control.",
    },
    {
        question: "How often should I take vocal lessons?",
        answer:
            "We recommend taking lessons once a week to build consistency and make steady progress. However, the frequency can be adjusted to your goals, schedule and experience.",
    },
    {
        question: "Do I need any special equipment?",
        answer:
            "For online lessons, you will need a device with a microphone, a stable internet connection and a quiet space. For in-person lessons, you simply need to bring yourself and your enthusiasm for singing!",
    },
    {
        question: "Will I have a chance to perform on stage?",
        answer:
            "Yes! We organise events and performance opportunities where students can share their progress, gain stage experience and enjoy making music together.",
    },
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleItem = (index) => {
        setActiveIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <section className="faq" id="questions">
            <div className="faq__container">
                {/* Section heading */}
                <div className="faq__header">
                    <h2 className="faq__title">
                        Frequently Asked Questions
                    </h2>

                    <p className="faq__description">
                        Everything you need to know about our vocal lessons,
                        learning formats and school.
                    </p>
                </div>

                {/* FAQ accordion */}
                <div className="faq__list">
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div className="faq__item" key={index}>
                                <button
                                    className="faq__question"
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span>{item.question}</span>

                                    <span className="faq__icon" aria-hidden="true">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`faq__answer ${isOpen ? "faq__answer--open" : ""
                                        }`}
                                    id={`faq-answer-${index}`}
                                    aria-hidden={!isOpen}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
