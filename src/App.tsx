import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { MainForm } from "./components/MainForm";
import { DefaultInput } from "./components/DefaultInput";
import { DefaultButton } from './components/DefaultButton'

import { Mail, Lock } from "lucide-react";

export function App() {
  return (
    <Container>
      <MainForm>
        <form>
          <h1>Login</h1>

          <DefaultInput
            type="email"
            placeholder="Email"
            icon={Mail}
          />

          <DefaultInput
            type="password"
            placeholder="Senha"
            icon={Lock}
          />

          <DefaultButton>
            Entrar
          </DefaultButton>
        </form>
      </MainForm>
    </Container>
  );
}
