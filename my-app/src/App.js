import React from 'react';
import Autor from './img/author.png';
import Logo from './img/logo.svg';
import './css/estilo.css';

function App () {
    return (
      <div id="container">
        <div class="target">
          <div class="quadro">
            <div class="raiz">
              <ul>
                <li class="lista"><a href="Nacional" class="Nacional">Nacional 🔴</a></li>
                <li class="lista"><a href="Business">Business</a></li>
                <li class="lista"><a href="Internacional">Internacional</a></li>
                <li class="lista"><a href="Sáude">Sáude</a></li>
                <li class="lista"><a href="Tecnologia">Tecnologia</a></li>
                <li class="lista"><a href="Esporte">Esporte</a></li>
                <li class="lista"><a href="Entretenimento">Entretenimento</a></li>
                <li class="lista"><a href="Estilo">Estilo</a></li>
                <li class="lista"><a href="Viagem & Gastronomia">Viagem & Gastronomia</a></li>
                <li class="lista"><a href="Newsletters">Newsletters</a></li>
                <li class="lista"><a href="Podcasts">Podcasts</a></li>
              </ul>
            </div>
          </div>
        </div>
        <nav class="menu">
          <div class="conteudo">
            <div class="titulo">
              <h1 class="titulo1">Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
            </div>
            <div>
            <hr />
            </div>
            <div class="paragrafo">
              <p class="paragrafo1">A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
            </div>
            <section class="info_autor" id="Autor">
              <img src={Autor} alt="autor do documento"/>
            </section>
            <hr />
            <div class="Info">
              <p>24/08/2021 às 16:44 | Atualizado às 16:56</p>
            </div>
          </div>
          <div class="conteudo2">
            <section class="logo" id="logoCNN">
              <img class="logoCNN" src={Logo} alt="logoCNN"/>
            </section>
            <div class="par">
              <p class="par1">Por ser uma doença nova, a<a class="link" href="">Covid-19</a>ainda não foi totalmente compreendida pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto longo prazos.</p>
            </div>
            <div class="par2">
              <p class="par3">A<a class="link" href="">variante Delta da Covid-19</a>, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos ultimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
            </div>
          </div>
        </nav>
      </div>

    );
    }

export default App;