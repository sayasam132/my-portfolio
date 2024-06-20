import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Perfil</Title>
      <h1 style={{color: "white"}}>Hola, bienvenido a mis pequeños proyectos</h1>
      <h2 style={{ color: "white" }}>Mis proyectos en GitHub</h2>
      <ul>
        <li>
          <a href="https://github.com/sayasam132/CALCULADORA.git" target="_blank" rel="noopener noreferrer">Calculadora</a>
        </li>
        <li>
          <a href="https://www.figma.com/design/MdhyM0sCk8LaUDconSe9el/Untitled?t=YYBHjL8jlcB2tKKT-1" target="_blank" rel="noopener noreferrer">platilla de android</a>
        </li>
        <li>
          <a href="https://github.com/sayasam132/moneda-de-cambio.git" target="_blank" rel="noopener noreferrer">Moneda de cambio </a>
        </li>
        <li>
          <a href="https://github.com/tu-usuario/proyecto-4" target="_blank" rel="noopener noreferrer">Calculadora en Android</a>
        </li>
      </ul>
    </main>
  );
}

