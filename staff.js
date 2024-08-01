// Wait for the DOM to be fully loaded
window.addEventListener("load", event => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Team member data
    const team = [
        {
            name: "Alice Stone",
            role: "UI Designer",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        // ... (rest of the team members) ...
    ];

    // Social icons data
    const icons = [{
        iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    }];

    const { iWebsite, iEmail, iLinkedin, iDribbble } = icons[0];

    // Function to populate team members
    function addTeam() {
        team.forEach(member => {
            const { name, role, desc, photo, website, email, linkedin, dribbble } = member;

            const template = `
                <div class="swiper-slide">
                    <div class="card">
                        <span class="bg"></span>
                        <span class="more"></span>
                        <figure class="photo"><img src="${photo}" alt="${name}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        <div class="social">
                            <span class="pointer"></span>
                            <div class="icons">
                                <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}" alt="Website"></a>
                                <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}" alt="Email"></a>
                                <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}" alt="LinkedIn"></a>
                                <a class="icon" href="${dribbble}" target="_blank" data-index="3"><img src="${iDribbble}" alt="Dribbble"></a>
                            </div>
                        </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        });
    }

    // Add team members to the DOM
    addTeam();

    // Initialize Swiper
    const mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    // Show More functionality
    const btnShow = document.querySelectorAll('.more');
    btnShow.forEach(el => el.addEventListener('click', showMore));

    function showMore(event) {
        const card = event.target.closest(".swiper-slide");
        card.classList.toggle('show-more');
    }

    // Social Hover functionality
    const icons = document.querySelectorAll('.icon');
    icons.forEach(el => el.addEventListener("mouseenter", followCursor));

    function followCursor(event) {
        const pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer');
        const index = event.currentTarget.dataset.index;
        const sizeIcon = (60 * index) + 25;
        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }
});