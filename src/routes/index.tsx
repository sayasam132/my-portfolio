import { Title } from "@solidjs/meta";
import "/src/app.css"; // la ruta de donde estoy agarrando el css


export default function Home() {
  return (
    <main>
      <Title>Perfil</Title>
      <header class="bg_animate">
        <section class="banner contenedor">
          <section class="banner_title">
            <h2>Bienvenido a mi<br />portafolio </h2>
            <div class="additional-info">
              <h3>Mi nombre es Samuel Mejia Saquic, soy un joven universitario</h3>
              <h3>de la escuela de ingeniería en sistemas con el rol nuevo de frontend</h3>
            </div>
          </section>

          
          <div class="banner_img">
            <img src="/public/Perfil.jpg" alt="Laptop support" />
          </div>
        </section>
        <div class="burbujas">
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
        </div>
      </header>
      <h1 id="perfil" class="bounce-in">Hola bienvenido a mi portafolio</h1>


    </main>
  );
}
