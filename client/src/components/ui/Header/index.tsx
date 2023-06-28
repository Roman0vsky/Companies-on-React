import { Button, Logo, Search } from "src/commonStyles";
import { ContentContainer, MenuText } from "./styled";
import { Wrap } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "src/utils/local-storage";
import { useDispatch } from "react-redux";
import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "src/utils/constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    removeItem("token");
    dispatch(resetUser());
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  const onPersonalCabinetHandler = () => {
    navigate("cabinet");
  };

  const onHomePageHandler = () => {
    navigate("catalog");
  };

  return (
    <Wrap>
      <ContentContainer>
        {/*         <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Button with data-bs-target
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
          </div>
        </div>
 */}
        <input type="checkbox" id="hmt" className="hidden-menu-ticker" />

        <label className="btn-menu" htmlFor="hmt">
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </label>

        <ul className="hidden-menu">
          <li>
            <MenuText onClick={onHomePageHandler}>Главная</MenuText>
          </li>
          <li>
            <MenuText onClick={onPersonalCabinetHandler}>
              Личный кабинет
            </MenuText>
          </li>
          <li>
            <MenuText onClick={onLogoutHandler}>Выйти</MenuText>
          </li>
        </ul>

        <Logo onClick={onHomePageHandler}>ComReviev</Logo>
        <Search placeholder="Найти" />
        {/* <Link
          style={{ outline: "none", textDecoration: "none", color: "#000" }}
          to="companies/add"
        >
          Добавить объект
        </Link> */}
        <Button
          className="header-btn"
          $width="258px"
          onClick={onPersonalCabinetHandler}
        >
          Личный кабинет
        </Button>
        <Button
          className="header-btn"
          $width="150px"
          $white
          onClick={onLogoutHandler}
        >
          Выйти
        </Button>
      </ContentContainer>
    </Wrap>
  );
}
