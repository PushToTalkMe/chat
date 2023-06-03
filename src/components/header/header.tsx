import { useContext } from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { HeaderProps } from "./header.props";
import { Avatar, Htag } from "../index";
// import { ReactComponent as Glass } from "../../../helpers/icons/glass.svg";
import { ReactComponent as NewChat } from "../../../helpers/icons/add.svg";
// import { ReactComponent as Option } from "../../../helpers/icons/option.svg";
import { ActiveContext } from "../../context";
import { useTypedSelector } from "../../../hooks/use_typed_selector";

export const Header = ({
  avatar,
  sidebar,
  className,
  ...props
}: HeaderProps): JSX.Element => {
  const abonent = useTypedSelector(state => state.abonentReducer)

  const value = useContext(ActiveContext)
  return (
    <div
      className={cn(styles.header, className, {
        [styles.sidebar]: sidebar === true,
      })}
      {...props}
    >
      {!sidebar ? (
          <Htag tag="h4" className={styles.name}>
            {abonent.number !== undefined  ? '+' + abonent.number : 'Будущий номер вашего собеседника'}
          </Htag>
          // {/* <Glass className={styles.glass} /> */}
      ) : (
        <>
          <Avatar src={avatar} alt="Аватар" />
          <NewChat className={styles.newChat} onClick={() => value?.setAbonentActive(true)}
          />
        </>
        
      )}
      {/* <Option className={styles.option} /> */}
    </div>
  );
};
