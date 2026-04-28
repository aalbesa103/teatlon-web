document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    navLinks.addEventListener('click', (e) => {
        if(e.target.tagName === 'A') {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

    // Navbar Scroll Effect + active nav highlighting
    const navbar = document.getElementById('navbar');
    const allNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section[id], header[id]');

    const updateActiveNav = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.id;
            }
        });
        allNavLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('nav-active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // 2. Render Obras
    const obrasContainer = document.getElementById('obras-container');
    if (obrasContainer && Data.obras) {
        Data.obras.forEach(obra => {
            const getInitials = (title) => title.substring(0, 2).toUpperCase();
            const card = document.createElement('div');
            card.className = 'obra-card';
            card.id = `obra-${obra.id}`;

            // Color accent bar (inspired by geometric flyer)
            const colorBar = `<div class="obra-color-bar" style="background:${obra.color || 'var(--accent-teal)'};"></div>`;

            const subtitulo = obra.subtitulo
                ? `<span style="display:block;font-size:0.72rem;color:rgba(255,255,255,0.7);letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">${obra.subtitulo}</span>`
                : '';

            const headerBg = obra.imagen
                ? `style="background:linear-gradient(to top, rgba(0,0,0,0.6), ${obra.color}99), url('${obra.imagen}') center/cover no-repeat;"`
                : `style="background:linear-gradient(135deg, ${obra.color}cc, ${obra.color}88);"`;

            const linkLabel = obra.link && obra.link !== '#entradas'
                ? 'Ver en Alternativa Teatral →'
                : 'Conseguir entrada →';

            card.innerHTML = `
                ${colorBar}
                <div class="obra-img-placeholder" ${headerBg}>
                    ${subtitulo}
                    <h3 class="obra-title">${obra.titulo}</h3>
                </div>
                <div class="obra-info">
                    <div class="obra-tags">Dir: ${obra.direccion} &nbsp;·&nbsp; ${obra.duracion}</div>
                    <p class="obra-desc">
                        ${obra.sinopsis}
                        <br><br>
                        <strong style="color:var(--text-main);">Elenco:</strong> ${obra.elenco}
                    </p>
                    <a href="${obra.link}" class="obra-link" target="_blank">${linkLabel}</a>
                </div>
            `;
            obrasContainer.appendChild(card);
        });
    }

    // 3. Render Cronograma
    const timelineContainer = document.getElementById('timeline-container');
    const dayFilters = document.getElementById('day-filters');
    
    const renderTimeline = (filter) => {
        timelineContainer.innerHTML = '';
        Data.cronograma.forEach(diaData => {
            if (filter === 'all' || filter === diaData.dia) {
                // Day Header
                const dayHeader = document.createElement('h3');
                dayHeader.style.color = 'var(--accent-gold)';
                dayHeader.style.marginTop = '40px';
                dayHeader.style.marginBottom = '20px';
                dayHeader.style.borderBottom = '1px solid rgba(253,246,227,0.1)';
                dayHeader.style.paddingBottom = '10px';
                dayHeader.innerText = diaData.fechaEtiqueta;
                timelineContainer.appendChild(dayHeader);

                // Events
                diaData.eventos.forEach(evt => {
                    const item = document.createElement('div');
                    item.className = `timeline-item ${evt.tipo === 'interludio' ? 'interludio' : ''}`;

                    // Find the obra color if it's a show
                    let obraColor = 'var(--accent-red)';
                    if (evt.tipo === 'obra') {
                        const obraData = Data.obras.find(o =>
                            evt.titulo.toLowerCase().includes(o.titulo.toLowerCase().substring(0, 6))
                        );
                        if (obraData) obraColor = obraData.color;
                    }

                    if (evt.tipo === 'interludio') {
                        item.innerHTML = `
                            <span class="interludio-tag">Interludio</span>
                            <div class="time-badge">${evt.hora}</div>
                            <h4 class="show-title">${evt.titulo}</h4>
                        `;
                    } else {
                        item.innerHTML = `
                            <div class="time-badge">${evt.hora}</div>
                            <h4 class="show-title" style="border-left: 3px solid ${obraColor}; padding-left: 10px;">${evt.titulo}</h4>
                            <a href="#entradas" style="color:var(--text-muted); text-decoration:underline; font-size:0.85rem;">Conseguir entrada →</a>
                        `;
                    }
                    timelineContainer.appendChild(item);
                });
            }
        });
    };

    if (timelineContainer && Data.cronograma) {
        renderTimeline('all');
        
        // Filter Logic
        if(dayFilters) {
            const btns = dayFilters.querySelectorAll('.filter-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    btns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    renderTimeline(e.target.dataset.filter);
                });
            });
        }
    }

    // 4. Render Entradas — links a Alternativa Teatral
    const entradasContainer = document.getElementById('entradas-links-container');
    if (entradasContainer && Data.obras) {
        Data.obras.forEach(obra => {
            // Solo mostrar obras con link real a Alternativa
            if (!obra.link || obra.link === '#entradas') return;

            const card = document.createElement('div');
            card.className = 'entrada-link-card';
            card.style.borderTop = `3px solid ${obra.color || 'var(--accent-teal)'}`;

            card.innerHTML = `
                <span class="entrada-link-titulo">${obra.titulo}</span>
                <span class="entrada-link-dir">Dir: ${obra.direccion}</span>
                <a href="${obra.link}" class="btn btn-primary entrada-link-btn" target="_blank">Comprar entrada →</a>
            `;
            entradasContainer.appendChild(card);
        });
    }
});
