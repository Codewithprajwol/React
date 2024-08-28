const button1=document.querySelector('.btn-1');
const button2=document.querySelector('.btn-2');
const curd1=document.querySelector('.curd-count')
const curd2=document.querySelector('.curd-count1')

document.addEventListener('DOMContentLoaded',()=>{
let basket1Value=0;
let basket2Value=100;

curd1.innerText=`${basket1Value} Curd`
curd2.innerText=`${basket2Value} Curd`
button1.addEventListener('click',()=>{
    if(basket1Value>=0 && basket2Value<=99){
    curd1.innerText=`${basket1Value=basket1Value-1} Curd`
    curd2.innerText=`${basket2Value=basket2Value+1} Curd`
    }
    else{
     alert('cannot transfer')
    }
})

button2.addEventListener('click',()=>{
    if(basket2Value>=0 && basket1Value<=99){
    curd2.innerText=`${basket2Value=basket2Value-1} Curd`
    curd1.innerText =`${basket1Value=basket1Value+1} Curd`
    }
    else{
        alert('cannot transfer')
    }
})
})

// Here whenever we upadate a variable we have to again update the Dom ...here we have to use so many innerText ...So, it is called the imperative programming.

//But when we use react we don't have to update the changes again and again ...react automatically update the changes ......So, it is called the declarative programming.

/* Main reason to use React
1. Declarative programming
2. Component Based Architecture
3. Single Page Application -> once page is opened.... if we go to other page or link .... our page will not load 
4. Increase User Experiences */