document.addEventListener('DOMContentLoaded', () => {

    // ─── Nav: scroll + menú mobile ───────────────────────────
    const nav      = document.getElementById('nav2');
    const burger   = document.getElementById('burger2');
    const navLinks = document.getElementById('navLinks2');
    const allLinks = navLinks.querySelectorAll('a[href^="#"]');

    burger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        burger.setAttribute('aria-expanded', open);
    });
    navLinks.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('open');
            burger.setAttribute('aria-expanded', false);
        }
    });

    // Scroll: sombra en nav + link activo
    const sections = document.querySelectorAll('section[id], header[id]');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        allLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    // ─── Obras: render desde data.js ─────────────────────────
    const obrasGrid = document.getElementById('obrasGrid2');
    if (obrasGrid && typeof Data !== 'undefined') {
        const colorClass = {
            fotogenesis:    'h--fotogenesis',
            roja:           'h--roja',
            desalojo:       'h--desalojo',
            soysola:        'h--soysola',
            lluviaverde:    'h--lluvia',
            jubilacion:     'h--jubilacion',
            osadaescritura: 'h--osada',
            flirteo:        'h--flirteo',
            cuandolascrien: 'h--ranas',
            lasesperas:     'h--juana',
        };
        Data.obras.forEach(obra => {
            const hClass = colorClass[obra.id] || 'h--fotogenesis';
            const subtituloHtml = obra.subtitulo
                ? `<span class="obra-card2__subtitulo">${obra.subtitulo}</span>`
                : '';
            const linkLabel = obra.link && obra.link !== '#entradas'
                ? 'Ver en Alternativa Teatral →'
                : 'Conseguir entrada →';
            const card = document.createElement('article');
            card.className = 'obra-card2';
            card.id = `obra2-${obra.id}`;
            card.innerHTML = `
                <div class="obra-card2__header ${hClass}">
                    ${subtituloHtml}
                    <h3 class="obra-card2__titulo">${obra.titulo}</h3>
                </div>
                <div class="obra-card2__cuerpo">
                    <p class="obra-card2__sinopsis">${obra.sinopsis}</p>
                    <dl class="obra-card2__dl">
                        <dt>Dirección</dt><dd>${obra.direccion}</dd>
                        <dt>Elenco</dt>   <dd>${obra.elenco}</dd>
                        <dt>Duración</dt> <dd>${obra.duracion}</dd>
                    </dl>
                    <a href="${obra.link}" class="obra-card2__link" target="_blank">${linkLabel}</a>
                </div>
            `;
            obrasGrid.appendChild(card);
        });
    }

    // ─── Filtros de programación ──────────────────────────────
    const filtros = document.querySelectorAll('.filtro');
    const dias    = document.querySelectorAll('.prog__dia');

    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('filtro--activo'));
            btn.classList.add('filtro--activo');
            const f = btn.dataset.filter;
            dias.forEach(dia => {
                const tags = (dia.dataset.tags || '').split(' ');
                const show = f === 'todos' || tags.includes(f);
                dia.classList.toggle('oculto', !show);
            });
        });
    });

    // ─── Entradas: render precios desde data.js ───────────────
    const pricingWrap = document.getElementById('pricingWrap2');
    const tabBtns     = document.querySelectorAll('.tab2');

    const renderPricing2 = (cat) => {
        if (!pricingWrap || typeof Data === 'undefined') return;
        const items = Data.entradas[cat];
        if (!items) return;
        pricingWrap.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = `combo-card${item.isEpic ? ' combo-card--top' : ''}`;
            card.innerHTML = `
                ${item.ahorro ? `<span class="combo__badge${item.isEpic ? ' combo__badge--top' : ''}">${item.ahorro}</span>` : ''}
                <h4 class="combo__nombre">${item.titulo}</h4>
                <p class="combo__detalle">${item.desc}</p>
                <p class="combo__precio">${item.precio}</p>
                <a href="#" class="btn ${item.isEpic ? 'btn--red' : 'btn--ghost'} btn--sm">${item.cta}</a>
            `;
            pricingWrap.appendChild(card);
        });
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('filtro--activo'));
            btn.classList.add('filtro--activo');
            renderPricing2(btn.dataset.cat);
        });
    });

    // Init: mostrar combos-dias por defecto
    renderPricing2('combos-dias');
    document.querySelector('.tab2[data-cat="combos-dias"]')?.classList.add('filtro--activo');

});
