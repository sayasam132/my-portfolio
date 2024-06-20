import { Title } from "@solidjs/meta";

export default function App() {
  return (
    <main>
      <Title>Perfil</Title>
      <div id="particles-js"></div>
      <header class="contenedor">
        <div class="contenido-descripcion">
          <div>
            <h1 class="titulo">
              <span>Habilidades </span>
            </h1>
            <table style="width: 500px; margin: 20px auto; border-collapse: collapse;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 10px;">Habilidades</th>
            <th style="border: 1px solid #ddd; padding: 10px;">Escala</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Base de Datos</td>
            <td style="border: 1px solid #ddd; padding: 10px;">Intermedio</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Programación Html, js y css</td>
            <td style="border: 1px solid #ddd; padding: 10px;">intermedio</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Redes</td>
            <td style="border: 1px solid #ddd; padding: 10px;">Principiante</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Android studio</td>
            <td style="border: 1px solid #ddd; padding: 10px;">Intermedio</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">Editor vegas pro 15 y 18 </td>
            <td style="border: 1px solid #ddd; padding: 10px;">Intermedio</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 10px;">unity</td>
            <td style="border: 1px solid #ddd; padding: 10px;">Principiante medio</td>
        </tr>
    </tbody>
</table>

          </div>
        </div>
      </header>
    </main>
  );
}
