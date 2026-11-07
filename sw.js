const C='ravino-v6';
const FILES=["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "fonts/vazirmatn.woff2", "img/b_adv.webp", "img/b_coin.webp", "img/b_game.webp", "img/b_goal.webp", "img/b_piggy.webp", "img/b_target.webp", "img/c_choice.webp", "img/c_home.webp", "img/c_school.webp", "img/c_self.webp", "img/hero_jar.webp", "img/logo.webp","img/m_calm.webp", "img/m_cheer.webp", "img/m_happy.webp", "img/m_learn.webp", "img/m_think.webp", "img/m_wow.webp", "img/stand.webp", "img/star_fox.webp"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match('index.html'))))});
