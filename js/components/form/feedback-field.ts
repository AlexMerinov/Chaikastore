document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', (e) => {
        const target = e.target as Element;


        if (target.classList.contains('js-fb-contacts') || target.closest('.js-fb-contacts')) {
            // e.preventDefault();
            const link = target.classList.contains('js-fb-contacts')
                ? target
                : target.closest('.js-fb-contacts');

            if (link.firstElementChild.checked) {
                let fields = link.closest('.feedback-contacts')?.querySelectorAll('.form__line');

                fields?.forEach((input) => {
                    input.classList.add('hide');

                    if (input.getAttribute('data-fb') === link.getAttribute('data-fb')) {
                        input.classList.remove('hide');
                    }

                })

            }
        }
    });
});