const utoggle = document.querySelector('.toggle'); 
const navigation = document.querySelector('.navigation');

utoggle.addEventListener('click', () => {
    utoggle.classList.toggle('active');
    navigation.classList.toggle('active');
})