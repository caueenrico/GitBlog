import { Header} from "../../pages/Home/styles";
import logo from '../../pages/assets/logo.svg';

export function DefaultLayout(){
  return (
    <>
      <Header>
        <img src={logo} />
      </Header>
      
    </>
  )
}