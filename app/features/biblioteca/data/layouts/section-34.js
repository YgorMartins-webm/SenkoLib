// @ts-nocheck
SenkoLib.registerLayout(
{
    id: 'section-34',
    name: 'Section-34',
    tags: ['responsivo'],
    html: `<input class="section-34__radio" type="radio" name="slide-34" id="s34-1" checked>
        <input class="section-34__radio" type="radio" name="slide-34" id="s34-2">
        <input class="section-34__radio" type="radio" name="slide-34" id="s34-3">

        <section class="section-34" aria-label="Aplicações do produto">
            <div class="section-34__container">

                <div class="section-34__viewport">
                    <ul class="section-34__track">

                        <li class="section-34__item">
                            <figure class="section-34__figure">
                                <picture class="section-34__picture">
                                    <source media="(min-width: 768px)"
                                        srcset="https://static1.efacil.com.br/wcsstore/AuroraStorefrontAssetStore/PDP/megatron/404517_04-2.png">

                                    <img class="section-34__image"
                                        src="https://static1.efacil.com.br/wcsstore/AuroraStorefrontAssetStore/PDP/megatron/404517_04-2.png"
                                        alt="Interior de uma obra com paredes em construção e instalações aparentes"
                                        width="400" height="300" loading="lazy">
                                </picture>

                                <figcaption class="section-34__description">
                                    Indicado para circuitos de distribuição de energia em comércios, galpões,
                                    áreas técnicas e ambientes industriais, conforme o projeto elétrico.
                                </figcaption>
                            </figure>
                        </li>

                        <li class="section-34__item">
                            <figure class="section-34__figure">
                                <picture class="section-34__picture">
                                    <source media="(min-width: 768px)"
                                        srcset="https://static1.efacil.com.br/wcsstore/AuroraStorefrontAssetStore/PDP/megatron/404517_04-1.png">

                                    <img class="section-34__image"
                                        src="https://static1.efacil.com.br/wcsstore/AuroraStorefrontAssetStore/PDP/megatron/404517_04-1.png"
                                        alt="Recepção moderna e iluminada representando uma instalação predial"
                                        width="400" height="300" loading="lazy">
                                </picture>

                                <figcaption class="section-34__description">
                                    Aplicável em casas e prédios residenciais para circuitos que exigem
                                    seção nominal de 4,0 mm² e condutor flexível de cobre.
                                </figcaption>
                            </figure>
                        </li>

                        <li class="section-34__item">
                            <figure class="section-34__figure">
                                <picture class="section-34__picture">
                                    <source media="(min-width: 768px)"
                                        srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-aplicacao-cozinha-lifestyle-4203793-21.jpg">

                                    <img class="section-34__image"
                                        src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/cabo-flexivel-corfio-aplicacao-cozinha-lifestyle-4203793-21.jpg"
                                        alt="Cozinha residencial representando a aplicação de cabos elétricos"
                                        width="400" height="300" loading="lazy">
                                </picture>

                                <figcaption class="section-34__description">
                                    Pode atender circuitos específicos em cozinhas e áreas de serviço quando
                                    o projeto exigir seção de 4,0 mm².
                                </figcaption>
                            </figure>
                        </li>

                    </ul>
                </div>

                <div class="section-34__controls" role="group" aria-label="Navegação do carrossel">

                    <div class="section-34__button-slot">
                        <span class="section-34__button-disabled section-34__previous-start" aria-hidden="true">
                            &#8592;
                        </span>

                        <label class="section-34__button section-34__previous-to-1" for="s34-1"
                            aria-label="Voltar para o primeiro item">
                            &#8592;
                        </label>

                        <label class="section-34__button section-34__previous-to-2" for="s34-2"
                            aria-label="Voltar para o segundo item">
                            &#8592;
                        </label>
                    </div>

                    <div class="section-34__dots">
                        <label class="section-34__dot section-34__dot--1" for="s34-1" aria-label="Exibir primeiro item">
                        </label>

                        <label class="section-34__dot section-34__dot--2" for="s34-2" aria-label="Exibir segundo item">
                        </label>

                        <label class="section-34__dot section-34__dot--3" for="s34-3" aria-label="Exibir terceiro item">
                        </label>
                    </div>

                    <div class="section-34__button-slot">
                        <label class="section-34__button section-34__next-to-2" for="s34-2"
                            aria-label="Avançar para o segundo item">
                            &#8594;
                        </label>

                        <label class="section-34__button section-34__next-to-3" for="s34-3"
                            aria-label="Avançar para o terceiro item">
                            &#8594;
                        </label>

                        <span class="section-34__button-disabled section-34__next-end" aria-hidden="true">
                            &#8594;
                        </span>
                    </div>

                </div>
            </div>
        </section>`,
    css: ` <style>
        /* Inputs responsáveis por guardar o estado atual do carrossel */
        .section-34__radio {
            position: fixed;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            margin: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
            appearance: none;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            opacity: 0;
            pointer-events: none;
        }

        /* Estrutura geral da seção */
        .section-34 {
            --s34-color-brand: #d52b1e;
            --s34-color-text: #202020;
            --s34-color-description: #575757;
            --s34-color-control: #e4e4e4;
            --s34-color-background: #ffffff;

            width: 100%;
            overflow: hidden;
            color: var(--s34-color-text);
            background-color: var(--s34-color-background);
        }

        /* Container principal */
        .section-34__container {
            width: 100%;
            margin: 0 auto;
            padding: 24px 16px;
        }

        /* Título principal */
        .section-34__title {
            width: min(100%, 40rem);
            margin: 0 auto 24px;
            font-size: clamp(1.25rem, 4vw, 1.75rem);
            line-height: 1.2;
            font-weight: 700;
            text-align: center;
            overflow-wrap: anywhere;
        }

        /* Janela que esconde os itens laterais */
        .section-34__viewport {
            width: 100%;
            overflow: hidden;
        }

        /* Trilho movimentado pelos radios */
        .section-34__track {
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: flex-start;
            list-style: none;
            transition: transform 400ms ease;
            will-change: transform;
        }

        /* Cada item ocupa toda a largura da janela */
        .section-34__item {
            flex: 0 0 100%;
            min-width: 0;
            padding: 0 8px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }

        /* Agrupa a imagem e o parágrafo */
        .section-34__figure {
            width: min(100%, 24rem);
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            text-align: center;
        }

        /* Área circular da imagem */
        .section-34__picture {
            width: clamp(10rem, 52vw, 12rem);
            aspect-ratio: 1 / 1;
            display: block;
            overflow: hidden;
            border: 3px solid var(--s34-color-brand);
            border-radius: 50%;
        }

        /* Imagem recortada dentro do círculo */
        .section-34__image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
        }

        /* Texto abaixo da imagem */
        .section-34__description {
            width: min(100%, 22rem);
            margin: 0;
            color: var(--s34-color-description);
            font-size: clamp(0.875rem, 3vw, 1rem);
            line-height: 1.5;
            overflow-wrap: anywhere;
        }

        /* Área de navegação */
        .section-34__controls {
            width: min(100%, 14rem);
            margin: 16px auto 0;
            display: grid;
            grid-template-columns: 32px 1fr 32px;
            align-items: center;
            gap: 8px;
        }

        /* Espaço reservado para cada seta */
        .section-34__button-slot {
            position: relative;
            width: 32px;
            height: 32px;
        }

        /* Setas clicáveis e estados desabilitados */
        .section-34__button,
        .section-34__button-disabled {
            position: absolute;
            inset: 0;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 2px solid var(--s34-color-control);
            border-radius: 50%;
            font-size: clamp(1rem, 3vw, 1.125rem);
            line-height: 1;
            opacity: 0;
            pointer-events: none;
            transition:
                color 200ms ease,
                border-color 200ms ease,
                background-color 200ms ease,
                opacity 200ms ease;
        }

        .section-34__button {
            color: var(--s34-color-text);
            background-color: var(--s34-color-background);
            cursor: pointer;
            user-select: none;
        }

        .section-34__button:hover {
            color: var(--s34-color-background);
            border-color: var(--s34-color-brand);
            background-color: var(--s34-color-brand);
        }

        .section-34__button-disabled {
            color: #a0a0a0;
            background-color: var(--s34-color-background);
            cursor: not-allowed;
        }

        /* Indicadores inferiores */
        .section-34__dots {
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .section-34__dot {
            width: 12px;
            height: 12px;
            display: block;
            flex: 0 0 auto;
            border: 2px solid var(--s34-color-brand);
            border-radius: 999px;
            background-color: transparent;
            cursor: pointer;
            transition:
                width 200ms ease,
                background-color 200ms ease;
        }

        /* Movimentação do carrossel */
        #s34-1:checked~.section-34 .section-34__track {
            transform: translateX(0);
        }

        #s34-2:checked~.section-34 .section-34__track {
            transform: translateX(-100%);
        }

        #s34-3:checked~.section-34 .section-34__track {
            transform: translateX(-200%);
        }

        /* Indicador ativo */
        #s34-1:checked~.section-34 .section-34__dot--1,
        #s34-2:checked~.section-34 .section-34__dot--2,
        #s34-3:checked~.section-34 .section-34__dot--3 {
            width: 24px;
            background-color: var(--s34-color-brand);
        }

        /* Botões exibidos no primeiro item */
        #s34-1:checked~.section-34 .section-34__previous-start,
        #s34-1:checked~.section-34 .section-34__next-to-2 {
            opacity: 1;
        }

        #s34-1:checked~.section-34 .section-34__next-to-2 {
            pointer-events: auto;
        }

        /* Botões exibidos no segundo item */
        #s34-2:checked~.section-34 .section-34__previous-to-1,
        #s34-2:checked~.section-34 .section-34__next-to-3 {
            opacity: 1;
            pointer-events: auto;
        }

        /* Botões exibidos no terceiro item */
        #s34-3:checked~.section-34 .section-34__previous-to-2,
        #s34-3:checked~.section-34 .section-34__next-end {
            opacity: 1;
        }

        #s34-3:checked~.section-34 .section-34__previous-to-2 {
            pointer-events: auto;
        }

        /* Foco de teclado nos indicadores */
        #s34-1:focus-visible~.section-34 .section-34__dot--1,
        #s34-2:focus-visible~.section-34 .section-34__dot--2,
        #s34-3:focus-visible~.section-34 .section-34__dot--3 {
            outline: 2px solid var(--s34-color-text);
            outline-offset: 4px;
        }

        /* Variação com conteúdo alinhado à esquerda */
        .section-34--left .section-34__title {
            margin-left: 0;
            text-align: left;
        }

        .section-34--left .section-34__item {
            justify-content: flex-start;
        }

        .section-34--left .section-34__figure {
            align-items: flex-start;
            text-align: left;
        }

        .section-34--left .section-34__controls {
            margin-right: auto;
            margin-left: 0;
        }

        /* Base mobile-first — cobre até 575px */

        @media (min-width: 576px) {
            .section-34__container {
                padding: 24px;
            }

            .section-34__item {
                padding: 0 16px;
            }
        }

        @media (min-width: 768px) {
            .section-34__container {
                padding: 32px 24px;
            }

            .section-34__title {
                margin-bottom: 24px;
            }

            .section-34__picture {
                width: clamp(12rem, 28vw, 15rem);
            }

            .section-34__controls {
                margin-top: 16px;
            }
        }

        @media (min-width: 992px) {
            .section-34__container {
                padding: 24px 32px;
            }

            .section-34__item {
                padding: 0 24px;
            }
        }

        @media (min-width: 1200px) {
            .section-34__container {
                padding: 24px 40px;
            }
        }
    </style>`
}
);
