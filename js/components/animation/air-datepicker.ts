import AirDatepicker from 'air-datepicker';


document.addEventListener('DOMContentLoaded', () => {
    new AirDatepicker('#datepicker', {
        autoClose: true,
        minDate: new Date(),
    });
});
