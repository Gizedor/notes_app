const notesEl = document.querySelector('.notes')
let editBtn = document.querySelector(".edit");
let deleteBtn = document.querySelector('.delete');

let main = document.querySelector('.main');
let textArea = document.querySelector('textarea');

editBtn.addEventListener('click', ()=>{
    
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    console.log(main);
}); 

textArea.addEventListener('input', (e)=>{
    const {value} = e.target;
    // const {value} == e.targer.value
    main.innerHTML = marked(value);
    console.log(main);
}); 