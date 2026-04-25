const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
    }else if(weight === '' || height<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        //show the result
        results.innerHTML = `Your Body Mass Index is: ${bmi}`
        if(bmi<18.60){
            document.getElementById('Under_weight').style.color = "red";
        }
        if(bmi>18.60 && bmi<24.90){
            document.getElementById('Normal_weight').style.color = "green"
        }
        if(bmi>24.90){
            document.getElementById('Overweight').style.color = "red";
        }
    }
    
})