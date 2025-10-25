import { useNavigate } from "react-router-dom";
import "./Page404.scss";
import {Button} from "@/shared";

export const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__title">
                    4<span className="note">♩</span>4
                </h1>
                <p className="not-found__text">
                    Кажется, эта страница ушла на репетицию 🎶
                </p>
                <Button className="not-found__button" onClick={() => navigate("/")}>
                    Вернуться к музыке
                </Button>
            </div>

            <div className="not-found__notes">
                <span className="note floating">♫</span>
                <span className="note floating">♬</span>
                <span className="note floating">♩</span>
                <span className="note floating">♪</span>
            </div>
        </div>
    );
};
