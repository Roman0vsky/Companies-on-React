import { APP_ROUTES } from "src/utils/constants";
import { Title, Wrap, SvgWrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { ICatalog } from "src/utils/interfaces/catalog.interface";
import { Catalog } from "../../../assets/index";

interface Props {
  catalogCard: ICatalog;
}

export default function CatalogCard(props: Props) {
  const navigate = useNavigate();

  const getImg = () => {
    switch (props.catalogCard.id) {
      case 1: {
        return <Catalog.ForCars />;
      }
      case 2: {
        return <Catalog.Health />;
      }
      case 3: {
        return <Catalog.Entertainment />;
      }
      case 4: {
        return <Catalog.Beauty />;
      }
      case 5: {
        return <Catalog.Repair />;
      }
      case 6: {
        return <Catalog.Services />;
      }
      case 7: {
        return <Catalog.Trading />;
      }
      case 8: {
        return <Catalog.Education />;
      }
      case 9: {
        return <Catalog.Products />;
      }
      case 10: {
        return <Catalog.Tourism />;
      }
      case 11: {
        return <Catalog.Communication />;
      }
      case 12: {
        return <Catalog.Goods />;
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <Wrap
      onClick={() =>
        navigate(
          `${APP_ROUTES.CATALOG}/${props.catalogCard.name.split(" ").join("-")}`
        )
      }
    >
      <SvgWrapper>{getImg()}</SvgWrapper>
      <Title>{props.catalogCard.nameRu}</Title>
    </Wrap>
  );
}
