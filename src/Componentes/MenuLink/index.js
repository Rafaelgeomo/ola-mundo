import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink ({children, to}) {
  


  return (
    <NavLink
    //Como o nome indica, a propriedade isActive (do inglês "está ativo") é true se o link estiver ativo e false se não estiver
  className={({ isActive }) => ` 
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
        `}
        to={to}
        end
    // para evitar que os dois links fique com o underline, coloque o end no final 
    >
        {children}
    </NavLink>
)
   
}

// essa seria uma outra opção caso nao quisesse usar o NavLink
// const localizacao = useLocation();
//<Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}> {children}</Link>)}