// @ts-nocheck
SenkoLib.registerLayout(
{
    id: 'section-29',
    name: 'Section-29',
    tags: [],
    html: `<section class="section-29 section-29--image-left" aria-labelledby="section-29-title">
    <div class="section-29__container">
        <figure class="section-29__figure">
            <picture>
                <source media="(min-width: 768px)" srcset="assets/xerosa-produto-v2.png">
                <img class="section-29__image" width="1448" height="1086" loading="eager" decoding="async" src="assets/xerosa-produto-v2.png" alt="Creme para pentear Salon Line X&ecirc;rosa em cen&aacute;rio rosado com cerejas e flores">
            </picture>
        </figure>
        <div class="section-29__content">
            <h2 class="section-29__title" id="section-29-title">Tratamento completo para cachos definidos</h2>
            <p class="section-29__text">Uma f&oacute;rmula nutritiva para hidratar, equilibrar a porosidade e envolver os fios com uma fragr&acirc;ncia frutada.</p>
            <ul class="section-29__list">
                <li class="section-29__item">Mais defini&ccedil;&atilde;o e controle do frizz</li>
                <li class="section-29__item">Desembara&ccedil;o f&aacute;cil no dia a dia</li>
                <li class="section-29__item">Brilho, maciez e movimento</li>
            </ul>
        </div>
    </div>
</section>`,
    css: `<style>
    .section-29 {
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        background: #fffaf6;
        color: #2b1720;
        font-family: Arial, Helvetica, sans-serif;
    }

    .section-29__container {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        align-items: start;
        gap: 32px;
        padding: 24px 16px 40px;
    }

    .section-29__figure {
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 4 / 3;
        margin: 0;
        overflow: hidden;
        border-radius: 24px;
        background: #ffd8bf;
    }

    .section-29__image {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .section-29__content {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: start;
        gap: 16px;
    }

    .section-29__title {
        box-sizing: border-box;
        margin: 0;
        overflow-wrap: anywhere;
        color: #24121a;
        font-size: clamp(1.75rem, 5vw, 3rem);
        font-weight: 400;
        line-height: 1.15;
    }

    .section-29__text {
        box-sizing: border-box;
        margin: 0;
        overflow-wrap: anywhere;
        color: #624c55;
        font-size: clamp(0.9375rem, 2.4vw, 1.0625rem);
        line-height: 1.75;
    }

    .section-29__list {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        align-items: start;
        gap: 8px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .section-29__item {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 24px minmax(0, 1fr);
        align-items: start;
        gap: 8px;
        overflow-wrap: anywhere;
        color: #463139;
        font-size: clamp(0.875rem, 2.2vw, 1rem);
        line-height: 1.6;
    }

    .section-29__item::before {
        box-sizing: border-box;
        display: grid;
        width: 24px;
        height: 24px;
        place-items: center;
        border: 1px solid #f0708b;
        border-radius: 50%;
        color: #df3157;
        content: "\\2713";
        font-size: 0.75rem;
        line-height: 1;
    }

    @media (min-width: 576px) {
        .section-29__container {
            padding: 32px 32px 48px;
        }

        .section-29__content {
            gap: 24px;
        }
    }

    @media (min-width: 768px) {
        .section-29__container {
            grid-template-columns: minmax(0, 56fr) minmax(0, 44fr);
            align-items: center;
            gap: 40px;
            padding: 40px;
        }

        .section-29--image-left .section-29__figure {
            grid-column: 1;
        }

        .section-29--image-left .section-29__content {
            grid-column: 2;
        }

        .section-29--image-right .section-29__figure {
            grid-column: 2;
            grid-row: 1;
        }

        .section-29--image-right .section-29__content {
            grid-column: 1;
            grid-row: 1;
        }
    }

    @media (min-width: 992px) {
        .section-29__container {
            gap: 56px;
            padding: 48px 56px;
        }

        .section-29__content {
            padding: 24px 0;
        }
    }

    @media (min-width: 1200px) {
        .section-29__container {
            gap: 64px;
            padding: 64px 72px;
        }
    }

    @media (min-width: 1400px) {
        .section-29__container {
            gap: 80px;
            padding: 80px 96px;
        }
    }

    .section-30 {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        overflow: hidden;
        background: #fff1e8;
        color: #2b1720;
        font-family: Arial, Helvetica, sans-serif;
    }

    .section-30__container {
        box-sizing: border-box;
        position: relative;
        width: 100%;
    }

    .section-30__content {
        box-sizing: border-box;
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 32px 16px 40px;
    }

    .section-30__title {
        box-sizing: border-box;
        margin: 0 0 32px;
        overflow-wrap: anywhere;
        color: #24121a;
        font-size: clamp(1.75rem, 5vw, 2.75rem);
        font-weight: 400;
        line-height: 1.2;
        text-align: center;
    }

    .section-30__control {
        box-sizing: border-box;
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
    }

    .section-30__viewport {
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
    }

    .section-30__track {
        box-sizing: border-box;
        display: flex;
        align-items: start;
        margin: 0;
        padding: 0;
        list-style: none;
        transition: transform 0.35s ease;
    }

    .section-30__item {
        box-sizing: border-box;
        flex: 0 0 100%;
        min-width: 0;
        padding: 0 8px;
    }

    .section-30__card {
        box-sizing: border-box;
        display: flex;
        min-height: 100%;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin: 0;
        padding: 32px 24px;
        border: 1px solid #f1deda;
        border-radius: 16px;
        background: #fffdfb;
        box-shadow: 0 8px 24px rgba(98, 52, 64, 0.08);
        text-align: center;
    }

    .section-30__icon {
        box-sizing: border-box;
        display: grid;
        width: 64px;
        height: 64px;
        flex: 0 0 64px;
        place-items: center;
        border: 1px solid #ffc3d0;
        border-radius: 50%;
        background: #ffe7ed;
        color: #df3157;
    }

    .section-30__card-title {
        box-sizing: border-box;
        margin: 0;
        overflow-wrap: anywhere;
        color: #2c1720;
        font-size: clamp(1.125rem, 3vw, 1.375rem);
        font-weight: 500;
        line-height: 1.3;
    }

    .section-30__card-text {
        box-sizing: border-box;
        margin: 0;
        overflow-wrap: anywhere;
        color: #674e57;
        font-size: clamp(0.875rem, 2.2vw, 1rem);
        line-height: 1.65;
    }

    .section-30__accent {
        box-sizing: border-box;
        width: 48px;
        height: 2px;
        margin: 8px auto 0;
        border-radius: 999px;
        background: #e74468;
    }

    #section-30-slide-1:checked ~ .section-30__viewport .section-30__track {
        transform: translateX(0);
    }

    #section-30-slide-2:checked ~ .section-30__viewport .section-30__track {
        transform: translateX(-100%);
    }

    #section-30-slide-3:checked ~ .section-30__viewport .section-30__track {
        transform: translateX(-200%);
    }

    .section-30__controls {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 8px;
        margin: 24px 0 0;
    }

    .section-30__button {
        box-sizing: border-box;
        display: grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border: 1px solid #e9b8c3;
        border-radius: 50%;
        background: #ffffff;
        color: #7c2d43;
        cursor: pointer;
        font-size: clamp(0.75rem, 2vw, 0.875rem);
        font-weight: 700;
        line-height: 1;
        transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
    }

    .section-30__button:hover {
        transform: translateY(-2px);
    }

    #section-30-slide-1:checked ~ .section-30__controls .section-30__button--1,
    #section-30-slide-2:checked ~ .section-30__controls .section-30__button--2,
    #section-30-slide-3:checked ~ .section-30__controls .section-30__button--3 {
        border-color: #d93359;
        background: #d93359;
        color: #ffffff;
    }

    @media (min-width: 576px) {
        .section-30__content {
            padding: 40px 32px 48px;
        }

        .section-30__card {
            padding: 40px 32px;
        }
    }

    @media (min-width: 768px) {
        .section-30__content {
            padding: 48px 40px 56px;
        }

        .section-30__item {
            flex-basis: 50%;
        }

        #section-30-slide-1:checked ~ .section-30__viewport .section-30__track {
            transform: translateX(0);
        }

        #section-30-slide-2:checked ~ .section-30__viewport .section-30__track,
        #section-30-slide-3:checked ~ .section-30__viewport .section-30__track {
            transform: translateX(-50%);
        }
    }

    @media (min-width: 992px) {

        .section-30__content {
            width: 100%;
            min-height: 0;
            padding: 48px 40px;
        }

        .section-30__title {
            margin-bottom: 32px;
        }

        .section-30__track {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
        }

        .section-30__item {
            padding: 0;
        }

        .section-30__card {
            gap: 16px;
            padding: 24px 16px;
        }

        #section-30-slide-1:checked ~ .section-30__viewport .section-30__track,
        #section-30-slide-2:checked ~ .section-30__viewport .section-30__track,
        #section-30-slide-3:checked ~ .section-30__viewport .section-30__track {
            transform: none;
        }

        .section-30__controls {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            margin: 0;
            opacity: 0;
            pointer-events: none;
        }
    }

    @media (min-width: 1200px) {
        .section-30__content {
            width: 100%;
            min-height: 0;
            padding: 56px 48px;
        }

        .section-30__track {
            gap: 24px;
        }

        .section-30__card {
            padding: 32px 24px;
        }
    }

    @media (min-width: 1400px) {
        .section-30__content {
            min-height: 0;
            padding: 64px 72px;
        }

        .section-30__track {
            gap: 32px;
        }
    }
</style>`
}
);
