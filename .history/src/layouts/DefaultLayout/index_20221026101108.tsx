import { Header} from "../../pages/Home/styles";
import logo from '../../pages/assets/logo.svg';
import { Outlet } from "react-router-dom";

export function DefaultLayout(){
  return (
    <>
      <Header>
        <img src={logo} />
      </Header>
      <Outlet
    </>
  )
}