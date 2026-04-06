document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    pt: {
      nav_home: "Home",
      nav_about: "Sobre",
      nav_services: "Serviços",
      nav_portfolio: "Portfólio",
      nav_contact: "Contato",
      hero_title: "Transforme Sua Ideia em um Jogo de Sucesso",
      hero_subtitle: "Desenvolvimento de Jogos com Mitos e Lendas Brasileiras + Equipe Apaixonada + Prototipagem Rápida",
      cta_start: "COMECE AGORA",
      cta_start_project: "COMECE SEU PROJETO AGORA",
      slider_sery_desc: "Uma jornada épica que mergulha o jogador em universos misteriosos baseados em mitos e lendas.",
      btn_see_project: "VER PROJETO COMPLETO",
      about_title: "Quem Somos",
      about_desc_1: "A SerGames é um estúdio de desenvolvimento de jogos eletrônicos com sede em Sergipe, dedicado à criação de experiências de aventura que combinam a nostalgia dos jogos clássicos com as inovações dos títulos modernos.",
      about_desc_2: "Inspirando-se em mitos e lendas de diversas culturas, o estúdio constrói mundos imersivos que encantam jogadores de todas as gerações.",
      about_history_title: "História",
      about_history: "Fundada durante a GameJamPlus 2022, onde conquistou reconhecimento como finalista nacional, a SerGames evoluiu com a chegada de novos integrantes apaixonados por jogos e criatividade.",
      stat_finalist: "Finalista GameJamPlus 2022",
      stat_finalist_desc: "Reconhecimento Nacional",
      stat_team: "5+ Profissionais",
      stat_team_desc: "Equipe Apaixonada",
      stat_experience: "3+ Anos",
      stat_exp_desc: "Experiência Profissional",
      stat_platforms: "XR, Mobile, PC",
      stat_platforms_desc: "Expertise em Múltiplas Plataformas",
      services_title: "O Que Oferecemos",
      services_subtitle: "Temos 3 serviços principais. Escolha o que faz sentido para você.",
      service_includes: "O que está incluído:",
      service1_title: "Desenvolvimento de Jogos Completo",
      service1_desc: "Transforme sua ideia em um jogo profissional pronto para o mercado.",
      service1_item1: "Game Design Document (GDD) profissional",
      service1_item2: "Prototipagem e validação de mecânicas",
      service1_item3: "Desenvolvimento completo (programação, arte, som)",
      service1_item4: "Testes e otimização",
      service1_item5: "Suporte para lançamento na Steam",
      service2_title: "Prototipagem Rápida",
      service2_desc: "Valide sua ideia antes de investir uma fortuna.",
      service2_item1: "Análise da ideia",
      service2_item2: "Criação de protótipo funcional",
      service2_item3: "2-3 rodadas de feedback e iteração",
      service2_item4: "Documentação técnica",
      service3_title: "Consultoria em Game Design",
      service3_desc: "Aprenda como criar jogos que encantam.",
      service3_item1: "Análise de sua ideia",
      service3_item2: "Sessões de consultoria (1-1 ou em grupo)",
      service3_item3: "Feedback em GDD e protótipos",
      service3_item4: "Orientação sobre lançamento e marketing",
      btn_quote: "SOLICITAR ORÇAMENTO",
      portfolio_title: "Projetos em Destaque",
      portfolio_subtitle: "Veja como transformamos ideias em realidade.",
      filter_all: "Todos",
      filter_pc: "PC",
      portfolio_sery_desc: "Uma jornada épica que mergulha o jogador em universos misteriosos baseados em mitos e lendas.",
      contact_title: "Fale Conosco",
      contact_subtitle: "Preencha o formulário abaixo e entraremos em contato em breve.",
      form_name: "Nome Completo",
      form_email: "Email",
      form_phone: "Telefone (WhatsApp)",
      form_service: "Qual serviço você está interessado?",
      form_select_service: "Selecione um serviço",
      form_message: "Mensagem",
      form_submit: "ENVIAR MENSAGEM",
      form_success: "✅ Mensagem enviada com sucesso! Entraremos em contato em breve.",
      footer_tagline: "Criando experiências que trazem felicidade através de jogos com cultura.",
      footer_links: "Links Rápidos",
      footer_contact: "Contato",
      footer_email: "Email:",
      footer_address: "Endereço:",
      footer_social: "Redes Sociais",
      footer_copyright: "© 2026 SerGamesStudio. Todos os direitos reservados."
    },

    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      hero_title: "Transform Your Idea Into a Successful Game",
      hero_subtitle: "Game Development with Brazilian Myths and Legends + Passionate Team + Rapid Prototyping",
      cta_start: "START NOW",
      cta_start_project: "START YOUR PROJECT NOW",
      slider_sery_desc: "An epic journey that immerses the player in mysterious universes based on myths and legends.",
      btn_see_project: "SEE FULL PROJECT",
      about_title: "Who We Are",
      about_desc_1: "SerGames is an electronic game development studio based in Sergipe, dedicated to creating adventure experiences that combine the nostalgia of classic games with the innovations of modern titles.",
      about_desc_2: "Inspired by myths and legends from various cultures, the studio builds immersive worlds that enchant players of all ages.",
      about_history_title: "History",
      about_history: "Founded during GameJamPlus 2022, where it achieved recognition as a national finalist, SerGames evolved with the arrival of new members passionate about games and creativity.",
      stat_finalist: "GameJamPlus 2022 Finalist",
      stat_finalist_desc: "National Recognition",
      stat_team: "5+ Professionals",
      stat_team_desc: "Passionate Team",
      stat_experience: "3+ Years",
      stat_exp_desc: "Professional Experience",
      stat_platforms: "XR, Mobile, PC",
      stat_platforms_desc: "Multi-Platform Expertise",
      services_title: "What We Offer",
      services_subtitle: "We have 3 main services. Choose what makes sense for you.",
      service_includes: "What's included:",
      service1_title: "Complete Game Development",
      service1_desc: "Transform your idea into a professional game ready for the market.",
      service1_item1: "Professional Game Design Document (GDD)",
      service1_item2: "Prototyping and mechanics validation",
      service1_item3: "Complete development (programming, art, sound)",
      service1_item4: "Testing and optimization",
      service1_item5: "Support for Steam launch",
      service2_title: "Rapid Prototyping",
      service2_desc: "Validate your idea before investing a fortune.",
      service2_item1: "Idea analysis",
      service2_item2: "Functional prototype creation",
      service2_item3: "2-3 rounds of feedback and iteration",
      service2_item4: "Technical documentation",
      service3_title: "Game Design Consulting",
      service3_desc: "Learn how to create games that enchant.",
      service3_item1: "Analysis of your idea",
      service3_item2: "Consulting sessions (1-1 or group)",
      service3_item3: "Feedback on GDD and prototypes",
      service3_item4: "Guidance on launch and marketing",
      btn_quote: "REQUEST QUOTE",
      portfolio_title: "Featured Projects",
      portfolio_subtitle: "See how we transform ideas into reality.",
      filter_all: "All",
      filter_pc: "PC",
      portfolio_sery_desc: "An epic journey that immerses the player in mysterious universes based on myths and legends.",
      contact_title: "Get In Touch",
      contact_subtitle: "Fill out the form below and we'll get back to you soon.",
      form_name: "Full Name",
      form_email: "Email",
      form_phone: "Phone (WhatsApp)",
      form_service: "Which service are you interested in?",
      form_select_service: "Select a service",
      form_message: "Message",
      form_submit: "SEND MESSAGE",
      form_success: "✅ Message sent successfully! We'll get back to you soon.",
      footer_tagline: "Creating experiences that bring happiness through games with culture.",
      footer_links: "Quick Links",
      footer_contact: "Contact",
      footer_email: "Email:",
      footer_address: "Address:",
      footer_social: "Social Media",
      footer_copyright: "© 2026 SerGamesStudio. All rights reserved."
    },

    es: {
      nav_home: "Inicio",
      nav_about: "Acerca de",
      nav_services: "Servicios",
      nav_portfolio: "Portafolio",
      nav_contact: "Contacto",
      hero_title: "Transforma Tu Idea en un Juego Exitoso",
      hero_subtitle: "Desarrollo de Juegos con Mitos y Leyendas Brasileñas + Equipo Apasionado + Prototipado Rápido",
      cta_start: "COMIENZA AHORA",
      cta_start_project: "COMIENZA TU PROYECTO AHORA",
      slider_sery_desc: "Un viaje épico que sumerge al jugador en universos misteriosos basados en mitos y leyendas.",
      btn_see_project: "VER PROYECTO COMPLETO",
      about_title: "Quiénes Somos",
      about_desc_1: "SerGames es un estudio de desarrollo de videojuegos con sede en Sergipe, dedicado a crear experiencias de aventura que combinan la nostalgia de los juegos clásicos con las innovaciones de los títulos modernos.",
      about_desc_2: "Inspirándose en mitos y leyendas de diversas culturas, el estudio construye mundos inmersivos que encantan a jugadores de todas las edades.",
      about_history_title: "Historia",
      about_history: "Fundada durante GameJamPlus 2022, donde logró reconocimiento como finalista nacional, SerGames evolucionó con la llegada de nuevos miembros apasionados por los juegos y la creatividad.",
      stat_finalist: "Finalista GameJamPlus 2022",
      stat_finalist_desc: "Reconocimiento Nacional",
      stat_team: "5+ Profesionales",
      stat_team_desc: "Equipo Apasionado",
      stat_experience: "3+ Años",
      stat_exp_desc: "Experiencia Profesional",
      stat_platforms: "XR, Mobile, PC",
      stat_platforms_desc: "Experiencia Multi-Plataforma",
      services_title: "Lo Que Ofrecemos",
      services_subtitle: "Tenemos 3 servicios principales. Elige lo que tenga sentido para ti.",
      service_includes: "Qué está incluido:",
      service1_title: "Desarrollo Completo de Juegos",
      service1_desc: "Transforma tu idea en un juego profesional listo para el mercado.",
      service1_item1: "Documento de Diseño de Juego (GDD) profesional",
      service1_item2: "Prototipado y validación de mecánicas",
      service1_item3: "Desarrollo completo (programación, arte, sonido)",
      service1_item4: "Pruebas y optimización",
      service1_item5: "Soporte para lanzamiento en Steam",
      service2_title: "Prototipado Rápido",
      service2_desc: "Valida tu idea antes de invertir una fortuna.",
      service2_item1: "Análisis de la idea",
      service2_item2: "Creación de prototipo funcional",
      service2_item3: "2-3 rondas de retroalimentación e iteración",
      service2_item4: "Documentación técnica",
      service3_title: "Consultoría en Diseño de Juegos",
      service3_desc: "Aprende cómo crear juegos que encanten.",
      service3_item1: "Análisis de tu idea",
      service3_item2: "Sesiones de consultoría (1-1 o grupo)",
      service3_item3: "Retroalimentación en GDD y prototipos",
      service3_item4: "Orientación sobre lanzamiento y marketing",
      btn_quote: "SOLICITAR COTIZACIÓN",
      portfolio_title: "Proyectos Destacados",
      portfolio_subtitle: "Ve cómo transformamos ideas en realidad.",
      filter_all: "Todos",
      filter_pc: "PC",
      portfolio_sery_desc: "Un viaje épico que sumerge al jugador en universos misteriosos basados en mitos y leyendas.",
      contact_title: "Ponte en Contacto",
      contact_subtitle: "Completa el formulario a continuación y nos pondremos en contacto pronto.",
      form_name: "Nombre Completo",
      form_email: "Correo Electrónico",
      form_phone: "Teléfono (WhatsApp)",
      form_service: "¿Qué servicio te interesa?",
      form_select_service: "Selecciona un servicio",
      form_message: "Mensaje",
      form_submit: "ENVIAR MENSAJE",
      form_success: "✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
      footer_tagline: "Creando experiencias que traen felicidad a través de juegos con cultura.",
      footer_links: "Enlaces Rápidos",
      footer_contact: "Contacto",
      footer_email: "Correo:",
      footer_address: "Dirección:",
      footer_social: "Redes Sociales",
      footer_copyright: "© 2026 SerGamesStudio. Todos los derechos reservados."
    }
  };

  function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  const savedLanguage = localStorage.getItem('language') || 'pt';
  setLanguage(savedLanguage);

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = savedLanguage;
    languageSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  const themeBtn = document.getElementById('themeBtn');
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '<span class="theme-icon">☀️</span>' : '<span class="theme-icon">🌙</span>';
    }
  }

  setTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider__slide');
  const totalSlides = slides.length;

  function showSlide(n) {
    const slider = document.getElementById('heroSlider');
    if (!slider || totalSlides === 0) return;

    slider.style.transform = `translateX(-${n * 100}%)`;

    document.querySelectorAll('.slider__dot').forEach((dot, index) => {
      dot.classList.toggle('slider__dot--active', index === n);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.goToSlide = goToSlide;

  if (totalSlides > 1) {
    setInterval(nextSlide, 5000);
  }

  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.remove('filter-button--active');
      });
      this.classList.add('filter-button--active');

      document.querySelectorAll('.portfolio__card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        service: document.getElementById('service')?.value || '',
        message: document.getElementById('message')?.value || ''
      };

      console.log('Formulário enviado:', formData);

      formSuccess.style.display = 'block';
      contactForm.style.display = 'none';
      contactForm.reset();

      setTimeout(() => {
        formSuccess.style.display = 'none';
        contactForm.style.display = 'block';
      }, 3000);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const headerHeight = 120; // Ajuste conforme a altura real do seu header
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        // target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  showSlide(currentSlide);
});