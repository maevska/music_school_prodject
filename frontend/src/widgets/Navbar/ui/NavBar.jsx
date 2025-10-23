import "./NavBar.scss"
import { Button } from "@/shared";
import { Search } from "@/shared";

export const NavBar = () => {
    return (
        <nav className='navigation'>
            <div className='logo'>p</div>

            <div className='search'>
                <Search laceholder="Поиск..." />
            </div>

            <div className='actions'>
                <Button onClick={() => alert("Нажата кнопка!")}>Действие</Button>
            </div>
        </nav>
    );
};
