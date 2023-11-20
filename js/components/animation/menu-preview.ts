document.addEventListener('DOMContentLoaded', () => {

    const jsItemChapters = document.querySelectorAll('.js-item-preview');
    const chapterPreview = document.querySelectorAll('.chapter-preview__box');


    jsItemChapters.forEach((item) => {

        item.addEventListener('mouseenter', () => {
            chapterId = item.id;

            chapterPreview.forEach((item) => {
                item.classList.remove('visible');
                if (item.getAttribute('data-chapter-id') === chapterId) {
                    item.classList.add('visible');
                }
            });
        });
    });


});