import CardMedia from "@material-ui/core/CardMedia";
import categoryRetro from "../assets/img/category-images/categoryRetro.jpg";
import categoryChessImg from "../assets/img/category-images/categoryChess.jpg";
import categoryLoLImg from "../assets/img/category-images/categoryLoL.jpg";
import categoryOthersImg from "../assets/img/category-images/categoryOthers.jpg";
import categoryWoWImg from "../assets/img/category-images/categoryWoW.jpg";
import categoryNoCategoryImg from "../assets/img/category-images/categoryNoCategory.jpg";

import { makeStyles } from "@material-ui/core/styles";

export const CardCategoryImg = (props) => {
  let cardHeight = props.height ? props.height : 140;
  let cardWidth = props.width ? props.width : "100%";
  let cardBorderRadius = props.borderRadius ? props.borderRadius : "0%";

  let useStyles = makeStyles({
    media: {
      height: cardHeight,
      width: cardWidth,
      borderRadius: cardBorderRadius,
    },
  });

  const classes = useStyles();

  const imgUrl = () => {
    if (props.idCategory === 1) {
      return categoryChessImg;
    }
    if (props.idCategory === 2) {
      return categoryLoLImg;
    }
    if (props.idCategory === 3) {
      return categoryWoWImg;
    }
    if (props.idCategory === 4) {
      return categoryRetro;
    }
    if (props.idCategory === 5) {
      return categoryOthersImg;
    }

    return categoryNoCategoryImg;
  };

  return (
    <>
      <CardMedia className={classes.media} image={imgUrl()} title="" />
    </>
  );
};
