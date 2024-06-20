import { Title } from "@solidjs/meta";
import "/src/app.css"; // Ruta relativa al archivo CSS desde el directorio actual

export default function App() {
  return (
    <main>
      <Title>Perfil</Title>
      <div id="particles-js"></div>
      <header class="contenedor">
        <div class="contenido-descripcion">
          <div>
            <h1 class="titulo">
              <span>Acerca de mi</span>
            </h1>
            <article class="descripcion">
              <p>Permítanme presentarme. Soy Samuel Mejía, un joven de 22 años apasionado por la creación de experiencias web cautivadoras. 
              Actualmente, resido en Costa Rica y me encuentro cursando el sexto cuatrimestre de la carrera de Ingeniería en Sistemas.</p >
              <p>Desde muy temprana edad, descubrí mi fascinación por el mundo digital y cómo las líneas de código se entrelazaban para dar vida a interfaces atractivas y funcionales. Esta curiosidad innata me llevó a adentrarme en el emocionante campo del desarrollo 
              web, donde he asumido el rol de Desarrollador Frontend.</p>
            </article>
          </div>
        </div>
      </header>
    </main>
  );
}
