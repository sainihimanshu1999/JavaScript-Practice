
let myLeads = []
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el'); 
const deleteBtn = document.getElementById('delete-btn'); 
const tabBtn = document.getElementById('tab-btn');


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}else{
    console.log("empty")
}

tabBtn.addEventListener('click', function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     myLeads.push(tabs[0].url)
    //     localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //     renderLeads(myLeads)
    // })

    chrome.tabs.query({active:true, currentWindow: true} , function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })


})

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
    console.log("delete")
})

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(leads) {
    sleads = ""
    for(let i=0; i<leads.length; i++){
        //sleads += '<li><a  target ="_blank" href="' +myLeads[i]+ '">' + myLeads[i] + '</a></li>'
        sleads += `
        <li>
            <a  target ="_blank" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = sleads
}
