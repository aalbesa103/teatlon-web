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

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Render Obras
    const obrasContainer = document.getElementById('obras-container');
    if (obrasContainer && Data.obras) {
        Data.obras.forEach(obra => {
            const getInitials = (title) => title.substring(0, 2).toUpperCase();
            const card = document.createElement('div');
            card.className = 'obra-card';
            
            // if image exists, show it as background, else fallback to initials
            const bgImage = obra.imagen ? 
                `<img src="${obra.imagen}" alt="${obra.titulo}" style="width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; filter: brightness(0.7) blur(2px); transition: filter 0.3s ease;" onmouseover="this.style.filter='brightness(0.9) blur(0px)'" onmouseout="this.style.filter='brightness(0.7) blur(2px)'">` : 
                `<div class="obra-img-placeholder">${getInitials(obra.titulo)}</div>`;

            card.innerHTML = `
                ${bgImage}
                <div class="obra-info" style="background: linear-gradient(to top, rgba(24,16,30,1) 40%, rgba(24,16,30,0) 100%); position:absolute; bottom:0; padding:20px 20px 10px; width:100%; z-index:2;">
                    <div class="obra-tags">${obra.duracion} / ${obra.direccion}</div>
                    <h3 class="obra-title">${obra.titulo}</h3>
                    <p class="obra-desc">${obra.sinopsis}<br><br><strong>Elenco:</strong> ${obra.elenco}</p>
                    <a href="${obra.link}" class="obra-link" target="_blank">Conseguir Entradas →</a>
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
                    item.innerHTML = `
                        <div class="time-badge">${evt.hora}</div>
                        <h4 class="show-title">${evt.titulo}</h4>
                        ${evt.tipo === 'obra' ? '<a href="#entradas" style="color:var(--text-muted); text-decoration:underline;">Comprar Entradas →</a>' : ''}
                    `;
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

    // 4. Render Entradas y Tabs
    const pricingContainer = document.getElementById('pricing-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    const renderPricing = (category) => {
        pricingContainer.innerHTML = '';
        const items = Data.entradas[category];
        if (!items) return;

        const grid = document.createElement('div');
        grid.className = 'pricing-grid active';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = `pricing-card ${item.isEpic ? 'epic' : ''}`;
            
            let html = `<h4 class="card-title">${item.titulo}</h4>`;
            html += `<div class="card-price">${item.precio}</div>`;
            if (item.ahorro) {
                html += `<div class="card-savings">${item.ahorro}</div>`;
            }
            html += `<p class="card-desc">${item.desc}</p>`;
            html += `<a href="#" class="btn ${item.isEpic ? 'btn-primary' : 'btn-secondary'}">${item.cta}</a>`;
            
            card.innerHTML = html;
            grid.appendChild(card);
        });

        pricingContainer.appendChild(grid);
    };

    if (pricingContainer && Data.entradas) {
        // Init with individuales
        renderPricing('individuales');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                tabBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderPricing(e.target.dataset.target);
            });
        });
    }
});
