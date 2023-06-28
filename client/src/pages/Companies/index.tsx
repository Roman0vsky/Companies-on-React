import { Container, Wrap } from "./styled";
import { Title } from "src/commonStyles";
import CompanyCard from "src/pages/Companies/CompanyCard/CompanyCard";
import { Link, redirect, useParams } from "react-router-dom";
import CatalogService from "src/utils/api/services/Catalog";
import { getItem } from "src/utils/local-storage";
import { APP_ROUTES } from "src/utils/constants";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import jwt from "jwt-decode";
import UsersService from "src/utils/api/services/Users";
import store from "src/store";
import { setActivatedCatalog, setCompanies, setUser } from "src/store/actions";
import CompaniesService from "src/utils/api/services/Companies";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";

export default function Companies() {
  const { name } = useParams();
  const companies = useSelector((store: IStore) => store.companies.data);
  const activatedCatalog = useSelector(
    (store: IStore) => store.catalog.activatedCatalog
  );

  const cards = companies.map((card) => (
    <Link
      to={`${APP_ROUTES.CATALOG}/${name}/${card.id}`}
      key={card.id}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <CompanyCard
        key={card.id}
        imgUrl={card.imgUrl}
        name={card.name}
        reviewsScore={card.reviewsScore}
      />
    </Link>
  ));

  return (
    <Wrap>
      <Title>{activatedCatalog?.nameRu}</Title>
      <Container>{cards}</Container>
      {cards.length === 0 && <Container>Нет компаний</Container>}
    </Wrap>
  );
}

export const companiesLoader = async ({ params }: any) => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user, catalog] = await Promise.all([
    UsersService.getUser(+payload.sub),
    CatalogService.getCatalog({ name: params.name.split("-").join(" ") }),
  ]);
  if (!user.id) return null;

  if (catalog.length === 0) return redirect(APP_ROUTES.CATALOG);
  const companies = await CompaniesService.getCompanies({
    catalogId: catalog[0].id,
  });

  store.dispatch(setUser(user));
  store.dispatch(setActivatedCatalog(catalog[0]));
  store.dispatch(setCompanies(companies));

  return user;
};
