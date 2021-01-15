import './navigationBar.css'
import ButtonPrimary from '../PrimaryButton/index'
import ButtonSecondary from '../SecondaryButton/index'
import CustonMenu from './Menu/index'

export default function NavigationBar() {

  return (
    <div id="container">
      <div>Logo</div>
      <div id="buttons">
      <ButtonSecondary name="Entrar" size="small" Color="secondary"/>
      <ButtonPrimary name="Registre-se" Color="primary"/>
      </div> 
    <div id="menu">
      <CustonMenu name1="Ver Prefil" name2="Deslogar"/>
    </div>
    </div>
  );
}