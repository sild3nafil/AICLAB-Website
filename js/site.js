(() => {
  const D = window.AICLAB_DATA;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  };
  const newestFirst = (items = []) => [...items].reverse();

  function buildHeader() {
    const page = document.body.dataset.page;
    const header = $('#site-header');
    header.innerHTML = `
      <div class="site-brand">
        <div class="container">
          <a href="HOME.html" aria-label="AICLAB home">
            <h1>${D.settings.labTitle}</h1>
            <span class="brand-accent" aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <nav class="nav-shell" aria-label="Primary navigation">
        <div class="container nav-row">
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav-list" id="site-menu"></ul>
        </div>
      </nav>`;

    const nav = $('#site-menu');
    const items = [
      ['home', 'HOME', 'HOME.html'],
      ['advisor', 'ADVISOR', 'ADVISOR.html'],
      ['members', 'MEMBERS', 'MEMBERS.html'],
      ['courses', 'COURSES', 'COURSES.html'],
      ['publications', 'PUBLICATIONS', 'PUBLICATIONS.html'],
      ['funded', 'FUNDED RESEARCH', 'FUNDED.html'],
      ['dissertation', 'DISSERTATION / THESIS', 'DISSERTATION.html']
    ]

    items.forEach(([key, label, href]) => {
      const li = el('li');
      const a = el('a', '', label);
      a.href = href;
      if (page === key) a.setAttribute('aria-current', 'page');
      li.append(a); nav.append(li);
    });

    const toggle = $('.nav-toggle');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !open);
    });
  }

  function professorHero() {
    const p = D.professor;
    return `
      <section class="professor-hero reveal">
        <div class="professor-photo"><img src="${p.image}" alt="${p.name}"></div>
        <div class="professor-info">
          <h2>${p.name}</h2>
          <p class="affiliation">${p.department}</p>
          <p class="affiliation">${p.university}</p>
          <p class="affiliation">${p.address}</p>
          <div class="contact-list">
            <div class="contact-row"><strong>Office</strong><span>${p.office}</span></div>
            <div class="contact-row"><strong>Phone</strong><span>${p.phone}</span></div>
            <div class="contact-row"><strong>Fax</strong><span>${p.fax}</span></div>
            <div class="contact-row"><strong>Email</strong><a href="mailto:${p.email}">${p.email}</a></div>
          </div>
        </div>
      </section>`;
  }

  function renderHome(main) {
    const news = newestFirst(D.news).map(item => {
        const details = [
            ["authors", item.authors],
            ["paper-title", item.paperTitle],
            ["venue", item.venue],
            ["translation", item.translation]
        ]
        .filter(([, text]) => text && text.trim())
        .map(([type, text]) => `
            <p class="news-detail news-${type}">
                ${text}
            </p>
        `)
        .join("");

        return `
            <article class="news-item reveal">
                <h3>${item.title}</h3>

                <div class="news-details">
                    ${details}
                </div>
            </article>
        `;
    }).join('');
    const cards = D.researchCards.map(r => `
      <article class="research-card reveal">
        <a href="INTERESTS.html#${r.id}">
          <div class="image-wrap"><img src="${r.image}" alt="${r.title}" loading="lazy"></div>
          <h3>${r.title}</h3><span class="more">Click photo to see more →</span>
        </a>
      </article>`).join('');
    main.innerHTML = `<div class="container">
      ${professorHero()}
      <section class="section-block">
        <h1 class="page-title">NEWS</h1>
        <div class="news-list">${news}</div>
      </section>
      <section class="section-block">
        <h2 class="section-title">Current Research Interests</h2>
        <div class="research-grid">${cards}</div>
      </section>
      <section class="section-block lab-welcome">
        <div class="card welcome-copy reveal">
          <h2 class="section-title">Welcome to Our Lab</h2>
          <ul>${D.settings.rooms.map(r=>`<li>${r}</li>`).join('')}</ul>
          <p><strong>Email：</strong><a href="mailto:${D.settings.contactEmail}">${D.settings.contactEmail}</a><br>
          <strong>Phone：</strong>${D.settings.contactPhone}</p>
        </div>
        <a class="card map-card reveal" href="https://www.nycu.edu.tw/" target="_blank" rel="noopener"><img src="assets/campus_map.jpg" alt="Campus map" loading="lazy"></a>
      </section>
    </div>`;
  }

  function renderAdvisor(main) {
      const education = D.advisor.education.map(item => `
        <article class="resume-group reveal">
            <div class="resume-education-grid">
                <div class="resume-degree">
                    <strong>${item.degree}</strong>
                </div>

                <div class="resume-education-content">
                    <p class="resume-school">${item.school}</p>

                    ${item.details.map(detail => `
                        <p class="resume-detail">${detail}</p>
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');

      const experience = D.advisor.experience.map(item => `
          <article class="resume-group reveal">
              <p class="resume-role">
                  <strong>${item.title}</strong>
              </p>

              ${item.details.map(detail => `
                  <p class="resume-job-detail">${detail}</p>
              `).join('')}
          </article>
      `).join('');

      main.innerHTML = `
          <div class="container">

              ${professorHero()}

              <section class="section-block bio-copy reveal">
                  <h1 class="page-title">Biography</h1>
                  ${D.advisor.bio.map(x => `<p>${x}</p>`).join('')}
              </section>

              <section class="section-block">
                  <h2 class="section-title">Education</h2>

                  <div class="resume-list">
                      ${education}
                  </div>
              </section>

              <section class="section-block">
                  <h2 class="section-title">Experience</h2>

                  <div class="resume-list">
                      ${experience}
                  </div>
              </section>

          </div>
      `;
  }

  function memberTable(group) {
    const items = newestFirst(group.items);
    return `<section class="section-block reveal">
      <h2 class="section-title">${group.title}</h2>
      <div class="table-wrap"><table>
        <thead><tr>${group.columns.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead>
        <tbody>${items.map(m=>`<tr><td>${m.name}</td><td>${m.year}</td>${group.columns.length>2?`<td>${m.company || ''}</td>`:''}</tr>`).join('')}</tbody>
      </table></div>
    </section>`;
  }

  function renderMembers(main) {
    main.innerHTML = `<div class="container"><h1 class="page-title">Members</h1>
      ${['phd','master','alumniPhd','alumniMaster'].map(k=>memberTable(D.members[k])).join('')}
    </div>`;
  }

  function renderCourses(main) {
    const rows = newestFirst(D.courses).map(c=>`<div class="course-row reveal"><span class="course-year">${c.year}</span><span class="course-semester">${c.semester}</span><span class="course-name">${c.name}</span></div>`).join('');
    main.innerHTML = `<div class="container"><h1 class="page-title">Courses</h1><div class="course-list">${rows}</div></div>`;
  }

  function sectionId(title) { return title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
  function renderPublications(main) {
    const nav = D.publications.map(s=>`<a href="#${sectionId(s.title)}">${s.title}</a>`).join('');
    const sections = D.publications.map(s=>`<section class="section-block reveal" id="${sectionId(s.title)}"><h2 class="section-title">${s.title}</h2><div class="card list-panel"><ol class="publication-list">${newestFirst(s.items).map(x=>`<li>${x}</li>`).join('')}</ol></div></section>`).join('');
    main.innerHTML = `<div class="container"><h1 class="page-title">Publications</h1><nav class="publication-nav" aria-label="Publication categories">${nav}</nav>${sections}</div>`;
  }

  function renderFunded(main) {
    if (!D.settings.showFunded) {
      main.innerHTML = `
        <div class="container">
          <h1 class="page-title">Funded Research</h1>
          <p class="maintenance-text">Current Page is Under Maintenance</p>
        </div>
      `;
      return;
    }

    main.innerHTML = `
      <div class="container">
        <h1 class="page-title">Funded Research</h1>

        <div class="card list-panel reveal">
          <ol class="publication-list">
            ${newestFirst(D.funded)
              .map(x => `<li>${x}</li>`)
              .join('')}
          </ol>
        </div>
      </div>
    `;
  }

  function renderDissertation(main) {
    if (!D.settings.showDissertation) {
      main.innerHTML = `
        <div class="container">
          <h1 class="page-title">Dissertation / Thesis</h1>
          <p class="maintenance-text">Current Page is Under Maintenance</p>
        </div>
      `;
      return;
    }

    const sections = D.dissertations.map(s => `
      <section class="section-block reveal">
        <h2 class="section-title">${s.title}</h2>

        <div class="card list-panel">
          <ol class="publication-list">
            ${newestFirst(s.items)
              .map(x => `<li>${x}</li>`)
              .join('')}
          </ol>
        </div>
      </section>
    `).join('');

    main.innerHTML = `
      <div class="container">
        <h1 class="page-title">Dissertation / Thesis</h1>
        ${sections}
      </div>
    `;
  }

  function renderInterests(main) {
    const cards=D.interests.map(i=>`<article class="card interest-card reveal" id="${i.id}"><img src="${i.image}" alt="${i.title}" loading="lazy"><div><h2>${i.title}</h2>${i.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div></article>`).join('');
    main.innerHTML=`<div class="container"><h1 class="page-title">Current Research Interests</h1>${cards}</div>`;
  }

  function buildFooter() {
    $('#site-footer').innerHTML = `<div class="site-footer"><div class="container"><p><strong>${D.settings.labTitle}</strong></p><p>${D.settings.contactEmail} · ${D.settings.contactPhone}</p></div></div>`;
  }

  function initReveal() {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { nodes.forEach(n=>n.classList.add('is-visible')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: .08, rootMargin: '0px 0px -30px' });
    nodes.forEach(n=>io.observe(n));
  }

  function initBackToTop() {
    const b=$('.back-to-top');
    const sync=()=>{ b.hidden = window.scrollY < 500; };
    addEventListener('scroll', sync, {passive:true}); sync();
    b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  }

  function run() {
    buildHeader(); buildFooter();
    const main=$('#main-content');
    const page=document.body.dataset.page;
    const renderers={home:renderHome,advisor:renderAdvisor,members:renderMembers,courses:renderCourses,publications:renderPublications,funded:renderFunded,dissertation:renderDissertation,interests:renderInterests};
    (renderers[page] || renderHome)(main);
    initReveal(); initBackToTop();
  }

  document.addEventListener('DOMContentLoaded', run);
})();
