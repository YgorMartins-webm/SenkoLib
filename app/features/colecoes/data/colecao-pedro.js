// @ts-nocheck
/* ═══════════════════════════════════════════════════════════════════════
   colecoes/data/colecao-pedro.js — Coleção: Coleção Pedro

   ATENÇÃO: Arquivo gerado pelo módulo GitHub do SenkoLib.
   NÃO edite manualmente em produção.
═══════════════════════════════════════════════════════════════════════ */
ColLib.register({
  slug:  'colecao-pedro',
  name:  'Coleção Pedro',
  group: 'pedro',
  tags:  [],
  layouts: [
                    
            
                        
        
                            /*@@@@Col - comp-p-3b-faqe-vh-tb */
    {
      id:   'comp-p-3b-faqe-vh-tb',
      name: 'comp - 3 blocos faq embutido video header e tabela',
      html: `    <div class="lp-container">
<style>
* {
  margin: 0;
  padding: 0;
}

video-header,
  .video-header * {
    box-sizing: border-box;
    margin: 0;
  }

  .video-header {
    --badge-size: 8rem;
    --banner-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    font-family: sans-serif;
    container-type: inline-size;
  }

  .video-header__banner {
    width: 100%;
    height: var(--banner-height);
    position: relative;
    display: flex;
    justify-content: center;
  }

  .video-header__banner-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  .video-header__badge {
    position: absolute;
    bottom: calc(var(--badge-size) / -2);
    width: var(--badge-size);
    height: var(--badge-size);
    background-color: #ff9900;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 10;
  }

  .video-header__badge-img {
    max-width: 90px;
    max-height: 90px;
    object-fit: contain;
  }

  .video-header__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: calc(var(--badge-size) / 2 + 1.1rem) 0.3rem 2.5rem;
    text-align: center;
  }

  .video-header__brand {
    color: #ff9900;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .video-header__title {
    color: #000;
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    line-height: clamp(1.6rem, 4vw, 3.1rem);
    font-weight: 600;
    max-width: 50rem;
    text-wrap: pretty;
  }

  .video-header__subtitle {
    color: #8a8a8a;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 120%;
    margin-top: 1rem;
    max-width: 52rem;
    text-wrap: pretty;
  }

.section-32__container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border: 5.5px solid #000;
  border-radius: 36px;
}

.section-32__groupimage-section {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  contain: layout style;
}

.section-32__groupimage-section:has(.faq-section) {
  z-index: 0;
}

.section-32__grouptext-overlay {
  z-index: 20;
}

.grouptext-overlay-Background {
  z-index: 20;
}

.section-32__groupimage-section img {
  width: 100%;
  height: auto;
  display: inline-block;
  min-width: 100%;
}

.section-32__grouptext-overlay {
  color: #fff;
  position: absolute;
  max-width: 50%;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  font-family: sans-serif;
}

.section-32__grouptext-overlay.left {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 45%;
}

.section-32__grouptext-overlay h2 {
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 1.5px;
  line-height: 120%;
}

.section-32__grouptext-overlay p {
  font-size: 1.2vw;
  margin: 0;
  line-height: 120%;
}

.grouptext-overlay-Background {
  background: rgba(0, 0, 0, 0.438);
  border-radius: 2.8vw;
  padding: 0.5rem;
  backdrop-filter: blur(0.5vw);
  -webkit-backdrop-filter: blur(0.5vw);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 70%;
  z-index: 100;
}

.features-section {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 40px;
  padding: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 30px;
  align-items: center;
}

.column,
.image-display {
  display: flex;
  flex-direction: column;
}

.column {
  gap: 30px;
}

.image-display {
  align-items: center;
  gap: 40px;
}

.circle-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 780 / 740;
  border-radius: 50%;
  border: 5px solid #1d2637;
  overflow: hidden;
  position: relative;
  background: #eee;
  box-shadow: 0 05px 10px #090d14;
}

.circle-frame picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card {
  display: block;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  box-shadow: 0 05px 10px #090d14;
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #1d2637;
  font-weight: 550;
  line-height: 2.2vh;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.feature-card:hover,
.feature-card:focus-visible {
  background-color: #f9fbff;
  transform: translateY(-8px);
  box-shadow: 0 10px 15px #090d14;
}

.feature-card:focus-visible {
  outline: 3px solid #1d2637;
  outline-offset: 5px;
}

#feat1:checked ~ .grid-container .img1,
#feat2:checked ~ .grid-container .img2,
#feat3:checked ~ .grid-container .img3 {
  opacity: 1;
  z-index: 2;
}

#feat1:checked ~ .grid-container label[for="feat1"],
#feat2:checked ~ .grid-container label[for="feat2"],
#feat3:checked ~ .grid-container label[for="feat3"] {
  border-color: #1d2637;
  background-color: #f9fbff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.faq-section {
  width: 100%;
  padding: 0 16px 2rem;
  box-sizing: border-box;
  margin: 0 auto 25px;
  font-family: sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0.014);
  border-radius: 40px;
  max-width: 75%;
  z-index: 10;
  border: 1px solid #fff;
  max-height: 55vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.faq-section__header {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 6vw;
}

.faq-section__subtitle {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.faq-section__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.faq-section__item {
  background: #ffffff05;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

.faq-section__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
}

.faq-section__item summary::-webkit-details-marker {
  display: none;
}

.faq-section__item summary:hover {
  background: #f9f9f92f;
}

.faq-section__q-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  flex: 1;
}

.faq-section__q-text:hover {
  color: #ffb81c;
}

.faq-section__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
}

.faq-section__icon::before,
.faq-section__icon::after {
  content: "";
  position: absolute;
  background: #888;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.faq-section__icon::before {
  width: 12px;
  height: 1.5px;
  top: 9px;
  left: 4px;
}

.faq-section__icon::after {
  width: 1.5px;
  height: 12px;
  top: 4px;
  left: 9px;
}

.faq-section__item details[open] .faq-section__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-section__a-inner {
  padding: 14px 20px 16px;
  border-top: 1px solid #e5e5e5;
}

.faq-section__a-text {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

.faq-section::-webkit-scrollbar {
  width: 8px;
}

.faq-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.p__end {
  color: #8a8a8a;
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-wrap: pretty;
  text-align: center;
  padding: 40px 0;
}

 .table-container-custom {

    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .table-design-custom {

    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }

  .table-head-custom {
    color: rgb(255, 255, 255);
    border-radius: 10px;

  }

  .table-text-custom {

    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #979797;
    font-family: sans-serif;
  }

  

  .table-row-custom:hover {

    background-color: #f1f1f1;
    filter: brightness(0.9);
  }


  td a {
    color: #000;
    font-weight: 600;
    text-decoration: none;

  }

  td a:hover {
     color: #e74011;
  }

  .table-th-custom {

    font-weight: bold;
  }

  .table-td-custom {
    color: #555;
  }

  /* Efeito de zebrado nas linhas */

  .table-tr-custom:nth-child(even) {

    background-color: #f1f1f1;
  }

@media (prefers-contrast: more) {
   .p__end,
  .video-header__subtitle {
    color: #000;
  }

  .grouptext-overlay-Background {
    background: #000;
  }

  .video-header__brand {
    color: #3a2301;
  }

  .faq-section__a-text {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }

        .table-td-custom-sub
      {
        color: #000;
        font-weight: 550;
      }

      .table-td-custom-title
      {
        color: #000;
        font-weight: 700;
      } 
}

@media (max-width: 1060px) {
  .faq-section {
    top: 10%;
    max-width: 90%;
    max-height: 80%;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-display {
    grid-row: 1;
  }

  .circle-frame {
    max-width: 320px;
  }

  .column {
    order: 2;
  }
}

@media (max-width: 960px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.1vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 1.5vw;
  }
}

@media (max-width: 768px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.5vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2vw;
  }

  .video-header {
    --banner-height: 180px;
  }

  .faq-section__header {
    margin-bottom: 1rem;
  }

  .faq-section__a-text {
    font-size: 0.7rem !important;
  }

  .faq-section__title {
    font-size: 1rem !important;
  }

  .faq-section__subtitle,
  .faq-section__q-text {
    font-size: 0.75rem !important;
  }
}

 @media (max-width: 600px) {


        .table-container-custom {

      padding: 10px;
    }

    .table-text-custom,
    .table-th-custom,
    .table-td-custom {

      padding: 8px;
    }
    }

@media (max-width: 500px) {
  .section-32__grouptext-overlay h2 {
    font-size: 3vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.3vw;
  }

  .section-32__grouptext-overlay {
    max-width: 50%;
  }
}

@media (max-width: 470px) {
  .video-header__subtitle {
    text-align: justify;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    font-weight: 550;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.4vw;
  }

  .faq-section {
    max-height: 180px !important;
    padding: 0.5rem 8px !important;
    top: 5% !important;
    max-width: 90%;
    border-radius: 20px;
  }
}

@media (max-width: 375px) {
  .section-32__grouptext-overlay p {
    font-size: 2.8vw;
  }
}
</style>
  <article style="width: 100%;" aria-labelledby="video-main-title">
  <section class="video-header" aria-label="Cabeçalho do produto">
    <header class="video-header__banner">
      <video class="video-header__banner-video"
        poster="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/poster-sata-engrenagens-peças-mecanicas-girando.jpg"
        preload="none" autoplay muted loop playsinline width="1200" height="250" aria-hidden="true">
        <source src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/sata/header-sata.mov">
      </video>
      <div class="video-header__badge" role="img" aria-label="Logo da marca sata dentro de um círculo laranja">
        <img
          src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/sata/logo-sata.png"
          alt=""
          class="video-header__badge-img">
      </div>
    </header>
    <section class="video-header__body" aria-label="Título e descrição do produto">
      <small class="video-header__brand">sata</small>

      <h2 class="video-header__title" id="video-main-title">
        SOQUETE SATA TORX 1/2P E10 A E24
      </h2>
      <p class="video-header__subtitle">
        Mais força, precisão e durabilidade em cada aperto: soquetes Torx SATA 1/2” em aço Cromo-Vanádio, ideais para 
        uso profissional em oficinas, manutenção e indústria.
      </p>
    </section>
  </section>


        <section class="section-32__container" aria-label="Galeria de características">
        <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-cromo-vanadio-detalhe-508938-02.jpg"
        alt="Parafusos autobrocantes sata Tubozan com tampas cerâmica, branca e concreto" 
        style="border-radius: 30px 30px 0 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 60%; left: 75%; max-width: 35%;">
        <h2><strong>GUIA TORX E10 A E24</strong></h2>
        <p>Escolha pela medida do parafuso Torx: E10, E12, E14, E16, E18, E20, E22 ou E24. Todos têm encaixe 1/2" e tecnologia Surface Drive SATA.
        </p>
      </figcaption>
      </figure>

       <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-e14-uso-automotivo-508938-03.jpg"
        alt="Parafusos sata Tubozan com tampas branco e marfim sobre fundo de instalação" 
        style="border-radius: 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 85%; left: 50%; max-width: 40%;">
        <h2><strong>SURFACE DRIVE SATA</strong></h2>
        <p>A tecnologia Surface Drive distribui melhor a força nas faces planas e ajuda a reduzir o desgaste do soquete e do parafuso. Enquanto 
          O aço Cromo-Vanádio aumenta resistência e durabilidade, mantendo o soquete preparado para trabalhos intensos e uso profissional.
        </p>
      </figcaption>
      </figure>
      
      <figure class="section-32__groupimage-section">
      <picture>
        <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/soquete-sata-torx-meia-polegada-fundo-mecanico-engrenagens-508938-04.jpg"
        alt="Cenário obra sata Tubozan com furadeira e superfície de fixação ao fundo" 
        style="border-radius: 0px 0px 30px 30px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
        
  <!-- Camada com gradiente de fade -->

   <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
              background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.550) 37%, rgba(0, 0, 0, 0.897) 100%); 
              z-index: 5; border-radius: 0px 0px 30px 30px; pointer-events: none;" aria-hidden="true"></div>

              <!-- FAQ -->

       <section class="faq-section" aria-labelledby="faq-section-title">
           
    <div class="faq-section__header">
      <h2 class="faq-section__title" id="faq-section-title">Resolva suas dúvidas</h2>
      <p class="faq-section__subtitle">Saiba o porquê do produto ser a melhor escolha baseado em perguntas do público</p>
    </div>
    <ul class="faq-section__list" style="overflow: hidden;" role="list">
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">1. Para que serve o Soquete Torx 1/2P SATA E10 a E24?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            A linha inclui variações E10, E12, E14, E16, E18, E20, E22 e E24, conforme as fichas fornecidas.
            É indicado para mecânicos automotivos, técnicos de manutenção, indústrias e profissionais que utilizam ferramentas de alto desempenho.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">2. O Soquete Torx SATA tem bom desempenho em trabalhos profissionais?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
             A tecnologia Surface Drive atua na superfície plana de parafusos sextavados e estriados, distribuindo melhor a força.
            Esse recurso ajuda a reduzir o desgaste no soquete e no parafuso durante trabalhos intensos.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details> 
          <summary>
            <h3 class="faq-section__q-text">3. De que material é feito o Soquete Torx 1/2P SATA?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            O Soquete Torx 1/2P SATA E10 a E24 é fabricado em aço Cromo-Vanádio, identificado como Cr-V nas fichas técnicas.
            Esse material é associado à maior resistência e durabilidade mesmo em trabalhos intensos.
            A construção em Cr-V reforça a vida útil esperada da ferramenta em aplicações profissionais.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">4. Como usar o Soquete Torx SATA da forma correta?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              O Soquete Torx 1/2P SATA E10 a E24 deve ser selecionado conforme a medida Torx necessária, de E10 a E24.
              A ficha indica aplicação especialmente em trabalhos com parafusos Torx em oficinas, indústrias e manutenção automotiva.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">5. Quais são as medidas técnicas disponíveis nessa linha?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              O Soquete Torx 1/2P SATA E10 a E24 está disponível nas medidas E10, E12, E14, E16, E18, E20, E22 e E24.
              As fichas informam largura de 4,50 cm para todas as variações, com comprimentos de 3,80 cm ou 10,20 cm.
              As alturas variam entre 2,20 cm, 2,38 cm, 2,58 cm e 2,78 cm, ajudando na escolha da medida correta.
            </p>
          </div>
        </details>
      </li>
    </ul>
      </section>
    </figure>
    </section>

  <footer aria-label="Informações complementares e produtos relacionados">
           <p class="p__end">
          <strong>Imagens Meramente Ilustrativas</strong>
          </p>
           <section class="table-container-custom" aria-label="tabela contendo produtos relacionados e citados dentre deste conteúdo">
          <table class="table-design-custom" aria-describedby="table-desc">
            <caption id="table-desc" class="sr-only" style="text-align:left; padding: 0 0 8px; font-weight:600;">
          Modelos de Conjuntos de Parafusos disponíveis
          </caption>
            <thead class="table-head-custom">
               <tr class="table-tr-custom">
                 <th class="table-text-custom table-th-custom" style="background-color: #006549; border-radius: 10px 0 0 0;" scope="col">SKU
                 </th>
                 <!--Replicar para adicionar mais COLUNAS-->
                 <th class="table-text-custom table-th-custom" style="background-color: #006549; border-radius: 0 10px 0 0;" scope="col">TÍTULO
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr class="table-tr-custom">
                 <td class="table-text-custom table-td-custom-title">508938</td>
            <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E10</td>
           </tr>
         <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">508939</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E12</td>
        </tr>
          <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">508941</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E14</td>
      </tr>
      <tr class="table-tr-custom">
        <td class="table-text-custom table-td-custom-title">508942</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E16</td>
         </tr>
        <tr class="table-tr-custom">
        <td class="table-text-custom table-td-custom-title">508943</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E18</td>
          </tr>
         <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">508944</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E20</td>
        </tr>
          <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">508945</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E22</td>
      </tr>
      <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">508946</td>
        <td class="table-text-custom table-td-custom-sub">SOQUETE SATA TORX 1/2P E24</td>
      </tr>
             </tbody>
           </table>
         </section>
        </footer>

        </article>

        </div>
`,
      css:  ``,
    },

                    /*@@@@Col - comp-3-blocos-product-header-faq-embutido-e-tabela */
    {
      id:   'comp-3-blocos-product-header-faq-embutido-e-tabela',
      name: 'comp 3 blocos, 18 no meio, video-header, FAQ embutido, e tabela',
      html: `    <div class="lp-container">
<style>
* {
  margin: 0;
  padding: 0;
}

video-header,
  .video-header * {
    box-sizing: border-box;
    margin: 0;
  }

  .video-header {
    --badge-size: 8rem;
    --banner-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    font-family: sans-serif;
    container-type: inline-size;
  }

  .video-header__banner {
    width: 100%;
    height: var(--banner-height);
    position: relative;
    display: flex;
    justify-content: center;
  }

  .video-header__banner-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  .video-header__badge {
    position: absolute;
    bottom: calc(var(--badge-size) / -2);
    width: var(--badge-size);
    height: var(--badge-size);
    background-color: #ff9900;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 10;
  }

  .video-header__badge-img {
    max-width: 90px;
    max-height: 90px;
    object-fit: contain;
  }

  .video-header__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: calc(var(--badge-size) / 2 + 1.1rem) 0.3rem 2.5rem;
    text-align: center;
  }

  .video-header__brand {
    color: #ff9900;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .video-header__title {
    color: #000;
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    line-height: clamp(1.6rem, 4vw, 3.1rem);
    font-weight: 600;
    max-width: 50rem;
    text-wrap: pretty;
  }

  .video-header__subtitle {
    color: #8a8a8a;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 120%;
    margin-top: 1rem;
    max-width: 52rem;
    text-wrap: pretty;
  }

.section-32__container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border: 5.5px solid #000;
  border-radius: 36px;
}

.section-32__groupimage-section {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  contain: layout style;
}

.section-32__groupimage-section:has(.faq-section) {
  z-index: 0;
}

.section-32__grouptext-overlay {
  z-index: 20;
}

.grouptext-overlay-Background {
  z-index: 20;
}

.section-32__groupimage-section img {
  width: 100%;
  height: auto;
  display: inline-block;
  min-width: 100%;
}

.section-32__grouptext-overlay {
  color: #fff;
  position: absolute;
  max-width: 50%;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  font-family: sans-serif;
}

.section-32__grouptext-overlay.left {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 45%;
}

.section-32__grouptext-overlay h2 {
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 1.5px;
  line-height: 120%;
}

.section-32__grouptext-overlay p {
  font-size: 1.2vw;
  margin: 0;
  line-height: 120%;
}

.grouptext-overlay-Background {
  background: rgba(0, 0, 0, 0.438);
  border-radius: 2.8vw;
  padding: 0.5rem;
  backdrop-filter: blur(0.5vw);
  -webkit-backdrop-filter: blur(0.5vw);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 70%;
  z-index: 100;
}

.features-section {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 40px;
  padding: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 30px;
  align-items: center;
}

.column,
.image-display {
  display: flex;
  flex-direction: column;
}

.column {
  gap: 30px;
}

.image-display {
  align-items: center;
  gap: 40px;
}

.circle-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 780 / 740;
  border-radius: 50%;
  border: 5px solid #1d2637;
  overflow: hidden;
  position: relative;
  background: #eee;
  box-shadow: 0 05px 10px #090d14;
}

.circle-frame picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card {
  display: block;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  box-shadow: 0 05px 10px #090d14;
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #1d2637;
  font-weight: 550;
  line-height: 2.2vh;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.feature-card:hover,
.feature-card:focus-visible {
  background-color: #f9fbff;
  transform: translateY(-8px);
  box-shadow: 0 10px 15px #090d14;
}

.feature-card:focus-visible {
  outline: 3px solid #1d2637;
  outline-offset: 5px;
}

#feat1:checked ~ .grid-container .img1,
#feat2:checked ~ .grid-container .img2,
#feat3:checked ~ .grid-container .img3 {
  opacity: 1;
  z-index: 2;
}

#feat1:checked ~ .grid-container label[for="feat1"],
#feat2:checked ~ .grid-container label[for="feat2"],
#feat3:checked ~ .grid-container label[for="feat3"] {
  border-color: #1d2637;
  background-color: #f9fbff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.faq-section {
  width: 100%;
  padding: 0 16px 2rem;
  box-sizing: border-box;
  margin: 0 auto 25px;
  font-family: sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0.014);
  border-radius: 40px;
  max-width: 75%;
  z-index: 10;
  border: 1px solid #fff;
  max-height: 55vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.faq-section__header {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 6vw;
}

.faq-section__subtitle {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.faq-section__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.faq-section__item {
  background: #ffffff05;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

.faq-section__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
}

.faq-section__item summary::-webkit-details-marker {
  display: none;
}

.faq-section__item summary:hover {
  background: #f9f9f92f;
}

.faq-section__q-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  flex: 1;
}

.faq-section__q-text:hover {
  color: #ff7200;
}

.faq-section__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
}

.faq-section__icon::before,
.faq-section__icon::after {
  content: "";
  position: absolute;
  background: #888;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.faq-section__icon::before {
  width: 12px;
  height: 1.5px;
  top: 9px;
  left: 4px;
}

.faq-section__icon::after {
  width: 1.5px;
  height: 12px;
  top: 4px;
  left: 9px;
}

.faq-section__item details[open] .faq-section__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-section__a-inner {
  padding: 14px 20px 16px;
  border-top: 1px solid #e5e5e5;
}

.faq-section__a-text {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

.faq-section::-webkit-scrollbar {
  width: 8px;
}

.faq-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.p__end {
  color: #8a8a8a;
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-wrap: pretty;
  text-align: center;
  padding: 40px 0;
}

 .table-container-custom {

    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .table-design-custom {

    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }

  .table-head-custom {
    color: rgb(255, 255, 255);
    border-radius: 10px;

  }

  .table-text-custom {

    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #979797;
    font-family: sans-serif;
  }

  

  .table-row-custom:hover {

    background-color: #f1f1f1;
    filter: brightness(0.9);
  }


  td a {
    color: #000;
    font-weight: 600;
    text-decoration: none;

  }

  td a:hover {
     color: #e74011;
  }

  .table-th-custom {

    font-weight: bold;
  }

  .table-td-custom {
    color: #555;
  }

  /* Efeito de zebrado nas linhas */

  .table-tr-custom:nth-child(even) {

    background-color: #f1f1f1;
  }

@media (prefers-contrast: more) {
   .p__end,
  .video-header__subtitle {
    color: #000;
  }

  .grouptext-overlay-Background {
    background: #000;
  }

  .video-header__brand {
    color: #3a2301;
  }

  .faq-section__a-text {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }

        .table-td-custom-sub
      {
        color: #000;
        font-weight: 550;
      }

      .table-td-custom-title
      {
        color: #000;
        font-weight: 700;
      } 
}

@media (max-width: 1060px) {
  .faq-section {
    top: 10%;
    max-width: 90%;
    max-height: 80%;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-display {
    grid-row: 1;
  }

  .circle-frame {
    max-width: 320px;
  }

  .column {
    order: 2;
  }
}

@media (max-width: 960px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.1vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 1.5vw;
  }
}

@media (max-width: 768px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.5vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2vw;
  }

  .video-header {
    --banner-height: 180px;
  }

  .faq-section__header {
    margin-bottom: 1rem;
  }

  .faq-section__a-text {
    font-size: 0.7rem !important;
  }

  .faq-section__title {
    font-size: 1rem !important;
  }

  .faq-section__subtitle,
  .faq-section__q-text {
    font-size: 0.75rem !important;
  }
}

 @media (max-width: 600px) {


        .table-container-custom {

      padding: 10px;
    }

    .table-text-custom,
    .table-th-custom,
    .table-td-custom {

      padding: 8px;
    }
    }

@media (max-width: 500px) {
  .section-32__grouptext-overlay h2 {
    font-size: 3vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.3vw;
  }

  .section-32__grouptext-overlay {
    max-width: 50%;
  }
}

@media (max-width: 470px) {
  .video-header__subtitle {
    text-align: justify;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    font-weight: 550;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.4vw;
  }

  .faq-section {
    max-height: 180px !important;
    padding: 0.5rem 8px !important;
    top: 5% !important;
    max-width: 90%;
    border-radius: 20px;
  }
}

@media (max-width: 375px) {
  .section-32__grouptext-overlay p {
    font-size: 2.8vw;
  }
}
</style>
  <article style="width: 100%;" aria-labelledby="video-main-title">
  <section class="video-header" aria-label="Cabeçalho do produto">
    <header class="video-header__banner">
      <video class="video-header__banner-video"
        poster="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/poster-precon-p-alaranjado-ao-fundo-azul-grafitado.jpg"
        preload="none" autoplay muted loop playsinline width="1200" height="250" aria-hidden="true">
        <source src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/precon/header-precon.mov">
      </video>
      <div class="video-header__badge" role="img" aria-label="Logo da marca precon dentro de um círculo laranja">
        <img
          src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/precon/logo-precon.png"
          alt=""
          class="video-header__badge-img">
      </div>
    </header>

    <section class="video-header__body" aria-label="Título e descrição do produto">
      <small class="video-header__brand">precon</small>

      <h2 class="video-header__title" id="video-main-title">
        CONJUNTOS DE PARAFUSO AUTOBROCANTES CERAMICO/BRANCO/CONCRETO/MARFIM
      </h2>

      <p class="video-header__subtitle">
        Perfuram e fixam em uma única etapa, dispensando pré-furo. Ideais para agilizar sua obra ou reparo com total segurança e firmeza nas aplicações.
      </p>
    </section>
  </section>


      <section class="section-32__container" aria-label="Destaque visual do produto">
      <figure class="section-32__groupimage-section">
       <picture>
         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-10-unidades-410376-02.jpg"
        alt="Kit de fixação para telha Precon Tubozan com parafusos autobrocantes em embalagem" 
        style="border-radius: 30px;" width="1600" height="865"
        loading="eager" decoding="async" fetchpriority="high">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 50%; left: 25%; max-width: 40%;">
        <h2><strong>FIXAÇÃO PRECON PARA TELHA</strong></h2>
        <p>O kit Precon Tubozan é de fixação para telha, com 10 parafusos metálicos autobrocantes e tampa de acabamento.
        </p>
      </figcaption>
      </figure>
       </section>

       <section class="features-section" style="background-image: url(https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-branco-laranja-410376-bg.jpg);">
    <div class="section-header" aria-labelledby="main-title">
        <h2 id="main-title">TUDO O QUE VOCÊ PROCURA</h2>
    </div>

    <!-- Inputs de rádio agrupados para acessibilidade -->
    <div role="radiogroup" aria-label="Escolha uma característica para visualizar">
        <input type="radio" id="feat1" name="feature" class="sr-only" checked>
        <input type="radio" id="feat2" name="feature" class="sr-only">
        <input type="radio" id="feat3" name="feature" class="sr-only">

        <div class="grid-container">
            <!-- Coluna Esquerda -->
            <aside class="column" aria-label="Fala sobre medidas diversas disponíveis para o produto">
                <label for="feat1" class="feature-card" role="radio" aria-checked="true" tabindex="0">
                    <article>
                        <h2>QUAL MEDIDA ESCOLHER?</h2>
                        <p>A linha oferece 2.1/2 em cerâmico, concreto e marfim, além do 3.1/2 branco para quem 
                          busca uma opção diferente na fixação de telhas.</p>
                    </article>
                </label>
            </aside>

            <!-- Coluna Central: Imagens (Picture) e Card 2 -->
            <section class="image-display" aria-label="Imagem ilustrativa da funcionalidade selecionada">
                <div class="circle-frame" aria-live="polite" aria-label="Imagem da funcionalidade selecionada">
                    
                    <!-- IMAGEM 1 RESPONSIVA -->
                    <picture class="img1">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafuso-autobrocante-telha-ondulada-410376-03.jpg" 
                        alt="Parafuso autobrocante Precon Tubozan fixado em telha ondulada com tampa cerâmica">
                    </picture>

                    <!-- IMAGEM 2 RESPONSIVA -->
                    <picture class="img2">
                       <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-acabamento-ceramico-410376-04.jpg" 
                        alt="Tampa cerâmica Precon Tubozan sobre telha laranja texturizada em close">
                    </picture>

                    <!-- IMAGEM 3 RESPONSIVA -->
                    <picture class="img3">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampa-ceramica-telhado-laranja-410376-05.jpg" 
                        alt="Fixador Precon Tubozan cerâmico instalado em telhado laranja, vista externa">
                    </picture>

                </div>

                <label for="feat2" class="feature-card" role="radio" style="width: 90%;" aria-checked="false" tabindex="0">
                    <article>
                        <h2>TAMPA DE ACABAMENTO</h2>
                        <p>A tampa de acabamento acompanha o kit e dá um toque final mais limpo à fixação, sem deixar o parafuso visualmente cru.</p>
                    </article>
                </label>
            </section>

            <!-- Coluna Direita -->
            <aside class="column" aria-label="Explicação da característica autobrocante do parafuso">
                <label for="feat3" class="feature-card" role="radio" aria-checked="false" tabindex="0">
                    <article>
                        <h2>ELE É AUTOBROCANTE?</h2>
                        <p>Sim. O parafuso metálico autobrocante Precon Tubozan entrega fixação para telha com instalação 
                          mais prática e acabamento mais completo no mesmo kit.</p>
                    </article>
                </label>
            </aside>
        </div>
    </div>
</section>


        <section class="section-32__container" aria-label="Galeria de características">
        <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-parafusos-autobrocantes-cores-410376-06.jpg"
        alt="Parafusos autobrocantes Precon Tubozan com tampas cerâmica, branca e concreto" 
        style="border-radius: 30px 30px 0 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 50%; left: 72%; max-width: 35%;">
        <h2><strong>KIT PRECON COM 10</strong></h2>
        <p>Cada embalagem traz 10 unidades, uma quantidade prática para comprar, separar e aplicar os parafusos autobrocantes Precon Tubozan na obra.
        </p>
      </figcaption>
      </figure>

       <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-tampas-branco-marfim-concreto-410376-07.jpg"
        alt="Parafusos Precon Tubozan com tampas branco e marfim sobre fundo de instalação" 
        style="border-radius: 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 75%; left: 50%; max-width: 40%;">
        <h2><strong>CORES PRECON TUBOZAN</strong></h2>
        <p>A linha Precon Tubozan oferece kits nas cores cerâmico, branco, concreto e marfim, permitindo combinar a fixação da telha 
          com o acabamento visual do projeto.
        </p>
      </figcaption>
      </figure>
      
      <figure class="section-32__groupimage-section">
      <picture>
        <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/kit-fixacao-telha-precon-tubozan-fundo-instalacao-obra-410376-08.jpg"
        alt="Cenário obra Precon Tubozan com furadeira e superfície de fixação ao fundo" 
        style="border-radius: 0px 0px 30px 30px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
        
  <!-- Camada com gradiente de fade -->

   <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
              background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.550) 37%, rgba(0, 0, 0, 0.897) 100%); 
              z-index: 5; border-radius: 0px 0px 30px 30px; pointer-events: none;" aria-hidden="true"></div>

              <!-- FAQ -->

       <section class="faq-section" aria-labelledby="faq-section-title">
           
    <div class="faq-section__header">
      <h2 class="faq-section__title" id="faq-section-title">Resolva suas dúvidas</h2>
      <p class="faq-section__subtitle">Saiba o porquê do produto ser a melhor escolha baseado em perguntas do público</p>
    </div>
    <ul class="faq-section__list" style="overflow: hidden;" role="list">
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">1. Para que serve o Conjunto Parafuso Precon Tubozan Autobrocante para Telha 10 unidades?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Serve como kit de fixação para telha. A ficha informa que o produto pertence à linha Parafusos Autobrocantes 
            e conta com parafuso metálico autobrocante. É indicado para quem precisa de uma solução de fixação com 
            instalação facilitada e acabamento no conjunto.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">2. O kit Precon Tubozan tem boa praticidade na instalação?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           apresenta fácil instalação conforme a ficha técnica. O produto reúne parafusos autobrocantes e tampa de acabamento 
           ou tampa protetora, conforme a variação informada. Essa composição favorece uma aplicação mais prática e com acabamento mais organizado.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details> 
          <summary>
            <h3 class="faq-section__q-text">3. Como usar o kit para obter melhor acabamento?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Deve ser usado conforme sua finalidade de kit de fixação para telha. A ficha destaca fácil instalação e, em algumas variações, 
            informa melhor acabamento e tampa de acabamento ou protetora.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">4. De que material é feito o parafuso do kit?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              Possui parafuso metálico autobrocante. A ficha também informa a presença de tampa de acabamento 
              ou tampa protetora, dependendo da variação. Esse conjunto entrega fixação com acabamento associado ao uso em telhas.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">5. Quais são as medidas e cores disponíveis desse conjunto?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              Aparece nas medidas 2.1/2 e 3.1/2 sendo as cores Cerâmico, Branco, Concreto e Marfim.
              Essa variação permite selecionar a opção conforme medida e acabamento descritos para cada item.
            </p>
          </div>
        </details>
      </li>
    </ul>
      </section>
    </figure>
    </section>

  <footer aria-label="Informações complementares e produtos relacionados">
           <p class="p__end">
          <strong>Imagens Meramente Ilustrativas</strong>
          </p>
           <section class="table-container-custom" aria-label="tabela contendo produtos relacionados e citados dentre deste conteúdo">
          <table class="table-design-custom" aria-describedby="table-desc">
            <caption id="table-desc" class="sr-only" style="text-align:left; padding: 0 0 8px; font-weight:600;">
          Modelos de Conjuntos de Parafusos disponíveis
          </caption>
            <thead class="table-head-custom">
               <tr class="table-tr-custom">
                 <th class="table-text-custom table-th-custom" style="background-color: #1d2637; border-radius: 10px 0 0 0;" scope="col">SKU
                 </th>
                 <!--Replicar para adicionar mais COLUNAS-->
                 <th class="table-text-custom table-th-custom" style="background-color: #1d2637; border-radius: 0 10px 0 0;" scope="col">TÍTULO
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr class="table-tr-custom">
                 <td class="table-text-custom table-td-custom-title">410376</td>
            <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 3.1/2 CERAMICO 10X1</td>
           </tr>
         <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">410377</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 2.1/2 CERAMICO 10X1</td>
        </tr>
          <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">410378</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 3.1/2 BRANCO 10X1</td>
      </tr>
      <tr class="table-tr-custom">
        <td class="table-text-custom table-td-custom-title">410379</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 3.1/2 CONCRETO 10X1</td>
         </tr>
        <tr class="table-tr-custom">
        <td class="table-text-custom table-td-custom-title">410381</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 2.1/2 CONCRETO 10X</td>
          </tr>
         <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">410382</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 3.1/2 MARFIM 10X1</td>
        </tr>
          <tr class="table-tr-custom">
           <td class="table-text-custom table-td-custom-title">410383</td>
        <td class="table-text-custom table-td-custom-sub">CONJUNTO PARAFUSO PRECON AUTOBRACANTES 2.1/2 MARFIM 10X1</td>
      </tr>
             </tbody>
           </table>
         </section>
        </footer>

        </article>

        </div>
`,
      css:  ``,
    },

                        /*@@@@Col - 3-blocos-com-ytb-18-no-meio-e-faq-embutido-corrigido */
    {
      id:   '3-blocos-com-ytb-18-no-meio-e-faq-embutido-corrigido',
      name: '3 blocos 18 com bgi no meio faq embutido',
      html: `<div class="lp-container">
<style>
* {
  margin: 0;
  padding: 0;
}

.product-header {
  --badge-size: 8rem;
  --banner-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  font-family: sans-serif;
  container-type: inline-size;
}

.product-header__banner {
  width: 100%;
  height: var(--banner-height);
  position: relative;
  display: flex;
  justify-content: center;
}

.product-header__banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product-header__badge {
  position: absolute;
  bottom: calc(var(--badge-size) / -2);
  width: var(--badge-size);
  height: var(--badge-size);
  background-color: #ff9900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 10;
}

.product-header__badge-img {
  max-width: 90px;
  max-height: 90px;
  object-fit: contain;
}

.product-header__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(var(--badge-size) / 2 + 1.1rem) 0.3rem 2.5rem;
  text-align: center;
}

.product-header__brand {
  color: #ff9900;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.product-header__title {
  color: #000;
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  line-height: clamp(1.6rem, 4vw, 3.1rem);
  font-weight: 600;
  max-width: 50rem;
  text-wrap: pretty;
}

.product-header__subtitle {
  color: #8a8a8a;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 120%;
  margin-top: 1rem;
  max-width: 52rem;
  text-wrap: pretty;
}

.section-32__container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border: 5.5px solid #000;
  border-radius: 36px;
}

.section-32__groupimage-section {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  contain: layout style;
}

.section-32__groupimage-section:has(.faq-section) {
  z-index: 0;
}

.section-32__grouptext-overlay {
  z-index: 20;
}

.grouptext-overlay-Background {
  z-index: 20;
}

.section-32__groupimage-section img {
  width: 100%;
  height: auto;
  display: inline-block;
  min-width: 100%;
}

.section-32__grouptext-overlay {
  color: #fff;
  position: absolute;
  max-width: 50%;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  font-family: sans-serif;
}

.section-32__grouptext-overlay.left {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 45%;
}

.section-32__grouptext-overlay h2 {
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 1.5px;
  line-height: 120%;
}

.section-32__grouptext-overlay p {
  font-size: 1.2vw;
  margin: 0;
  line-height: 120%;
}

.grouptext-overlay-Background {
  background: rgba(0, 0, 0, 0.438);
  border-radius: 2.8vw;
  padding: 0.5rem;
  backdrop-filter: blur(0.5vw);
  -webkit-backdrop-filter: blur(0.5vw);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 70%;
  z-index: 100;
}

.p__end {
  color: #8a8a8a;
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-wrap: pretty;
  text-align: center;
  padding: 40px 0;
}

.faq-section {
  width: 100%;
  padding: 0 16px 2rem;
  box-sizing: border-box;
  margin: 0 auto 25px;
  font-family: sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0.014);
  border-radius: 40px;
  max-width: 75%;
  z-index: 10;
  border: 1px solid #fff;
  max-height: 55vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.faq-section__header {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 6vw;
}

.faq-section__subtitle {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.faq-section__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.faq-section__item {
  background: #ffffff05;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

.faq-section__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
}

.faq-section::-webkit-scrollbar {
  width: 8px;
}

.faq-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.faq-section__item summary::-webkit-details-marker {
  display: none;
}

.faq-section__item summary:hover {
  background: #f9f9f92f;
}

.faq-section__q-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  flex: 1;
}

.faq-section__q-text:hover {
  color: #ffe600;
}

.faq-section__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
}

.faq-section__icon::before,
.faq-section__icon::after {
  content: "";
  position: absolute;
  background: #888;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.faq-section__icon::before {
  width: 12px;
  height: 1.5px;
  top: 9px;
  left: 4px;
}

.faq-section__icon::after {
  width: 1.5px;
  height: 12px;
  top: 4px;
  left: 9px;
}

.faq-section__item details[open] .faq-section__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-section__a-inner {
  padding: 14px 20px 16px;
  border-top: 1px solid #e5e5e5;
}

.faq-section__a-text {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.features-section {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 40px;
  padding: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 30px;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.image-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.circle-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 780 / 740;
  border-radius: 50%;
  border: 5px solid #000000;
  overflow: hidden;
  position: relative;
  background: rgb(255, 253, 253)230;
  box-shadow: 0 5px 10px #000000
}

.circle-frame picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card {
  display: block;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  box-shadow: 0 5px 10px #000000
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #000;
  font-weight: 550;
  line-height: 2.2vh;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.feature-card:hover {
  background-color: #fffcfd;
  transform: translateY(-8px);
  box-shadow: 0 10px 15px  #000000
}

#feat1:checked ~ .grid-container .img1,
#feat2:checked ~ .grid-container .img2,
#feat3:checked ~ .grid-container .img3 {
  opacity: 1;
  z-index: 2;
}

#feat1:checked ~ .grid-container label[for="feat1"],
#feat2:checked ~ .grid-container label[for="feat2"],
#feat3:checked ~ .grid-container label[for="feat3"] {
  border-color: #000000;
  background-color: #ffffff;
}

@media (prefers-contrast: more) {
  .p__end,
  .product-header__subtitle {
    color: #000;
  }

  .grouptext-overlay-Background {
    background: #000;
  }

  .product-header__brand {
    color: #3a2301;
  }

  .faq-section__a-text {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }
}

@media (max-width: 1060px) {
  .faq-section {
    top: 10%;
    max-width: 90%;
    max-height: 80%;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-display {
    grid-row: 1;
  }

  .circle-frame {
    max-width: 320px;
  }

  .column {
    order: 2;
  }
}

@media (max-width: 960px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.1vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 1.5vw;
  }
}

@media (max-width: 768px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.5vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2vw;
  }

  .product-header {
    --banner-height: 180px;
  }

  .faq-section__header {
    margin-bottom: 1rem;
  }

  .faq-section__a-text {
    font-size: 0.7rem !important;
  }

  .faq-section__title {
    font-size: 1rem !important;
  }

  .faq-section__subtitle,
  .faq-section__q-text {
    font-size: 0.75rem !important;
  }
}

@media (max-width: 500px) {
  .section-32__grouptext-overlay h2 {
    font-size: 3vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.3vw;
  }
}

@media (max-width: 470px) {
  .product-header__subtitle {
    text-align: justify;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    font-weight: 550;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.4vw;
  }

  .section-32__grouptext-overlay.left {
    top: 50%;
    left: 27%;
    transform: translate(-50%, -50%);
  }

  .faq-section {
    max-height: 180px !important;
    padding: 0.5rem 8px !important;
    top: 5% !important;
    max-width: 90%;
    border-radius: 20px;
  }
}

@media (max-width: 375px) {
  .section-32__grouptext-overlay p {
    font-size: 2.8vw;
  }
}
</style>
   <article style="width: 100%;" aria-labelledby="product-main-title">
    <section class="product-header" aria-label="Cabeçalho do produto">
  <header class="product-header__banner">
    <picture style="width:100%; height:100%; margin:0;">
             <source media="(max-width: 430px)"
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-faixa-engrenagens-amarelas-509485-01.webp?ims=430x">
      
              <source media="(max-width: 768px)"
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-faixa-engrenagens-amarelas-509485-01.webp?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-faixa-engrenagens-amarelas-509485-01.webp?ims=1024x">
      
              <source media="(max-width: 1200px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-faixa-engrenagens-amarelas-509485-01.webp?ims=1200x">
      <img
        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-faixa-engrenagens-amarelas-509485-01.webp"
        alt="Fundo branco Stanley SDH710 com engrenagens amarelas e contorno preto" 
        class="product-header__banner-img" loading="eager">
    </picture>
    <div class="product-header__badge" role="img" aria-label="Logo da marca stanley dentro de um círculo laranja">
      <img
        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/logo-stanley.webp"
        alt="" 
        class="product-header__badge-img">
    </div>
  </header>
  <section class="product-header__body" aria-label="Título e descrição do produto">
    <small class="product-header__brand">stanley</small>
    <h2 class="product-header__title" id="product-main-title">
     FURADEIRA DE IMPACTO STANLEY 1/2 SDH710BR 710W
    </h2>
    <p class="product-header__subtitle">
    Potência e desempenho para encarar diferentes trabalhos: furadeira de impacto Stanley 710W com mandril 1/2”, 
    ideal para perfurações em madeira, metal e alvenaria.
    </p>
  </section>
</section>


      <section class="section-32__container" aria-label="Destaque visual do produto">
      <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-meia-polegada-produto-lateral-509485-02.webp"
        alt="Furadeira de impacto Stanley SDH710 710W 1/2 pol. com empunhadura lateral" 
        style="border-radius: 30px;" width="1600" height="865"
        loading="eager" decoding="async" fetchpriority="high">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 60%; left: 28%; max-width: 35%;">
        <h2><strong>O QUE ELA FAZ?</strong></h2>
        <p>A Stanley SDH710 entrega 710W para perfurar madeira, plástico, aço, alvenaria e concreto em reformas, instalações e obras.
        </p>
      </figcaption>
      </figure>
       </section>

       <section class="features-section" 
       style="background-image: url('https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-branco-engrenagens-amarelas-509485-bg.webp');">


    <!-- Inputs de rádio agrupados para acessibilidade -->
    <div role="radiogroup" aria-label="Escolha uma característica para visualizar">
        <input type="radio" id="feat1" name="feature" class="sr-only" checked>
        <input type="radio" id="feat2" name="feature" class="sr-only">
        <input type="radio" id="feat3" name="feature" class="sr-only">

        <div class="grid-container">
            <!-- Coluna Esquerda -->
            <aside class="column" aria-label="Funcionalidade de resistência">
                <label for="feat1" class="feature-card" role="radio" aria-checked="true" tabindex="0">
                    <article>
                        <h2>PERFURAÇÃO EM AÇO</h2>
                        <p>A Stanley SDH710 perfura aço até 13mm, usando mandril de 1/2” e controle de velocidade variável.</p>
                    </article>
                </label>
            </aside>

            <!-- Coluna Central: Imagens (Picture) e Card 2 -->
            <section class="image-display" aria-label="Imagem ilustrativa da funcionalidade selecionada">
                <div class="circle-frame" aria-live="polite" aria-label="Imagem da funcionalidade selecionada">
                    
                    <!-- IMAGEM 1 RESPONSIVA -->
                    <picture class="img1">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-metal-509485-03.webp" 
                        alt="Furadeira Stanley SDH710 perfurando metal com broca e empunhadura lateral" loading="lazy" decoding="async" fetchpriority="low">
                    </picture>

                    <!-- IMAGEM 2 RESPONSIVA -->
                    <picture class="img2">
                       <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-madeira-509485-04.webp" 
                        alt="Furadeira Stanley SDH710 perfurando madeira em móvel com apoio manual" loading="lazy" decoding="async" fetchpriority="low">
                    </picture>

                    <!-- IMAGEM 3 RESPONSIVA -->
                    <picture class="img3">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-perfuracao-concreto-509485-05.webp" 
                        alt="Furadeira de impacto Stanley SDH710 perfurando parede de concreto" loading="lazy" decoding="async" fetchpriority="low">
                    </picture>

                </div>

                <label for="feat2" class="feature-card" role="radio" style="width: 90%;" aria-checked="false" tabindex="0">
                    <article>
                        <h2>PERFURAÇÃO EM MADEIRA</h2>
                        <p>A Stanley SDH710 perfura madeira até 25mm, com motor de 710W e velocidade variável para ajustar o ritmo do trabalho.</p>
                    </article>
                </label>
            </section>

            <!-- Coluna Direita -->
            <aside class="column" aria-label="Explica praticidade na hora da instalação">
                <label for="feat3" class="feature-card" role="radio" aria-checked="false" tabindex="0">
                    <article>
                        <h2>PERFURAÇÃO EM CONCRETO</h2>
                        <p>A Stanley SDH710 perfura concreto até 13mm com função impacto, indicada para superfícies rígidas em reformas e instalações.</p>
                    </article>
                </label>
            </aside>
        </div>
    </div>
</section>


        <section class="section-32__container" aria-label="Galeria de características">
      <figure class="section-32__groupimage-section">
      <picture>
             <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-close-concreto-509485-06.webp"
        alt="Close da furadeira Stanley SDH710 perfurando concreto com limitador de profundidade" 
        style="border-radius: 30px 30px 0px 0px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 75%; left: 30%;">
        <h2><strong>O QUE É VVR?</strong></h2>
        <p>O VVR combina velocidade variável e reversão, permitindo ajustar rotação e sentido conforme o material, a broca e o tipo de trabalho.
        </p>
      </figcaption>
      </figure>

      <figure class="section-32__groupimage-section">
      <picture>
             <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-manejo-empunhadura-509485-07.webp"
        alt="Detalhe da empunhadura Stanley SDH710 durante perfuração em parede" 
        style="border-radius: 0px 0px 0px 0px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 45%; left: 65%;">
        <h2><strong>QUAL A CAPACIDADE?</strong></h2>
        <p>A SDH710 perfura até 25mm em madeira e até 13mm em aço, concreto ou alvenaria, conforme a aplicação. O mandril de 1/2” 
          ou 13mm com chave permite usar diferentes brocas com firmeza durante a perfuração.
        </p>
      </figcaption>
      </figure>
      

      <figure class="section-32__groupimage-section">
      <picture>
        <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/furadeira-impacto-stanley-sdh710b2-710w-fundo-parede-obra-509485-08.webp"
        alt="Recorte de obra Stanley SDH710 com parede, luva e fundo escuro" 
        style="border-radius: 0px 0px 30px 30px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
        
  <!-- Camada com gradiente de fade -->

   <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
              background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.550) 37%, rgba(0, 0, 0, 0.897) 100%); 
              z-index: 5; border-radius: 0px 0px 30px 30px; pointer-events: none;" aria-hidden="true"></div>

              <!-- FAQ -->

       <section class="faq-section" aria-labelledby="faq-section-title">
           
    <div class="faq-section__header">
      <h2 class="faq-section__title" id="faq-section-title">Resolva suas dúvidas</h2>
      <p class="faq-section__subtitle">Saiba o porquê do produto ser a melhor escolha baseado em perguntas do público</p>
    </div>
    <ul class="faq-section__list" style="overflow: hidden;" role="list">
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">1. Para que serve a Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           A Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V serve para perfuração em materiais como madeira, 
           plástico e alvenaria. A ficha também informa capacidade de perfuração em madeira, aço e alvenaria. É indicada 
           para aplicações que exigem força, controle e versatilidade em reformas, obras e instalações.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">2. A Furadeira de Impacto Stanley tem bom desempenho em materiais rígidos?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           Sim. A Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V possui motor de 710W e função impacto. 
           A ficha informa impacto de 0 a 51.000 ipm e velocidade de 0 a 3.000 rpm. Esse desempenho favorece perfurações 
           em aplicações exigentes e materiais como alvenaria.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details> 
          <summary>
            <h3 class="faq-section__q-text">3. A Furadeira de Impacto Stanley é adequada para uso contínuo?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Sim. A Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V possui gatilho eletrônico de dois dedos com trava para uso contínuo. 
            O material do fornecedor também informa design ergonômico e botão de trava para longos períodos de trabalho. 
            Esses recursos contribuem para mais conforto e controle durante a operação.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">4. Qual é a durabilidade e garantia da Furadeira de Impacto Stanley?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              A Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V possui garantia de 12 meses conforme a ficha técnica. 
              O arquivo também informa anéis de carvão, descritos como recurso para maior durabilidade da ferramenta. 
              Essa construção oferece respaldo e resistência para o uso em aplicações frequentes.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">5. Quais são as principais características técnicas da Furadeira de Impacto Stanley?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            A Furadeira de Impacto 1/2" 710W com Chave VVR Stanley 127V tem referência SDH710B2, potência de 710W e mandril 
            de 1/2" ou 13 mm. A capacidade de perfuração informada é de 25 mm em madeira e 13 mm em aço e alvenaria. 
            Esses dados ajudam a avaliar a compatibilidade da ferramenta com diferentes materiais e brocas.
            </p>
          </div>
        </details>
      </li>
    </ul>
      </section>
    </figure>
    </section>

    <footer aria-label="Informações legais">
           <p class="p__end">
          <strong>Imagens Meramente Ilustrativas</strong>
          </p>
        </footer>

        </article>

        </div>
`,
      css:  ``,
    },

            /*@@@@Col - semelhante-ao-anterior */
    {
      id:   'semelhante-ao-anterior',
      name: 'semelhante ao anterior',
      html: `  <div class="lp-container">
<style>
* {
  margin: 0;
  padding: 0;
}

.product-header {
  --badge-size: 8rem;
  --banner-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  font-family: sans-serif;
  container-type: inline-size;
}

.product-header__banner {
  width: 100%;
  height: var(--banner-height);
  position: relative;
  display: flex;
  justify-content: center;
}

.product-header__banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product-header__badge {
  position: absolute;
  bottom: calc(var(--badge-size) / -2);
  width: var(--badge-size);
  height: var(--badge-size);
  background-color: #ff9900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 10;
}

.product-header__badge-img {
  max-width: 90px;
  max-height: 90px;
  object-fit: contain;
}

.product-header__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(var(--badge-size) / 2 + 1.1rem) 0.3rem 2.5rem;
  text-align: center;
}

.product-header__brand {
  color: #ff9900;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.product-header__title {
  color: #000;
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  line-height: clamp(1.6rem, 4vw, 3.1rem);
  font-weight: 600;
  max-width: 50rem;
  text-wrap: pretty;
}

.product-header__subtitle {
  color: #8a8a8a;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 120%;
  margin-top: 1rem;
  max-width: 52rem;
  text-wrap: pretty;
}

.section-32__container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border: 5.5px solid #000;
  border-radius: 36px;
}

.section-32__groupimage-section {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  contain: layout style;
}

.section-32__groupimage-section:has(.faq-section) {
  z-index: 0;
}

.section-32__grouptext-overlay {
  z-index: 20;
}

.grouptext-overlay-Background {
  z-index: 20;
}

.section-32__groupimage-section img {
  width: 100%;
  height: auto;
  display: inline-block;
  min-width: 100%;
}

.section-32__grouptext-overlay {
  color: #fff;
  position: absolute;
  max-width: 50%;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  font-family: sans-serif;
}

.section-32__grouptext-overlay.left {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 45%;
}

.section-32__grouptext-overlay h2 {
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 1.5px;
  line-height: 120%;
}

.section-32__grouptext-overlay p {
  font-size: 1.2vw;
  margin: 0;
  line-height: 120%;
}

.grouptext-overlay-Background {
  background: rgba(0, 0, 0, 0.438);
  border-radius: 2.8vw;
  padding: 0.5rem;
  backdrop-filter: blur(0.5vw);
  -webkit-backdrop-filter: blur(0.5vw);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 70%;
  z-index: 100;
}

.youtube-video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.youtube-video {
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
}

.features-section {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 40px;
  padding: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 30px;
  align-items: center;
}

.column,
.image-display {
  display: flex;
  flex-direction: column;
}

.column {
  gap: 30px;
}

.image-display {
  align-items: center;
  gap: 40px;
}

.circle-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 780 / 740;
  border-radius: 50%;
  border: 5px solid #0053a2;
  overflow: hidden;
  position: relative;
  background: #eee;
}

.circle-frame picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card {
  display: block;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #000;
  font-weight: 550;
  line-height: 2.2vh;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.feature-card:hover,
.feature-card:focus-visible {
  background-color: #fffcfa;
  transform: translateY(-8px);
  box-shadow: 0 10px 15px #002f5c;
}

.feature-card:focus-visible {
  outline: 3px solid #0053a2;
  outline-offset: 5px;
}

#feat1:checked ~ .grid-container .img1,
#feat2:checked ~ .grid-container .img2,
#feat3:checked ~ .grid-container .img3 {
  opacity: 1;
  z-index: 2;
}

#feat1:checked ~ .grid-container label[for="feat1"],
#feat2:checked ~ .grid-container label[for="feat2"],
#feat3:checked ~ .grid-container label[for="feat3"] {
  border-color: #0053a2;
  background-color: #f8fcff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.faq-section {
  width: 100%;
  padding: 0 16px 2rem;
  box-sizing: border-box;
  margin: 0 auto 25px;
  font-family: sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0.014);
  border-radius: 40px;
  max-width: 75%;
  z-index: 10;
  border: 1px solid #fff;
  max-height: 55vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.faq-section__header {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 6vw;
}

.faq-section__subtitle {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.faq-section__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.faq-section__item {
  background: #ffffff05;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

.faq-section__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
}

.faq-section__item summary::-webkit-details-marker {
  display: none;
}

.faq-section__item summary:hover {
  background: #f9f9f92f;
}

.faq-section__q-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  flex: 1;
}

.faq-section__q-text:hover {
  color: #5dc4ff;
}

.faq-section__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
}

.faq-section__icon::before,
.faq-section__icon::after {
  content: "";
  position: absolute;
  background: #888;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.faq-section__icon::before {
  width: 12px;
  height: 1.5px;
  top: 9px;
  left: 4px;
}

.faq-section__icon::after {
  width: 1.5px;
  height: 12px;
  top: 4px;
  left: 9px;
}

.faq-section__item details[open] .faq-section__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-section__a-inner {
  padding: 14px 20px 16px;
  border-top: 1px solid #e5e5e5;
}

.faq-section__a-text {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

.faq-section::-webkit-scrollbar {
  width: 8px;
}

.faq-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.p__end {
  color: #8a8a8a;
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-wrap: pretty;
  text-align: center;
  padding: 40px 0;
}

@media (prefers-contrast: more) {
  .p__end,
  .product-header__subtitle {
    color: #000;
  }

  .grouptext-overlay-Background {
    background: #000;
  }

  .product-header__brand {
    color: #3a2301;
  }

  .faq-section__a-text {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }
}

@media (max-width: 1060px) {
  .faq-section {
    top: 10%;
    max-width: 90%;
    max-height: 80%;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-display {
    grid-row: 1;
  }

  .circle-frame {
    max-width: 320px;
  }

  .column {
    order: 2;
  }
}

@media (max-width: 960px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.1vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 1.5vw;
  }
}

@media (max-width: 768px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.5vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2vw;
  }

  .product-header {
    --banner-height: 180px;
  }

  .faq-section__header {
    margin-bottom: 1rem;
  }

  .faq-section__a-text {
    font-size: 0.7rem !important;
  }

  .faq-section__title {
    font-size: 1rem !important;
  }

  .faq-section__subtitle,
  .faq-section__q-text {
    font-size: 0.75rem !important;
  }
}

@media (max-width: 500px) {
  .section-32__grouptext-overlay h2 {
    font-size: 3vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.3vw;
  }
}

@media (max-width: 470px) {
  .product-header__subtitle {
    text-align: justify;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    font-weight: 550;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.4vw;
  }

  .faq-section {
    max-height: 180px !important;
    padding: 0.5rem 8px !important;
    top: 5% !important;
    max-width: 90%;
    border-radius: 20px;
  }
}

@media (max-width: 375px) {
  .section-32__grouptext-overlay p {
    font-size: 2.8vw;
  }
}
</style>
  <meta charset="UTF-8">
   <article style="width: 100%;" aria-labelledby="product-main-title">
    <section class="product-header" aria-label="Cabeçalho do produto">
  <header class="product-header__banner">
    <picture style="width:100%; height:100%; margin:0;">
             <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-azul-neve-2219397-01.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-azul-neve-2219397-01.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-azul-neve-2219397-01.jpg?ims=1024x">
      
              <source media="(max-width: 1200px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-azul-neve-2219397-01.jpg?ims=1200x">
      <img
        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-azul-neve-2219397-01.jpg"
        alt="Textura de fundo azul com flocos de neve para campanha do expositor MetalFrio." 
        class="product-header__banner-img" loading="eager">
    </picture>
    <div class="product-header__badge" role="img" aria-label="Logo da marca metalfrio dentro de um círculo laranja">
      <img
        src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/metalfrio/logo-metalfrio.png"
        alt="" 
        class="product-header__badge-img">
    </div>
  </header>
  <section class="product-header__body" aria-label="Título e descrição do produto">
    <small class="product-header__brand">metalfrio</small>
    <h2 class="product-header__title" id="product-main-title">
     FREEZER HORIZONTAL NF55S 505L SUPRA BRANCO
    </h2>
    <p class="product-header__subtitle">
    Garante refrigeração contínua e eficiente, mantendo a temperatura ideal mesmo com aberturas frequentes da 
    tampa. Qualidade e resistência para sua rotina!
    </p>
  </section>
</section>


      <section class="section-32__container" aria-label="Destaque visual do produto">
      <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-tampa-vidro-branco-frontal-2219397-02.jpg"
        alt="Expositor MetalFrio NF55S branco com tampa de vidro visto de frente sobre neve azul." 
        style="border-radius: 30px;" width="1600" height="865"
        loading="eager" decoding="async" fetchpriority="high">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 60%; left: 80%; max-width: 33%;">
        <h2><strong>ENFERRUJA POR DENTRO?</strong></h2>
        <p>Não! O seu interior é construído em aço pré-pintado branco, o que oferece uma proteção 
          extra contra a corrosão e garante grande longevidade.
        </p>
      </figcaption>
      </figure>
       </section>

       <section class="features-section" style="background-image: url(https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-branco-flocos-neve-2219397-bg.jpg);">
    <div class="section-header" aria-labelledby="main-title">
        <h2 id="main-title">TUDO O QUE VOCÊ PROCURA</h2>
    </div>

    <!-- Inputs de rádio agrupados para acessibilidade -->
    <div role="radiogroup" aria-label="Escolha uma característica para visualizar">
        <input type="radio" id="feat1" name="feature" class="sr-only" checked>
        <input type="radio" id="feat2" name="feature" class="sr-only">
        <input type="radio" id="feat3" name="feature" class="sr-only">

        <div class="grid-container">
            <!-- Coluna Esquerda -->
            <aside class="column" aria-label="Funcionalidade de resistência">
                <label for="feat1" class="feature-card" role="radio" aria-checked="true" tabindex="0">
                    <article>
                        <h2>DESIGN E BELEZA</h2>
                        <p>Possui conjunto de tampas com design elegante e molduras em plástico ABS com linhas harmônicas e modernas. 
                          Os puxadores são ergonômicos para facilitar o encaixe das mãos e a abertura das tampas.</p>
                    </article>
                </label>
            </aside>

            <!-- Coluna Central: Imagens (Picture) e Card 2 -->
            <section class="image-display" aria-label="Imagem ilustrativa da funcionalidade selecionada">
                <div class="circle-frame" aria-live="polite" aria-label="Imagem da funcionalidade selecionada">
                    
                    <!-- IMAGEM 1 RESPONSIVA -->
                    <picture class="img1">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-detalhe-puxador-ergonomico-2219397-03.jpg" 
                        alt="Detalhe do puxador ergonômico e tampa de vidro do expositor MetalFrio NF55S com congelados.">
                    </picture>

                    <!-- IMAGEM 2 RESPONSIVA -->
                    <picture class="img2">
                       <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-grade-ventilacao-rodizios-2219397-04.jpg" 
                        alt="Visão lateral do freezer MetalFrio NF55S mostrando grade de ventilação, cabo e rodízios.">
                    </picture>

                    <!-- IMAGEM 3 RESPONSIVA -->
                    <picture class="img3">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-interior-tampa-vidro-congelados-2219397-05.jpg" 
                        alt="Vista superior do freezer MetalFrio através da tampa de vidro com caixas de alimentos.">
                    </picture>

                </div>

                <label for="feat2" class="feature-card" role="radio" style="width: 90%;" aria-checked="false" tabindex="0">
                    <article>
                        <h2>DESEMPENHO PROFISSIONAL</h2>
                        <p>Novo sistema de refrigeração garante mais eficiência energética e alta capacidade 
                          de conservação para manter sorvetes e alimentos congelados na temperatura ideal de consumo..</p>
                    </article>
                </label>
            </section>

            <!-- Coluna Direita -->
            <aside class="column" aria-label="Funcionalidade de troca de disco">
                <label for="feat3" class="feature-card" role="radio" aria-checked="false" tabindex="0">
                    <article>
                        <h2>EXCELENTE EXPOSIÇÃO</h2>
                        <p>A nova altura do gabinete proporciona perfeita visualização e acesso aos produtos. O interior em aço 
                          pré-pintado branco, além de ser uma proteção extra contra corrosão, destaca as cores dos produtos no 
                          interior de seu NF55 Supra.</p>
                    </article>
                </label>
            </aside>
        </div>
    </div>
</section>


        <section class="section-32__container" aria-label="Vídeo demonstrativo e galeria de características">
        <figure class="section-32__groupimage-section" aria-label="Vídeo demonstrativo do produto">
       <div class="youtube-video-container" style="border-radius: 30px 30px 0px 0px;">
          <iframe class="youtube-video" width="1600" height="865"
            src="https://www.youtube.com/embed/wHkyxdJda7I?si=4WFaCzIloCLVFxTB"
            title="Vídeo demonstrativo da Esmerilhadeira Angular Black & Decker G720XBR" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </figure>

      <figure class="section-32__groupimage-section">
      <picture>
             <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-lifestyle-supermercado-sorvetes-2219397-06.jpg"
        alt="Expositor MetalFrio NF55S branco cheio de sorvetes em ambiente de supermercado com clientes. " 
        style="border-radius: 0px 0px 0px 0px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 80%; left: 70%;">
        <h2><strong>GASTA MUITA ENERGIA?</strong></h2>
        <p>Não! É o modelo mais económico da categoria, utiliza gás ecológico e garante máxima eficiência energética diária.
        </p>
      </figcaption>
      </figure>
      

      <figure class="section-32__groupimage-section">
      <picture>
        <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/freezer-horizontal-metalfrio-nf55s-supra-fundo-piso-supermercado-azul-2219397-07.jpg"
        alt="Piso de supermercado com filtro azul e floco de neve para ambientação de produto MetalFrio." 
        style="border-radius: 0px 0px 30px 30px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
        
  <!-- Camada com gradiente de fade -->

   <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
              background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.550) 37%, rgba(0, 0, 0, 0.897) 100%); 
              z-index: 5; border-radius: 0px 0px 30px 30px; pointer-events: none;" aria-hidden="true"></div>

              <!-- FAQ -->

       <section class="faq-section" aria-labelledby="faq-section-title">
           
    <div class="faq-section__header">
      <h2 class="faq-section__title" id="faq-section-title">Resolva suas dúvidas</h2>
      <p class="faq-section__subtitle">Saiba o porquê do produto ser a melhor escolha baseado em perguntas do público</p>
    </div>
    <ul class="faq-section__list" style="overflow: hidden;" role="list">
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">1. Possui boa eficiência de refrigeração para comércio?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Sim. O Freezer Metalfrio NF55S Supra conta com um novo sistema de refrigeração de alta capacidade. Esse motor é o 
            mais econômico da categoria, mantendo a temperatura ideal de consumo e reduzindo custos operacionais.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">2. Quais são os materiais e a tecnologia de congelamento do expositor?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           O Freezer Metalfrio NF55S Supra emprega gás ecológico e molduras em plástico ABS. O seu gabinete interno é construído 
           em aço pré-pintado branco. A composição sustentável e robusta garante eficiência e um design moderno.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details> 
          <summary>
            <h3 class="faq-section__q-text">3. É seguro e fácil para os clientes acessarem os produtos congelados?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Sim. O Freezer Metalfrio NF55S Supra apresenta uma nova altura de gabinete e puxadores ergonômicos nas tampas. 
            Essa estrutura inteligente facilita o encaixe das mãos, garantindo uma abertura segura e confortável diária.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">4. Qual é a capacidade de armazenamento em litros e o tamanho do modelo?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              O Freezer Metalfrio NF55S Supra comporta 405 litros líquidos e 505 litros brutos. Externamente, ele mede 850 mm 
              de altura por 1700 mm de largura. O amplo espaço de armazenagem organiza grandes estoques com confiabilidade.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">5. A estrutura do expositor comercial possui boa resistência à corrosão?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           Sim. O Freezer Metalfrio NF55S Supra traz interior em aço pré-pintado que funciona como proteção extra contra corrosão. 
           O gabinete resiste à rotina do congelamento, prolongando a vida útil do equipamento no seu comércio.
            </p>
          </div>
        </details>
      </li>
    </ul>
      </section>
    </figure>
    </section>

    <footer aria-label="Informações legais">
           <p class="p__end">
          <strong>Imagens Meramente Ilustrativas</strong>
          </p>
        </footer>

        </article>

        </div>
`,
      css:  ``,
    },

    /*@@@@Col - prod-header-1bs-feat-3bs-faq-emb-manual */
    {
      id:   'prod-header-1bs-feat-3bs-faq-emb-manual',
      name: 'prod-header-1bs-feat-3bs-faq-emb-manual',
      html: `    <div class="lp-container">
<style>
* {
  margin: 0;
  padding: 0;
}

video-header,
  .video-header * {
    box-sizing: border-box;
    margin: 0;
  }

  .video-header {
    --badge-size: 8rem;
    --banner-height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    font-family: sans-serif;
    container-type: inline-size;
  }

  .video-header__banner {
    width: 100%;
    height: var(--banner-height);
    position: relative;
    display: flex;
    justify-content: center;
  }

  .video-header__banner-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  .video-header__badge {
    position: absolute;
    bottom: calc(var(--badge-size) / -2);
    width: var(--badge-size);
    height: var(--badge-size);
    background-color: #ff9900;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 10;
  }

  .video-header__badge-img {
    max-width: 90px;
    max-height: 90px;
    object-fit: contain;
  }

  .video-header__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: calc(var(--badge-size) / 2 + 1.1rem) 0.3rem 2.5rem;
    text-align: center;
  }

  .video-header__brand {
    color: #ff9900;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .video-header__title {
    color: #000;
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    line-height: clamp(1.6rem, 4vw, 3.1rem);
    font-weight: 600;
    max-width: 50rem;
    text-wrap: pretty;
  }

  .video-header__subtitle {
    color: #8a8a8a;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 120%;
    margin-top: 1rem;
    max-width: 52rem;
    text-wrap: pretty;
  }

.section-32__container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  border: 5.5px solid #000;
  border-radius: 36px;
}

.section-32__groupimage-section {
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0;
  contain: layout style;
}

.section-32__groupimage-section:has(.faq-section) {
  z-index: 0;
}

.section-32__grouptext-overlay {
  z-index: 20;
}

.grouptext-overlay-Background {
  z-index: 20;
}

.section-32__groupimage-section img {
  width: 100%;
  height: auto;
  display: inline-block;
  min-width: 100%;
}

.section-32__grouptext-overlay {
  color: #fff;
  position: absolute;
  max-width: 50%;
  width: 90%;
  line-height: 2rem;
  text-align: center;
  font-family: sans-serif;
}

.section-32__grouptext-overlay.left {
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  max-width: 45%;
}

.section-32__grouptext-overlay h2 {
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 1.5px;
  line-height: 120%;
}

.section-32__grouptext-overlay p {
  font-size: 1.2vw;
  margin: 0;
  line-height: 120%;
}

.grouptext-overlay-Background {
  background: rgba(0, 0, 0, 0.438);
  border-radius: 2.8vw;
  padding: 0.5rem;
  backdrop-filter: blur(0.5vw);
  -webkit-backdrop-filter: blur(0.5vw);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 70%;
  z-index: 100;
}

.features-section {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 40px;
  padding: 60px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 15px;
  font-weight: 600;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 30px;
  align-items: center;
}

.column,
.image-display {
  display: flex;
  flex-direction: column;
}

.column {
  gap: 30px;
}

.image-display {
  align-items: center;
  gap: 40px;
}

.circle-frame {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 780 / 740;
  border-radius: 50%;
  border: 5px solid #000000;
  overflow: hidden;
  position: relative;
  background: #eee;
  box-shadow: 0 05px 10px #000000;
}

.circle-frame picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.circle-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card {
  display: block;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  box-shadow: 0 05px 10px #000000;
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #1d2637;
  font-weight: 550;
  line-height: 2.2vh;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.feature-card:hover,
.feature-card:focus-visible {
  background-color: #f9fbff;
  transform: translateY(-8px);
  box-shadow: 0 10px 15px #000000;
}

.feature-card:focus-visible {
  outline: 3px solid #000000;
  outline-offset: 5px;
}

#feat1:checked ~ .grid-container .img1,
#feat2:checked ~ .grid-container .img2,
#feat3:checked ~ .grid-container .img3 {
  opacity: 1;
  z-index: 2;
}

#feat1:checked ~ .grid-container label[for="feat1"],
#feat2:checked ~ .grid-container label[for="feat2"],
#feat3:checked ~ .grid-container label[for="feat3"] {
  border-color: #000000;
  background-color: #f9fbff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.faq-section {
  width: 100%;
  padding: 0 16px 2rem;
  box-sizing: border-box;
  margin: 0 auto 25px;
  font-family: sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  right: 5%;
  background: rgba(255, 255, 255, 0.014);
  border-radius: 40px;
  max-width: 75%;
  z-index: 10;
  border: 1px solid #fff;
  max-height: 55vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.faq-section__header {
  text-align: center;
  margin-bottom: 2rem;
}

.faq-section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 6vw;
}

.faq-section__subtitle {
  font-size: 1rem;
  color: #fff;
  margin: 0;
}

.faq-section__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 56rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.faq-section__item {
  background: #ffffff05;
  border: 1px solid #fff;
  border-radius: 12px;
  overflow: hidden;
}

.faq-section__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
}

.faq-section__item summary::-webkit-details-marker {
  display: none;
}

.faq-section__item summary:hover {
  background: #f9f9f92f;
}

.faq-section__q-text {
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  flex: 1;
}

.faq-section__q-text:hover {
  color: #e8ff5e;
}

.faq-section__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
}

.faq-section__icon::before,
.faq-section__icon::after {
  content: "";
  position: absolute;
  background: #888;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.faq-section__icon::before {
  width: 12px;
  height: 1.5px;
  top: 9px;
  left: 4px;
}

.faq-section__icon::after {
  width: 1.5px;
  height: 12px;
  top: 4px;
  left: 9px;
}

.faq-section__item details[open] .faq-section__icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.faq-section__a-inner {
  padding: 14px 20px 16px;
  border-top: 1px solid #e5e5e5;
}

.faq-section__a-text {
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
}

.faq-section::-webkit-scrollbar {
  width: 8px;
}

.faq-section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.faq-section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.p__end {
  color: #8a8a8a;
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-wrap: pretty;
  text-align: center;
  padding: 40px 0;
}

 .section-4-manual__container {
    width: 100%;
    margin: 0 auto;
    height: auto;
  }

  .section-4-manual__figura {
    margin: 0;
  }

  .section-4-manual__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
  }

  .section-4-manual__imagem {
    border-radius: 0.25rem;
    height: auto;
    object-fit: cover;
    width: 100%;
  }

  .section-4-manual__legenda {
    font-family: Arial, sans-serif;
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.25rem;
    text-align: center;
  }

  .section-4-manual__link:focus-visible {
  outline: 3px solid #ff9900;
  outline-offset: 4px;
  border-radius: 0.25rem;
}


@media (prefers-contrast: more) {
   .p__end,
  .video-header__subtitle {
    color: #000;
  }

  .grouptext-overlay-Background {
    background: #000;
  }

  .video-header__brand {
    color: #3a2301;
  }

  .faq-section__a-text {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }

}

@media (max-width: 1060px) {
  .faq-section {
    top: 10%;
    max-width: 90%;
    max-height: 80%;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .image-display {
    grid-row: 1;
  }

  .circle-frame {
    max-width: 320px;
  }

  .column {
    order: 2;
  }
}

@media (max-width: 960px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.1vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 1.5vw;
  }
}

@media (max-width: 768px) {
  .section-32__grouptext-overlay h2 {
    font-size: 2.5vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2vw;
  }

  .video-header {
    --banner-height: 180px;
  }

  .faq-section__header {
    margin-bottom: 1rem;
  }

  .faq-section__a-text {
    font-size: 0.7rem !important;
  }

  .faq-section__title {
    font-size: 1rem !important;
  }

  .faq-section__subtitle,
  .faq-section__q-text {
    font-size: 0.75rem !important;
  }
}

  @media (min-width: 820px) {

    .section-4-manual__container,
    .section-4-manual__figura,
    .section-4-manual__imagem {
      height: 250px;
    }
  }

 @media (max-width: 600px) {


        .table-container-custom {

      padding: 10px;
    }

    .table-text-custom,
    .table-th-custom,
    .table-td-custom {

      padding: 8px;
    }
    }

@media (max-width: 500px) {
  .section-32__grouptext-overlay h2 {
    font-size: 3vw;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.3vw;
  }

  .section-32__grouptext-overlay {
    max-width: 50%;
  }
}

@media (max-width: 470px) {
  .video-header__subtitle {
    text-align: justify;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
    font-weight: 550;
  }

  .section-32__grouptext-overlay p {
    font-size: 2.4vw;
  }

  .faq-section {
    max-height: 180px !important;
    padding: 0.5rem 8px !important;
    top: 5% !important;
    max-width: 90%;
    border-radius: 20px;
  }
}

@media (max-width: 375px) {
  .section-32__grouptext-overlay p {
    font-size: 2.8vw;
  }
}
</style>
  <article style="width: 100%;" aria-labelledby="video-main-title">
  <section class="video-header" aria-label="Cabeçalho do produto">
    <header class="video-header__banner">
      <video class="video-header__banner-video"
        poster="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/poster-philco-logo-na-frente-de-fundo-tecnologico-escuro-com-luz-azul.jpg"
        preload="none" autoplay muted loop playsinline width="1200" height="250" aria-hidden="true">
        <source src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/philco/header-philco.mov">
      </video>
      <div class="video-header__badge" role="img" aria-label="Logo da marca philco dentro de um círculo laranja">
        <img
          src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/philco/logo-philco.png"
          alt=""
          class="video-header__badge-img">
      </div>
    </header>

    <section class="video-header__body" aria-label="Título e descrição do produto">
      <small class="video-header__brand">philco</small>

      <h2 class="video-header__title" id="video-main-title">
        CERVEJEIRA 96L PCV09A 3 EM 1 PRETO
      </h2>
      <p class="video-header__subtitle">
        Bebidas sempre no ponto ideal: cervejeira Philco 96L 3 em 1, com função cervejeira, 
        frigobar e adega, design moderno e refrigeração eficiente para qualquer ocasião.
      </p>
    </section>
  </section>


      <section class="section-32__container" aria-label="Destaque visual do produto">
      <figure class="section-32__groupimage-section">
       <picture>
         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-preta-cozinha-2224721-02.jpg"
        alt="Cervejeira Philco PCV09A 96L 3 em 1 preta em cozinha com bebidas internas" 
        style="border-radius: 30px;" width="1600" height="865"
        loading="eager" decoding="async" fetchpriority="high">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 50%; left: 75%; max-width: 40%;">
        <h2><strong>O QUE ELA FAZ?</strong></h2>
        <p>A PCV09A funciona como cervejeira, adega e frigobar, adaptando o espaço interno para bebidas, alimentos e diferentes ocasiões.
        </p>
      </figcaption>
      </figure>
       </section>

       <section class="features-section" style="background-image: url(https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-branco-garrafas-verdes-2224721-bg.jpg);">
    <div class="section-header" aria-labelledby="main-title">
        <h2 id="main-title">TUDO O QUE VOCÊ PROCURA</h2>
    </div>

    <!-- Inputs de rádio agrupados para acessibilidade -->
    <div role="radiogroup" aria-label="Escolha uma característica para visualizar">
        <input type="radio" id="feat1" name="feature" class="sr-only" checked>
        <input type="radio" id="feat2" name="feature" class="sr-only">
        <input type="radio" id="feat3" name="feature" class="sr-only">

        <div class="grid-container">
            <!-- Coluna Esquerda -->
            <aside class="column" aria-label="Fala sobre medidas diversas disponíveis para o produto">
                <label for="feat1" class="feature-card" role="radio" aria-checked="true" tabindex="0">
                    <article>
                        <h2>84 LATAS GELADAS?</h2>
                        <p> A capacidade comporta até 84 latas, 48 long necks ou 4 barris, com 96L brutos e 82L líquidos.</p>
                    </article>
                </label>
            </aside>

            <!-- Coluna Central: Imagens (Picture) e Card 2 -->
            <section class="image-display" aria-label="Imagem ilustrativa da funcionalidade selecionada">
                <div class="circle-frame" aria-live="polite" aria-label="Imagem da funcionalidade selecionada">
                    
                    <!-- IMAGEM 1 RESPONSIVA -->
                    <picture class="img1">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-interior-bebidas-2224721-03.jpg" 
                        alt="Interior da Cervejeira Philco PCV09A 96L com latas e long necks organizadas">
                    </picture>

                    <!-- IMAGEM 2 RESPONSIVA -->
                    <picture class="img2">
                       <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-display-digital-ventilacao-2224721-04.jpg" 
                        alt="Display digital da Cervejeira Philco PCV09A com temperatura -2 e ventilação interna">
                    </picture>

                    <!-- IMAGEM 3 RESPONSIVA -->
                    <picture class="img3">
                        <source media="(max-width: 320px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=492x">
                        <source media="(max-width: 375px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=301x">
                        <source media="(min-width: 400px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=318x">
                        <source media="(max-width: 1024px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=318x">
                        <source media="(max-width: 1280px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=400x">
                        <source media="(min-width: 1440px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg?ims=400x">
                        <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-preta-porta-vidro-2224721-05.jpg" 
                        alt="Cervejeira Philco PCV09A preta com porta de vidro e prateleiras internas">
                    </picture>

                </div>

                <label for="feat2" class="feature-card" role="radio" style="width: 90%;" aria-checked="false" tabindex="0">
                    <article>
                        <h2>GELA POR IGUAL?</h2>
                        <p>A ventilação interna distribui a temperatura pelo interior, enquanto o compressor entrega maior capacidade de refrigeração.</p>
                    </article>
                </label>
            </section>

            <!-- Coluna Direita -->
            <aside class="column" aria-label="Explicação da característica autobrocante do parafuso">
                <label for="feat3" class="feature-card" role="radio" aria-checked="false" tabindex="0">
                    <article>
                        <h2>VALE PARA CASA?</h2>
                        <p>Sim. A Philco PCV09A combina 96L, visual preto, porta de vidro e organização para bebidas em ambientes sociais.</p>
                    </article>
                </label>
            </aside>
        </div>
    </div>
</section>


        <section class="section-32__container" aria-label="Galeria de características">
        <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-3-em-1-ambiente-bar-2224721-06.jpg"
        alt="Cervejeira Philco PCV09A 96L em ambiente de bar com parede de tijolos  " 
        style="border-radius: 30px 30px 0 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 60%; left: 25%; max-width: 35%;">
        <h2><strong>VIDRO TRIPLO ANTISSUDAÇÃO</strong></h2>
        <p>Sim. A porta de vidro triplo permite visualizar o interior, enquanto o sistema antissudação ajuda a reduzir umidade.
        </p>
      </figcaption>
      </figure>

       <figure class="section-32__groupimage-section">
       <picture>

         <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg?ims=1238x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-prateleiras-bebidas-ambiente-bar-2224721-07.jpg"
        alt="Cervejeira Philco PCV09A com garrafas e latas em prateleiras iluminadas" 
        style="border-radius: 0;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
      <figcaption class="section-32__grouptext-overlay left grouptext-overlay-Background" style="top: 55%; left: 40%; max-width: 33%;">
        <h2><strong>PCV09A 110V OU 220V</strong></h2>
        <p>A PCV09A tem versões 110V e 220V. Escolha a voltagem compatível com a tomada do local de instalação.
        </p>
      </figcaption>
      </figure>
      
      <figure class="section-32__groupimage-section">
      <picture>
        <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg?ims=1024x">
      
              <source media="(max-width: 1280px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg?ims=1280x">
      
              <source media="(max-width: 1440px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg?ims=1440x">

              <source media="(min-width: 1441px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg">

       <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cervejeira-philco-pcv09a-96l-fundo-escuro-piso-ambiente-2224721-08.jpg"
        alt="Fundo escuro Philco PCV09A com piso e ambiente de bar em baixa luz" 
        style="border-radius: 0px 0px 30px 30px;" width="1600" height="865"
        loading="lazy" decoding="async" fetchpriority="low">
        </picture>
        
  <!-- Camada com gradiente de fade -->

   <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
              background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.550) 37%, rgba(0, 0, 0, 0.897) 100%); 
              z-index: 5; border-radius: 0px 0px 30px 30px; pointer-events: none;" aria-hidden="true"></div>

              <!-- FAQ -->

       <section class="faq-section" aria-labelledby="faq-section-title">
           
    <div class="faq-section__header">
      <h2 class="faq-section__title" id="faq-section-title">Resolva suas dúvidas</h2>
      <p class="faq-section__subtitle">Saiba o porquê do produto ser a melhor escolha baseado em perguntas do público</p>
    </div>
    <ul class="faq-section__list" style="overflow: hidden;" role="list">
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">1. Para que serve a Cervejeira Philco 96L 3 em 1 PCV09A Preto?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            A Cervejeira Philco 96L 3 em 1 PCV09A Preto serve como cervejeira, frigobar e adega em um só produto.
            Ela é indicada para armazenar latas, long necks, barris, bebidas e alimentos, conforme a necessidade de uso.
            Essa versatilidade facilita a organização em diferentes ocasiões e ambientes.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">2. A Cervejeira Philco PCV09A tem bom desempenho de refrigeração?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
           Sim. A Cervejeira Philco 96L 3 em 1 PCV09A Preto conta com sistema de refrigeração por compressor.
            A ventilação interna distribui a temperatura de forma uniforme, e o display digital permite controle preciso sem abrir a porta.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details> 
          <summary>
            <h3 class="faq-section__q-text">3. A Cervejeira Philco PCV09A é adequada para evitar umidade na porta?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
            Sim. A Cervejeira Philco 96L 3 em 1 PCV09A Preto possui porta de vidro triplo com sistema antissudação.
            A ficha também informa resistência na porta, recurso que evita o acúmulo de umidade na parte interna.
            Isso favorece a estabilidade térmica e mantém a visualização do conteúdo mais prática.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">4. Como usar melhor a Cervejeira Philco PCV09A no dia a dia?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              A Cervejeira Philco 96L 3 em 1 PCV09A Preto permite ajustar a temperatura pelo display digital sem abrir a porta.
              A capacidade comporta até 84 latas, 48 long necks ou 4 barris, conforme as informações do fornecedor presentes na ficha.
              Com a organização interna e a iluminação em LED, o acesso às bebidas fica mais simples e funcional.
            </p>
          </div>
        </details>
      </li>
      <li class="faq-section__item">
        <details>
          <summary>
            <h3 class="faq-section__q-text">5. Quais são as características técnicas da Cervejeira Philco PCV09A?</h3>
            <span class="faq-section__icon" aria-hidden="true"></span>
          </summary>
          <div class="faq-section__a-inner">
            <p class="faq-section__a-text">
              A Cervejeira Philco 96L 3 em 1 PCV09A Preto tem capacidade bruta de 96L e capacidade líquida de 82L.
              Ela aparece nas versões 110V, com EAN 7891356129827, e 220V, com EAN 7899963921469.
              Também possui iluminação interna em LED, degelo automático, pés frontais niveladores e cordão de 1800 mm.
            </p>
          </div>
        </details>
      </li>
    </ul>
      </section>
    </figure>
    </section>

  <footer aria-label="Informações complementares">
           <p class="p__end">
          <strong>Imagens Meramente Ilustrativas</strong>
          </p>

          <section class="section-4-manual__container" aria-label="Manual de Instruções da cervejeira">
  <figure class="section-4-manual__figura" >
    <a href="https://static1.efacil.com.br/wcsstore/AuroraStorefrontAssetStore/PDP/philco/2224721-manual.pdf"
      target="_blank" rel="noopener noreferrer" aria-label="Abrir manual de instruções do produto em PDF em nova aba"
      class="section-4-manual__link">
      <picture style="width:100%; height:100%; margin:0;">
             <source media="(max-width: 430px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/manual-banner.jpg?ims=430x">
      
              <source media="(max-width: 768px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/manual-banner.jpg?ims=768x">

              <source media="(max-width: 1024px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/manual-banner.jpg?ims=1024x">
      
              <source media="(max-width: 1200px)" 
              srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/manual-banner.jpg?ims=1200x">
      <img
        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/manual-verde-philco-preto.jpg"
        class="section-4-manual__imagem" width="1200" height="250" loading="lazy" decoding="async" fetchpriority="low"  alt=""/>
        
    </picture>
    </a>
  </figure>
</section>
        </footer>
    </article>

        </div>
`,
      css:  ``,
    },

  ]
});
