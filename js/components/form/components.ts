function inputView() {
    const jsPassView = document.querySelectorAll('.js-pass-view');

    jsPassView.forEach((item) => {

        const thisField = item.closest('.form__line').querySelector('input');
        const iconView = item.querySelector('.icon-sym--view');
        const iconNoView = item.querySelector('.icon-sym--no-view');

        item.addEventListener('click', () => {

            if (thisField.type === 'password') {
                thisField.setAttribute("type", "text");
                iconView.style.display = 'block';
                iconNoView.style.display = 'none';
            } else {
                thisField.setAttribute("type", "password");
                iconView.style.display = 'none';
                iconNoView.style.display = 'block';
            }

        });

    });
}

document.addEventListener('DOMContentLoaded', () => {
    inputView();
});