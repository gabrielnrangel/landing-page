$(document).ready(function() {
    // Função para definir o item de navegação ativo
    function setActiveNavItem(index) {
        $('.nav-item').removeClass('active');
        $($('.nav-item')[index]).addClass('active');
    }

    // Atualiza o item de navegação ativo com base na rolagem da página
    function updateNavOnScroll() {
        const sections = $('section');
        const scrollPosition = $(window).scrollTop();
        let activeSectionIndex = 0;

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - $('header').outerHeight();
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        setActiveNavItem(activeSectionIndex);
    }

    // Atualiza o item de navegação ativo na rolagem
    $(window).on('scroll', function() {
        updateNavOnScroll();
    });

    // Atualiza o item de navegação ativo quando um link é clicado
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        const target = $(this).attr('href');
        const targetSection = $(target);
        const targetIndex = $('section').index(targetSection);

        $('html, body').animate({
            scrollTop: targetSection.offset().top - $('header').outerHeight()
        }, 500, function() {
            setActiveNavItem(targetIndex);
        });
    });

    // Inicializa a rolagem suave para o carregamento inicial
    updateNavOnScroll();

    // Configuração do ScrollReveal (opcional)
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.pack', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonials_profile', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    // Menu responsivo
    $('#responsive_btn').on('click', function() {
        $('#responsive_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Atualiza o item de navegação ativo quando um item do menu responsivo é clicado
    $('#responsive_menu a').on('click', function() {
        $('#responsive_menu').removeClass('active');
        $('#responsive_btn').find('i').removeClass('fa-x');
    });
});




