import CardMedia from "@material-ui/core/CardMedia";
import defaultImg from "../assets/img/categoryRetro.jpg";
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
      return "https://i.ytimg.com/vi/t-v6xe1X1zo/sddefault.jpg";
    }
    if (props.idCategory === 2) {
      return "https://media.gazetadopovo.com.br/2020/09/02160514/xadrez-Steve-Buissinne-Pixabay-660x372.jpg";
    }
    if (props.idCategory === 3) {
      return "https://wallpaperaccess.com/full/2379009.jpg";
    }
    if (props.idCategory === 4) {
      return "https://www.maistecnologia.com/wp-content/uploads/2015/03/world-of-warcraft-logo.jpg";
    }
    if (props.idCategory === 5) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99Elb9Xm6t6og77iVIOJqJc5QwfJVFvEMfA&usqp=CAU";
    }
    if (props.idCategory === 6) {
      return "https://bombusenergy.com/wp-content/uploads/2018/07/others-e1531304364940-1.png";
    }

    return defaultImg;
  };

  return (
    <>
      <CardMedia className={classes.media} image={imgUrl()} title="" />
    </>
  );
};
