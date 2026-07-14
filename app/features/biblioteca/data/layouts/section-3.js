// @ts-nocheck
SenkoLib.registerLayout(
{
    id: 'section-3',
    name: 'Section-3',
    tags: ['full width', 'hero', '3', 'troca de imagem'],
    html: `        <section class="section-3" aria-label="Características do Esmalte Impala Disney Channel Metal We Rock 7,5 ml">
            <article class="section-3__frame">
                <figure class="section-3__media">
                    <picture class="section-3__picture">
                        <source media="(max-width: 760px)"
                            srcset="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/esmalte-impala-disney-channel-camp-rock-ambientado-vertical-metalizado-prata-113631-01-2.webp">
                        <img class="section-3__image"
                            src="https://imgprd.martinsatacado.com.br/catalogoimg/catalogo/esmalte-impala-disney-channel-camp-rock-ambientado-horizontal-metalizado-prata-113631-01-1.webp"
                            alt="Esmalte Impala Disney Channel Metal We Rock 7,5 ml em cenário inspirado em Camp Rock"
                            width="1600" height="650" loading="lazy" decoding="async">
                    </picture>
                </figure>
                <article class="section-3__callout">
                    <span class="section-3__icon" aria-hidden="true">
                        <svg class="section-3__icon-svg" viewBox="0 0 48 48" fill="none" focusable="false">
                            <path d="M24 5.5 39 11v11.5c0 9.5-6.1 16.8-15 20-8.9-3.2-15-10.5-15-20V11l15-5.5Z"
                                stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
                            <path d="m17 24 4.5 4.5L31.5 18" stroke="currentColor" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <div class="section-3__copy">
                        <h2 class="section-3__title">Atitude com acabamento metalizado</h2>
                        <p class="section-3__text">Inspirado em Camp Rock, o Metal We Rock traduz a nostalgia da Disney
                            Channel
                            em um acabamento metalizado criado para brilhar.
                        </p>
                    </div>
                </article>
            </article>
        </section>`,
    css: `    <style>
        .section-3 {
            --s2-color-brand: #4a4d52;
            --s2-color-ink: #202124;
            --s2-color-muted: #686c72;
            --s2-color-panel: rgba(255, 255, 255, 0.92);
            width: 100%;
            padding: 0 1rem 1rem;
            font-family: Roboto, Arial, sans-serif;
            color: var(--s2-color-ink);
            overflow-wrap: anywhere;
        }

        .section-3__frame {
            width: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem;
            background: #e5e7e9;
            box-shadow: 0 1rem 2.5rem rgba(74, 77, 82, 0.14);
        }

        .section-3__media {
            width: 100%;
            margin: 0;
            aspect-ratio: 16 / 9;
        }

        .section-3__picture {
            width: 100%;
            height: 100%;
            display: block;
        }

        .section-3__image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        .section-3__callout {
            display: flex;
            align-items: start;
            gap: 1rem;
            margin: 1rem;
            padding: 1.5rem;
            border: 1px solid rgba(74, 77, 82, 0.20);
            border-radius: 1.5rem;
            background: var(--s2-color-panel);
            box-shadow: 0 1rem 2rem rgba(74, 77, 82, 0.12);
        }

        .section-3__icon {
            width: 3.5rem;
            height: 3.5rem;
            flex: 0 0 3.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            color: var(--s2-color-brand);
            background: #eceeef;
        }

        .section-3__icon-svg {
            width: 2.5rem;
            height: 2.5rem;
            display: block;
        }

        .section-3__title {
            color: var(--s2-color-brand);
            font-size: clamp(1.5rem, 4vw, 2.375rem);
            font-weight: 700;
            line-height: 1.18;
            margin: 0;
            text-wrap: balance;
        }

        .section-3__text {
            color: var(--s2-color-muted);
            font-size: clamp(0.9375rem, 2vw, 1.125rem);
            font-weight: 400;
            line-height: 1.7;
            margin: 1rem 0 0;
            text-wrap: pretty;
        }

        @media (min-width: 576px) {
            .section-3 {
                padding: 0 1.5rem 1rem;
            }
        }

        @media (min-width: 760px) {
            .section-3 {
                padding: 0 2rem 1rem;
            }

            .section-3__callout {
                width: min(48%, 25rem);
                position: absolute;
                top: 50%;
                left: 45%;
                /* <-- ponto fixo: ajuste esse valor como quiser */
                margin: 0;
                transform: translateY(-50%);
            }

            .section-3__frame {
                outline: 8px solid #4a4d52;
                border: 1px solid #8b9097;
            }
        }

        @media (min-width: 992px) {
            .section-3 {
                padding: 0 2.5rem 1rem;
            }

            .section-3__callout {
                padding: 2rem;
                /* sem "left" aqui — mantém o mesmo ponto definido acima */
            }
        }

        @media (min-width: 1200px) {
            .section-3 {
                padding: 0 3rem 1rem;
            }
        }

        @media (min-width: 1400px) {
            .section-3 {
                padding: 0 3rem 1rem;
            }
        }
    </style>`
}
);
