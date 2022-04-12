const question_array = [...document.querySelectorAll('.question')];
const arrow_array = [...document.querySelectorAll('.fa-angle-up')];
const answer_array = [...document.querySelectorAll('.answer')];


function addAnEventListener(e) {
    e.addEventListener('click', () => {
        let index_position = question_array.indexOf(e);
        answer_array[index_position].classList.toggle('zero-height');
        answer_array[index_position].classList.toggle('display');
        arrow_array[index_position].classList.toggle('rotation');
    })
}

question_array.forEach(addAnEventListener);