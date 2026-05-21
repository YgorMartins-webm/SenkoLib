// @ts-nocheck
SenkoLib.registerVariant('section-6', [
/*@@@@Senko - variacao1 */
  {
    name: 'variacao1',
    html: `        <div class="section-6-container">
            <section class="section-6 section-6--inspiration" aria-labelledby="section-6-title">
                <picture>
                    <source media="(max-width: 760px)"
                        srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cacarola-antiaderente-granito-preto-tampa-vidro-lifestyle-3023082-07-2.jpg">
                    <img class="section-6__image"
                        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cacarola-antiaderente-granito-preto-tampa-vidro-ambientada-3023082-07-1.jpg"
                        alt="Frigideira Brinox Ceramic Life grafite sendo limpa no fogão após o preparo" loading="lazy"
                        decoding="async">
                </picture>
                <article class="section-6__content">
                    <h2 class="section-6__title" id="section-6-title">Transforme sua cozinha em um lugar de inspiração
                    </h2>
                    <p class="section-6__text">
                        Mais que panelas: acabamento grafite, detalhes amadeirados e desempenho para cozinhar com
                        estilo.
                    </p>
                    <ul class="section-6__badges" aria-label="Resumo de benefícios">
                        <li class="section-6__badge">
                            <span class="section-6__badge-icon" aria-hidden="true">+</span>
                            <span class="section-6__badge-text">Menos óleo no preparo</span>
                        </li>
                        <li class="section-6__badge">
                            <span class="section-6__badge-icon" aria-hidden="true">A</span>
                            <span class="section-6__badge-text">Classificação A no Inmetro</span>
                        </li>
                        <li class="section-6__badge">
                            <span class="section-6__badge-icon" aria-hidden="true">0</span>
                            <span class="section-6__badge-text">PFOA free e sem metais pesados</span>
                        </li>
                        <li class="section-6__badge">
                            <span class="section-6__badge-icon" aria-hidden="true">5</span>
                            <span class="section-6__badge-text">Cinco peças versáteis</span>
                        </li>
                    </ul>
                </article>
            </section>
        </div>`,
    css: `    <style>
        .section-6-container {
            padding-top: 0;
            padding-bottom: 0;
        }

        .section-6 {
            position: relative;
            display: grid;
            min-height: 430px;
            overflow: hidden;
            background: #111111;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
        }

        .section-6__image {
            display: block;
            width: 100%;
            height: 430px;
            object-fit: cover;
        }

        .section-6__content {
            display: grid;
            gap: 18px;
            padding: 28px 22px;
            background: #111111;
        }

        .section-6__title {
            margin: 0;
            color: #ffffff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 2.2rem;
            font-weight: 400;
            line-height: 1.08;
        }

        .section-6__text {
            margin: 0;
            color: #f4eee7;
            font-size: 1rem;
            line-height: 1.5;
        }

        .section-6__badges {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .section-6__badge {
            display: grid;
            grid-template-columns: 34px 1fr;
            gap: 10px;
            align-items: center;
            color: #ffffff;
            font-size: 0.88rem;
            line-height: 1.3;
        }

        .section-6__badge-icon {
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            border: 1px solid #c68a45;
            border-radius: 50%;
            color: #c68a45;
            font-size: 0.9rem;
            font-weight: 700;
        }

        @media (min-width: 576px) {
            .section-6__badges {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 768px) {
            .section-6 {
                min-height: 440px;
            }

            .section-6__image {
                height: 440px;
            }

            .section-6__content {
                left: 3%;
                top: 38%;
                position: absolute;
                inset: 0 auto 0 0;
                align-content: center;
                width: 48%;
                padding: 42px 36px;
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.62) 72%, rgba(0, 0, 0, 0) 100%);
            }
        }

        @media (min-width: 992px) {
            .section-6__title {
                font-size: 2.65rem;
            }
        }

        @media (min-width: 1200px) {
            .section-6__content {
                padding: 54px 46px;
            }
        }

        @media (min-width: 1400px) {
            .section-6 {
                min-height: 500px;
            }

            .section-6__image {
                height: 500px;
            }
        }

        @media (min-width: 768px) {
            .section-6--hero .section-6__content {
                position: absolute;
                inset: auto auto auto 5%;
                top: 50%;
                display: grid;
                gap: 12px;
                width: min(38%, 430px);
                padding: 24px 26px;
                transform: translateY(-50%);
                border: 1px solid rgba(198, 138, 69, 0.34);
                border-radius: 18px;
                background: linear-gradient(135deg, rgba(16, 15, 14, 0.84), rgba(38, 31, 25, 0.66));
                box-shadow: 0 18px 44px rgba(0, 0, 0, 0.24);
                backdrop-filter: blur(3px);
                text-align: left;
            }

            .section-6--hero .section-6__title {
                margin: 0;
                font-size: clamp(1.75rem, 2.8vw, 2.55rem);
                line-height: 1.08;
            }

            .section-6--hero .section-6__description {
                margin: 0;
                font-size: clamp(0.96rem, 1.35vw, 1.12rem);
                line-height: 1.5;
            }

            .section-6--inspiration .section-6__content {
                position: absolute;
                inset: auto auto auto 4%;
                top: 50%;
                display: grid;
                gap: 18px;
                width: min(44%, 520px);
                padding: 30px 32px;
                transform: translateY(-50%);
                border: 1px solid rgba(198, 138, 69, 0.32);
                border-radius: 18px;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.82), rgba(35, 28, 23, 0.58));
                box-shadow: 0 20px 48px rgba(0, 0, 0, 0.24);
                backdrop-filter: blur(3px);
            }

            .section-6--inspiration .section-6__badges {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 1200px) {
            .section-6--hero .section-6__content {
                left: 6%;
                padding: 28px 30px;
            }

            .section-6--inspiration .section-6__content {
                left: 5%;
                padding: 34px 36px;
            }
        }
    </style>`,
  },
/*@@@@Senko - variacao2 */
  {
    name: 'variacao2',
    html: `        <section class="section-6 section-6--hero" aria-label="Destaque do produto com texto">
            <picture>
                <source media="(max-width: 760px)"
                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/jogo-panelas-antiaderente-granito-preto-conjunto-completo-3023082-01-2.jpg"
                    width="780" height="400">
                <img class="section-6__image"
                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/jogo-panelas-antiaderente-granito-preto-conjunto-fundo-degrade-3023082-01-1.jpg"
                    alt="Jogo de panelas Brinox Ceramic Life Smart Plus grafite em cozinha moderna" width="1600"
                    height="650" loading="lazy" fetchpriority="high" decoding="async">
            </picture>
            <div class="section-6__content">
                <h2 class="section-6__title">Cozinhe com menos óleo e mais controle</h2>
                <p class="section-6__description">O revestimento cerâmico ajuda os alimentos a não grudarem e deixa a
                    limpeza mais rápida.</p>
            </div>
        </section>`,
    css: `    <style>
        .section-6-container {
            padding-top: 0;
            padding-bottom: 0;
        }

        .section-6 {
            position: relative;
            display: grid;
            min-height: 430px;
            overflow: hidden;
            background: #111111;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
        }

        .section-6__image {
            display: block;
            width: 100%;
            height: 430px;
            object-fit: cover;
        }

        .section-6__content {
            display: grid;
            gap: 18px;
            padding: 28px 22px;
            background: #111111;
        }

        .section-6__title {
            margin: 0;
            color: #ffffff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 2.2rem;
            font-weight: 400;
            line-height: 1.08;
        }

        .section-6__text {
            margin: 0;
            color: #f4eee7;
            font-size: 1rem;
            line-height: 1.5;
        }

        .section-6__badges {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .section-6__badge {
            display: grid;
            grid-template-columns: 34px 1fr;
            gap: 10px;
            align-items: center;
            color: #ffffff;
            font-size: 0.88rem;
            line-height: 1.3;
        }

        .section-6__badge-icon {
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            border: 1px solid #c68a45;
            border-radius: 50%;
            color: #c68a45;
            font-size: 0.9rem;
            font-weight: 700;
        }

        @media (min-width: 576px) {
            .section-6__badges {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 768px) {
            .section-6 {
                min-height: 440px;
            }

            .section-6__image {
                height: 440px;
            }

            .section-6__content {
                left: 3%;
                top: 38%;
                position: absolute;
                inset: 0 auto 0 0;
                align-content: center;
                width: 48%;
                padding: 42px 36px;
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.62) 72%, rgba(0, 0, 0, 0) 100%);
            }
        }

        @media (min-width: 992px) {
            .section-6__title {
                font-size: 2.65rem;
            }
        }

        @media (min-width: 1200px) {
            .section-6__content {
                padding: 54px 46px;
            }
        }

        @media (min-width: 1400px) {
            .section-6 {
                min-height: 500px;
            }

            .section-6__image {
                height: 500px;
            }
        }

        @media (min-width: 768px) {
            .section-6--hero .section-6__content {
                position: absolute;
                inset: auto auto auto 5%;
                top: 50%;
                display: grid;
                gap: 12px;
                width: min(38%, 430px);
                padding: 24px 26px;
                transform: translateY(-50%);
                border: 1px solid rgba(198, 138, 69, 0.34);
                border-radius: 18px;
                background: linear-gradient(135deg, rgba(16, 15, 14, 0.84), rgba(38, 31, 25, 0.66));
                box-shadow: 0 18px 44px rgba(0, 0, 0, 0.24);
                backdrop-filter: blur(3px);
                text-align: left;
            }

            .section-6--hero .section-6__title {
                margin: 0;
                font-size: clamp(1.75rem, 2.8vw, 2.55rem);
                line-height: 1.08;
            }

            .section-6--hero .section-6__description {
                margin: 0;
                font-size: clamp(0.96rem, 1.35vw, 1.12rem);
                line-height: 1.5;
            }

            .section-6--inspiration .section-6__content {
                position: absolute;
                inset: auto auto auto 4%;
                top: 50%;
                display: grid;
                gap: 18px;
                width: min(44%, 520px);
                padding: 30px 32px;
                transform: translateY(-50%);
                border: 1px solid rgba(198, 138, 69, 0.32);
                border-radius: 18px;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.82), rgba(35, 28, 23, 0.58));
                box-shadow: 0 20px 48px rgba(0, 0, 0, 0.24);
                backdrop-filter: blur(3px);
            }

            .section-6--inspiration .section-6__badges {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 1200px) {
            .section-6--hero .section-6__content {
                left: 6%;
                padding: 28px 30px;
            }

            .section-6--inspiration .section-6__content {
                left: 5%;
                padding: 34px 36px;
            }
        }
    </style>`,
  },
]);
