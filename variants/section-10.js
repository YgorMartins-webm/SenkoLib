// @ts-nocheck
SenkoLib.registerVariant('section-10', [
/*@@@@Senko - section-10.1 */
  {
    name: 'section-10.1',
    html: `<section class="section-5 section-5--accented" aria-labelledby="section-5b-title">
  <div class="section-5-container">

    <header class="section-5__header">
      <span class="section-5__label" aria-hidden="true">Por que escolher</span>
      <h2 class="section-5__title" id="section-5b-title">Diferenciais que fazem a diferença</h2>
      <p class="section-5__subtitle">Cada detalhe foi pensado para reduzir atrito e acelerar o seu crescimento.</p>
    </header>

    <div class="section-5__grid" role="list">

      <article class="section-5__block section-5__block--featured" role="listitem">
        <div class="section-5__block-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <h3 class="section-5__block-title">Confiança comprovada</h3>
        <p class="section-5__block-body">Mais de 5.000 empresas confiam na plataforma com uptime histórico de 99,98%.</p>
        <a class="section-5__block-link" href="#" aria-label="Saiba mais sobre confiabilidade">Ver casos de uso</a>
      </article>

      <article class="section-5__block" role="listitem">
        <div class="section-5__block-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 class="section-5__block-title">Suporte dedicado</h3>
        <p class="section-5__block-body">Time técnico disponível 24/7 com SLA garantido e canal prioritário para planos avançados.</p>
        <a class="section-5__block-link" href="#" aria-label="Saiba mais sobre suporte">Saiba mais</a>
      </article>

      <article class="section-5__block" role="listitem">
        <div class="section-5__block-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </div>
        <h3 class="section-5__block-title">Onboarding guiado</h3>
        <p class="section-5__block-body">Setup em minutos com assistentes interativos, templates prontos e documentação clara.</p>
        <a class="section-5__block-link" href="#" aria-label="Saiba mais sobre onboarding">Começar agora</a>
      </article>

      <article class="section-5__block" role="listitem">
        <div class="section-5__block-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3 class="section-5__block-title">Preço transparente</h3>
        <p class="section-5__block-body">Sem taxas escondidas. Planos flexíveis que crescem conforme o uso, sem surpresas na fatura.</p>
        <a class="section-5__block-link" href="#" aria-label="Ver planos e preços">Ver planos</a>
      </article>

    </div>
  </div>
</section>`,
    css: `<style>
  .section-5-container {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 576px) {
    .section-5-container {
      max-width: 576px;
      margin-inline: auto;
    }
  }
  @media (min-width: 768px) {
    .section-5-container {
      max-width: 768px;
    }
  }
  @media (min-width: 992px) {
    .section-5-container {
      max-width: 992px;
    }
  }
  @media (min-width: 1200px) {
    .section-5-container {
      max-width: 1200px;
    }
  }
  @media (min-width: 1536px) {
    .section-5-container {
      max-width: 1536px;
    }
  }

  .section-5__header {
    margin-bottom: 2.5rem;
  }

  .section-5__label {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0C447C;
    background: #E6F1FB;
    padding: 4px 12px;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .section-5__title {
    font-size: 1.75rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    line-height: 1.2;
  }

  .section-5__subtitle {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
    max-width: 52ch;
  }

  .section-5__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 576px) {
    .section-5__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 992px) {
    .section-5__grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  .section-5__block {
    background: #fff;
    border: 0.5px solid rgba(0,0,0,0.12);
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: border-color 0.2s;
  }

  .section-5__block:hover {
    border-color: rgba(0,0,0,0.25);
  }

  .section-5__block-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #E6F1FB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .section-5__block-icon svg {
    width: 20px;
    height: 20px;
    stroke: #185FA5;
    fill: none;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .section-5__block-title {
    font-size: 1rem;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0;
    line-height: 1.3;
  }

  .section-5__block-body {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.65;
    margin: 0;
    flex: 1;
  }

  .section-5__block-link {
    font-size: 0.85rem;
    font-weight: 500;
    color: #185FA5;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: auto;
    padding-top: 0.25rem;
  }

  .section-5__block-link::after {
    content: "→";
  }

  /* ── Variação: destaque (bloco grande) ─ */
  .section-5__block--featured {
    background: #E6F1FB;
    border-color: #B5D4F4;
  }

  .section-5__block--featured .section-5__block-icon {
    background: #fff;
  }

  .section-5__block--featured .section-5__block-title {
    color: #0C447C;
  }

  .section-5__block--featured .section-5__block-body {
    color: #185FA5;
  }

  .section-5__block--featured .section-5__block-link {
    color: #0C447C;
  }

  /* ── Variação: borda lateral ── */
  .section-5--accented .section-5__block {
    border-left: 3px solid #B5D4F4;
    border-radius: 0 12px 12px 0;
  }

  .section-5--accented .section-5__block--featured {
    border-left-color: #185FA5;
  }

</style>`,
  },
]);
