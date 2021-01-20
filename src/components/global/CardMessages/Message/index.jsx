import { useStyles } from "./styles";
export const Message = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageContainer}>
        <div className={classes.name}>{props.personMessage.name}</div>
        <div className={classes.message}>{props.personMessage.message}</div>
      </div>
    </>
  );
};
