import { Header } from "./style";
import logo from '../../pages/assets/logo.svg';

export function Home() {
  return (
    <div>
      <Header>
        <img src={logo} />
      </Header>
    </div>
  );
}