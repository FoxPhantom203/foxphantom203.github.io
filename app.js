(function(){
  const LANG_KEY = 'foxphantom-lang';
  const STYLE_KEY = 'foxphantom-style';

  const I18N = {
    en: {
      links: 'Links',
      ia: 'Internet Archive',
      ytFox: 'YouTube · FoxPhantom',
      ytGames: 'YouTube · Games & Builds',
      comingSoonMock: 'Mock channel · coming soon',
      moreLinks: 'More links',
      comingSoon: 'Coming soon…',
      tagline: 'Creative fox · coding & building',
      bio: 'Wassup! Making pages and shipping projects. Welcome to my corner of the internet.',
      language: 'Language',
      style: 'Style',
      styleDefault: 'Default',
      stylePlayful: 'Playful Minimalism',
      styleScifi: 'Sci-Fi Dystopia',
      styleVoxel: 'Voxel',
      styleAurora: 'Aurora',
      games: 'Games',
      email: 'Email',
      toggleCursor: 'Toggle Foxy Cursor',
      hideCursor: 'Hide Foxy Cursor',
      ossBefore: 'Foxor AI is',
      ossStrong: 'open source',
      ossAfter: 'on this site. Fork the',
      repo: 'repo',
      widgetsTitle: 'Foxor AI Widgets',
      wFoxor: 'Chat with Foxor AI — open-source assistant',
      wGames: 'Snake, Memory, Reaction, Clicker, Maze',
      codeSamples: 'Code Samples',
      projects: 'Projects',
      wProjects: 'Web pages and creative builds',
      about: 'About',
      wAbout: 'FoxPhantom203 creative portfolio',
      contact: 'Contact',
      wContact: 'Email & GitHub for collaboration',
      switchVercel: 'Switch To Vercel',
      source: 'Source',
      langEn: 'English',
      langRu: 'Russian',
      langTr: 'Turkish',
      langNo: 'Norwegian',
      pageTitle: 'FoxPhantom203 | Foxor AI',
      metaDesc: 'FoxPhantom203 — Creative fox portfolio with Foxor AI widgets and multiple styles.'
    },
    ru: {
      links: 'Ссылки',
      ia: 'Internet Archive',
      ytFox: 'YouTube · FoxPhantom',
      ytGames: 'YouTube · Игры и сборки',
      comingSoonMock: 'Макет канала · скоро',
      moreLinks: 'Ещё ссылки',
      comingSoon: 'Скоро…',
      tagline: 'Креативный лис · код и проекты',
      bio: 'Привет! Делаю страницы и выпускаю проекты. Добро пожаловать в мой уголок интернета.',
      language: 'Язык',
      style: 'Стиль',
      styleDefault: 'По умолчанию',
      stylePlayful: 'Игривый минимализм',
      styleScifi: 'Научная фантастика',
      styleVoxel: 'Воксель',
      styleAurora: 'Аврора',
      games: 'Игры',
      email: 'Почта',
      toggleCursor: 'Лисий курсор',
      hideCursor: 'Скрыть курсор',
      ossBefore: 'Foxor AI —',
      ossStrong: 'открытый исходный код',
      ossAfter: 'на этом сайте. Форкните',
      repo: 'репозиторий',
      widgetsTitle: 'Виджеты Foxor AI',
      wFoxor: 'Чат с Foxor AI — открытый ассистент',
      wGames: 'Змейка, Память, Реакция, Кликер, Лабиринт',
      codeSamples: 'Примеры кода',
      projects: 'Проекты',
      wProjects: 'Веб-страницы и креативные сборки',
      about: 'О сайте',
      wAbout: 'Креативное портфолио FoxPhantom203',
      contact: 'Контакты',
      wContact: 'Почта и GitHub для сотрудничества',
      switchVercel: 'Перейти на Vercel',
      source: 'Исходники',
      langEn: 'Английский',
      langRu: 'Русский',
      langTr: 'Турецкий',
      langNo: 'Норвежский',
      pageTitle: 'FoxPhantom203 | Foxor AI',
      metaDesc: 'FoxPhantom203 — креативное портфолио с виджетами Foxor AI и несколькими стилями.'
    },
    tr: {
      links: 'Bağlantılar',
      ia: 'Internet Archive',
      ytFox: 'YouTube · FoxPhantom',
      ytGames: 'YouTube · Oyunlar ve Yapımlar',
      comingSoonMock: 'Sahte kanal · yakında',
      moreLinks: 'Daha fazla bağlantı',
      comingSoon: 'Yakında…',
      tagline: 'Yaratıcı tilki · kod ve yapım',
      bio: 'Selam! Sayfalar yapıyor ve projeler yayınlıyorum. İnternetteki köşeme hoş geldin.',
      language: 'Dil',
      style: 'Stil',
      styleDefault: 'Varsayılan',
      stylePlayful: 'Oyuncu Minimalizm',
      styleScifi: 'Bilimkurgu Distopya',
      styleVoxel: 'Voxel',
      styleAurora: 'Aurora',
      games: 'Oyunlar',
      email: 'E-posta',
      toggleCursor: 'Tilki imleci',
      hideCursor: 'İmleci gizle',
      ossBefore: 'Foxor AI bu sitede',
      ossStrong: 'açık kaynak',
      ossAfter: '. Depoyu',
      repo: 'forkla',
      widgetsTitle: 'Foxor AI Widgetları',
      wFoxor: 'Foxor AI ile sohbet — açık kaynak asistan',
      wGames: 'Yılan, Hafıza, Tepki, Tıklayıcı, Labirent',
      codeSamples: 'Kod örnekleri',
      projects: 'Projeler',
      wProjects: 'Web sayfaları ve yaratıcı yapımlar',
      about: 'Hakkında',
      wAbout: 'FoxPhantom203 yaratıcı portföy',
      contact: 'İletişim',
      wContact: 'İş birliği için e-posta ve GitHub',
      switchVercel: "Vercel'e geç",
      source: 'Kaynak',
      langEn: 'İngilizce',
      langRu: 'Rusça',
      langTr: 'Türkçe',
      langNo: 'Norveççe',
      pageTitle: 'FoxPhantom203 | Foxor AI',
      metaDesc: 'FoxPhantom203 — Foxor AI widgetları ve birden fazla stile sahip yaratıcı tilki portföyü.'
    },
    no: {
      links: 'Lenker',
      ia: 'Internet Archive',
      ytFox: 'YouTube · FoxPhantom',
      ytGames: 'YouTube · Spill og bygg',
      comingSoonMock: 'Mock-kanal · kommer snart',
      moreLinks: 'Flere lenker',
      comingSoon: 'Kommer snart…',
      tagline: 'Kreativ rev · koding og bygging',
      bio: 'Hei! Lager sider og slipper prosjekter. Velkommen til mitt hjørne av internett.',
      language: 'Språk',
      style: 'Stil',
      styleDefault: 'Standard',
      stylePlayful: 'Leken minimalisme',
      styleScifi: 'Sci-fi dystopi',
      styleVoxel: 'Voxel',
      styleAurora: 'Aurora',
      games: 'Spill',
      email: 'E-post',
      toggleCursor: 'Revekursor',
      hideCursor: 'Skjul kursor',
      ossBefore: 'Foxor AI er',
      ossStrong: 'åpen kildekode',
      ossAfter: 'på denne siden. Fork',
      repo: 'repoet',
      widgetsTitle: 'Foxor AI-widgets',
      wFoxor: 'Chat med Foxor AI — åpen kildekode-assistent',
      wGames: 'Slange, Minne, Reaksjon, Klikker, Labyrint',
      codeSamples: 'Kodeeksempler',
      projects: 'Prosjekter',
      wProjects: 'Nettsider og kreative bygg',
      about: 'Om',
      wAbout: 'FoxPhantom203 kreativ portefølje',
      contact: 'Kontakt',
      wContact: 'E-post og GitHub for samarbeid',
      switchVercel: 'Bytt til Vercel',
      source: 'Kilde',
      langEn: 'Engelsk',
      langRu: 'Russisk',
      langTr: 'Tyrkisk',
      langNo: 'Norsk',
      pageTitle: 'FoxPhantom203 | Foxor AI',
      metaDesc: 'FoxPhantom203 — kreativ revportefølje med Foxor AI-widgets og flere stiler.'
    },

    lt: { language: 'Kalba', tagline: 'Kūrybinga lapė · programavimas ir kūrimas', games: 'Žaidimai', email: 'El. paštas', style: 'Stilius', about: 'Apie', contact: 'Kontaktai', projects: 'Projektai', source: 'Šaltinis', langEn: 'Anglų (JAV)', langRu: 'Rusų', langTr: 'Turkų', langNo: 'Norvegų', pageTitle: 'FoxPhantom203 | Foxor AI' },
    ar: { language: 'اللغة', tagline: 'ثعلب مبدع · البرمجة والبناء', links: 'الروابط', games: 'الألعاب', email: 'البريد الإلكتروني', style: 'النمط', about: 'حول', contact: 'اتصل', projects: 'المشاريع', source: 'المصدر', langEn: 'الإنجليزية (الولايات المتحدة)', langRu: 'الروسية', langTr: 'التركية', langNo: 'النرويجية', switchVercel: 'انتقل إلى Vercel' },
    ja: { language: '言語', tagline: 'クリエイティブなキツネ · コーディングと制作', links: 'リンク', games: 'ゲーム', email: 'メール', style: 'スタイル', about: '概要', contact: 'お問い合わせ', projects: 'プロジェクト', source: 'ソース', langEn: '英語（米国）', langRu: 'ロシア語', langTr: 'トルコ語', langNo: 'ノルウェー語', switchVercel: 'Vercel に切り替え' },
    ko: { language: '언어', tagline: '창의적인 여우 · 코딩과 제작', links: '링크', games: '게임', email: '이메일', style: '스타일', about: '소개', contact: '연락처', projects: '프로젝트', source: '소스', langEn: '영어(미국)', langRu: '러시아어', langTr: '터키어', langNo: '노르웨이어', switchVercel: 'Vercel로 전환' },
    'zh-Hans': { language: '语言', tagline: '创意狐狸 · 编程与创作', links: '链接', games: '游戏', email: '电子邮件', style: '风格', about: '关于', contact: '联系', projects: '项目', source: '源代码', langEn: '英语（美国）', langRu: '俄语', langTr: '土耳其语', langNo: '挪威语', switchVercel: '切换到 Vercel' },
    'zh-Hant': { language: '語言', tagline: '創意狐狸 · 程式設計與創作', links: '連結', games: '遊戲', email: '電子郵件', style: '風格', about: '關於', contact: '聯絡', projects: '專案', source: '原始碼', langEn: '英語（美國）', langRu: '俄語', langTr: '土耳其語', langNo: '挪威語', switchVercel: '切換至 Vercel' },
    la: { language: 'Lingua', tagline: 'Vulpes creatrix · codificatio et constructio', links: 'Nexus', games: 'Ludi', email: 'Epistula', style: 'Stilus', about: 'De nobis', contact: 'Contactus', projects: 'Opera', source: 'Fons', langEn: 'Anglica (Americae)', langRu: 'Russica', langTr: 'Turcica', langNo: 'Norvegica' },
    cu: { language: 'Ѩꙁꙑкъ', tagline: 'Творьчьскъ лисъ · писаниѥ и сътворениѥ', links: 'Съвѣти', games: 'Игры', email: 'Почьта', style: 'Образъ', about: 'О насъ', contact: 'Съвѧꙁь', projects: 'Дѣла', source: 'Источьникъ' },
    shx: { language: 'Tongue', tagline: 'A merry fox · coding and craft', links: 'Links', games: 'Pastimes', email: 'Letters', style: 'Fashion', about: 'Concerning', contact: 'Speak with me', projects: 'Works', source: 'Source', toggleCursor: 'Call forth the Foxy Cursor', switchVercel: 'Journey to Vercel' },
    lol: { language: 'LANGWIDGE', tagline: 'CREATIVE FOX · CODIN AN BUILDS', links: 'LINKZ', games: 'GAEMZ', email: 'E-MAILZ', style: 'STYLES', about: 'BOUT ME', contact: 'TALK 2 ME', projects: 'PROJEKTZ', source: 'SOURZ', toggleCursor: 'TOGGLE FOXY CURSOR PLZ', switchVercel: 'GO 2 VERCEL' },
    'en-AU': { language: 'Language', tagline: 'Creative fox · coding & building, mate', games: 'Games', email: 'Email', style: 'Style', about: 'About', contact: 'Contact', projects: 'Projects', source: 'Source', switchVercel: 'Switch to Vercel' },
    'en-US': { language: 'Language', tagline: 'Creative fox · coding & building', games: 'Games', email: 'Email', style: 'Style', about: 'About', contact: 'Contact', projects: 'Projects', source: 'Source' },
  };

  function applyLang(lang) {
    const valid = ['en', 'ru', 'tr', 'no', 'lt', 'ar', 'ja', 'ko', 'zh-Hans', 'zh-Hant', 'la', 'cu', 'shx', 'lol', 'en-AU'];
    if (!valid.includes(lang)) lang = 'en';
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'shx' || lang === 'lol' ? 'en' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    /* language option labels (translated names) */
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      const map = { en: 'langEn', ru: 'langRu', tr: 'langTr', no: 'langNo' };
      Array.from(langSelect.options).forEach(function(opt) {
        const k = map[opt.value];
        if (k && dict[k]) opt.textContent = dict[k];
      });
      langSelect.value = lang;
    }

    /* style option labels */
    const styleSelect = document.getElementById('styleSelect');
    if (styleSelect) {
      const styleMap = {
        default: 'styleDefault',
        playful: 'stylePlayful',
        scifi: 'styleScifi',
        voxel: 'styleVoxel',
        aurora: 'styleAurora'
      };
      Array.from(styleSelect.options).forEach(function(opt) {
        const k = styleMap[opt.value];
        if (k && dict[k]) opt.textContent = dict[k];
      });
    }

    if (dict.pageTitle) document.title = dict.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict.metaDesc) meta.setAttribute('content', dict.metaDesc);

    const cursorToggle = document.getElementById('cursorToggle');
    if (cursorToggle) {
      const on = document.body.classList.contains('foxor-cursor-enabled');
      cursorToggle.textContent = on ? (dict.hideCursor || dict.toggleCursor) : dict.toggleCursor;
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
    return lang;
  }

  const langSelect = document.getElementById('langSelect');
  let savedLang = 'en';
  try { savedLang = localStorage.getItem(LANG_KEY) || 'en'; } catch (_) {}
  applyLang(savedLang);
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      applyLang(this.value);
    });
  }

  const clock = document.getElementById('clock');
  function tick(){
    if(!clock) return;
    const d = new Date();
    const lang = document.documentElement.lang || 'en';
    const locale = { en: 'en-US', ru: 'ru-RU', tr: 'tr-TR', no: 'nb-NO', lt: 'lt-LT', ar: 'ar', ja: 'ja-JP', ko: 'ko-KR', 'zh-Hans': 'zh-CN', 'zh-Hant': 'zh-TW', la: 'la', cu: 'ru-RU', shx: 'en-GB', lol: 'en-US', 'en-AU': 'en-AU' }[lang] || 'en-US';
    clock.textContent = d.toLocaleString(locale,{weekday:'short',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
  tick(); setInterval(tick,1000);

  const widgetScroll = document.querySelector('.widget-scroll');
  const prevBtn = document.querySelector('.widget-nav-btn.prev');
  const nextBtn = document.querySelector('.widget-nav-btn.next');
  if (widgetScroll && prevBtn && nextBtn) {
    const scrollAmount = 220;
    prevBtn.addEventListener('click', () => widgetScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => widgetScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    function updateNavButtons() {
      prevBtn.style.opacity = widgetScroll.scrollLeft > 10 ? '1' : '0.35';
      nextBtn.style.opacity = widgetScroll.scrollLeft < (widgetScroll.scrollWidth - widgetScroll.clientWidth - 10) ? '1' : '0.35';
    }
    widgetScroll.addEventListener('scroll', updateNavButtons);
    window.addEventListener('resize', updateNavButtons);
    updateNavButtons();
  }

  const switchVercel = document.getElementById('switchVercel');
  if (switchVercel) {
    switchVercel.addEventListener('click', function() {
      this.style.transform = 'scale(0.96)';
      setTimeout(() => { this.style.transform = ''; }, 160);
    });
  }

  const cursorToggle = document.getElementById('cursorToggle');
  if (cursorToggle) {
    cursorToggle.addEventListener('click', function() {
      document.body.classList.toggle('foxor-cursor-enabled');
      const lang = document.documentElement.lang || 'en';
      const dict = I18N[lang] || I18N.en;
      this.textContent = document.body.classList.contains('foxor-cursor-enabled')
        ? (dict.hideCursor || dict.toggleCursor)
        : dict.toggleCursor;
    });
  }

  const styleSelect = document.getElementById('styleSelect');
  function applyStyle(name) {
    const valid = ['default', 'playful', 'scifi', 'voxel', 'aurora'];
    const style = valid.includes(name) ? name : 'default';
    document.body.setAttribute('data-style', style);
    if (styleSelect) styleSelect.value = style;
    try { localStorage.setItem(STYLE_KEY, style); } catch (_) {}
  }
  if (styleSelect) {
    let saved = 'default';
    try { saved = localStorage.getItem(STYLE_KEY) || 'default'; } catch (_) {}
    applyStyle(saved);
    styleSelect.addEventListener('change', function() {
      applyStyle(this.value);
    });
  }

  const packedLinks = document.getElementById('packedLinks');
  const packedBtn = document.getElementById('packedBtn');
  if (packedLinks && packedBtn) {
    packedBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const open = packedLinks.classList.toggle('is-open');
      packedBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function(e) {
      if (packedLinks.classList.contains('is-open') && !packedLinks.contains(e.target)) {
        packedLinks.classList.remove('is-open');
        packedBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && packedLinks.classList.contains('is-open')) {
        packedLinks.classList.remove('is-open');
        packedBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
