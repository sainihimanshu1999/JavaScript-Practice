
let myLeads = []
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');  

inputBtn.addEventListener('click', function() {
    let newLead = inputEl.value;
    myLeads.push(newLead)
    renderLeads()
})

function renderLeads() {
    sleads = ""
    for(let i=0; i<myLeads.length; i++){
        sleads += '<li>' + myLeads[i] + '</li>'
    }
    ulEl.innerHTML = sleads
}
