import './navigationBar.css'
import Buttons from '../Buttons/index'
import CustonMenu from './Menu/index'

export default function NavigationBar() {

  return (
    <div id="container">
      <div>Logo</div>
      <div id="buttons">
      <Buttons name="Entrar" size="small"/>
      <Buttons name="Registre-se"/>
      </div>
    <div id="menu">
      <CustonMenu name1="Ver Prefil" name2="Deslogar"/>
    </div>
    </div>
  );
}