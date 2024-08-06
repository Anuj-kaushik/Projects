const form = document.querySelector('form')
console.log(form)

form.addEventListener( 'submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const bmi = (weight / ((height*height)/10000)).toFixed(2)   

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    }
    else { 
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }


    if(bmi < 18.6){
        msg.innerHTML = `<span>You are under weight</span>`
    }
    if(bmi > 18.6 && bmi < 24.9){
        msg.innerHTML = `<span>You are normal weight</span>`
    }
    if(bmi > 24.9){
        msg.innerHTML = `<span>You are over weight</span>`
    }

} )