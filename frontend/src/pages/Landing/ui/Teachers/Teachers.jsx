import { teachers, TeacherCard } from "@/entities";
import "./Teachers.scss";

export const Teachers = () => {
    return (
        <section className="teachers-section" id="teachers">
            <div className="teachers-head">
                <h2 className="teachers-title">Teachers</h2>
                <p className="teachers-subtitle">Meet the voices behind To Be Heard</p>
                <p className="teachers-description">
                    Our teachers have years of experience and build an individual study plan for each student.
                </p>
            </div>

            <div className="teachers-grid">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </section>
    );
};