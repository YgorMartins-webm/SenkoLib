// @ts-nocheck
ColLib.registerCollectionLayout('maicon-colecoes',
{
  id: 'padrao-4',
  name: 'padrão 4',
  html: `<div class="lp-container">
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->
    <link rel="stylesheet" href="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/style-faq-padrao.css">
    <link rel="stylesheet" href="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/style-html-padrao.css">
    <link rel="stylesheet" href="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/carrossel-maicon.css">
    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <article class="pdp" id="pdp" aria-label="Conteúdo rico do produto"> <!-- HTML fica dentro dessa div PDP -->



        <section class="video-header">
            <div class="video-header__banner">
                <video class="video-header__banner-video"
                    poster="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/header_redapple.webp"
                    preload="none" autoplay muted loop playsinline width="1200" height="250">
                    <source src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/header-redapple.webm">
                </video>
                <div class="video-header__badge">
                    <img class="video-header__badge-img"
                        src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/redapple/redapple-logo.png"
                        alt="Logo da marca Red Apple">
                </div>
            </div>
            <div class="video-header__body">
                <small class="video-header__brand">Red Apple</small>
                <h2 class="video-header__title">
                    Desodorante Antitranspirante em Creme Unissex 55 g
                </h2>
                <p class="video-header__subtitle">
                    Proteção contra o suor e os odores da transpiração para a rotina diária.
                </p>
            </div>
        </section>

        <!-- fecha esse article lá no final do código, depois de todo conteúdo, e antes do fechamento da div.lp-container -->

        <section class="ll-carousel"
            aria-label="Diferenciais do Desodorante Antitranspirante Red Apple em Creme Unissex 55 g">
            <div class="ll-carousel__container">
                <div class="ll-carousel__intro">
                    <p class="ll-carousel__eyebrow"></p>
                    <h2 class="ll-carousel__title"></h2>
                    <p class="ll-carousel__lead"></p>
                </div>

                <input class="ll-carousel__control ll-carousel__control--1" type="radio" name="ll-carousel-active"
                    id="ll-carousel-slide-1" checked="">
                <input class="ll-carousel__control ll-carousel__control--2" type="radio" name="ll-carousel-active"
                    id="ll-carousel-slide-2">

                <div class="ll-carousel__viewport">
                    <div class="ll-carousel__indicators">
                        <span class="ll-carousel__indicator ll-carousel__indicator--1"></span>
                        <span class="ll-carousel__indicator ll-carousel__indicator--2"></span>
                    </div>
                    <label class="ll-carousel__side-hint ll-carousel__side-hint--prev ll-carousel__side-hint--1"
                        for="ll-carousel-slide-2" role="button" aria-label="Voltar para o slide 2">Anterior</label>
                    <label class="ll-carousel__side-hint ll-carousel__side-hint--next ll-carousel__side-hint--1"
                        for="ll-carousel-slide-2" role="button" aria-label="Avançar para o slide 2">Próximo</label>
                    <label class="ll-carousel__side-hint ll-carousel__side-hint--prev ll-carousel__side-hint--2"
                        for="ll-carousel-slide-1" role="button" aria-label="Voltar para o slide 1">Anterior</label>
                    <label class="ll-carousel__side-hint ll-carousel__side-hint--next ll-carousel__side-hint--2"
                        for="ll-carousel-slide-1" role="button" aria-label="Avançar para o slide 1">Próximo</label>
                    <div class="ll-carousel__track">
                        <div class="ll-carousel__panel ll-carousel__panel--1" id="ll-carousel-panel-1"
                            aria-label="Slide 1: Proteção por até 48 horas">
                            <section class="ll-carousel__layout ll-carousel__layout--media"
                                style="--ll-carousel-media-bg: #c82a57; background: #c82a57;"
                                aria-label="Proteção por até 48 horas">
                                <figure class="ll-carousel__figure">
                                    <div class="ll-carousel__picture">
                                        <img class="ll-carousel__image"
                                            src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/desodorante-antiperspirante-creme-red-apple-unissex-bisnaga-lifestyle-208366-01.webp"
                                            alt="Desodorante antiperspirante creme Red Apple unissex 55g bisnaga proteção seca 48h bancada"
                                            width="1800" height="1600" loading="lazy" decoding="async"
                                            style="object-position: 86% 50%;">
                                    </div>
                                    <figcaption class="ll-carousel__caption"
                                        style="--ll-carousel-caption-bg: rgba(0, 0, 0, 0.64); --ll-carousel-caption-text: #ffffff; --ll-carousel-caption-left: clamp(1.25rem, 5vw, 4.75rem); --ll-carousel-caption-right: auto; --ll-carousel-caption-translate-x: 0; --ll-carousel-caption-top: 50%; --ll-carousel-caption-bottom: auto; --ll-carousel-caption-translate-y: -50%; --ll-carousel-caption-left: 13%;">
                                        <h3>Proteção por até 48 horas</h3>
                                        <p>Ajuda a combater o suor e os odores da transpiração, proporcionando proteção
                                            prolongada para a rotina.
                                        </p>
                                    </figcaption>
                                </figure>
                            </section>
                        </div>

                        <div class="ll-carousel__panel ll-carousel__panel--2" id="ll-carousel-panel-2"
                            aria-label="Slide 2: Fórmula sem álcool">
                            <section class="ll-carousel__layout ll-carousel__layout--media"
                                style="--ll-carousel-media-bg: #c82a57; background: #c82a57;"
                                aria-label="Fórmula sem álcool">
                                <figure class="ll-carousel__figure">
                                    <div class="ll-carousel__picture">
                                        <img class="ll-carousel__image"
                                            src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/desodorante-antiperspirante-creme-red-apple-unissex-bisnaga-banheiro-208366-02.webp"
                                            alt="Desodorante antiperspirante em creme Red Apple unissex 55g 0% álcool ambiente banheiro"
                                            width="1800" height="1600" loading="lazy" decoding="async"
                                            style="object-position: 22% 50%;">
                                    </div>
                                    <figcaption class="ll-carousel__caption"
                                        style="--ll-carousel-caption-bg: rgba(0, 0, 0, 0.64); --ll-carousel-caption-text: #ffffff; --ll-carousel-caption-left: 52%;">
                                        <h3>Fórmula sem álcool</h3>
                                        <p>Sem álcool e sem corantes, é dermatologicamente testado e indicado para todos
                                            os tipos de pele.
                                        </p>
                                    </figcaption>
                                </figure>
                            </section>
                        </div>
                    </div>
                </div>

                <div class="ll-carousel__nav" style="grid-template-columns: repeat(2, minmax(0, 1fr));"
                    aria-label="Selecionar slide do carrossel">
                    <label class="ll-carousel__dot ll-carousel__dot--1" for="ll-carousel-slide-1" role="button"
                        aria-controls="ll-carousel-panel-1">
                        <span class="ll-carousel__dot-copy">
                            <span class="ll-carousel__dot-number">01</span>
                            <span class="ll-carousel__dot-text">Até 48 horas</span>
                        </span>
                        <span class="ll-carousel__dot-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-clock-fading-icon lucide-clock-fading">
                                <path d="M12 2a10 10 0 0 1 7.38 16.75" />
                                <path d="M12 6v6l4 2" />
                                <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
                                <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
                                <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
                                <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
                            </svg>
                        </span>
                    </label>

                    <label class="ll-carousel__dot ll-carousel__dot--2" for="ll-carousel-slide-2" role="button"
                        aria-controls="ll-carousel-panel-2">

                        <span class="ll-carousel__dot-copy">
                            <span class="ll-carousel__dot-number">02</span>
                            <span class="ll-carousel__dot-text">Sem álcool</span>
                        </span>

                        <span class="ll-carousel__dot-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-droplet-off-icon lucide-droplet-off">
                                <path
                                    d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
                                <path d="m2 2 20 20" />
                                <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
                            </svg>
                        </span>
                    </label>
                </div>
            </div>
        </section>

        <p style="color: #8a8a8a; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty;
            text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS
        </p>

        <!-- Área de FAQ -->

        <section id="faq-section" aria-labelledby="faq-section__title">
            <div id="faq-section__header">
                <h2 id="faq-section__title">Dúvidas Frequentes</h2>
            </div>
            <ul id="faq-section__list" role="list"> <!-- Cole aqui as perguntas e respostas -->
                <li id="faq-section__item">
                    <details id="faq-section__details">
                        <summary id="faq-section__summary">
                            <h3 id="faq-section__q-text"> Para que serve o Desodorante Red Apple Creme Unissex Bisnaga
                                55g? </h3>
                            <span id="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div id="faq-section__a-inner">
                            <p id="faq-section__a-text"> Oferece ação desodorante e antitranspirante, protegendo as
                                axilas contra suor, umidade e odores por até 48 horas. </p>
                        </div>
                    </details>
                </li>
                <!-------------------------->

                <!-- Cole aqui as perguntas e respostas -->
                <li id="faq-section__item">
                    <details id="faq-section__details">
                        <summary id="faq-section__summary">
                            <h3 id="faq-section__q-text"> Como aplicar o desodorante em creme corretamente? </h3>
                            <span id="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div id="faq-section__a-inner">
                            <p id="faq-section__a-text"> Deve ser aplicado somente nas axilas. É importante esperar o
                                creme secar antes de se vestir. </p>
                        </div>
                    </details>
                </li>
                <!-------------------------->

                <!-- Cole aqui as perguntas e respostas -->
                <li id="faq-section__item">
                    <details id="faq-section__details">
                        <summary id="faq-section__summary">
                            <h3 id="faq-section__q-text"> O produto pode ser usado por todos os tipos de pele? </h3>
                            <span id="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div id="faq-section__a-inner">
                            <p id="faq-section__a-text"> Sim. A fórmula suave é indicada para todos os tipos de pele,
                                inclusive as mais sensíveis. </p>
                        </div>
                    </details>
                </li>
                <!-------------------------->

                <!-- Cole aqui as perguntas e respostas -->
                <li id="faq-section__item">
                    <details id="faq-section__details">
                        <summary id="faq-section__summary">
                            <h3 id="faq-section__q-text"> Esse antitranspirante contém álcool etílico? </h3>
                            <span id="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div id="faq-section__a-inner">
                            <p id="faq-section__a-text"> Não. A fórmula possui 0% de álcool etílico, proporcionando um
                                cuidado mais suave durante o uso diário. </p>
                        </div>
                    </details>
                </li>
                <!-------------------------->

                <!-- Cole aqui as perguntas e respostas -->
                <li id="faq-section__item">
                    <details id="faq-section__details">
                        <summary id="faq-section__summary">
                            <h3 id="faq-section__q-text"> Qual é a textura do desodorante Red Apple? </h3>
                            <span id="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div id="faq-section__a-inner">
                            <p id="faq-section__a-text"> Possui textura em creme, com emulsão de alta viscosidade que
                                facilita a aplicação direta nas axilas. </p>
                        </div>
                    </details>
                </li>
                <!-------------------------->
            </ul>
        </section>
    </article>

</div>`,
  css: ``
}
);
