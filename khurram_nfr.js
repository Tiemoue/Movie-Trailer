const users = ['Ifrah', 'Collins', 'Jayla', 'Fola', 'Treasure'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('Enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
    }else{
        alert('Username already exists');
    }
})


userIcons();
