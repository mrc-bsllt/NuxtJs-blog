import Vue from 'vue';

const months = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
];

const dateFilter = value => {
    return setDateFilter(value);
}

function setDateFilter(date) {
    var newDate = new Date(date),
        day = newDate.getDate(),
        month = months[newDate.getMonth()],
        year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
}

Vue.filter('getDate', dateFilter);