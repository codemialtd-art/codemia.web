            // --- Mobile Nav Toggle ---
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobile');
  burger?.addEventListener('click', () => mobile.classList.toggle('show'));

  // --- Dynamic Counters / Data ---
  const data = {
    nextEvent: {
      title: 'CodeSprint 1.0 — Intro to Git & Open Source',
      when: '2025-09-28T11:00:00',
      venue: 'Auditorium'
    },
    stats: { members: 15, events: 0, projects: 0 },
    upcoming: [
      { title:'Git & GitHub Hands-on', date:'28 Sep 2025', time:'11:00 AM', mode:'On-Campus', cta:'#', desc:'Learn version control, branching, and open-source workflow.', tag:'Workshop' },
      { title:'AlgoArena #1', date:'05 Oct 2025', time:'07:00 PM', mode:'Online', cta:'#', desc:'90-minute competitive programming showdown.', tag:'Contest' },
      { title:'Hack Night (Mini-Hackathon)', date:'18 Oct 2025', time:'06:00 PM', mode:'On-Campus', cta:'#', desc:'Form teams, build something cool in 6 hours, demo at 12.', tag:'Hackathon' },
    ],
    past: [ 'Orientation (Aug 2025)', 'Intro to Web (Sep 2025)', 'Debug Bash (Sep 2025)' ],
    projects: [
      { name:'Campus Navigator', lead:'Aaryan', link:'#', blurb:'A PWA to find rooms/blocks quickly at LPU.' },
      { name:'Guardian Band', lead:'Team IoT', link:'#', blurb:'Safety wearable using MPU6050 + ESP8266.' },
      { name:'EcoSphere', lead:'Team Green', link:'#', blurb:'Track carbon footprint with gamified tasks.' }
    ],
    team: [
      { name:'Saransh', role:'Founder & CEO', links:{ linkedin:'#', github:'#' } },
      { name:'Aawesh Khan', role:'CEE', links:{ linkedin:'#', github:'#' } },
      { name:'Aayush Singh', role:'Founder & CFO', links:{ linkedin:'#', github:'#' } },
      { name:'Arthav Singh Kushwah', role:'Founder & CMO', links:{ linkedin:'#', github:'#' } },
      { name:'Abha', role:'CTO', links:{ linkedin:'#', github:'#' } },
    ]
  };

  // Stats
  document.getElementById('members').textContent = data.stats.members;
  document.getElementById('eventsCount').textContent = data.stats.events;
  document.getElementById('projectsCount').textContent = data.stats.projects;

  // Countdown
  const target = new Date(data.nextEvent.when).getTime();
  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('countdown').textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  setInterval(tick, 1000); tick();

  // Upcoming events render
  const upcomingWrap = document.getElementById('upcomingList');
  data.upcoming.forEach(ev => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="caps">${ev.tag}</div>
      <h4>${ev.title}</h4>
      <p class="meta">${ev.date} • ${ev.time} • ${ev.mode}</p>
      <p>${ev.desc}</p>
      <a class="btn ghost" href="${ev.cta}">Register →</a>
    `;
    upcomingWrap.appendChild(el);
  });

  // Past gallery render
  const pastWrap = document.getElementById('pastGallery');
  data.past.forEach(label => {
    const t = document.createElement('div');
    t.className = 'tile';
    t.innerHTML = `<div class="mono">${label}</div>`;
    pastWrap.appendChild(t);
  });

  // Projects render
  const projWrap = document.getElementById('projectsList');
  data.projects.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="caps">Project</div>
      <h4>${p.name}</h4>
      <p>${p.blurb}</p>
      <a class="btn ghost" href="${p.link}">View Repo →</a>
    `;
    projWrap.appendChild(el);
  });

  // Team render
  const teamWrap = document.getElementById('teamGrid');
  data.team.forEach(m => {
    const el = document.createElement('div');
    el.className = 'member';
    el.innerHTML = `
      <div class="avatar" aria-hidden="true"></div>
      <b>${m.name}</b>
      <div class="role">${m.role}</div>
      <div class="socials" style="justify-content:center; margin-top:8px">
        <a class="badge" href="${m.links.linkedin}" aria-label="LinkedIn">in</a>
        <a class="badge" href="${m.links.github}" aria-label="GitHub">gh</a>
      </div>
    `;
    teamWrap.appendChild(el);
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple form handler (demo only)
  document.getElementById('joinForm').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name');
    const email = fd.get('email');
    if (!name || !email) {
      alert('Please fill your name and a valid email.');
      return;
    }
    alert(`Thanks, ${name}! Your interest has been recorded. We will reach out at ${email}.`);
    e.target.reset();
  });