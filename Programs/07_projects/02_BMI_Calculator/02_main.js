let form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(height,weight);
    const result = document.querySelector('#result');

    if(height<=0 || height === '' || isNaN(height)){
        result.innerHTML = `${height} is the invalid height, Please enter valid height`;
    }else if(weight<=0 || weight === '' || isNaN(weight)){
        result.innerHTML = `${weight} is the invalid weight, Please enter valid weight`;
    }else{
        const bmi = ((weight)/((height*height)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is : ${bmi}`;
    }

})











//Theme Changer

let availableThemes = document.querySelectorAll('.theme');
console.log(availableThemes);

let body = document.querySelector('body');
console.log(body);

availableThemes.forEach((theme) => {
    console.log(theme);
    theme.addEventListener('click',(event) =>{
        console.log(event.target);

        if(event.target.id == 'theme-1'){
            body.style.backgroundColor = '#7AE582';
        }else if(event.target.id == 'theme-2'){
            body.style.backgroundColor = '#FFB4A2';
        }else if(event.target.id == 'theme-3'){
            body.style.backgroundColor = '#DDA15E';
        }else if(event.target.id == 'theme-4'){
            body.style.backgroundColor = '#86BBD8';
        }
    })
});