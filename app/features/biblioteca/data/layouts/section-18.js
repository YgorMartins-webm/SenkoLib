// @ts-nocheck
SenkoLib.registerLayout(
{
    id: 'section-18',
    name: 'Section-18',
    tags: ['split'],
    html: `    <section class="section-18" aria-label="Abas de conteúdo sobre o produto">

        <input class="section-18__radio" id="s26-tab1" type="radio" name="s26-tabs" aria-label="Mostrar aba Como age" checked>
        <input class="section-18__radio" id="s26-tab2" type="radio" name="s26-tabs" aria-label="Mostrar aba Onde aplicar">
        <input class="section-18__radio" id="s26-tab3" type="radio" name="s26-tabs" aria-label="Mostrar aba Dosagem">
        <input class="section-18__radio" id="s26-tab4" type="radio" name="s26-tabs" aria-label="Mostrar aba Cuidados">

        <div class="section-18-container">
            <div class="section-18__nav" role="group" aria-label="Seções do produto">
                <label class="section-18__tab-label" for="s26-tab1">Como age</label>
                <label class="section-18__tab-label" for="s26-tab2">Onde aplicar</label>
                <label class="section-18__tab-label" for="s26-tab3">Dosagem</label>
                <label class="section-18__tab-label" for="s26-tab4">Cuidados</label>
            </div>

            <div class="section-18__panels">

                <!-- ABA 1: Como age -->
                <div class="section-18__panel section-18__panel--1" role="group" aria-label="Como age">
                    <div class="section-18__split">
                        <figure class="section-18__figure">
                            <img class="section-18__image" width="800" height="600" loading="lazy"
                                src="https://images.unsplash.com/photo-1632053001233-e5b9c0e56c8f?w=800&q=80"
                                alt="Aplicação do produto líquido em recipiente com água para controle de larvas">
                        </figure>
                        <div class="section-18__body">
                            <h2 class="section-18__title">Inibidor do desenvolvimento<br>de insetos</h2>
                            <p class="section-18__description">O princípio ativo Diflubenzuron atua na fase larvária do inseto, interferindo na síntese de quitina, elemento essencial na constituição do exoesqueleto. Sem a formação adequada da cutícula, as larvas não conseguem se desenvolver e acabam morrendo.</p>
                            <ul class="section-18__features">
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Ação específica na fase larvária
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Interfere na síntese de quitina
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Previne o desenvolvimento e novas infestações
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- ABA 2: Onde aplicar -->
                <div class="section-18__panel section-18__panel--2" role="group" aria-label="Onde aplicar">
                    <div class="section-18__split">
                        <figure class="section-18__figure">
                            <img class="section-18__image" width="800" height="600" loading="lazy"
                                src="https://images.unsplash.com/photo-1597484662317-16b426db4483?w=800&q=80"
                                alt="Locais com água parada como pratos de vasos, calhas e reservatórios">
                        </figure>
                        <div class="section-18__body">
                            <h2 class="section-18__title">Indicado para água<br>parada e reservatórios</h2>
                            <p class="section-18__description">Ideal para tratar pontos de água parada onde os insetos costumam se reproduzir: pratos de vasos de planta, calhas, caixas d'água descobertas, ralos externos e recipientes de jardim. Não recomendado para água de consumo humano ou animal.</p>
                            <ul class="section-18__features">
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Pratos de vasos e jardineiras
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Calhas e ralos externos
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Caixas d'água e recipientes descobertos
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- ABA 3: Dosagem -->
                <div class="section-18__panel section-18__panel--3" role="group" aria-label="Dosagem">
                    <div class="section-18__split">
                        <figure class="section-18__figure">
                            <img class="section-18__image" width="800" height="600" loading="lazy"
                                src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=800&q=80"
                                alt="Medição de gotas do produto para dosagem correta">
                        </figure>
                        <div class="section-18__body">
                            <h2 class="section-18__title">Dosagem simples<br>e de fácil aplicação</h2>
                            <p class="section-18__description">Aplique diretamente no recipiente com água, seguindo a proporção indicada no rótulo conforme o volume tratado. A ação residual mantém a proteção por semanas, sem necessidade de reaplicações frequentes.</p>
                            <ul class="section-18__features">
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Aplicação direta, sem diluição prévia
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Proporção de acordo com o rótulo
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Efeito residual de longa duração
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- ABA 4: Cuidados -->
                <div class="section-18__panel section-18__panel--4" role="group" aria-label="Cuidados">
                    <div class="section-18__split">
                        <figure class="section-18__figure">
                            <img class="section-18__image" width="800" height="600" loading="lazy"
                                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80"
                                alt="Armazenamento seguro do produto fora do alcance de crianças e animais">
                        </figure>
                        <div class="section-18__body">
                            <h2 class="section-18__title">Uso seguro e<br>armazenamento correto</h2>
                            <p class="section-18__description">Mantenha fora do alcance de crianças e animais domésticos. Armazene em local fresco, seco e ao abrigo da luz, na embalagem original. Não utilize em água destinada a consumo humano ou animal.</p>
                            <ul class="section-18__features">
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Fora do alcance de crianças e pets
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Não usar em água de consumo
                                </li>
                                <li class="section-18__feature">
                                    <span class="section-18__feature-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                    </span>
                                    Armazenar em local fresco e seco
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>`,
    css: `<style>
    .section-18 {
        --s26-color-brand: #0f3d91;
        --s26-color-brand-light: #eaf1fb;
        --s26-color-bg: #ffffff;
        --s26-color-text: #2c2c2c;
        --s26-color-muted: #5a5a5a;
        --s26-color-border: #e2e6ec;
        --s26-color-icon-bg: #eaf1fb;
        --s26-color-icon: #0f3d91;
    }

    .section-18__radio {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
        pointer-events: none;
    }

    .section-18 {
        background-color: var(--s26-color-bg);
        padding: 1.5rem 1rem;
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
    }

    .section-18-container {
        width: 100%;
        margin-inline: auto;
    }

    /* ===== Nav (abas) ===== */
    .section-18__nav {
        display: flex;
        border-bottom: 1px solid var(--s26-color-border);
        overflow-x: auto;
        scrollbar-width: none;
        gap: 0.5rem;
    }

    .section-18__nav::-webkit-scrollbar {
        height: 0;
    }

    .section-18__tab-label {
        flex: 1 0 auto;
        min-width: 6.5rem;
        padding: 0.85rem 0.5rem;
        font-size: clamp(0.8rem, 1.5vw, 0.95rem);
        font-weight: 600;
        color: var(--s26-color-muted);
        background-color: transparent;
        border: none;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
        transition: color 0.2s, border-color 0.2s;
        user-select: none;
    }

    /* ===== Panels ===== */
    .section-18__panels {
        padding-top: 1.5rem;
    }

    .section-18__panel {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
    }

    .section-18__split {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .section-18__figure {
        width: 100%;
        margin: 0;
        aspect-ratio: 4/3;
        overflow: hidden;
        border-radius: 12px;
        background-color: var(--s26-color-icon-bg);
    }

    .section-18__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .section-18__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: start;
    }

    .section-18__title {
        font-size: clamp(1.15rem, 3vw, 1.5rem);
        color: var(--s26-color-brand);
        line-height: 1.3;
        margin: 0;
        font-weight: 700;
    }

    .section-18__description {
        font-size: clamp(0.875rem, 1.5vw, 1rem);
        color: var(--s26-color-text);
        line-height: 1.7;
        margin: 0;
    }

    .section-18__features {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
    }

    .section-18__feature {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: clamp(0.85rem, 1.4vw, 0.95rem);
        color: var(--s26-color-text);
    }

    .section-18__feature-icon {
        flex: 0 0 auto;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        background-color: var(--s26-color-icon-bg);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .section-18__feature-icon svg {
        width: 1rem;
        height: 1rem;
        stroke: var(--s26-color-icon);
    }

    /* ===== Active states (radio + label + ~) ===== */
    #s26-tab1:checked ~ .section-18-container .section-18__tab-label[for="s26-tab1"],
    #s26-tab2:checked ~ .section-18-container .section-18__tab-label[for="s26-tab2"],
    #s26-tab3:checked ~ .section-18-container .section-18__tab-label[for="s26-tab3"],
    #s26-tab4:checked ~ .section-18-container .section-18__tab-label[for="s26-tab4"] {
        color: var(--s26-color-brand);
        border-bottom-color: var(--s26-color-brand);
    }

    #s26-tab1:checked ~ .section-18-container .section-18__panel--1,
    #s26-tab2:checked ~ .section-18-container .section-18__panel--2,
    #s26-tab3:checked ~ .section-18-container .section-18__panel--3,
    #s26-tab4:checked ~ .section-18-container .section-18__panel--4 {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        opacity: 1;
        pointer-events: auto;
    }

    /* ===== Breakpoints (mobile-first, min-width) ===== */
    @media (min-width: 576px) {
        .section-18__tab-label {
            min-width: 0;
        }
    }

    @media (min-width: 768px) {
        .section-18-container {
            max-width: 768px;
        }

        .section-18__nav {
            overflow-x: visible;
        }

        .section-18__split {
            flex-direction: row;
            align-items: center;
            gap: 2.5rem;
        }

        .section-18__figure {
            flex: 0 0 44%;
            aspect-ratio: 1/1;
        }

        .section-18__body {
            flex: 1;
        }
    }

    @media (min-width: 992px) {
        .section-18-container {
            max-width: 992px;
        }

        .section-18__figure {
            flex: 0 0 40%;
        }
    }

    @media (min-width: 1200px) {
        .section-18-container {
            max-width: 1140px;
        }
    }

    @media (min-width: 1400px) {
        .section-18-container {
            max-width: 1200px;
        }
    }
</style>`
}
);
