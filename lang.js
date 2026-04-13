const translations = {
    ko: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_portfolio: "PORTFOLIO",
        nav_contact: "CONTACT",
        home_role: "마케팅 전문가 & 비주얼 스토리텔러",
        home_subtitle: "전략적 마케팅을 통해 새로운 연결을 만들어갑니다.",
        about_title: "About",
        about_p1: "안녕하세요,<br>다양한 콘텐츠 플랫폼을 통해 브랜드와 사람을 연결하는 마케터 <strong>빛나</strong>입니다.",
        about_p2: "네이버 블로그를 중심으로 맛집과 생활 정보를 전달하며,<br>실제 경험을 바탕으로 신뢰도 높은 콘텐츠를 제작하고 있습니다.",
        about_p3: "또한 유튜브, 인스타그램, 스레드(Threads)를 함께 운영하며<br>채널별 특성에 맞는 콘텐츠로 다양한 방식의 소통을 이어가고 있습니다.",
        about_lang: "특히 한국어, 영어, 중국어 3개 국어를 활용한 원활한 소통이 가능하여,<br>더 폭넓은 타겟층과 교감할 수 있는 강점을 가지고 있습니다.",
        about_p4: "단순한 홍보를 넘어,<br>사람들이 공감하고 기억할 수 있는 콘텐츠를 만드는 것을 목표로 합니다.",
        portfolio_title: "PORTFOLIO",
        pf_youtube: "유튜브",
        pf_instagram: "인스타그램",
        pf_naverblog: "네이버 블로그",
        pf_threads: "스레드",
        contact_title: "Contact",
        contact_desc: "새로운 프로젝트, 마케팅 전략, 협업 문의를 환영합니다."
    },
    en: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_portfolio: "PORTFOLIO",
        nav_contact: "CONTACT",
        home_role: "Marketing Expert & Visual Storyteller",
        home_subtitle: "Inspiring connections through strategic marketing.",
        about_title: "About",
        about_p1: "Hello,<br>I am <strong>Bitna</strong>, a marketer who connects brands and people through various content platforms.",
        about_p2: "Focusing on Naver Blog, I deliver genuine information on food and lifestyle,<br>creating highly reliable content based on real experiences.",
        about_p3: "I also operate YouTube, Instagram, and Threads,<br>continuing diverse forms of communication with content tailored to each channel.",
        about_lang: "In particular, I am fluent in Korean, English, and Chinese,<br>which gives me the strength to communicate and connect with a much broader global audience.",
        about_p4: "Beyond simple promotion,<br>my goal is to create content that people can relate to and remember.",
        portfolio_title: "PORTFOLIO",
        pf_youtube: "YouTube",
        pf_instagram: "Instagram",
        pf_naverblog: "Naver Blog",
        pf_threads: "Threads",
        contact_title: "Contact",
        contact_desc: "We welcome inquiries for new projects, marketing strategies, and collaborations."
    },
    zh: {
        nav_home: "首页",
        nav_about: "关于",
        nav_portfolio: "作品集",
        nav_contact: "联系我们",
        home_role: "营销专家与视觉故事讲述者",
        home_subtitle: "通过战略营销激发连结。",
        about_title: "关于",
        about_p1: "您好，<br>我是<strong>Bitna</strong>，一位通过各种内容平台连接品牌与人的营销人员。",
        about_p2: "我以Naver博客为中心，提供美食和生活信息，<br>并基于真实经验制作值得信赖的内容。",
        about_p3: "同时我也运营YouTube、Instagram和Threads频道，<br>利用符合各个频道特点的内容，以多种方式进行沟通交流。",
        about_lang: "特别是，我熟练掌握韩语、英语和中文，<br>能够与更广泛的全球受众进行顺畅的沟通与交流。",
        about_p4: "超越单纯的宣传，<br>我的目标是创造出让人产生共鸣并能记住的内容。",
        portfolio_title: "作品集",
        pf_youtube: "YouTube",
        pf_instagram: "Instagram",
        pf_naverblog: "Naver 博客",
        pf_threads: "Threads",
        contact_title: "联系我们",
        contact_desc: "欢迎关于新项目、营销战略和合作的咨询。"
    }
};

function changeLanguage(lang) {
    // Save to localStorage
    localStorage.setItem('preferredLang', lang);

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Replace text in elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set default language or load from preferences
    const savedLang = localStorage.getItem('preferredLang') || 'ko';
    changeLanguage(savedLang);

    // Add click events to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
        });
    });
});
