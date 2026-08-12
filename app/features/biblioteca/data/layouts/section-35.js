// @ts-nocheck
SenkoLib.registerLayout(
{
    id: 'section-35',
    name: 'Section-35',
    tags: ['responsivo', 'grid'],
    html: `<section class="section-34" aria-labelledby="section-34-title">
            <div class="section-34__container">

                <h2 class="section-34__title" id="section-34-title">
                    Essências de Brasilidades
                </h2>

                <ul class="section-34__list">

                    <li class="section-34__item">
                        <figure class="section-34__figure">
                            <picture>
                                <source media="(min-width: 576px)"
                                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-agua-de-coco-copo-208348-02-01.webp">
                                <img class="section-34__image" loading="lazy" width="300" height="300"
                                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-agua-de-coco-copo-208348-02-01.webp"
                                    alt="Coco verde aberto espirrando água ao lado copo ingrediente linha Francis Brasilidades">
                            </picture>
                        </figure>

                        <div class="section-34__body">
                            <h3 class="section-34__item-title">
                                Água de coco
                            </h3>


                        </div>
                    </li>

                    <li class="section-34__item">
                        <figure class="section-34__figure">
                            <picture>
                                <source media="(min-width: 576px)"
                                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-capim-limao-208348-02-02.webp">
                                <img class="section-34__image" loading="lazy" width="300" height="300"
                                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-capim-limao-208348-02-02.webp"
                                    alt="Hastes capim-limão sobre superfície verde variante linha Sabonete Francis Brasilidades">
                            </picture>
                        </figure>

                        <div class="section-34__body">
                            <h3 class="section-34__item-title">
                                Capim limão
                            </h3>


                        </div>
                    </li>

                    <li class="section-34__item">
                        <figure class="section-34__figure">
                            <picture>
                                <source media="(min-width: 576px)"
                                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-manga-rosa-208348-02-03.webp">
                                <img class="section-34__image" loading="lazy" width="300" height="300"
                                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-manga-rosa-208348-02-03.webp"
                                    alt="Manga rosa inteira fatiada flor tropical — ingredientes linha Sabonete Francis Brasilidades">
                            </picture>
                        </figure>

                        <div class="section-34__body">
                            <h3 class="section-34__item-title">
                                Manga rosa
                            </h3>


                        </div>
                    </li>

                    <li class="section-34__item">
                        <figure class="section-34__figure">
                            <picture>
                                <source media="(min-width: 576px)"
                                    srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-carambola-208348-02-04.webp">
                                <img class="section-34__image" loading="lazy" width="300" height="300"
                                    src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/sabonete-liquido-francis-brasilidades-ingrediente-carambola-208348-02-04.webp"
                                    alt="Carambola inteira fatiada formato estrela variante tropical Sabonete Francis Brasilidades">
                            </picture>
                        </figure>

                        <div class="section-34__body">
                            <h3 class="section-34__item-title">
                                Carambola
                            </h3>


                        </div>
                    </li>

                </ul>

            </div>
        </section>`,
    css: `<style>
        .section-34 {
            --s34-color-primary: #008c8c;
            --s34-color-title: #007f83;
            --s34-color-text: #1f3033;
            --s34-color-background: #eff9f7;
            --s34-color-border: #d2ebe7;

            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow: hidden;
        }

        .section-34__container {
            width: 100%;
            margin: 0;
            padding: 2rem 1rem;
            border-top: 1px solid var(--s34-color-border);
            border-bottom: 1px solid var(--s34-color-border);
            background:
                linear-gradient(135deg,
                    rgba(255, 255, 255, 0.84),
                    rgba(239, 249, 247, 0.96)),
                var(--s34-color-background);
            box-sizing: border-box;
            overflow: hidden;
            margin-top: 1%
        }

        .section-34__title {
            width: 100%;
            margin: 0 0 2rem;
            color: var(--s34-color-title);
            font-size: clamp(1rem, 3vw, 1.25rem);
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.04em;
            text-align: center;
            text-transform: uppercase;
            overflow-wrap: anywhere;
        }

        .section-34__list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
            gap: 2rem 1rem;
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .section-34__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            min-width: 0;
            text-align: center;
        }

        .section-34__figure {
            width: clamp(5.5rem, 24vw, 7.5rem);
            aspect-ratio: 1 / 1;
            margin: 0;
            border-radius: 50%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .section-34__image {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .section-34__body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            min-width: 0;
        }

        .section-34__item-title {
            margin: 0;
            color: var(--s34-color-primary);
            font-size: clamp(0.75rem, 2.5vw, 0.9375rem);
            font-weight: 800;
            line-height: 1.3;
            text-align: center;
            text-transform: uppercase;
            overflow-wrap: anywhere;
        }

        .section-34__text {
            margin: 0;
            color: var(--s34-color-text);
            font-size: clamp(0.75rem, 2.25vw, 0.875rem);
            font-weight: 400;
            line-height: 1.45;
            text-align: center;
            overflow-wrap: anywhere;
        }

        .section-34--compact .section-34__container {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .section-34--compact .section-34__list {
            gap: 1rem;
        }

        @media (min-width: 576px) {
            .section-34__container {
                width: 100%;
                padding: 2rem 1.5rem;
            }

            .section-34__list {
                gap: 2rem 1.5rem;
            }

            .section-34__figure {
                width: 7rem;
            }
        }

        @media (min-width: 768px) {
            .section-34__container {
                width: 100%;
                padding: 2.5rem 2rem;
                margin-top: 1%
            }

            .section-34__title {
                margin-bottom: 2rem;
            }

            .section-34__list {
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 2rem;
            }

            .section-34__figure {
                width: 7.5rem;
            }
        }

        @media (min-width: 992px) {
            .section-34__container {
                width: 100%;
                padding: 2.5rem 3rem;
            }

            .section-34__list {
                gap: 2.5rem;
            }

            .section-34__figure {
                width: 8.5rem;
            }
        }

        @media (min-width: 1200px) {
            .section-34__container {
                width: 100%;
                padding: 2.5rem 4rem;
            }

            .section-34__list {
                gap: 3rem;
            }

            .section-34__figure {
                width: 9rem;
            }

            .section-34__text {
                width: 90%;
            }
        }

        @media (min-width: 1400px) {
            .section-34__container {
                width: 100%;
                padding-right: 4rem;
                padding-left: 4rem;
            }
        }
    </style>`
}
);
