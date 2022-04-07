const btn = document.getElementById('btn theme');

//eğer tema değiştirme butonuna basıldıysa hakkımda bloğu,eğitim bloğu ve iletişim bloğu renk değiştirmektedir. 
btn.addEventListener('click', function onClick(event) {
    const box = document.getElementById('about');
    const box_2 = document.getElementById('education');
    const box_3 = document.getElementById('contact');

    box.style.backgroundColor = 'lightslategrey';
    box_2.style.backgroundColor = 'grey';
    box_3.style.backgroundColor = 'lightslategrey';
    box_3.style.color = 'snow';
  

});