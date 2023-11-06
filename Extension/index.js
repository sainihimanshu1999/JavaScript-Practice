
let myLeads = []
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function() {
    let newLead = inputEl.value;
    myLeads.push(newLead)
    console.log(myLeads)
    for(let i=0; i<myLeads.length; i++){
        console.log(myLeads[i])
    }
})