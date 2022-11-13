const form=document.querySelector('.add-form');
const liste=document.querySelector('.todos');
const aramaInput=document.querySelector('.search input');

aramaInput.addEventListener('keyup',e=>{

    const ifade=aramaInput.value.trim().toLowerCase();
    filtreOlustur(ifade);
});

const filtreOlustur=(ifade)=>{

    Array.from(liste.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return !yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        yapilacak.classList.add('filtered');
    });

    Array.from(liste.children).filter((yapilacak)=>{

        console.log(yapilacak.textContent.includes(ifade));
        return yapilacak.textContent.toLowerCase().includes(ifade);

    }).forEach((yapilacak)=>{
        yapilacak.classList.remove('filtered');
    });

}

function templateOlustur(yapilacak){
    let html=`
    <li class="list-group-item d-flex justify-content-between align-item-center">
          <span>${yapilacak}</span>
          <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    liste.innerHTML +=html;
}

form.addEventListener('submit',e=>{
    e.preventDefault();

    const yapilacak=form.add.value.trim().toLowerCase();
    if(yapilacak.length){
        templateOlustur(yapilacak)
        form.reset();
    }

});

liste.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});





