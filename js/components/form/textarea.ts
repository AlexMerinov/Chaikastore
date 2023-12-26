const fTextarea = (textarea: any) => {
    textarea.style.height = '25px';

    textarea.setAttribute(
        'style',
        `height:${textarea.scrollHeight}px;overflow-y:hidden;`
    );
};

const fTextareaInit = () => {
    const jstextarea = document.querySelectorAll('.js-textarea');
    jstextarea.forEach((textarea, index) => {
        const areaParent = textarea.closest('.form__line');
        const symbolCounter = areaParent?.querySelector('.symbol-counter');
        const maxlength = 500;
        fTextarea(textarea);

        if (symbolCounter !== null && symbolCounter !== undefined) {
            symbolCounter.textContent = maxlength;
        }

        textarea.addEventListener('input', onInput);

        function onInput(e) {
            e.target.value = e.target.value.substr(0, maxlength);
            const length = e.target.value.length;

            if (symbolCounter !== null && symbolCounter !== undefined) {
                symbolCounter.textContent = maxlength - length;
            }
        }

        textarea.addEventListener('input', () => {
            fTextarea(textarea);
        });
    });

    window.addEventListener('resize', () => {
        const jstextarea = document.querySelectorAll('.js-textarea');
        jstextarea.forEach((textarea, index) => {
            fTextarea(textarea);
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fTextareaInit();
});
