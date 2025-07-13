// Objeto con las traducciones
const translations = {
    'en': {
        'hi': 'Hi!',
        'intro': 'I am Santiago and this is my portfolio.',
        'about-title': 'About me:',
        'about-1': 'I\'m passionate about technology, data, and business.',
        'about-2': 'My background in Marketing gave me a strong business vision, later enhanced with studies in Data Science and Quantitative Finance.',
        'about-3': 'Today, I work as a Business Process Consultant in IT, combining technical skills with real business needs.',
        'about-4': 'I believe the best motivation is simple: working on things I find truly cool.',
        // 'about-5': 'Meanwhile I work in Comercial and Finances areas. This experience help me to improve my business vision and understand the needs of and organization and develop my soft-skills working hand to hand with different areas of the organization.',
        // 'about-6': 'Right now I am a Business Process Consultant in IT, and I am very gratefull for be working in an area that brings me passion and enjoyment. Luckly for me, at both at my job and personal time, can dedicate time to learn new things and technoligies applying it to projects. Sometimes still can\'t belibeve that I am getting paid to try and broke stuff, this last try to minimize though.',
        'why-title': 'Why?',
        'why-1': 'I love this question, so I think to give it a section in my portfolio.',
        'why-2': 'Why I love why? Because I feel that espose my motivation in every aspect of my life.',
        'why-3': 'Why I do what I do? Because I think is cool. This may sounds dorky, and I know that say cool is not cool anymore, but recently discover is the best way to explain it, at myself at least work.',
        'why-4': 'Always love technology, but at the same time had other strong interest that change at the time. Working in IT give me the same feelig as child when I discover some new and exciment topic that made me lose track of time and go all in learning more about that.',
        'why-5': 'In this path to learn new things and searching in Google or YouTube about my new passion, I see in restorcpetiva that my only brujula to guide me was \'this is cool, I wanna know more\'.',
        'why-6': 'And that was all the justification that I need. That for me was \'cool\'.',
        'why-7': 'Nowadays things does not change so much. Yes, I have more structure and develop frameworks to learn better.',
        'why-8': 'But what I more enjoy is working into something that I truly believe that\'s cool. Even though said in that way is not cool.',
        'projects-title': 'Projects',
        'project1-title': 'Finance Tracker',
        'project1-short': 'Web app with IA integration and shopping cart that allows users to register and manage their personal finances in a simple and intuitive way.',
        'project1-tech': 'Next.js | Supabase | IA Integration',
        'project1-desc': 'This interactive dashboard was developed to visualize personal finances with an intuitive user interface.',
        'project1-features': 'Main features:',
        'project1-feature1': 'Real-time interactive data visualization',
        'project1-feature2': 'Dynamic filters for custom analysis',
        'project1-feature3': 'Data export in multiple formats',
        'project1-feature4': 'Integration with multiple data sources',
        'project1-feature5': 'User authentication management',
        'project2-title': 'Miel Bakery',
        'project2-short': 'Bakery website designed to showcase products and prices for clients.',
        'project2-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project2-desc': 'Bakery website designed to showcase products and prices for clients.',
        'project2-features': 'Main features:',
        'project2-feature1': 'Responsive design for all devices',
        'project2-feature2': 'Smooth animations and elegant transitions',
        'project2-feature3': 'SEO optimization',
        'project2-feature4': 'Social media integration',
        'project3-title': 'Diamond Studio - Manicure',
        'project3-short': 'Manicure website with appointment scheduling, contact form and shopping cart. Including email marketing system and customer management system.',
        'project3-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project3-desc': 'Manicure website with appointment scheduling and contact form. Including email marketing system and customer management system.',
        'project3-features': 'Main features:',
        'project3-feature1': 'WhatsApp integration',
        'project3-feature2': 'Email integration',
        'project3-feature3': 'Customer information management',
        'project4-title': 'La Alfarera Workshop',
        'project4-short': 'Landing page for a pottery studio, with the target to show the services and techniques for the clients.',
        'project4-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project4-desc': 'Landing page for a pottery studio, with the target to show the services and techniques for the clients.',
        'project4-features': 'Main features:',
        'project4-feature1': 'WhatsApp integration',
        'project4-feature2': 'Email integration',
        'project4-feature3': 'Customer information management',
        'btn-repo': 'Repository',
        'btn-demo': 'Demo',
        'btn-view-repo': 'View Repository',
        'btn-view-demo': 'View Demo',
        // Navigation
        'nav-name': 'Santiago',
        'nav-about': 'About me',
        'nav-why': 'Why?',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        // Contact Section
        'contact-title': 'Contact',
        'contact-social': 'Social Networks',
        'contact-form-title': 'Send me a message',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'footer-role': 'Full Stack Developer',
        'footer-links': 'Quick Links',
        'footer-social': 'Social Media',
        'footer-made': 'Made with',
        'footer-and': 'and',
    },
    'es': {
        'hi': '¡Hola!',
        'intro': 'Soy Santiago y este es mi portfolio.',
        'about-title': 'Sobre mí:',
        'about-1': 'Soy un apasionado de la tecnología, los datos y los negocios.',
        'about-2': 'Aunque, cuando elegí una carrera a los 18 años, me decidí por Marketing. ¿Extraño, verdad? Pero en ese momento veía el aspecto matemático y teórico de la ingeniería no alineado con lo que quería.',
        'about-3': 'Eso cambió y en la carrera descubrí que las matemáticas son divertidas cuando las aplicas a algo real, como ventas y costos. De todos modos, disfruté mucho el Marketing, y creo que me dio una visión de negocios que si hubiera estudiado otra carrera me habría llevado mucho más tiempo desarrollar.',
        'about-4': 'Más tarde, tomé cursos de Análisis de Datos y Ciencias de Datos. Lo que confirmó mi interés en los datos y el desarrollo, y me dio el coraje para hacer un posgrado en Finanzas Cuantitativas.',
        'about-5': 'Mientras tanto, trabajo en áreas Comerciales y Financieras. Esta experiencia me ayudó a mejorar mi visión de negocios y entender las necesidades de una organización y desarrollar mis habilidades blandas trabajando mano a mano con diferentes áreas de la organización.',
        'about-6': 'Ahora soy Consultor de Procesos de Negocio en TI, y estoy muy agradecido por trabajar en un área que me apasiona y disfruto. Por suerte para mí, tanto en mi trabajo como en mi tiempo personal, puedo dedicar tiempo a aprender cosas nuevas y tecnologías aplicándolas a proyectos. A veces todavía no puedo creer que me pagan por probar y romper cosas, aunque trato de minimizar esto último.',
        'why-title': '¿Por qué?',
        'why-1': 'Me encanta esta pregunta, así que pensé en darle una sección en mi portfolio.',
        'why-2': '¿Por qué me encanta el por qué? Porque siento que expone mi motivación en cada aspecto de mi vida.',
        'why-3': '¿Por qué hago lo que hago? Porque creo que es genial. Esto puede sonar tonto, y sé que decir genial ya no es genial, pero recientemente descubrí que es la mejor manera de explicarlo, al menos para mí.',
        'why-4': 'Siempre me encantó la tecnología, pero al mismo tiempo tenía otros intereses fuertes que cambiaban con el tiempo. Trabajar en TI me da la misma sensación que cuando era niño y descubría algún tema nuevo y emocionante que me hacía perder la noción del tiempo y me sumergía completamente en aprender más sobre eso.',
        'why-5': 'En este camino de aprender cosas nuevas y buscar en Google o YouTube sobre mi nueva pasión, veo en retrospectiva que mi única brújula para guiarme era "esto es genial, quiero saber más".',
        'why-6': 'Y eso era toda la justificación que necesitaba. Eso para mí era "genial".',
        'why-7': 'Hoy en día las cosas no han cambiado tanto. Sí, tengo más estructura y he desarrollado marcos de trabajo para aprender mejor.',
        'why-8': 'Pero lo que más disfruto es trabajar en algo que realmente creo que es genial. Aunque decirlo de esa manera no sea genial.',
        'projects-title': 'Proyectos',
        'project1-title': 'Tracker de Finanzas Personales',
        'project1-short': 'Aplicación web con integración de IA y carrito de compras que permite a los usuarios registrar y gestionar sus finanzas personales de manera sencilla e intuitiva.',
        'project1-tech': 'Next.js | Supabase | IA Integration',
        'project1-desc': 'Este dashboard interactivo fue desarrollado para visualizar finanzas personales con una interfaz de usuario intuitiva.',
        'project1-features': 'Características principales:',
        'project1-feature1': 'Visualización interactiva de datos en tiempo real',
        'project1-feature2': 'Filtros dinámicos para análisis personalizado',
        'project1-feature3': 'Exportación de datos en múltiples formatos',
        'project1-feature4': 'Integración con múltiples fuentes de datos',
        'project1-feature5': 'Manejo de autenticación de usuarios',
        'project2-title': 'Miel Bakery',
        'project2-short': 'Página web de pastelería, con el objetivo de mostrar los productos y precios para los clientes.',
        'project2-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project2-desc': 'Página web de pastelería, con el objetivo de mostrar los productos y precios para los clientes.',
        'project2-features': 'Características principales:',
        'project2-feature1': 'Diseño responsivo para todos los dispositivos',
        'project2-feature2': 'Animaciones suaves y transiciones elegantes',
        'project2-feature3': 'Optimización SEO',
        'project2-feature4': 'Integración con redes sociales',
        'project3-title': 'Diamond Studio - Manicura',
        'project3-short': 'Página para manicura, con agenda de cita, formulario de contacto y carrito de compras. Incluyendo sistema de email Marketing y un sistema de administración de clientes.',
        'project3-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project3-desc': 'Página para manicura, con agenda de cita y formulario de contacto. Incluyendo sistema de email Marketing y un sistema de administración de clientes.',
        'project3-features': 'Características principales:',
        'project3-feature1': 'Integración con Whatsapp',
        'project3-feature2': 'Integración con Mail',
        'project3-feature3': 'Gestión de información de clientes',
        'project4-title': 'La Alfarera Taller',
        'project4-short': 'Landing page para una alfarera, con el objetivo de mostrar los servicios y técnicas para los clientes.',
        'project4-tech': 'HTML | CSS | Bootstrap | JavaScript',
        'project4-desc': 'Landing page para una alfarera, con el objetivo de mostrar los servicios y técnicas para los clientes.',
        'project4-features': 'Características principales:',
        'project4-feature1': 'Integración con Whatsapp',
        'project4-feature2': 'Integración con Mail',
        'project4-feature3': 'Gestión de información de clientes',
        'btn-repo': 'Repositorio',
        'btn-demo': 'Demo',
        'btn-view-repo': 'Ver Repositorio',
        'btn-view-demo': 'Ver Demo',
        // Navigation
        'nav-name': 'Santiago',
        'nav-about': 'Sobre mí',
        'nav-why': '¿Por qué?',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        // Contact Section
        'contact-title': 'Contacto',
        'contact-social': 'Redes Sociales',
        'contact-form-title': 'Envíame un mensaje',
        'contact-name': 'Nombre',
        'contact-email': 'Correo electrónico',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar Mensaje',
        'footer-role': 'Desarrollador Full Stack',
        'footer-links': 'Enlaces Rápidos',
        'footer-social': 'Redes Sociales',
        'footer-made': 'Hecho con',
        'footer-and': 'y',
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con atributo data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Actualizar la clase activa de los botones
    document.getElementById('es-btn').classList.toggle('active', lang === 'es');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');

    // Guardar la preferencia del usuario
    localStorage.setItem('preferred-language', lang);
}

// Función para inicializar los botones de idioma
function initLanguageButtons() {
    const esBtn = document.getElementById('es-btn');
    const enBtn = document.getElementById('en-btn');

    if (esBtn && enBtn) {
        esBtn.addEventListener('click', () => changeLanguage('es'));
        enBtn.addEventListener('click', () => changeLanguage('en'));
    }
}

// Cargar el idioma preferido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferred-language') || 'es';
    changeLanguage(preferredLanguage);
    initLanguageButtons();
}); 