// @ts-nocheck
/* ═══════════════════════════════════════════════════════════════════════
   colecoes/data/carneiro-colecoes.js — Coleção: Ygor Coleções

   ATENÇÃO: Arquivo gerado pelo módulo GitHub do SenkoLib.
   NÃO edite manualmente em produção.
═══════════════════════════════════════════════════════════════════════ */
ColLib.register({
  slug:  'carneiro-colecoes',
  name:  'Ygor Coleções',
  group: 'ygor',
  tags:  ['Responsivo', 'adaptativos'],
  layouts: [
    /*@@@@Col - padrao1 */
    {
      id:   'padrao1',
      name: 'Padrão 1',
      html: `<div class="lp-container">
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap');

        * {
            padding: 0;
            margin: 0;
        }

        .pdp {
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif
        }

        .pdp * {
            box-sizing: border-box;
            margin: 0;
        }

        .pdp-text-gradient {
            background: linear-gradient(90deg, #c29869, #ddbc88, #e6c588);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            background-clip: text;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <title>PDP - eFácil</title>
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->

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

        .product-header__banner figure {
            width: 100%;
            height: 100%;
            margin: 0;
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
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-header__title {
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

        @media (max-width: 768px) {
            .product-header {
                --banner-height: 180px;
            }
        }

        @media (max-width: 470px) {
            .product-header__subtitle {
                text-align: justify;
                font-size: clamp(0.9rem, 2vw, 1.2rem);
            }
        }
    </style>

    <style>
        /* ===== HERO SECTION — VARIÁVEIS ===== */
        .section-6 {
            --pos-y: 50%;
            --pos-x: 9%;
            --color-title: #56ffd0;
            --bg-box: rgba(0, 0, 0, 0.33);

            width: 100%;
            position: relative;
            border-radius: 20px;
            overflow: hidden;
        }

        /* ===== IMAGEM ===== */
        .section-6__image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 20px;
        }

        /* ===== CONTEÚDO SOBREPOSTO ===== */
        .section-6__content {
            position: absolute;
            top: var(--pos-y);
            left: clamp(1%, var(--pos-x), 100%);
            transform: translateY(-50%);
            max-width: min(40%, 480px);
            z-index: 10;
            background-color: rgb(0 0 0 / 65%);
            padding: clamp(12px, 2vw, 20px);
            border-radius: 15px;
            backdrop-filter: blur(4px);
        }

        .section-6__title {
            font-size: clamp(1.4rem, 3.5vw, 2.6rem);
            color: var(--color-title);
            margin: 0 0 10px;
            line-height: 1.2;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
            font-weight: 800;
        }

        .section-6__description {
            font-size: clamp(0.95rem, 2vw, 1.4rem);
            color: #fff;
            margin: 0 0 24px;
            line-height: 1.5;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);
        }

        /* ===== MOBILE ===== */
        @media (max-width: 760px) {
            .section-6__ {
                border-radius: 0;
            }

            .section-6__content {
                position: static;
                transform: none;
                max-width: 100%;
                padding: 24px 20px 0 20px;
                background: transparent;
                backdrop-filter: none;
                text-align: center;
            }

            .section-6__title {
                font-size: 1.8rem;
                color: #333;
                text-align: left;
                text-shadow: none;
            }

            .section-6__description {
                margin-bottom: 0;
                font-size: 1.1rem;
                color: #555;
                text-align: left;
                text-shadow: none;
            }

            .section-6__image {
                width: 95%;
                margin: auto;
                height: auto;
                display: block;
                border-radius: 20px;
            }
        }

        @media (max-width: 480px) {
            .section-6__title {
                font-size: 1.5rem;
            }

            .section-6__description {
                font-size: 1rem;
            }
        }
    </style>

    <style>
        .pdp-row-product {
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            width: 100%
        }

        .tw-text-2xl {
            font-size: 32px;
            font-weight: 600;
            line-height: 40px
        }

        .pdp-product-title {
            --tw-text-opacity: 1;
            color: rgb(0 0 0/var(--tw-text-opacity));
            max-width: 56rem;
            text-align: center
        }

        .tw-text-lg {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px
        }

        .pdp-product-description {
            --tw-text-opacity: 1;
            color: rgb(138 138 138/var(--tw-text-opacity));
            font-size: 14px;
            line-height: 22px;
            margin-top: 1rem;
            max-width: 56rem;
            text-align: center
        }

        @media (min-width:576px) {
            .pdp-row-product {
                max-width: 576px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:768px) {
            .pdp-row-product {
                max-width: 768px
            }

            .tw-text-2xl {
                font-size: 32px;
            }

        }



        @media (min-width:992px) {
            .pdp-row-product {
                max-width: 992px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1200px) {
            .pdp-row-product {
                max-width: 1200px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1536px) {
            .pdp-row-product {
                max-width: 1536px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        .pdp-row-product {
            align-items: center;
            display: flex;
            gap: 1.5rem;
            justify-content: space-between;
            margin-bottom: 2rem;
            margin-top: 2rem
        }

        .reverse-row-product {
            flex-direction: row-reverse;
        }

        @media not all and (min-width:992px) {
            .pdp-row-product {
                flex-direction: column-reverse
            }
        }

        @media (min-width:992px) {
            .pdp-row-product {
                gap: 6rem
            }
        }

        .pdp-row-product-image {
            max-width: 30rem;
            object-fit: contain;
            width: 100%;
            border-radius: 20px;
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        @media (max-width:768px) {
            .pdp-row-product-image {
                width: 100%;
                aspect-ratio: 9 / 6;
                object-fit: cover;
            }
        }
    </style>

    <style>
        .section-11-container {
            padding-bottom: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (min-width: 576px) {
            .section-11-container {
                max-width: 576px;
                margin-inline: auto;
            }
        }

        @media (min-width: 768px) {
            .section-11-container {
                max-width: 768px;
            }
        }

        @media (min-width: 992px) {
            .section-11-container {
                max-width: 992px;
            }
        }

        @media (min-width: 1200px) {
            .section-11-container {
                max-width: 1200px;
            }
        }

        @media (min-width: 1536px) {
            .section-11-container {
                max-width: 1536px;
            }
        }

        .section-11__header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .section-11__title {
            font-size: 32px;
            font-weight: 900;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.25;
        }

        .section-11__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        @media (min-width: 768px) {
            .section-11__grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        @media (min-width: 992px) {
            .section-11__grid {
                grid-template-columns: repeat(5, minmax(0, 1fr));
            }
        }

        .section-11__item {
            background: #fff;
            border: 0.5px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
            transition: border-color 0.2s;
        }

        .section-11__item:hover {
            border-color: rgba(0, 0, 0, 0.22);
        }

        .section-11__figure {
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
        }

        .section-11__image {
            width: 4.6rem;
            height: auto;
            display: block;
        }

        .section-11__name {
            font-size: 0.9375rem;
            font-weight: 500;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.3;
        }

        .section-11__value {
            font-size: 0.875rem;
            color: #666;
            margin: 0;
            line-height: 1.4;
        }
    </style>

    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <div class="pdp" id="pdp"> <!-- HTML fica dentro dessa div PDP -->

        <section class="product-header" aria-label="Cabeçalho do produto">
            <header class="product-header__banner">
                <figure style="width:100%;height:100%;margin:0;">
                    <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2224438_header.jpg"
                        alt="Banner do produto" class="product-header__banner-img" loading="eager">
                </figure>

                <div class="product-header__badge" role="img" aria-label="Logo da marca">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/philips/logo-philips.png"
                        alt="imagem png com ícone da marca" class="product-header__badge-img">
                </div>
            </header>

            <article class="product-header__body">
                <small class="product-header__brand">philips</small>
                <h1 class="product-header__title">
                    Smart TV LCD LED 55" 4K <br>Ultra HD com Wi-Fi
                </h1>
                <p class="product-header__subtitle">
                    Eleve sua experiência visual com a Philips Ambilight é a Smart TV 4K que expande os limites da tela com um show de luzes imersivo, comando de voz inteligente e alta performance para filmes e games
                </p>
            </article>
        </section>

        <section class="section-6" aria-label="Destaque do produto com texto">
            <picture>
                <source media="(max-width: 760px)"
                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-55-polegadas-4k-uhd-ambilight-tecnologia-2224438-01-2.jpg"
                    width="780" height="400">
                <img class="section-6__image"
                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-ambilight-55pug8100-78-sala-estar-lifestyle-2224438-01-1.jpg"
                    alt="Smart TV Philips 55 polegadas 4K com tecnologia Ambilight projetando luzes coloridas na parede"
                    width="1600" height="650" loading="eager" fetchpriority="high" decoding="async">
            </picture>
            <div class="section-6__content">
                <h1 class="section-6__title">A realidade termina onde a sua tela começa</h1>
                <p class="section-6__description">Mergulhe em um universo onde cada cor respira e o som molda o espaço ao seu redo</p>
            </div>
        </section>

        <div class="pdp-row-product is-reverse">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Clareza Absoluta e Perfeição do 4K HDR10+
                </h3>
                <p class="pdp-product-description">
                    Mergulhe em imagens realistas com a precisão do Ultra HD e o contraste do HDR10+, transformando cada
                    detalhe em uma experiência de tirar o fôlego
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-55-polegadas-ambilight-4k-detalhe-moldura-2224438-02.jpg"
                alt="Detalhe Smart TV Philips 55 polegadas 4K Ambilight ressaltando cores vívidas e design sem bordas"
                class="pdp-row-product-image" />
        </div>

        <div class="pdp-row-product">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Agilidade e Inteligência no seu Entretenimento
                </h3>
                <p class="pdp-product-description">
                    Com uma interface intuitiva, o Titan OS elimina a perda de tempo com menus complicados. Seus
                    principais serviços de streaming, Netflix, Prime Video e YouTube, já aparecem organizados e prontos
                    para o uso, garantindo que você gaste menos tempo procurando e mais tempo assistindo ao que ama
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-aplicativos-netflix-prime-video-disney-2224438-03.jpg"
                alt="Eletricista com capacete branco e colete laranja em obra garantindo qualidade e segurança Corfio"
                class="pdp-row-product-image" />
        </div>

        <section class="section-11" aria-labelledby="section-11-title">
            <div class="section-11-container">
                <header class="section-11__header">
                    <h2 class="section-11__title" id="section-11-title">conectividade completa que <br>você não encontra
                        em
                        telas básicas</h2>
                </header>
                <ul class="section-11__grid" role="list">
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-icon-ajuste-brilho-tela-2224438-03-1.png"
                                alt="Ícone de sol representando ajuste de brilho e iluminação da Smart TV Philips"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Exclusividade Ambilight</h3>
                        <p class="section-11__value">Luzes que expandem a imagem além da tela e protegem sua visão</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-icon-conexao-wifi-dual-band-2224438-03-2.png"
                                alt="Ícone de Wi-Fi indicando conectividade Dual Band de alta velocidade da Smart TV Philips"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Conexão Apple e Alexa</h3>
                        <p class="section-11__value">Espelhamento via AirPlay e controle por voz integrados nativamente
                        </p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-icon-gaming-vrr-allm-gamebar-2224438-03-3.png"
                                alt="Ícone de controle de videogame representando recursos gamer VRR e ALLM da TV Philips"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">DNA Gamer</h3>
                        <p class="section-11__value">Tecnologias VRR e ALLM para jogos fluidos e sem atrasos de resposta
                        </p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-icon-processamento-rapido-quad-core-2224438-03-4.png"
                                alt="Ícone de cronômetro simbolizando rapidez e baixo tempo de resposta da Smart TV Philips"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Navegação Instantânea</h3>
                        <p class="section-11__value">Processador Quad Core e controle com 6 atalhos diretos para
                            streaming</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-dolby-atmos-som-surround-sala-2224438-04.png"
                                alt="Gráfico de ondas sonoras Dolby Atmos preenchendo sala com Smart TV Philips Série 8100"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Borda Infinita</h3>
                        <p class="section-11__value">Design minimalista que foca no que importa: a resolução 4K HDR
                            realista</p>
                    </li>
                </ul>
            </div>
        </section>

        <div class="pdp-row-product is-reverse">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Agilidade e Inteligência no seu Entretenimento
                </h3>
                <p class="pdp-product-description">
                    Com uma interface intuitiva, o Titan OS elimina a perda de tempo com menus complicados. Seus
                    principais serviços de streaming, Netflix, Prime Video e YouTube, já aparecem organizados e prontos
                    para o uso, garantindo que você gaste menos tempo procurando e mais tempo assistindo ao que ama
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-aplicativos-netflix-prime-video-disney-2224438-03.jpg"
                alt="Eletricista com capacete branco e colete laranja em obra garantindo qualidade e segurança Corfio"
                class="pdp-row-product-image" />
        </div>

        <div class="pdp-row-product ">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Performance Gamer de Próxima Geração
                </h3>
                <p class="pdp-product-description">
                    Eleve seu nível de jogo com HDMI 2.1 e VRR e ALLM para gráficos fluidos e sem atrasos, ativados
                    automaticamente assim que você liga seu console
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/smart-tv-philips-modo-gamer-rpg-baixa-latencia-2224438-05.jpg"
                alt="Eletricista com capacete branco e colete laranja em obra garantindo qualidade e segurança Corfio"
                class="pdp-row-product-image" />
        </div>

        <p
            style="color: #8a8a8a; font-family: sans-serif; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty; text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS</p>
    </div>
</div>`,
      css:  ``,
    },

    /*@@@@Col - modelo2 */
    {
      id:   'modelo2',
      name: 'Padrão 2',
      html: `<div class="lp-container">
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap');

        * {
            padding: 0;
            margin: 0;
        }

        .pdp {
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif
        }

        .pdp * {
            box-sizing: border-box;
            margin: 0;
        }

        .pdp-text-gradient {
            background: linear-gradient(90deg, #c29869, #ddbc88, #e6c588);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            background-clip: text;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <title>PDP - eFácil</title>
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->

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

        .product-header__banner figure {
            width: 100%;
            height: 100%;
            margin: 0;
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
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-header__title {
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

        @media (max-width: 768px) {
            .product-header {
                --banner-height: 180px;
            }
        }

        @media (max-width: 470px) {
            .product-header__subtitle {
                text-align: justify;
                font-size: clamp(0.9rem, 2vw, 1.2rem);
            }
        }
    </style>

    <style>
        /* ===== HERO SECTION — VARIÁVEIS ===== */
        .section-6 {
            --pos-y: 50%;
            --pos-x: 7%;
            --color-title: #ffe178;
            --bg-box: rgba(0, 0, 0, 0.33);

            width: 100%;
            position: relative;
            border-radius: 20px;
            overflow: hidden;
        }

        /* ===== IMAGEM ===== */
        .section-6__image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 20px;
        }

        /* ===== CONTEÚDO SOBREPOSTO ===== */
        .section-6__content {
            position: absolute;
            top: var(--pos-y);
            left: clamp(1%, var(--pos-x), 100%);
            transform: translateY(-50%);
            max-width: min(40%, 480px);
            z-index: 10;
            background-color: var(--bg-box);
            padding: clamp(12px, 2vw, 20px);
            border-radius: 15px;
            backdrop-filter: blur(4px);
        }

        .section-6__title {
            font-size: clamp(1.4rem, 3.5vw, 2.6rem);
            color: var(--color-title);
            margin: 0 0 10px;
            line-height: 1.2;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
            font-weight: 800;
        }

        .section-6__description {
            font-size: clamp(0.95rem, 2vw, 1.4rem);
            color: #fff;
            margin: 0 0 24px;
            line-height: 1.5;
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);
        }

        /* ===== MOBILE ===== */
        @media (max-width: 760px) {
            .section-6__ {
                border-radius: 0;
            }

            .section-6__content {
                position: static;
                transform: none;
                max-width: 100%;
                padding: 24px 20px 0 20px;
                background: transparent;
                backdrop-filter: none;
                text-align: center;
            }

            .section-6__title {
                font-size: 1.8rem;
                color: #333;
                text-shadow: none;
            }

            .section-6__description {
                margin-bottom: 0;
                font-size: 1.1rem;
                color: #555;
                text-shadow: none;
            }

            .section-6__image {
                width: 95%;
                margin: auto;
                height: auto;
                display: block;
                border-radius: 20px;
            }
        }

        @media (max-width: 480px) {
            .section-6__title {
                font-size: 1.5rem;
            }

            .section-6__description {
                font-size: 1rem;
            }
        }
    </style>

    <style>
        .pdp-row-product {
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            width: 100%
        }

        .tw-text-2xl {
            font-size: 32px;
            font-weight: 600;
            line-height: 40px
        }

        .pdp-product-title {
            --tw-text-opacity: 1;
            color: rgb(0 0 0/var(--tw-text-opacity));
            max-width: 56rem;
            text-align: center
        }

        .tw-text-lg {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px
        }

        .pdp-product-description {
            --tw-text-opacity: 1;
            color: rgb(138 138 138/var(--tw-text-opacity));
            font-size: 14px;
            line-height: 22px;
            margin-top: 1rem;
            max-width: 56rem;
            text-align: center
        }

        @media (min-width:576px) {
            .pdp-row-product {
                max-width: 576px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:768px) {
            .pdp-row-product {
                max-width: 768px
            }

            .tw-text-2xl {
                font-size: 32px;
            }

        }



        @media (min-width:992px) {
            .pdp-row-product {
                max-width: 992px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1200px) {
            .pdp-row-product {
                max-width: 1200px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1536px) {
            .pdp-row-product {
                max-width: 1536px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        .pdp-row-product {
            align-items: center;
            display: flex;
            gap: 1.5rem;
            justify-content: space-between;
            margin-bottom: 2rem;
            margin-top: 2rem
        }

        .reverse-row-product {
            flex-direction: row-reverse;
        }

        @media not all and (min-width:992px) {
            .pdp-row-product {
                flex-direction: column-reverse
            }
        }

        @media (min-width:992px) {
            .pdp-row-product {
                gap: 6rem
            }
        }

        .pdp-row-product-image {
            max-width: 30rem;
            object-fit: contain;
            width: 100%;
            border-radius: 20px;
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        @media (max-width:768px) {
            .pdp-row-product-image {
                width: 100%;
                aspect-ratio: 9 / 6;
                object-fit: cover;
            }
        }
    </style>

    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <div class="pdp" id="pdp"> <!-- HTML fica dentro dessa div PDP -->

        <section class="product-header" aria-label="Cabeçalho do produto">
            <header class="product-header__banner">
                <figure style="width:100%;height:100%;margin:0;">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/header.jpg"
                        alt="Banner do produto" class="product-header__banner-img" loading="eager">
                </figure>

                <div class="product-header__badge" role="img" aria-label="Logo da marca">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/logo.png"
                        alt="imagem png com ícone da marca" class="product-header__badge-img">
                </div>
            </header>

            <article class="product-header__body">
                <small class="product-header__brand">Marca</small>
                <h1 class="product-header__title">
                    TÍTULO DO PRODUTO GAMERE (Nome, modelo, diferencial...)
                </h1>
                <p class="product-header__subtitle">
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                </p>
            </article>
        </section>

        <section class="section-6" aria-label="Destaque do produto com texto">
            <picture>
                <source media="(max-width: 760px)"
                    srcset="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/section-49-2.png"
                    width="780" height="400">
                <img class="section-6__image"
                    src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/section-49-1.png"
                    alt="Caderno Funny Cat com estampa de gatinhos, capa colorida e espiral" width="1600" height="650"
                    loading="eager" fetchpriority="high" decoding="async">
            </picture>
            <div class="section-6__content">
                <h1 class="section-6__title">Caderno Funny Cat</h1>
                <p class="section-6__description">Organize seus estudos com fofura e estilo!</p>
            </div>
        </section>

        <div class="pdp-row-product">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    A garantia de que o que está por trás das paredes nunca será um problema
                </h3>
                <p class="pdp-product-description">
                    Ao escolher um condutor que une a máxima segurança contra incêndios, a eficiência energética para
                    seus equipamentos de alta potência e a flexibilidade necessária para uma instalação ágil, você
                    garante a proteção do seu patrimônio e a tranquilidade de saber que sua estrutura elétrica foi feita
                    para durar uma vida inteira, sem surpresas na conta de luz ou a necessidade de reformas precoces
                </p>
            </div>
            <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/sessao4.jpg"
                alt="Eletricista com capacete branco e colete laranja em obra garantindo qualidade e segurança Corfio"
                class="pdp-row-product-image" />
        </div>

        <p
            style="color: #8a8a8a; font-family: sans-serif; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty; text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS</p>
    </div>
</div>`,
      css:  ``,
    },

    /*@@@@Col - padrao3 */
    {
      id:   'padrao3',
      name: 'Padrão 3',
      html: `<div class="lp-container">
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap');

        * {
            padding: 0;
            margin: 0;
        }

        .pdp {
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif
        }

        .pdp * {
            box-sizing: border-box;
            margin: 0;
        }

        .pdp-text-gradient {
            background: linear-gradient(90deg, #c29869, #ddbc88, #e6c588);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            background-clip: text;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <title>PDP - eFácil</title>
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->

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

        .product-header__banner figure {
            width: 100%;
            height: 100%;
            margin: 0;
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
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-header__title {
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

        @media (max-width: 768px) {
            .product-header {
                --banner-height: 180px;
            }
        }

        @media (max-width: 470px) {
            .product-header__subtitle {
                text-align: justify;
                font-size: clamp(0.9rem, 2vw, 1.2rem);
            }
        }
    </style>


    <style>
        /* ===== HERO SECTION — VARIÁVEIS ===== */
        .section-6 {
            --pos-y: 50%;
            --pos-x: 7%;
            --color-title: #f16425;
            --bg-box: rgba(0, 0, 0, 0.103);

            width: 100%;
            position: relative;
            overflow: hidden;
        }

        /* ===== IMAGEM ===== */
        .section-6__image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 20px 20px 0 0;
        }

        /* ===== CONTEÚDO SOBREPOSTO ===== */
        .section-6__content {
            position: absolute;
            top: var(--pos-y);
            left: clamp(1%, var(--pos-x), 100%);
            transform: translateY(-50%);
            max-width: min(40%, 500px);
            z-index: 10;
            background-color: var(--bg-box);
            padding: clamp(12px, 2vw, 20px);
            backdrop-filter: blur(4px);
            border-radius: 20px;
        }

        .section-6__title {
            font-size: clamp(1.4rem, 4.5vw, 4rem);
            color: #ff7a3f;
            margin: 0 0 10px;
            line-height: 1.2;
            text-shadow: 2px 2px 6px rgb(0 0 0 / 12%);
            font-weight: 800;


        }

        .section-6__description {
            font-size: clamp(0.95rem, 3vw, 2.4rem);
            color: #fff;
            margin: 0 0 24px;
            line-height: 1.3;
            text-shadow: 1px 1px 4px rgb(0 0 0 / 18%);
            max-width: 90%;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 795px) {
            .section-6__ {
                border-radius: 0;
            }

            .section-6__content {
                position: static;
                transform: none;
                max-width: 100%;
                padding: 24px 20px;
                background: transparent;
                backdrop-filter: none;
                border-radius: 0;
                text-align: center;
                background-color: #f16425;
            }

            .section-6__title {
                font-size: 1.8rem;
                color: #f1f1f1;
                text-shadow: 0 0 2px rgba(129, 28, 3, 0.247);
            }

            .section-6__description {
                margin-bottom: 0;
                font-size: 1.1rem;
                color: #f1f1f1;
                text-shadow: 0 0 2px rgba(129, 28, 3, 0.247);
            }

            .section-6__image {
                width: 100%;
                margin: auto;
                height: auto;
                display: block;
            }
        }

        @media (max-width: 480px) {
            .section-6__title {
                font-size: 1.5rem;
            }

            .section-6__description {
                font-size: 1rem;
            }
        }
    </style>

    <style>
        /* ══════════════════════════════════════════
   CONTAINER
══════════════════════════════════════════ */
        .pdp-row-product-container {
            background-color: #f16425;
            padding: 1.5rem;
            width: 100%;
            box-sizing: border-box;
        }

        /* ══════════════════════════════════════════
   ROW PRODUCT — mobile-first (coluna)
══════════════════════════════════════════ */
        .pdp-row-product {
            display: flex;
            flex-direction: column-reverse;
            /* mobile: empilhado */
            gap: 1.25rem;
            margin: 0 auto;
            width: 100%;
            box-sizing: border-box;
        }

        /* ══════════════════════════════════════════
   IMAGEM
══════════════════════════════════════════ */
        .pdp-row-product__image-wrapper {
            width: 100%;
            flex-shrink: 0;
        }

        .pdp-row-product__image {
            margin: auto;
            border-radius: 16px;
            display: block;
            object-fit: cover;
            width: 100%;
            max-width: 530px;
            aspect-ratio: 16 / 9;
            /* mobile: panorâmica */
        }

        /* ══════════════════════════════════════════
   CONTEÚDO
══════════════════════════════════════════ */
        .pdp-row-product__content {
            display: flex;
            flex-direction: column;
            width: 95%;
            margin: auto;
            box-sizing: border-box;
        }

        /* ══════════════════════════════════════════
   TÍTULO + DESCRIÇÃO (dentro do content)
══════════════════════════════════════════ */
        .pdp-row-product__title {
            color: #f3f3f3;
            font-size: 32px;
            font-weight: 600;
            line-height: 40px;
            margin: 0 0 1rem;
            text-align: left;
        }

        .pdp-row-product__desc {
            color: #f3f3f3;
            font-size: 14px;
            line-height: 22px;
            margin: 0 0 1.5rem;
            text-align: left;
        }

        /* ══════════════════════════════════════════
   FEATURE LIST
══════════════════════════════════════════ */
        .pdp-feature-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;
            margin: 0;
            gap: 22px;
            padding: 0;
        }

        .pdp-feature-item {
            align-items: flex-start;
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
        }

        .pdp-feature-item__icon {
            border-radius: 8px;
            flex-shrink: 0;
            height: 44px;
            object-fit: contain;
            width: 44px;
        }

        .pdp-feature-item__body {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .pdp-feature-item__title {
            color: #f5f5f5;
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.35;
            margin: 0;
        }

        .pdp-feature-item__text {
            color: #f5f5f5;
            font-size: 0.8125rem;
            line-height: 1.55;
            margin: 0;
        }

        /* ══════════════════════════════════════════
   BREAKPOINT 480px
══════════════════════════════════════════ */
        @media (min-width: 480px) {
            .pdp-row-product-container {
                padding: 1.75rem;
            }

            .pdp-feature-item__title {
                font-size: 1.1rem;
            }
        }

        /* ══════════════════════════════════════════
   BREAKPOINT 768px
══════════════════════════════════════════ */
        @media (min-width: 768px) {
            .pdp-row-product-container {
                padding: 2rem;
            }

            .pdp-row-product {
                max-width: 768px;
            }

            .pdp-row-product__image {
                border-radius: 20px;
                aspect-ratio: 16 / 9;
            }
        }

        /* ══════════════════════════════════════════
   BREAKPOINT 760px — lado a lado
══════════════════════════════════════════ */
        @media (min-width: 760px) {
            .pdp-row-product {
                align-items: center;
                flex-direction: row;
                /* desktop: lado a lado */
                gap: 1.5rem;
                justify-content: center;
                max-width: 960px;
            }

            /* variação que inverte a ordem */
            .pdp-row-product--reverse {
                flex-direction: row-reverse;
            }

            .pdp-row-product__image-wrapper {
                flex: 0 0 48%;
                max-width: 48%;
            }

            .pdp-row-product__image {
                aspect-ratio: 4 / 3;
                /* desktop: mais quadrada */
                height: 100%;
                max-height: 420px;
            }

            .pdp-row-product__content {
                flex: 1 1 0;
                min-width: 0;
            }

            /* ícone à direita (variação desktop) */
            .pdp-feature-list--icon-right .pdp-feature-item {
                flex-direction: row-reverse;
            }

            .pdp-feature-list--icon-right .pdp-feature-item__body {
                align-items: flex-end;
            }

            .pdp-feature-list--icon-right .pdp-feature-item__title,
            .pdp-feature-list--icon-right .pdp-feature-item__text {
                text-align: right;
            }

            .pdp-feature-item__icon {
                height: 48px;
                width: 48px;
            }

            .pdp-feature-item__title {
                font-size: 1.2rem;
            }

            .pdp-feature-item__text {
                font-size: 0.875rem;
            }
        }

        /* ══════════════════════════════════════════
   BREAKPOINT 1060px
══════════════════════════════════════════ */
        @media (min-width: 1060px) {
            .pdp-row-product {
                max-width: 1060px;
                gap: 2rem;
            }

            .pdp-feature-list {
                gap: 1.25rem;
            }
        }

        /* ══════════════════════════════════════════
   BREAKPOINT 1280px
══════════════════════════════════════════ */
        @media (min-width: 1280px) {
            .pdp-row-product {
                max-width: 1280px;
                gap: 2.5rem;
            }

            .pdp-row-product__image-wrapper {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .pdp-row-product__image {
                max-height: 460px;
            }

            .pdp-feature-item__title {
                font-size: 1.3rem;
            }

            .pdp-feature-item__text {
                font-size: 0.9rem;
            }
        }

        /* ══════════════════════════════════════════
   UTILITÁRIO
══════════════════════════════════════════ */
        .is-reverse {
            flex-direction: row-reverse;
        }

        @media (max-width: 760px) {
            .is-reverse {
                flex-direction: column-reverse;
            }
        }

        .is-reverse-760 {
            flex-direction: row-reverse;
        }

        @media (max-width: 760px) {
            .is-reverse-760 {
                flex-direction: column;
            }
        }
    </style>

    <style>
        .section-9 {
            width: 100%;
            padding: 2rem 16px;
            box-sizing: border-box;
            margin: 0 auto 25px;
            padding-top: 0;
            font-family: sans-serif;
        }

        .section-9__header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .section-9__title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: bold;
            color: #333;
            margin: 0 0 12px;
            line-height: 98%;
        }

        .section-9__subtitle {
            font-size: 1rem;
            color: #666;
            margin: 0;
        }

        .section-9__list {
            list-style: none;
            margin: 0 auto;
            padding: 0;
            max-width: 56rem;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .section-9__item {
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            overflow: hidden;
        }

        .section-9__item summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 20px;
            cursor: pointer;
            list-style: none;
        }

        .section-9__item summary::-webkit-details-marker {
            display: none;
        }

        .section-9__item summary:hover {
            background: #f9f9f9;
        }

        .section-9__q-text {
            font-size: 1rem;
            font-weight: bold;
            color: #333;
            flex: 1;
        }

        .section-9__q-text:hover {
            color: #ea5b0c;
        }

        .section-9__icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            position: relative;
        }

        .section-9__icon::before,
        .section-9__icon::after {
            content: '';
            position: absolute;
            background: #888;
            border-radius: 2px;
            transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .section-9__icon::before {
            width: 12px;
            height: 1.5px;
            top: 9px;
            left: 4px;
        }

        .section-9__icon::after {
            width: 1.5px;
            height: 12px;
            top: 4px;
            left: 9px;
        }

        .section-9__item[open] .section-9__icon::after {
            transform: rotate(90deg);
            opacity: 0;
        }

        .section-9__a-inner {
            padding: 14px 20px 16px;
            border-top: 1px solid #e5e5e5;
        }

        .section-9__a-text {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 480px) {
            .section-9__q-text {
                font-size: 0.9rem;
            }
        }
    </style>

    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <div class="pdp" id="pdp"> <!-- HTML fica dentro dessa div PDP -->


        <section class="product-header" aria-label="Cabeçalho do produto">
            <header class="product-header__banner">
                <figure style="width:100%;height:100%;margin:0;">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/header.jpg"
                        alt="Banner do produto" class="product-header__banner-img" loading="eager">
                </figure>

                <div class="product-header__badge" role="img" aria-label="Logo da marca">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/logo.png"
                        alt="imagem png com ícone da marca" class="product-header__badge-img">
                </div>
            </header>

            <article class="product-header__body">
                <small class="product-header__brand">Marca</small>
                <h1 class="product-header__title">
                    TÍTULO DO PRODUTO GAMERE (Nome, modelo, diferencial...)
                </h1>
                <p class="product-header__subtitle">
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                </p>
            </article>
        </section>

        <section class="section-6" aria-label="Destaque do produto com texto">
            <picture>
                <source media="(max-width: 760px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_02-2.jpg"
                    width="780" height="400">
                <img class="section-6__image" src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_02-1.jpg"
                    alt="Caderno Funny Cat com estampa de gatinhos, capa colorida e espiral" width="1600" height="650"
                    loading="eager" fetchpriority="high" decoding="async">
            </picture>
            <div class="section-6__content">
                <h1 class="section-6__title">PRATICIDADE EM CADA GIRO</h1>
                <p class="section-6__description">Sucos, vitaminas e cremes perfeitos com lâminas de aço inox e função
                    pulsar</p>
            </div>
        </section>

        <div class="pdp-row-product-container">
            <div class="pdp-row-product is-reverse">
                <div class="pdp-row-product__content">
                    <ul class="pdp-feature-list" aria-label="Benefícios do produto">
                        <li class="pdp-feature-item">
                            <img class="pdp-feature-item__icon"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-2-2.png" alt="Ícone" />
                            <div class="pdp-feature-item__body">
                                <strong class="pdp-feature-item__title">Manhãs Sem Pausa</strong>
                                <p class="pdp-feature-item__text">Prepare vitaminas nutritivas em segundos e use a
                                    função autolimpeza para sair de casa sem deixar bagunça na pia</p>
                            </div>
                        </li>
                        <li class="pdp-feature-item">
                            <img class="pdp-feature-item__icon"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-2-3.png" alt="Ícone" />
                            <div class="pdp-feature-item__body">
                                <strong class="pdp-feature-item__title">Receitas de uma Só Vez</strong>
                                <p class="pdp-feature-item__text">A jarra de 2,1L permite cozinhar para a família
                                    inteira sem precisar bater os ingredientes em várias etapas</p>
                            </div>
                        </li>
                        <li class="pdp-feature-item">
                            <img class="pdp-feature-item__icon"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-2-1.png" alt="Ícone" />
                            <div class="pdp-feature-item__body">
                                <strong class="pdp-feature-item__title">Cozinha Sempre Organizada</strong>
                                <p class="pdp-feature-item__text">O sistema enrola-cabo e o design leve eliminam a briga
                                    com fios e facilitam o armazenamento após o uso</p>
                            </div>
                        </li>
                        <li class="pdp-feature-item">
                            <img class="pdp-feature-item__icon"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-2-4.png" alt="Ícone" />
                            <div class="pdp-feature-item__body">
                                <strong class="pdp-feature-item__title">Cuidado com o Bolso</strong>
                                <p class="pdp-feature-item__text">Durabilidade garantida por lâminas de aço inox e 1 ano
                                    de garantia, evitando gastos inesperados com trocas precoces</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="pdp-row-product__image-wrapper">
                    <picture>
                        <source media="(min-width: 960px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-1.jpg" />
                        <img class="pdp-row-product__image" src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_03-2.jpg"
                            alt="Eletricista com capacete branco e colete laranja em obra" />
                    </picture>
                </div>

            </div>
        </div>

        <div class="pdp-row-product-container" style="background-color: white;">
            <div class="pdp-row-product">
                <div class="pdp-row-product__content">
                    <!-- ══ TÍTULO + DESCRIÇÃO (apague este bloco se não quiser usar) ══ -->
                    <h2 class="pdp-row-product__title" style="color: #222;">
                        Potência e Precisão para suas Receitas Diárias
                    </h2>
                    <p class="pdp-row-product__desc" style="color: #222;">
                        Com 2 velocidades e função pulsar, o Fast Mix utiliza 4 lâminas em aço inox para garantir
                        texturas homogêneas. É o desempenho ideal para sucos, vitaminas e cremes com total praticidade
                    </p>
                    <!-- ══ FIM TÍTULO + DESCRIÇÃO ══ -->
                </div>
                <div class="pdp-row-product__image-wrapper">
                    <picture>
                        <source media="(min-width: 960px)" srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_04-1.jpg" />
                        <img class="pdp-row-product__image" src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/2222455_04-2.jpg"
                            alt="Eletricista com capacete branco e colete laranja em obra" />
                    </picture>
                </div>
            </div>
        </div>

        <section class="section-9" aria-labelledby="section-9-title">
            <div class="section-9__header">
                <h2 class="section-9__title" id="section-9-title">Tira-Dúvidas: Liquidificador Fast Mix</h2>
            </div>
            <ul class="section-9__list">
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <h3 class="section-9__q-text">Bate gelo e fruta congelada?</h3>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim. As 4 lâminas de aço inox trituram gelo e alimentos sólidos com facilidade</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <h3 class="section-9__q-text">O copo é bem resistente?</h3>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim. A jarra em PP é flexível e muito mais resistente a quedas que o acrílico comum</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <h3 class="section-9__q-text">É muito barulhento?</h3>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Não. Ele possui selo de ruído aprovado para uso doméstico silencioso e estável</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <h3 class="section-9__q-text">Cabe em armário pequeno?</h3>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim. É compacto, leve e tem sistema enrola-cabo para facilitar o armazenamento</p>
                        </div>
                    </details>
                </li>
            </ul>
        </section>

        <p
            style="color: #8a8a8a; font-family: sans-serif; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty; text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS</p>
    </div>
</div>`,
      css:  ``,
    },

        /*@@@@Col - padrao-4 */
    {
      id:   'padrao-4',
      name: 'Padrão 4',
      html: `<div class="lp-container">
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap');

        * {
            padding: 0;
            margin: 0;
        }

        .pdp {
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif
        }

        .pdp * {
            box-sizing: border-box;
            margin: 0;
        }

        .pdp-text-gradient {
            background: linear-gradient(90deg, #c29869, #ddbc88, #e6c588);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            background-clip: text;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <title>PDP - eFácil</title>
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->

    <style>
        .faq-section {
            width: 100%;
            padding: 2rem 16px;
            box-sizing: border-box;
            margin: 0 auto 25px;
            padding-top: 0;
            font-family: sans-serif;
        }

        .faq-section__header {
            text-align: center;
            margin: 1rem 0;
        }

        .faq-section__title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: bold;
            color: #333;
            margin: 0 0 12px;
            line-height: 98%;
        }

        .faq-section__subtitle {
            font-size: 1rem;
            color: #666;
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
        }

        .faq-section__item {
            background: #fff;
            border: 1px solid #e5e5e5;
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
            background: #f9f9f9;
        }

        .faq-section__q-text {
            font-size: 1rem;
            font-weight: bold;
            color: #333;
            flex: 1;
        }

        .faq-section__q-text:hover {
            color: #ea5b0c;
        }

        .faq-section__icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            position: relative;
        }

        .faq-section__icon::before,
        .faq-section__icon::after {
            content: '';
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

        .faq-section__item[open] .faq-section__icon::after {
            transform: rotate(90deg);
            opacity: 0;
        }

        .faq-section__a-inner {
            padding: 14px 20px 16px;
            border-top: 1px solid #e5e5e5;
        }

        .faq-section__a-text {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 480px) {
            .faq-section__q-text {
                font-size: 0.9rem;
            }
        }
    </style>

    <style>
        .product-header {
            --badge-size: 8rem;
            --banner-height: 180px;
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

        .product-header__banner-figure {
            width: 100%;
            height: 100%;
            margin: 0;
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
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-header__title {
            font-size: clamp(1.4rem, 4vw, 2.4rem);
            line-height: clamp(1.6rem, 4vw, 3.1rem);
            font-weight: 600;
            max-width: 50rem;
            text-wrap: pretty;
        }

        .product-header__subtitle {
            color: #8a8a8a;
            font-size: clamp(0.9rem, 2vw, 1.2rem);
            line-height: 120%;
            margin-top: 1rem;
            max-width: 90%;
            text-align: justify;
            text-wrap: pretty;
        }

        /* ===== 768px — banner cresce ===== */
        @media (min-width: 768px) {
            .product-header {
                --banner-height: 250px;
            }

            .product-header__subtitle {
                text-align: center;
            }
        }
    </style>

    <style>
        /* ===== HERO SECTION — VARIÁVEIS ===== */
        .section-6 {
            --pos-y: 50%;
            --pos-x: 7%;
            --color-title: #ffe178;
            --bg-box: rgba(0, 0, 0, 0.33);
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        /* ===== IMAGEM ===== */
        .section-6__image {
            width: 100%;
            margin: auto;
            height: auto;
            display: block;
            border-radius: 15px 15px 0 0;
        }

        /* ===== CONTEÚDO — BASE MOBILE ===== */
        .section-6__content {
            background-color: #ea5b0c;
            position: static;
            transform: none;
            max-width: 100%;
            padding: 24px 20px;
            backdrop-filter: none;
            text-align: center;
            z-index: 10;
        }

        .section-6__title {
            font-size: 1.5rem;
            color: #333;
            margin: 0 0 2px;
            line-height: 1.2;
            font-weight: 800;
        }

        .section-6__description {
            font-size: 1rem;
            color: #555;
            line-height: 1.5;
        }

        /* ===== 576px — texto cresce um pouco ===== */
        @media (min-width: 576px) {
            .section-6__title {
                font-size: 1.8rem;
            }

            .section-6__description {
                font-size: 1.1rem;
            }

            .section-6__image {
                width: 100%;
                border-radius: 20px 20px 0 0;
            }
        }

        /* ===== 768px — layout passa a ser sobreposto ===== */
        @media (min-width: 768px) {

            .section-6__image {
                width: 100%;
            }

            .section-6__content {
                position: absolute;
                top: var(--pos-y);
                left: clamp(1%, var(--pos-x), 100%);
                transform: translateY(-50%);
                max-width: min(40%, 480px);
                padding: clamp(12px, 2vw, 20px);
                background-color: var(--bg-box);
                backdrop-filter: blur(4px);
                text-align: left;
                border-radius: 20px;
            }

            .section-6__title {
                font-size: clamp(1.4rem, 3.5vw, 2.6rem);
                color: var(--color-title);
                text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
            }

            .section-6__description {
                font-size: clamp(0.95rem, 2vw, 1.4rem);
                color: #fff;
                margin-bottom: 24px;
                text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.35);
            }
        }
    </style>

    <style>
        .section-15-container {
            background-color: #f16425;
            padding: 1.5rem;
            width: 100%;
            box-sizing: border-box;

        }

        .section-15 {
            display: flex;
            flex-direction: column-reverse;
            gap: 1.25rem;
            margin: 0 auto;
            width: 100%;
            box-sizing: border-box;
        }

        .section-15__image-wrapper {
            width: 100%;
            flex-shrink: 0;
        }

        .section-15__image {
            margin: auto;
            border-radius: 16px;
            display: block;
            object-fit: cover;
            width: 100%;
            max-width: 530px;
            aspect-ratio: 16 / 9;
        }

        .section-15__content {
            display: flex;
            flex-direction: column;
            width: 95%;
            margin: auto;
            box-sizing: border-box;
        }

        .section-15__title {
            color: #f3f3f3;
            font-size: 32px;
            font-weight: 600;
            line-height: 40px;
            margin: 0 0 1rem;
            text-align: left;
        }

        .section-15__desc {
            color: #f3f3f3;
            font-size: 14px;
            line-height: 22px;
            margin: 0 0 1.5rem;
            text-align: left;
        }

        .section-15__feature-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;
            margin: 0;
            gap: 22px;
            padding: 0;
        }

        .section-15__feature-item {
            align-items: flex-start;
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
        }

        .section-15__feature-item-icon {
            border-radius: 8px;
            flex-shrink: 0;
            height: 44px;
            object-fit: contain;
            width: 44px;
        }

        .section-15__feature-item-body {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .section-15__feature-item-title {
            color: #f5f5f5;
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.35;
            margin: 0;
        }

        .section-15__feature-item-text {
            color: #f5f5f5;
            font-size: 0.8125rem;
            line-height: 1.55;
            margin: 0;
        }

        @media (min-width: 480px) {
            .section-15-container {
                padding: 1.75rem;

            }

            .section-15__feature-item-title {
                font-size: 1.1rem;
            }
        }

        @media (min-width: 768px) {
            .section-15-container {
                padding: 2rem;
            }

            .section-15 {
                max-width: 768px;
            }

            .section-15__image {
                border-radius: 20px;
                aspect-ratio: 16 / 9;
            }
        }

        @media (min-width: 760px) {
            .section-15 {
                align-items: center;
                flex-direction: row;
                gap: 1.5rem;
                justify-content: center;
                max-width: 960px;
            }

            .section-15--reverse {
                flex-direction: row-reverse;
            }



            .section-15__image {
                aspect-ratio: 4 / 3;
                height: 100%;
                max-height: 420px;
            }

            .section-15__content {
                flex: 1 1 0;
                min-width: 0;
            }

            .section-15__feature-list--icon-right .section-15__feature-item {
                flex-direction: row-reverse;
            }

            .section-15__feature-list--icon-right .section-15__feature-item-body {
                align-items: flex-end;
            }

            .section-15__feature-list--icon-right .section-15__feature-item-title,
            .section-15__feature-list--icon-right .section-15__feature-item-text {
                text-align: right;
            }

            .section-15__feature-item-icon {
                height: 48px;
                width: 48px;
            }

            .section-15__feature-item-title {
                font-size: 1.2rem;
            }

            .section-15__feature-item-text {
                font-size: 0.875rem;
            }
        }

        @media (min-width: 1060px) {
            .section-15 {
                max-width: 1060px;
                gap: 2rem;
            }

            .section-15__feature-list {
                gap: 1.25rem;
            }
        }

        @media (min-width: 1280px) {
            .section-15 {
                max-width: 1280px;
                gap: 2.5rem;
            }

            .section-15__image-wrapper {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .section-15__image {
                max-height: 460px;
            }

            .section-15__feature-item-title {
                font-size: 1.3rem;
            }

            .section-15__feature-item-text {
                font-size: 0.9rem;
            }
        }

        .is-reverse {
            flex-direction: row-reverse;
        }

        @media (max-width: 760px) {
            .is-reverse {
                flex-direction: column-reverse;
            }
        }

        .is-reverse-760 {
            flex-direction: row-reverse;
        }

        @media (max-width: 760px) {
            .is-reverse-760 {
                flex-direction: column;
            }
        }
    </style>

    <style>
        .section-15-container {
            background-color: #f16425;
            padding: 1.5rem;
            width: 100%;
            box-sizing: border-box;
        }

        .section-15 {
            display: flex;
            flex-direction: column-reverse;
            gap: 1.25rem;
            margin: 0 auto;
            width: 100%;
            box-sizing: border-box;
        }

        /* Variação: imagem embaixo do conteúdo no mobile */
        .section-15--reverse {
            flex-direction: column;
        }

        .section-15__image-wrapper {
            width: 100%;
            flex-shrink: 0;
        }

        .section-15__image {
            margin: auto;
            border-radius: 16px;
            display: block;
            object-fit: cover;
            width: 100%;
            max-width: 530px;
            aspect-ratio: 16 / 9;
        }

        .section-15__content {
            display: flex;
            flex-direction: column;
            width: 95%;
            margin: auto;
            box-sizing: border-box;
        }

        .section-15__title {
            color: #f3f3f3;
            font-size: 32px;
            font-weight: 600;
            line-height: 40px;
            margin: 0 0 1rem;
            text-align: left;
        }

        .section-15__desc {
            color: #f3f3f3;
            font-size: 14px;
            line-height: 22px;
            margin: 0 0 1.5rem;
            text-align: left;
        }

        .section-15__feature-list {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin: 0;
            gap: 22px;
            padding: 0;
        }

        .section-15__feature-item {
            align-items: flex-start;
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
        }

        .section-15__feature-item-icon {
            border-radius: 8px;
            flex-shrink: 0;
            height: 44px;
            object-fit: contain;
            width: 44px;
        }

        .section-15__feature-item-body {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .section-15__feature-item-title {
            color: #f5f5f5;
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.35;
            margin: 0;
        }

        .section-15__feature-item-text {
            color: #f5f5f5;
            font-size: 0.8125rem;
            line-height: 1.55;
            margin: 0;
        }

        /* ===== 576px ===== */
        @media (min-width: 576px) {
            .section-15-container {
                padding: 1.75rem;
            }

            .section-15__feature-item-title {
                font-size: 1.1rem;
            }
        }

        /* ===== 768px — layout lado a lado ===== */
        @media (min-width: 768px) {
            .section-15-container {
                padding: 2rem;
            }

            .section-15 {
                align-items: center;
                flex-direction: row;
                gap: 1.5rem;
                justify-content: center;
                max-width: 960px;
            }

            /* No desktop, --reverse inverte a linha */
            .section-15--reverse {
                flex-direction: row-reverse;
            }

            .section-15__image-wrapper {
                flex: 0 0 48%;
                max-width: 48%;
            }

            .section-15__image {
                border-radius: 20px;
                aspect-ratio: 4 / 3;
                height: 100%;
                max-height: 420px;
                max-width: unset;
            }

            .section-15__content {
                flex: 1 1 0;
                min-width: 0;
            }

            .section-15__feature-list--icon-right .section-15__feature-item {
                flex-direction: row-reverse;
            }

            .section-15__feature-list--icon-right .section-15__feature-item-body {
                align-items: flex-end;
            }

            .section-15__feature-list--icon-right .section-15__feature-item-title,
            .section-15__feature-list--icon-right .section-15__feature-item-text {
                text-align: right;
            }

            .section-15__feature-item-icon {
                height: 48px;
                width: 48px;
            }

            .section-15__feature-item-title {
                font-size: 1.2rem;
            }

            .section-15__feature-item-text {
                font-size: 0.875rem;
            }
        }

        /* ===== 992px ===== */
        @media (min-width: 992px) {
            .section-15 {
                max-width: 1060px;
                gap: 2rem;
            }

            .section-15__feature-list {
                gap: 1.25rem;
            }
        }

        /* ===== 1200px ===== */
        @media (min-width: 1200px) {
            .section-15 {
                max-width: 1280px;
                gap: 2.5rem;
            }

            .section-15__image-wrapper {
                flex: 0 0 50%;
                max-width: 50%;
            }

            .section-15__image {
                max-height: 460px;
            }

            .section-15__feature-item-title {
                font-size: 1.3rem;
            }

            .section-15__feature-item-text {
                font-size: 0.9rem;
            }
        }
    </style>

    <style>
        .section-11-container {
            padding: 0 1rem 3rem;
            margin-inline: auto;
        }

        @media (min-width: 576px) {
            .section-11-container {
                max-width: 576px;
            }
        }

        @media (min-width: 768px) {
            .section-11-container {
                max-width: 768px;
            }
        }

        @media (min-width: 992px) {
            .section-11-container {
                max-width: 992px;
            }
        }

        @media (min-width: 1200px) {
            .section-11-container {
                max-width: 1200px;
            }
        }

        @media (min-width: 1400px) {
            .section-11-container {
                max-width: 1400px;
            }
        }

        .section-11__header {
            text-align: center;
            margin: 1rem 0;
        }

        .section-11__title {
            font-size: 32px;
            font-weight: 900;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.25;
        }

        @media (max-width: 768px) {
            .section-11__title {
                display: none;
            }
        }

        .section-11__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        @media (min-width: 768px) {
            .section-11__grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        @media (min-width: 992px) {
            .section-11__grid {
                grid-template-columns: repeat(5, minmax(0, 1fr));
            }
        }

        .section-11__item {
            background: #fff;
            border: 0.5px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
            transition: border-color 0.2s;
        }

        .section-11__item:hover {
            border-color: rgba(0, 0, 0, 0.22);
        }

        .section-11__figure {
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
        }

        .section-11__image {
            width: 4.6rem;
            height: auto;
            display: block;
        }

        .section-11__name {
            font-size: 0.9375rem;
            font-weight: 500;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.3;
        }

        .section-11__value {
            font-size: 0.875rem;
            color: #666;
            margin: 0;
            line-height: 1.4;
        }
    </style>

    <style>
        .section-32__container {
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
        }

        .section-32__groupimage-section {
            position: relative;
            width: 100%;
            margin: 0;
            contain: layout style;
        }

        .section-32__groupimage-section img {
            width: 100%;
            height: auto;
            display: block;
        }

        .section-32__grouptext-overlay {
            position: absolute;
            max-width: 40%;
            width: 90%;
            line-height: 1.5;
            text-align: center;
            font-family: sans-serif
        }

        .section-32__grouptext-overlay.top {
            top: 3%;
            left: 50%;
            transform: translateX(-50%);
        }

        .section-32__grouptext-overlay.bottom {
            top: 84%;
            left: 50%;
            transform: translateX(-50%);
        }

        .section-32__grouptext-overlay.left {
            top: 50%;
            left: 25%;
            transform: translate(-50%, -50%);
            max-width: 41%;
        }

        .section-32__grouptext-overlay.right {
            top: 50%;
            left: 75%;
            transform: translate(-50%, -50%);
            max-width: 42%;
        }

        .section-32__grouptext-overlay h2 {
            font-size: 2vw;
            font-weight: bold;
            margin-bottom: 1.5px;
            line-height: 120%;
        }

        .section-32__grouptext-overlay p {
            font-size: 1.1vw;
            margin: 0;
            line-height: 120%;
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
                font-size: 1.8vw;
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

        @media (max-width: 480px) {
            .section-32__grouptext-overlay h2 {
                font-size: 3vw;
            }

            .section-32__grouptext-overlay p {
                font-size: 2.3vw;
            }
        }

        @media (max-width: 1060px) {
            .section-32__grouptext-overlay.top {
                top: 3%;
            }
        }

        @media (max-width: 960px) {
            .section-32__grouptext-overlay.top {
                top: 3%;
            }
        }

        @media (max-width: 768px) {
            .section-32__grouptext-overlay.top {
                top: 3%;
            }
        }

        @media (max-width: 500px) {
            .section-32__grouptext-overlay.top {
                top: 3%;
            }
        }

        @media (max-width: 480px) {
            .section-32__grouptext-overlay.top {
                top: 3%;
            }
        }

        @media (max-width: 1060px) {
            .section-32__grouptext-overlay.bottom {
                top: 81%;
            }
        }

        @media (max-width: 960px) {
            .section-32__grouptext-overlay.bottom {
                top: 79%
            }
        }

        @media (max-width: 480px) {
            .section-32__grouptext-overlay.bottom {
                top: 81%
            }
        }

        @media (max-width: 768px) {
            .section-32__grouptext-overlay.bottom {
                top: 76%;
            }
        }

        @media (max-width: 500px) {
            .section-32__grouptext-overlay.bottom {
                top: 67%;
            }
        }

        @media (max-width: 480px) {

            .section-32__grouptext-overlay.right {
                top: 50%;
                left: 73%;
                transform: translate(-50%, -50%);
            }
        }

        @media (max-width: 480px) {

            .section-32__grouptext-overlay.left {
                top: 50%;
                left: 27%;
                transform: translate(-50%, -50%);
            }
        }

        .grouptext-overlay-Background {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4.5vw;
            padding: 0.5rem;
            backdrop-filter: blur(0.8vw);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            -webkit-backdrop-filter: blur(10px);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
            max-width: 70%;
            z-index: 100;
        }
    </style>

    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <div class="pdp" id="pdp"> <!-- HTML fica dentro dessa div PDP -->

        <section class="product-header" aria-label="Cabeçalho do produto">
            <header class="product-header__banner">
                <figure class="product-header__banner-figure">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/header.jpg"
                        alt="Banner do produto" class="product-header__banner-img" loading="eager">
                </figure>
                <div class="product-header__badge" role="img" aria-label="Logo da marca">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/logo.png"
                        alt="Ícone da marca" class="product-header__badge-img" loading="lazy">
                </div>
            </header>
            <article class="product-header__body">
                <small class="product-header__brand">Marca</small>
                <h2 class="product-header__title">
                    TÍTULO DO PRODUTO GAMERE (Nome, modelo, diferencial...)
                </h2>
                <p class="product-header__subtitle">
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                    Isso é uma descrição. Isso é uma descrição. Isso é uma descrição.
                </p>
            </article>
        </section>

        <section class="section-6" aria-label="Destaque do produto com texto">
            <picture>
                <source media="(max-width: 767px)"
                    srcset="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/section-49-2.png"
                    width="780" height="400">
                <img class="section-6__image"
                    src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/section-49-1.png"
                    alt="Caderno Funny Cat com estampa de gatinhos, capa colorida e espiral" width="1600" height="650"
                    loading="lazy" fetchpriority="high" decoding="async">
            </picture>
            <div class="section-6__content">
                <h3 class="section-6__title">Caderno Funny Cat</h3>
                <p class="section-6__description">Organize seus estudos com fofura e estilo!</p>
            </div>
        </section>

        <section class="section-11" aria-labelledby="section-11-title">
            <div class="section-11-container">
                <header class="section-11__header">
                    <h3 class="section-11__title" id="section-11-title">
                        Diferenciais que garantem uma instalação superior
                    </h3>
                </header>
                <ul class="section-11__grid" role="list">
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/4203786_03-1.png"
                                alt="Ícone de formato universitário" width="74" height="74" loading="lazy">
                        </figure>
                        <h4 class="section-11__name">Flexibilidade Classe 4/5</h4>
                        <p class="section-11__value">Cobre de têmpera mole que desliza facilmente pelos eletrodutos,
                            economizando tempo
                            e esforço na instalação</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/4203786_03-1.png"
                                alt="Ícone de formato universitário" width="74" height="74" loading="lazy">
                        </figure>
                        <h4 class="section-11__name">Flexibilidade Classe 4/5</h4>
                        <p class="section-11__value">Cobre de têmpera mole que desliza facilmente pelos eletrodutos,
                            economizando tempo
                            e esforço na instalação</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/4203786_03-1.png"
                                alt="Ícone de formato universitário" width="74" height="74" loading="lazy">
                        </figure>
                        <h4 class="section-11__name">Flexibilidade Classe 4/5</h4>
                        <p class="section-11__value">Cobre de têmpera mole que desliza facilmente pelos eletrodutos,
                            economizando tempo
                            e esforço na instalação</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/4203786_03-1.png"
                                alt="Ícone de formato universitário" width="74" height="74" loading="lazy">
                        </figure>
                        <h4 class="section-11__name">Flexibilidade Classe 4/5</h4>
                        <p class="section-11__value">Cobre de têmpera mole que desliza facilmente pelos eletrodutos,
                            economizando tempo
                            e esforço na instalação</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/4203786_03-1.png"
                                alt="Ícone de formato universitário" width="74" height="74" loading="lazy">
                        </figure>
                        <h4 class="section-11__name">Flexibilidade Classe 4/5</h4>
                        <p class="section-11__value">Cobre de têmpera mole que desliza facilmente pelos eletrodutos,
                            economizando tempo
                            e esforço na instalação</p>
                    </li>
                </ul>
            </div>
        </section>

        <div class="section-15-container">
            <div class="section-15 is-reverse-760">
                <div class="section-15__content">
                    <h3 class="section-15__title">
                        A garantia de que o que está por trás das paredes nunca será um problema
                    </h3>
                    <p class="section-15__desc">
                        Ao escolher um condutor que une a máxima segurança contra incêndios, a eficiência energética
                        para seus equipamentos de alta potência e a flexibilidade necessária para uma instalação ágil,
                        você garante a proteção do seu patrimônio e a tranquilidade de saber que sua estrutura elétrica
                        foi feita para durar uma vida inteira.
                    </p>
                    <ul class="section-15__feature-list" aria-label="Benefícios do produto">
                        <li class="section-15__feature-item">
                            <img class="section-15__feature-item-icon" src="C:\\Users\\ygorq\\Downloads\\2222455_03-2-1.png"
                                alt="Ícone manhãs sem pausa" loading="lazy" />
                            <div class="section-15__feature-item-body">
                                <strong class="section-15__feature-item-title">Manhãs Sem Pausa</strong>
                                <p class="section-15__feature-item-text">Prepare vitaminas nutritivas em segundos e use
                                    a função autolimpeza para sair de casa sem deixar bagunça na pia</p>
                            </div>
                        </li>
                        <li class="section-15__feature-item">
                            <img class="section-15__feature-item-icon" src="C:\\Users\\ygorq\\Downloads\\2222455_03-2-2.png"
                                alt="Ícone receitas de uma só vez" loading="lazy" />
                            <div class="section-15__feature-item-body">
                                <strong class="section-15__feature-item-title">Receitas de uma Só Vez</strong>
                                <p class="section-15__feature-item-text">A jarra de 2,1L permite cozinhar para a família
                                    inteira sem precisar bater os ingredientes em várias etapas</p>
                            </div>
                        </li>
                        <li class="section-15__feature-item">
                            <img class="section-15__feature-item-icon" src="C:\\Users\\ygorq\\Downloads\\2222455_03-2-3.png"
                                alt="Ícone cozinha sempre organizada" loading="lazy" />
                            <div class="section-15__feature-item-body">
                                <strong class="section-15__feature-item-title">Cozinha Sempre Organizada</strong>
                                <p class="section-15__feature-item-text">O sistema enrola-cabo e o design leve eliminam
                                    a briga com fios e facilitam o armazenamento após o uso</p>
                            </div>
                        </li>
                        <li class="section-15__feature-item">
                            <img class="section-15__feature-item-icon" src="C:\\Users\\ygorq\\Downloads\\2222455_03-2-4.png"
                                alt="Ícone cuidado com o bolso" loading="lazy" />
                            <div class="section-15__feature-item-body">
                                <strong class="section-15__feature-item-title">Cuidado com o Bolso</strong>
                                <p class="section-15__feature-item-text">Durabilidade garantida por lâminas de aço inox
                                    e 1 ano de garantia, evitando gastos inesperados com trocas precoces</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="section-15__image-wrapper">
                    <picture>
                        <source media="(min-width: 768px)"
                            srcset="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/sessao4.jpg" />
                        <img class="section-15__image"
                            src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/EQUIPE_QUALIDADE_CONTEUDO/sessao4.jpg"
                            alt="Eletricista com capacete branco e colete laranja em obra" loading="lazy" />
                    </picture>
                </div>
            </div>
        </div>

        <section class="section-32__container" aria-label="Seção de destaque do produto">
            <figure class="section-32__groupimage-section">
                <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/metalfrio/2223537_02.jpg"
                    alt="!!!!!COLOQUE O TEXTO ALT AQUI!!!!!" style="border-radius: 0px 0px 0px 0px;" width="1600"
                    height="865" loading="lazy" decoding="async" fetchpriority="low">
                <figcaption class="section-32__grouptext-overlay left">
                    <p style="color: #faca95;">Isso é uma descrição. Isso é uma descrição.</p>
                    <h2 style="color: #faca95;"><strong>SUB-TÍTULO</strong></h2>
                    <p style="color: #faca95;">Isso é uma descrição. Isso é uma descrição. Isso é uma descrição. Isso é
                        umadescrição.</p>
                </figcaption>
            </figure>
        </section>

        <!-- Área de FAQ -->
        <section class="faq-section" aria-labelledby="faq-section-title">
            <div class="faq-section__header">
                <h3 class="faq-section__title" id="faq-section-title">Título Principal</h3>
                <p class="faq-section__subtitle">Sub-título</p>
            </div>
            <ul class="faq-section__list">
                <li class="faq-section__item">
                    <details class="faq-section__item">
                        <summary>
                            <h3 class="faq-section__q-text">Pergunta</h3>
                            <span class="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="faq-section__a-inner">
                            <p class="faq-section__a-text">Resposta</p>
                        </div>
                    </details>
                </li>
                <li class="faq-section__item">
                    <details class="faq-section__item">
                        <summary>
                            <h3 class="faq-section__q-text">Pergunta</h3>
                            <span class="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="faq-section__a-inner">
                            <p class="faq-section__a-text">Resposta</p>
                        </div>
                    </details>
                </li>
                <li class="faq-section__item">
                    <details class="faq-section__item">
                        <summary>
                            <h3 class="faq-section__q-text">Pergunta</h3>
                            <span class="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="faq-section__a-inner">
                            <p class="faq-section__a-text">Resposta</p>
                        </div>
                    </details>
                </li>
                <li class="faq-section__item">
                    <details class="faq-section__item">
                        <summary>
                            <h3 class="faq-section__q-text">Pergunta</h3>
                            <span class="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="faq-section__a-inner">
                            <p class="faq-section__a-text">Resposta</p>
                        </div>
                    </details>
                </li>
                <li class="faq-section__item">
                    <details class="faq-section__item">
                        <summary>
                            <h3 class="faq-section__q-text">Pergunta</h3>
                            <span class="faq-section__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="faq-section__a-inner">
                            <p class="faq-section__a-text">Resposta</p>
                        </div>
                    </details>
                </li>
            </ul>
        </section>

        <p
            style="color: #8a8a8a; font-family: sans-serif; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty; text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS</p>
    </div>
</div>`,
      css:  ``,
    },

    /*@@@@Col - padrao-5-cabos */
    {
      id:   'padrao-5-cabos',
      name: 'Padrão 5 - Cabos',
      html: `<div class="lp-container">
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap');

        * {
            padding: 0;
            margin: 0;
        }

        .pdp {
            display: flex;
            flex-direction: column;
            font-family: Roboto, sans-serif
        }

        .pdp * {
            box-sizing: border-box;
            margin: 0;
        }

        .pdp-text-gradient {
            background: linear-gradient(90deg, #c29869, #ddbc88, #e6c588);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            background-clip: text;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <title>PDP - eFácil</title>
    <!-- ---------------------------------------- ÁREA PARA COLOCAR STYLES ----------------------------------------------------------- -->

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

        .product-header__banner figure {
            width: 100%;
            height: 100%;
            margin: 0;
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
            padding-bottom: 0;
        }

        .product-header__brand {
            color: #ff9900;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .product-header__title {
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

        @media (max-width: 768px) {
            .product-header {
                --banner-height: 180px;
            }
        }

        @media (max-width: 470px) {
            .product-header__subtitle {
                text-align: justify;
                font-size: clamp(0.9rem, 2vw, 1.2rem);
            }
        }
    </style>

    <style>
        .pdp-row-product {
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            width: 100%;
        }

        .tw-text-2xl {
            font-size: 32px;
            font-weight: 600;
            line-height: 40px
        }

        .pdp-product-title {
            --tw-text-opacity: 1;
            color: rgb(0 0 0/var(--tw-text-opacity));
            max-width: 56rem;
            text-align: center
        }

        .tw-text-lg {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px
        }

        .pdp-product-description {
            --tw-text-opacity: 1;
            color: rgb(138 138 138/var(--tw-text-opacity));
            font-size: 14px;
            line-height: 22px;
            margin-top: 1rem;
            max-width: 56rem;
            text-align: center
        }

        @media (min-width:576px) {
            .pdp-row-product {
                max-width: 576px;
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:768px) {
            .pdp-row-product {
                max-width: 768px
            }

            .tw-text-2xl {
                font-size: 32px;
            }

        }



        @media (min-width:992px) {
            .pdp-row-product {
                max-width: 992px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1200px) {
            .pdp-row-product {
                max-width: 1200px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        @media (min-width:1536px) {
            .pdp-row-product {
                max-width: 1536px
            }

            .tw-text-2xl {
                font-size: 32px;
            }
        }

        .pdp-row-product {
            align-items: center;
            display: flex;
            gap: 1.5rem;
            justify-content: space-between;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        .reverse-row-product {
            flex-direction: row-reverse;
        }

        @media not all and (min-width:992px) {
            .pdp-row-product {
                flex-direction: column-reverse
            }
        }

        @media (min-width:992px) {
            .pdp-row-product {
                gap: 6rem
            }
        }

        .pdp-row-product-image {
            max-width: 30rem;
            object-fit: contain;
            width: 100%;
            border-radius: 20px;
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        .pdp-row-product-content {
            display: flex;
            flex-direction: column;
            max-width: 28rem;
            width: 100%
        }

        .pdp-row-product-content * {
            text-align: left
        }

        @media (min-width:992px) {
            .pdp-row-product.is-reverse .pdp-row-product-image {
                order: 1
            }

            .pdp-row-product.is-reverse .pdp-row-product-content {
                order: 2
            }
        }

        @media (max-width:768px) {
            .pdp-row-product-image {
                width: 100%;
                aspect-ratio: 9 / 6;
                object-fit: cover;
            }
        }
    </style>

    <style>
        .section-11-container {
            padding-bottom: 3rem;
            padding-top: 1.8rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (min-width: 576px) {
            .section-11-container {
                max-width: 576px;
                margin-inline: auto;
            }
        }

        @media (min-width: 768px) {
            .section-11-container {
                max-width: 768px;
            }
        }

        @media (min-width: 992px) {
            .section-11-container {
                max-width: 992px;
            }
        }

        @media (min-width: 1200px) {
            .section-11-container {
                max-width: 1200px;
            }
        }

        @media (min-width: 1536px) {
            .section-11-container {
                max-width: 1536px;
            }
        }

        .section-11__header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .section-11__title {
            font-size: 32px;
            font-weight: 900;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.25;
        }

        .section-11__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        @media (min-width: 768px) {
            .section-11__grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        @media (min-width: 992px) {
            .section-11__grid {
                grid-template-columns: repeat(5, minmax(0, 1fr));
            }
        }

        .section-11__item {
            background: #fff;
            border: 0.5px solid rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
            transition: border-color 0.2s;
        }

        .section-11__item:hover {
            border-color: rgba(0, 0, 0, 0.22);
        }

        .section-11__figure {
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
        }

        .section-11__image {
            width: 4.6rem;
            height: auto;
            display: block;
        }

        .section-11__name {
            font-size: 0.9375rem;
            font-weight: 500;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.3;
        }

        .section-11__value {
            font-size: 0.875rem;
            color: #666;
            margin: 0;
            line-height: 1.4;
        }
    </style>

    <style>
        /* ── Tokens do section-62 ── */
        .section-62 {
            font-family: system-ui, sans-serif;
            width: 100%;
            background: #efefef;
            overflow: hidden;
        }

        /* ── Inputs ocultos ── */
        .section-62__radio {
            position: absolute;
            display: none;
            width: 0;
            height: 0;
            opacity: 0;
            pointer-events: none;
        }

        /* ── Wrap ── */
        .section-62__wrap {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 32px 0 28px;
            overflow: hidden;
        }

        /* ── Header ── */
        .section-62__header {
            padding: 0 28px;
        }

        .section-62__title {
            font-weight: 500;
            font-size: clamp(1rem, 2.8vw, 1.4rem);
            color: #1a1a1a;
            text-align: center;
        }

        /* ── Track ── */
        .section-62__track {
            display: flex;
            gap: 67px;
            padding-left: calc((100% - 310px) / 2);
            padding-right: calc((100% - 310px) / 2);
            transition: transform .44s cubic-bezier(.4, 0, .2, 1);
            transform: translateX(0);
            overflow: visible;
        }

        /* ── Card ── */
        .section-62__card {
            flex: 0 0 310px;
            width: 310px;
            background: #55606b;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 6px 32px rgba(0, 0, 0, .075);
            text-align: center;
            transform: scale(0.85);
            opacity: .38;
            transition: transform .44s cubic-bezier(.4, 0, .2, 1), opacity .44s ease, box-shadow .44s ease;
        }

        .section-62__card-img {
            width: 100%;
            object-fit: cover;
            display: block;
        }

        .section-62__card-body {
            padding: 14px 14px 18px;
        }

        .section-62__card-title {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 5px;
            color: #fefefe;
        }

        .section-62__card-desc {
            font-size: 1.1rem;
            color: #f2f2f2;
            line-height: 1.55;
            font-weight: 300;
            margin: 0;
        }

        /* ── Estado ativo — Mobile: 1 card ── */
        #s62-1:checked~.section-62 .section-62__card:nth-child(1),
        #s62-2:checked~.section-62 .section-62__card:nth-child(2),
        #s62-3:checked~.section-62 .section-62__card:nth-child(3) {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 10px rgba(0, 0, 0, .205), 0 0 0 1.5px rgba(201, 168, 76, .041);
        }

        #s62-1:checked~.section-62 .section-62__track {
            transform: translateX(calc(0 * (310px + 67px) * -1));
        }

        #s62-2:checked~.section-62 .section-62__track {
            transform: translateX(calc(1 * (310px + 67px) * -1));
        }

        #s62-3:checked~.section-62 .section-62__track {
            transform: translateX(calc(2 * (310px + 67px) * -1));
        }

        /* ── Tablet ≥ 768px — 2 cards visíveis ── */
        @media (min-width: 768px) {
            .section-62__track {
                gap: 24px;
                padding-left: calc((100% - 2 * 230px - 24px) / 2);
                padding-right: calc((100% - 2 * 230px - 24px) / 2);
            }

            .section-62__card {
                flex: 0 0 230px;
                width: 230px;
            }

            #s62-1:checked~.section-62 .section-62__card:nth-child(1),
            #s62-1:checked~.section-62 .section-62__card:nth-child(2),
            #s62-2:checked~.section-62 .section-62__card:nth-child(2),
            #s62-2:checked~.section-62 .section-62__card:nth-child(3),
            #s62-3:checked~.section-62 .section-62__card:nth-child(2),
            #s62-3:checked~.section-62 .section-62__card:nth-child(3) {
                transform: scale(1);
                opacity: 1;
                box-shadow: 0 0 10px rgba(0, 0, 0, .205), 0 0 0 1.5px rgba(201, 168, 76, .041);
            }

            #s62-1:checked~.section-62 .section-62__track {
                transform: translateX(0);
            }

            #s62-2:checked~.section-62 .section-62__track {
                transform: translateX(calc(1 * (230px + 24px) * -1));
            }

            #s62-3:checked~.section-62 .section-62__track {
                transform: translateX(calc(1 * (230px + 24px) * -1));
            }
        }

        /* ── Desktop ≥ 992px — 3 cards visíveis ── */
        @media (min-width: 992px) {
            .section-62__track {
                gap: 20px;
                padding-left: calc((100% - 3 * 280px - 2 * 20px) / 2);
                padding-right: calc((100% - 3 * 280px - 2 * 20px) / 2);
            }

            .section-62__card {
                flex: 0 0 280px;
                width: 280px;
                transform: scale(0.83);
            }

            #s62-1:checked~.section-62 .section-62__card:nth-child(1),
            #s62-1:checked~.section-62 .section-62__card:nth-child(2),
            #s62-1:checked~.section-62 .section-62__card:nth-child(3),
            #s62-2:checked~.section-62 .section-62__card:nth-child(1),
            #s62-2:checked~.section-62 .section-62__card:nth-child(2),
            #s62-2:checked~.section-62 .section-62__card:nth-child(3),
            #s62-3:checked~.section-62 .section-62__card:nth-child(1),
            #s62-3:checked~.section-62 .section-62__card:nth-child(2),
            #s62-3:checked~.section-62 .section-62__card:nth-child(3) {
                transform: scale(1);
                opacity: 1;
                box-shadow: 0 0 10px rgba(0, 0, 0, .205), 0 0 0 1.5px rgba(201, 168, 76, .041);
            }

            #s62-1:checked~.section-62 .section-62__track,
            #s62-2:checked~.section-62 .section-62__track,
            #s62-3:checked~.section-62 .section-62__track {
                transform: translateX(0);
            }
        }

        /* ── Navegação ── */
        .section-62__nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            padding: 0 28px;
        }

        .section-62__dots {
            display: flex;
            gap: 7px;
            align-items: center;
        }

        .section-62__dot {
            display: block;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #55606b;
            opacity: .35;
            cursor: pointer;
            transition: opacity .25s, width .3s, background .25s, border-radius .3s;
        }

        #s62-1:checked~.section-62 .section-62__dot[for="s62-1"],
        #s62-2:checked~.section-62 .section-62__dot[for="s62-2"],
        #s62-3:checked~.section-62 .section-62__dot[for="s62-3"] {
            opacity: 1;
            background: #c9a84c;
            width: 20px;
            border-radius: 100px;
        }

        /* ── Botões prev/next ── */
        .section-62__btn-slot {
            position: relative;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
        }

        .section-62__btn-slot label {
            position: absolute;
            inset: 0;
            display: none;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #55606b;
            border: 1px solid rgba(255, 255, 255, .07);
            color: #fefefe;
            font-size: 17px;
            cursor: pointer;
            transition: background .2s, border-color .2s, transform .15s;
            user-select: none;
        }

        .section-62__btn-slot label:hover {
            background: rgba(201, 168, 76, .15);
            border-color: #c9a84c;
            transform: scale(1.1);
        }

        .section-62__btn-slot label:active {
            transform: scale(.93);
        }

        .section-62__btn-disabled {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #55606b;
            border: 1px solid rgba(255, 255, 255, .04);
            opacity: .2;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            color: #f2f2f2;
            pointer-events: none;
        }

        /* Padrão: disabled visível, labels ocultos */
        .section-62__btn-slot label {
            display: none;
        }

        .section-62__btn-disabled {
            display: flex;
        }

        /* PREV */
        #s62-1:checked~.section-62 .section-62__btn--prev .section-62__btn-disabled {
            display: flex;
        }

        #s62-1:checked~.section-62 .section-62__btn--prev label {
            display: none;
        }

        #s62-2:checked~.section-62 .section-62__btn--prev .section-62__btn-disabled {
            display: none;
        }

        #s62-2:checked~.section-62 .section-62__btn--prev label {
            display: none;
        }

        #s62-2:checked~.section-62 .section-62__btn--prev label[for="s62-1"] {
            display: flex;
        }

        #s62-3:checked~.section-62 .section-62__btn--prev .section-62__btn-disabled {
            display: none;
        }

        #s62-3:checked~.section-62 .section-62__btn--prev label {
            display: none;
        }

        #s62-3:checked~.section-62 .section-62__btn--prev label[for="s62-2"] {
            display: flex;
        }

        /* NEXT */
        #s62-1:checked~.section-62 .section-62__btn--next .section-62__btn-disabled {
            display: none;
        }

        #s62-1:checked~.section-62 .section-62__btn--next label {
            display: none;
        }

        #s62-1:checked~.section-62 .section-62__btn--next label[for="s62-2"] {
            display: flex;
        }

        #s62-2:checked~.section-62 .section-62__btn--next .section-62__btn-disabled {
            display: none;
        }

        #s62-2:checked~.section-62 .section-62__btn--next label {
            display: none;
        }

        #s62-2:checked~.section-62 .section-62__btn--next label[for="s62-3"] {
            display: flex;
        }

        #s62-3:checked~.section-62 .section-62__btn--next .section-62__btn-disabled {
            display: flex;
        }

        #s62-3:checked~.section-62 .section-62__btn--next label {
            display: none;
        }
    </style>

    <style>
        .section-9 {
            width: 100%;
            padding: 2rem 16px;
            box-sizing: border-box;
            margin: 25px auto 25px;
            padding-top: 0;
            font-family: sans-serif;
        }

        .section-9__header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .section-9__title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: bold;
            color: #333;
            margin: 0 0 12px;
            line-height: 98%;
        }

        .section-9__subtitle {
            font-size: 1rem;
            color: #666;
            margin: 0;
        }

        .section-9__list {
            list-style: none;
            margin: 0 auto;
            padding: 0;
            max-width: 56rem;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .section-9__item {
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            overflow: hidden;
        }

        .section-9__item summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 20px;
            cursor: pointer;
            list-style: none;
        }

        .section-9__item summary::-webkit-details-marker {
            display: none;
        }

        .section-9__item summary:hover {
            background: #f9f9f9;
        }

        .section-9__q-text {
            font-size: 1rem;
            font-weight: bold;
            color: #333;
            flex: 1;
        }

        .section-9__q-text:hover {
            color: #ea5b0c;
        }

        .section-9__icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            position: relative;
        }

        .section-9__icon::before,
        .section-9__icon::after {
            content: '';
            position: absolute;
            background: #888;
            border-radius: 2px;
            transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .section-9__icon::before {
            width: 12px;
            height: 1.5px;
            top: 9px;
            left: 4px;
        }

        .section-9__icon::after {
            width: 1.5px;
            height: 12px;
            top: 4px;
            left: 9px;
        }

        .section-9__item[open] .section-9__icon::after {
            transform: rotate(90deg);
            opacity: 0;
        }

        .section-9__a-inner {
            padding: 14px 20px 16px;
            border-top: 1px solid #e5e5e5;
        }

        .section-9__a-text {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.6;
            margin: 0;
        }

        @media (max-width: 480px) {
            .section-9__q-text {
                font-size: 0.9rem;
            }
        }
    </style>

    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <div class="pdp" id="pdp"> <!-- HTML fica dentro dessa div PDP -->

        <section class="product-header" aria-label="Cabeçalho do produto">
            <header class="product-header__banner">
                <figure style="width:100%;height:100%;margin:0;">
                    <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/logotipo-corfio-fios-cabos-eletricos-4203793-00.jpg"
                        alt="Logotipo Corfio Fios e Cabos Elétricos em letras brancas sobre fundo azul escuro"
                        class="product-header__banner-img" loading="eager">
                </figure>

                <div class="product-header__badge" role="img" aria-label="Logo da marca">
                    <img src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/corfio/corfio-logo.png"
                        alt="imagem png com ícone da marca" class="product-header__badge-img">
                </div>
            </header>

            <article class="product-header__body">
                <small class="product-header__brand">corfio</small>
                <h1 class="product-header__title">
                    Cabo Flexível Bobina 2,5mm 1100m 750V Branco
                </h1>
                <p class="product-header__subtitle">
                    Garanta agilidade na obra com o Cabo Flexível Corfio 2,5mm². Desenvolvido com encordoamento classe
                    4/5 para maior flexibilidade e deslizamento, ele é a escolha perfeita para redes de distribuição em
                    casas, prédios e painéis elétricos que exigem máxima confiança
                </p>
            </article>
        </section>

        <div class="pdp-row-product">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Potência com Segurança Máxima
                </h3>
                <p class="pdp-product-description">
                    A escolha profissional para instalações residenciais e comerciais que exigem durabilidade e
                    conformidade técnica
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-2-5mm-detalhe-condutor-cobre-4203793-01.jpg"
                alt="Detalhe em close do condutor de cobre nu e isolação branca do Cabo Flexível Corfio 2,5mm"
                class="pdp-row-product-image" />
        </div>


        <input class="section-62__radio" type="radio" name="slide-62" id="s62-1" checked>
        <input class="section-62__radio" type="radio" name="slide-62" id="s62-2">
        <input class="section-62__radio" type="radio" name="slide-62" id="s62-3">
        <div class="section-62">
            <section class="section-62__wrap" aria-label="Carrossel de aplicações do produto">
                <header class="section-62__header">
                    <h3 class="section-62__title">Aplicações do Cabo da Corfio</h3>
                </header>

                <div class="section-62__track" role="list">
                    <article class="section-62__card" role="listitem">
                        <img class="section-62__card-img"
                            src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/megatron/404517_04-2.png"
                            alt="Interior de uma obra em andamento com paredes de gesso cruas, tubulações expostas e luz do sol iluminando a poeira no ar"
                            width="310" height="220" loading="lazy">
                        <div class="section-62__card-body">
                            <h4 class="section-62__card-title">Ambientes Comerciais e Escritórios</h4>
                            <p class="section-62__card-desc">Embutido em alvenaria ou em canaletas de escritórios para
                                alimentar estações de trabalho e sistemas de iluminação LED de alta performance</p>
                        </div>
                    </article>

                    <article class="section-62__card" role="listitem">
                        <img class="section-62__card-img"
                            src="https://static1.efacil.com.br/wcsstore//AuroraStorefrontAssetStore/PDP/megatron/404517_04-1.png"
                            alt="Imagem propositalmente desfocada de uma recepção moderna, bem iluminada e com poltronas dispostas perto de janelas grandes"
                            width="310" height="220" loading="lazy">
                        <div class="section-62__card-body">
                            <h4 class="section-62__card-title">Ambientes Residenciais (Uso Geral)</h4>
                            <p class="section-62__card-desc">Quartos, salas e corredores para ligar aparelhos comuns
                                (TVs, computadores, carregadores, luminárias)</p>
                        </div>
                    </article>

                    <article class="section-62__card" role="listitem">
                        <img class="section-62__card-img"
                            src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-aplicacao-cozinha-lifestyle-4203793-21.jpg"
                            alt="Ambiente de cozinha residencial com foco em balcão, sugerindo aplicação de cabos elétricos Corfio"
                            width="310" height="220" loading="lazy">
                        <div class="section-62__card-body">
                            <h4 class="section-62__card-title">Áreas Úmidas e Cozinhas (Circuitos Específicos)</h4>
                            <p class="section-62__card-desc">Tomadas de cozinhas e áreas de serviço para
                                eletrodomésticos de médio porte, como liquidificadores, batedeiras e geladeiras</p>
                        </div>
                    </article>
                </div>

                <nav class="section-62__nav" aria-label="Navegação do carrossel">
                    <div class="section-62__btn-slot section-62__btn--prev">
                        <span class="section-62__btn-disabled" aria-hidden="true">&#8592;</span>
                        <label for="s62-1" aria-label="Slide anterior">&#8592;</label>
                        <label for="s62-2" aria-label="Slide anterior">&#8592;</label>
                    </div>

                    <div class="section-62__dots" role="tablist" aria-label="Slides">
                        <label class="section-62__dot" for="s62-1" role="tab" aria-label="Ir para slide 1"></label>
                        <label class="section-62__dot" for="s62-2" role="tab" aria-label="Ir para slide 2"></label>
                        <label class="section-62__dot" for="s62-3" role="tab" aria-label="Ir para slide 3"></label>
                    </div>

                    <div class="section-62__btn-slot section-62__btn--next">
                        <label for="s62-2" aria-label="Próximo slide">&#8594;</label>
                        <label for="s62-3" aria-label="Próximo slide">&#8594;</label>
                        <span class="section-62__btn-disabled" aria-hidden="true">&#8594;</span>
                    </div>
                </nav>
            </section>
        </div>

        <div class="pdp-row-product is-reverse">
            <div class="pdp-row-product-content">
                <h3 class="pdp-product-title tw-text-2xl">
                    Flexibilidade Classe 5: Instalação sem Esforço
                </h3>
                <p class="pdp-product-description">
                    Desenvolvido com encordoamento de alta classe e isolação em PVC especial, o cabo oferece um
                    deslizamento superior. Menos atrito no conduíte significa uma instalação mais rápida e sem danos ao
                    material
                </p>
            </div>
            <img src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-2-5mm-instalacao-eletrica-lifestyle-4203793-02.jpg"
                alt="Eletricista instalando Cabo Flexível Corfio branco 2,5mm em caixa de passagem de alvenaria"
                class="pdp-row-product-image" />
        </div>

        <section class="section-11" aria-labelledby="section-11-title" style="background-color: #efefef;">
            <div class="section-11-container">
                <header class="section-11__header">
                    <h2 class="section-11__title" id="section-11-title">Diferenciais que garantem uma instalação
                        superior</h2>
                </header>
                <ul class="section-11__grid" role="list">
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-selo-qualidade-garantia-icon-4203793-31.png"
                                alt="Ícone de medalha com engrenagem simbolizando a qualidade e conformidade técnica dos cabos Corfio"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Normatização Rigorosa</h3>
                        <p class="section-11__value">Atende à ABNT NBR NM 247-3. Segurança jurídica e técnica para sua
                            obra</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-bobina-100m-icon-4203793-32.png"
                                alt="Ícone ilustrativo de bobina de cabo elétrico Corfio representando a embalagem de venda"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Máxima Flexibilidade</h3>
                        <p class="section-11__value">Classe 4/5 que garante deslizamento fácil e instalação rápida em
                            qualquer conduíte</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-antichama-autoextinguivel-icon-4203793-33.png"
                                alt="Ícone de chama cortada indicando propriedade antichama e autoextinguível do cabo Corfio"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Segurança Anti-chamas</h3>
                        <p class="section-11__value">Isolamento em PVC/A autoextinguível. Proteção ativa contra
                            propagação de fogo</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-condutor-cobre-flexibilidade-icon-4203793-34.png"
                                alt="Ícone de fios de cobre desencapados destacando a flexibilidade classe 4 ou 5 do condutor Corfio"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Cobre de Alta Pureza</h3>
                        <p class="section-11__value">Resistência máxima de 7,98 Ω/km, evitando o aquecimento excessivo
                            da rede</p>
                    </li>
                    <li class="section-11__item">
                        <figure class="section-11__figure">
                            <img class="section-11__image"
                                src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-protecao-contra-fogo-seguranca-icon-4203793-35.png"
                                alt="Ícone de escudo com chama interna representando a proteção e segurança contra incêndios Corfio"
                                width="74" height="74" loading="lazy">
                        </figure>
                        <h3 class="section-11__name">Resistência Térmica</h3>
                        <p class="section-11__value">Suporta picos de até 160°C em curto-circuito sem derreter a
                            isolação</p>
                    </li>

                </ul>
            </div>
        </section>

        <section class="section-9" aria-labelledby="section-9-title">
            <div class="section-9__header">
                <h2 class="section-9__title" id="section-9-title">Guia Rápido: Cabo Flexível 2,5mm</h2>
            </div>
            <ul class="section-9__list">
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <span class="section-9__q-text">Ele desliza bem no conduíte?</span>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim, possui acabamento em PVC de alto deslizamento e
                                flexibilidade classe 4/5. É projetado para passar fácil por curvas e tubulações
                                apertadas</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <span class="section-9__q-text">É cobre puro ou alumínio?</span>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Cobre 100% puro (têmpera mole). Garante a máxima condução de
                                energia e não sofre com a oxidação precoce dos fios mistos</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <span class="section-9__q-text">O material é antichama?</span>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim, possui isolação em PVC/A que não propaga fogo e se apaga
                                sozinho. Segurança total contra curtos-circuitos</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <span class="section-9__q-text">Para que serve o cabo 2,5mm?</span>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">É o padrão para tomadas de uso geral (quartos e salas) e
                                circuitos de iluminação. Suporta com segurança a carga de eletrodomésticos comuns</p>
                        </div>
                    </details>
                </li>
                <li class="section-9__item">
                    <details class="section-9__item">
                        <summary>
                            <span class="section-9__q-text">Posso instalar em parede de alvenaria?</span>
                            <span class="section-9__icon" aria-hidden="true"></span>
                        </summary>
                        <div class="section-9__a-inner">
                            <p class="section-9__a-text">Sim, é ideal para eletrodutos embutidos, aparentes ou
                                canaletas. Suporta temperaturas de até 70°C em uso constante</p>
                        </div>
                    </details>
                </li>
            </ul>
        </section>

        <p
            style="color: #8a8a8a; font-family: sans-serif; font-size: clamp(1rem, 2vw, 1.2rem); text-wrap: pretty; text-align: center; padding: 30px 0;">
            IMAGENS MERAMENTE ILUSTRATIVAS</p>
    </div>
</div>`,
      css:  ``,
    },
  ]
});
