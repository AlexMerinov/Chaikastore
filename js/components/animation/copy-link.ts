import MicroModal from 'micromodal';
import { defaultSettings } from '@js/components/modals/settings';
import { openModal, closeModal } from '@js/components/modals/utils';

document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.js-link-copy');
    links.forEach((link) => {

        let ModalTimeout = null;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            const input = document.createElement('input');
            input.value = href;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            input.remove();
            MicroModal.show('modal-link-copy', defaultSettings);
            if (ModalTimeout !== null) {
                clearTimeout(ModalTimeout);
            }
            ModalTimeout = setTimeout(() => {
                MicroModal.close('modal-link-copy');
            }, 3000);
        });
    });


    const linksGo = document.querySelectorAll('.js-link-and-copy');
    linksGo.forEach((link) => {

        let ModalTimeout = null;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('data-copy');

            const input = document.createElement('input');
            input.value = href;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            input.remove();
            MicroModal.show('modal-link-copy-go', defaultSettings);
            if (ModalTimeout !== null) {
                clearTimeout(ModalTimeout);
            }
            ModalTimeout = setTimeout(() => {
                MicroModal.close('modal-link-copy-go');
                window.open(link.href);
            }, 2500);
        });
    });

});
