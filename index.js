
var idlist=[];
var statusButton="";
var nameinput;
var emailinput;
var phoneinput;
function createCard(nametext,emailtext,phonetext){
    // card
    let card=document.createElement("div");
    card.className="rounded-xl h-max shadow-lg border-2 bg-white relative";
    card.id=phonetext;
    card.style.opacity=0;
    idlist.push(phonetext)
    // container
    let container=document.createElement("div");
    card.appendChild(container);
    container.className="flex";
    // image
    let image=document.createElement("div");
    image.className="bg-slate-50 pt-5 pb-3 px-4 rounded-l-xl sm:px-3";
    container.appendChild(image);
    //img-arr
    let img_arr=document.createElement("div");
    image.appendChild(img_arr);
    //icon
    let icon_div=document.createElement("div");
    icon_div.className="rounded-full h-16 w-16 bg-blue-400 flex justify-center items-center";
    img_arr.appendChild(icon_div);
    let span=document.createElement("span");
    span.className="text-white font-nunito text-2xl";
    icon_div.appendChild(span);
    let b=nametext.split(' ').map(x => x[0]).join('');
    let span_text=document.createTextNode(b.substring(0,2));
    span.appendChild(span_text);

    //buttons
    let buttons_div=document.createElement("div");
    img_arr.appendChild(buttons_div);
    buttons_div.className="flex gap-3 mt-2 justify-center items-center";
    //phone button
    let phone_btn=document.createElement("button");
    phone_btn.className="rounded-full h-6 w-6 bg-white flex justify-center items-center border-[1px] border-primary";
    buttons_div.appendChild(phone_btn);
    phone_btn.addEventListener("click",function(){
        window.open(`tel:+91 ${phonetext}`);

    });
    
    let phone_span=document.createElement("span");
    phone_span.className="fa fa-phone text-primary text-base ";
    phone_btn.appendChild(phone_span);
    //email button
    let email_btn=document.createElement("button");
    email_btn.className="rounded-full h-6 w-6 bg-white flex justify-center items-center border-[1px] border-blue-400";
    buttons_div.appendChild(email_btn);
    email_btn.addEventListener("click",function(){
        window.open(`mailto:${emailtext}`);

    });
    let email_span=document.createElement("span");
    email_span.className="fa fa-at text-blue-400 text-base";
    email_btn.appendChild(email_span);

    // details
    let details_div=document.createElement("div");
    details_div.className="pt-6 pb-3 px-2 w-full";
    container.appendChild(details_div);

    //buttons-arr
    let buttons_arr=document.createElement("div");
    buttons_arr.className="flex gap-2 justify-end absolute right-2 -top-[5px] bg-slate-100 rounded-bl-xl rounded-tr-xl py-1 px-3 mt-[4px] mr-[-8px]";
    details_div.appendChild(buttons_arr);
    //edit
    let edit_btn=document.createElement("button");
    edit_btn.id=`edit-${phonetext}`;
    edit_btn.addEventListener("click",function(){
        showEditForm(phonetext);
        statusButton="EDIT";

    });
    edit_btn.className="rounded-full h-7 w-7 bg-white border-blue-400 border-solid border-[1px] flex justify-center items-center ";
    buttons_arr.appendChild(edit_btn);
    let edit_span=document.createElement("span");
    edit_span.className="fa fa-edit text-blue-400 ml-[1px] mt-[1px]";
    edit_btn.appendChild(edit_span);

    //delete
    let delete_btn=document.createElement("button");
    delete_btn.id=`del-${phonetext}`;
    delete_btn.addEventListener("click",function(){
        showDelete(phonetext);

    });
    delete_btn.className="rounded-full h-7 w-7 border-red-500 bg-white border-solid border-[1px] flex justify-center items-center ";
    buttons_arr.appendChild(delete_btn);
    let delete_span=document.createElement("span");
    delete_span.className="fa fa-trash text-red-500";
    delete_btn.appendChild(delete_span);

    let text_div=document.createElement("div");
    text_div.className="flex flex-col flex-wrap mt-3 break-words";
    details_div.appendChild(text_div);

    // name
    let fullname=document.createElement("h3");
    fullname.className="font-nunito text-lg ";
    text_div.appendChild(fullname);
    let fullname_text=document.createTextNode(nametext);
    fullname.appendChild(fullname_text);

    // phone
    let phone=document.createElement("h3");
    phone.className="font-nunito text-gray-500 text-sm ";
    text_div.appendChild(phone);
    let phone_text=document.createTextNode(`+91 ${phonetext}`);
    phone.appendChild(phone_text);

    // email
    let email=document.createElement("h3");
    email.className="font-nunito  text-gray-500 text-sm";
    text_div.appendChild(email);
    let email_text=document.createTextNode(emailtext);
    email.appendChild(email_text);
    
    let main=document.getElementById("main");
    main.appendChild(card);
    
    

}

 function fadeOut(element) {
    var op = 1;  
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.remove();
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
}
function fadeIn(element) { 
    var opacity = 0; 
    var intervalID = setInterval(function() { 
  
        if (opacity < 1) { 
            opacity = opacity + 0.1 
            element.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 100); 
} 
 

function validateAddForm(){
    var name1=document.getElementById("name");
    let name_error=document.getElementById("name-error");
    var email=document.getElementById("email");
    let email_error=document.getElementById("email-error");
    var phone=document.getElementById("phone");
    let phone_error=document.getElementById("phone-error");
    const form = document.getElementById('form');
    form.addEventListener("submit", function(event){
        event.preventDefault();
    })

    let name_regex=/^[a-zA-Z ]+$/;
    let name_result=name_regex.test(name1.value);
    let email_regex=/^([a-z0-9\.-]+)@([a-z]{2,15})\.([a-z]{2,15})$/;
    let email_result=email_regex.test(email.value);
    let phone_regex=/^[0-9]\d{9}$/;
    let phone_result=phone_regex.test(phone.value)
    checkName();

    function checkName(){
        if (name1.value.trim()===""){
            name1.style.outline="solid";
            name1.style.outlineColor="red";
            name_error.style.display="block";
            email.style.outline="none";
            email_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            name_error.textContent="Name should not be empty"
        }else if(name_result===false){
            email.style.outline="none";
            email_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            name1.style.outline="solid";
            name1.style.outlineColor="red";
            name_error.style.display="block";
            name_error.textContent="Allowed alphabets only !";
        }else if(name1.value.trim().length>17){
            email.style.outline="none";
            email_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            name1.style.outline="solid";
            name1.style.outlineColor="red";
            name_error.style.display="block";
            name_error.textContent="Maximum 17 characters allowed !";
        }else{
            email.style.outline="none";
            email_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            name1.style.outline="none";
            name_error.style.display="none";
            checkEmail();
            
        } 
    }
    function checkEmail(){
        if (email.value.trim()===""){
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            email.style.outline="solid";
            email.style.outlineColor="red";
            email_error.style.display="block";
            email_error.textContent="Email should not be empty"
        }else if(email_result===false){
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            email.style.outline="solid";
            email.style.outlineColor="red";
            email_error.style.display="block";
            email_error.textContent="Enter Email in valid format!";
        }else if(email.value.length>31){
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            email.style.outline="solid";
            email.style.outlineColor="red";
            email_error.style.display="block";
            email_error.textContent="Email is too long!";
        }else{
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            email.style.outline="none";
            email_error.style.display="none";
            checkPhone();
            
        }
    }
    function checkPhone(){
        if (phone.value.trim()===""){
            email.style.outline="none";
            email_error.style.display="none";
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="solid";
            phone.style.outlineColor="red";
            phone_error.style.display="block";
            phone_error.textContent="Name should not be empty"
        }else if(phone_result===false){
            email.style.outline="none";
            email_error.style.display="none";
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="solid";
            phone.style.outlineColor="red";
            phone_error.style.display="block";
            phone_error.textContent="Enter Phone Number in valid format!";
        }else{
            email.style.outline="none";
            email_error.style.display="none";
            name1.style.outline="none";
            name_error.style.display="none";
            phone.style.outline="none";
            phone_error.style.display="none";
            checkIfAlreadyExists();
  
        }
    }


    
}
function clearData(){
    localStorage.clear();
    for (let i of idlist){
        document.getElementById(i).remove();
    }
    idlist=[];
    loadCards();
}
loadCards();
function loadCards(){
    for (let i of idlist){
        document.getElementById(i).remove();
    }
    idlist=[];
    var list=[];
    if(localStorage.getItem("list")===null){
        list=[];
    }else{
        list=JSON.parse(localStorage.getItem("list"));
    }
    
    if(list.length===0){
        let nodata_arr=document.getElementById("no-data");
        let main=document.getElementById("main");
        main.style.display="none";
        nodata_arr.style.display="flex";
    }else{
        let nodata_arr=document.getElementById("no-data");
        let main=document.getElementById("main");
        main.style.display="grid";
        nodata_arr.style.display="none";
        for(let i=0;i<list.length;i++){
            let nameValue=JSON.parse(list[i]).name;
            let emailValue=JSON.parse(list[i]).email;
            let phoneValue=JSON.parse(list[i]).phone;
            createCard(nameValue,emailValue,phoneValue);
            fadeIn(document.getElementById(phoneValue));
          
        }
        
        
    }
    
}
function closeForm(){
    let form_arr=document.getElementById("form-popup");
    let main=document.getElementById("main");
    main.style.display="grid";
    form_arr.style.display="none";
    statusButton="";
    document.getElementById("phone").readOnly=false;
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    
}
function closeDelete(){
    let form_arr=document.getElementById("delete-popup");
    let main=document.getElementById("main");
    main.style.display="grid";
    form_arr.style.display="none";
    
}
function show(){
    let form_arr=document.getElementById("form-popup");
    let error=document.getElementById("error");
    form_arr.style.display="flex";
    //main.style.display="none";
    statusButton="";
    let phone=document.getElementById("phone");
    let name1=document.getElementById("name");
    let email=document.getElementById("email");
    let phone_error=document.getElementById("phone-error");
    let name_error=document.getElementById("name-error");
    let email_error=document.getElementById("email-error");
    phone.readOnly=false;
    name1.value="";
    email.value="";
    phone.value="";
    
    name1.style.outline="none";
    name_error.style.display="none";
    phone.style.outline="none";
    phone_error.style.display="none";
    email.style.outline="none";
    email_error.style.display="none";
    error.style.display="none";
    
}
var idToDelete="";
function showDelete(phone){
    let form_arr=document.getElementById("delete-popup");
    let main=document.getElementById("main");
    form_arr.style.display="flex";
    //main.style.display="none";
    idToDelete=phone;
    
}
function deleteCard(){
    let form_arr=document.getElementById("delete-popup");
    let main=document.getElementById("main");
    form_arr.style.display="none";
    main.style.display="grid";
    fadeOut(document.getElementById(idToDelete));
    removeOneData(idToDelete);
}

function removeOneData(id){
    
    var newlist=JSON.parse(localStorage.getItem("list"));
    
    for(let i=0;i<newlist.length;i++){
        let idValue=JSON.parse(newlist[i]).id;
        if(idValue===id){
            var itemToRemove=newlist[i];
            break;
        }
        
    }

    newlist.splice(newlist.indexOf(itemToRemove),1);
    if(Object.entries(newlist).length === 0){
        let nodata_arr=document.getElementById("no-data");
        let main=document.getElementById("main");
        main.style.display="none";
        nodata_arr.style.display="flex";
        localStorage.clear();
    }else{
        localStorage.setItem("list",JSON.stringify(newlist));
    
    }
    
}
function checkIfAlreadyExists(){
    function setEdit(){
        error.style.display="none";
        let form_arr=document.getElementById("form-popup");
        let main=document.getElementById("main");
        form_arr.style.display="none";
        main.style.display="grid";
        let newlist=JSON.parse(localStorage.getItem("list"));
        for(let i=0;i<newlist.length;i++){  
            let idValue=JSON.parse(newlist[i]).id;
            if(idValue===document.getElementById("phone").value){
                let objectEdit=JSON.parse(newlist[i]);
                objectEdit.email=document.getElementById("email").value;
                objectEdit.name=document.getElementById("name").value.toUpperCase();
            
                objectEdit=JSON.stringify(objectEdit);
                newlist[i]=objectEdit;
                break;
            }
            
        }
        localStorage.setItem("list",JSON.stringify(newlist));
        loadCards();
    }
    if(statusButton=="EDIT"){
        function edit(){
            var newlist=JSON.parse(localStorage.getItem("list"));
            console.log(newlist);
            var matchFound=false;
            for(let i=0;i<newlist.length;i++){
                let emailValue=JSON.parse(newlist[i]).email;
                if(emailValue===document.getElementById("email").value){
                    
                    matchFound=true;
                    break;
                }
                else{
                    matchFound=false;
                }
                
            }
            if(matchFound){
                error.style.display="block";
            }else{
                setEdit();

            }
        }
        if(document.getElementById("name").value===nameinput && document.getElementById("email").value===emailinput){
            error.style.display="block";
            error.textContent="no changes made";
        }else if(document.getElementById("name").value!==nameinput && document.getElementById("email").value===emailinput){
            setEdit();

        }else if(document.getElementById("name").value===nameinput && document.getElementById("email").value!==emailinput)
        {
            edit();
        }else if(document.getElementById("name").value!==nameinput && document.getElementById("email").value!==emailinput)
        {
            edit();
        }

    }else{
        if(localStorage.getItem("list")===null || localStorage.getItem("list")===""){
            newCards();
        }else{
            var newlist=JSON.parse(localStorage.getItem("list"));
            console.log(newlist);
            var match=false;
            for(let i=0;i<newlist.length;i++){
                let phoneValue=JSON.parse(newlist[i]).phone;
                let emailValue=JSON.parse(newlist[i]).email;
                if(phoneValue===document.getElementById("phone").value || emailValue===document.getElementById("email").value){
                    match=true;
                    break;
                }
                else{
                    match=false;
                }
                
            }
            if(match){
                error.style.display="block";
            }else{
                error.style.display="none";
                newCards();
            }
        }
    }
    
}
function newCards(){
    let nodata_arr=document.getElementById("no-data");
    nodata_arr.style.display="none";
    let form_arr=document.getElementById("form-popup");
    let main=document.getElementById("main");
    form_arr.style.display="none";
    main.style.display="grid";
    var name1=document.getElementById("name");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    let time = new Date();
    let details={
    id:phone.value,
    time:time,
    name:name1.value.toUpperCase(),
    email:email.value,
    phone:phone.value
    }
    details=JSON.stringify(details);
    var cardList=[];
    if(localStorage.getItem("list")===null){
        cardList=[];
    }else{
        cardList=JSON.parse(localStorage.getItem("list"));
    }
    
    cardList.push(details);
    let data=JSON.stringify(cardList);
    localStorage.setItem("list",data);
    let list=JSON.parse(localStorage.getItem("list"));
    createCard(name1.value.toUpperCase(),email.value,phone.value);
    fadeIn(document.getElementById(phone.value));
   
    // for(let i=0;i<list.length;i++){
    //     let nameValue=JSON.parse(list[i]).name;
    //     let emailValue=JSON.parse(list[i]).email;
    //     let phoneValue=JSON.parse(list[i]).phone;
    //     createCard(nameValue,emailValue,phoneValue);
    // }
}

function showEditForm(id){
    nameinput=document.getElementById("name").value;
    emailinput=document.getElementById("email").value;
    phoneinput=document.getElementById("phone").value;
    let form_arr=document.getElementById("form-popup");
    let main=document.getElementById("main");
    form_arr.style.display="flex";
    //main.style.display="none";
    document.getElementById("phone").readOnly=true;
    let phone_error=document.getElementById("phone-error");
    let name_error=document.getElementById("name-error");
    let email_error=document.getElementById("email-error");
    
    document.getElementById("name").style.outline="none";
    name_error.style.display="none";
    phone.style.outline="none";
    phone_error.style.display="none";
    email.style.outline="none";
    email_error.style.display="none";

    var newlist=JSON.parse(localStorage.getItem("list"));
    
    for(let i=0;i<newlist.length;i++){
        let idValue=JSON.parse(newlist[i]).id;
        
        if(idValue===id){
            document.getElementById("name").value=JSON.parse(newlist[i]).name;
            document.getElementById("email").value=JSON.parse(newlist[i]).email;
            document.getElementById("phone").value=JSON.parse(newlist[i]).phone;
            break;
        }
        
    }
    nameinput=document.getElementById("name").value;
    emailinput=document.getElementById("email").value;
    phoneinput=document.getElementById("phone").value;
    
}


function searchName(){
    if(idlist.length>0){
        for (let i of idlist){
            document.getElementById(i).remove();
        }
        idlist=[];
    }
    let value=document.getElementById("search").value;
    if(value.trim()===""){
        loadCards();
    }else{
        
        let searchList=[];
        console.log(searchList)
        let valueList=JSON.parse(localStorage.getItem("list"));
    
        for(let i=0;i<valueList.length;i++){
            let data=JSON.parse(valueList[i]);
            if(data.name.includes(value.toUpperCase())){
                searchList.push(JSON.stringify(data));
            }
        
        
        }
        if(searchList.length===0){
            let nodata_arr=document.getElementById("no-data");
            let main=document.getElementById("main");
            main.style.display="none";
            nodata_arr.style.display="flex";
        }else{
            for(let i=0;i<searchList.length;i++){

                let searchName=JSON.parse(searchList[i]).name;
                let searchEmail=JSON.parse(searchList[i]).email;
                let searchPhone=JSON.parse(searchList[i]).phone;
                createCard(searchName,searchEmail,searchPhone);
                fadeIn(document.getElementById(searchPhone));
            }
        }
    }
    
    
    
}

function sortData(selection){
    for (let i of idlist){
        document.getElementById(i).remove();
    }
    let optionsArray=["Oldest First","Newest First","A-Z","Z-A"]
    let selectionIndex=document.getElementById("dropdown").selectedIndex;
    let selections=optionsArray[selectionIndex];
    idlist=[];
    let sortList=[];
    let valueList=JSON.parse(localStorage.getItem("list"));
    
    for(let i=0;i<valueList.length;i++){
        let data=JSON.parse(valueList[i]);
        sortList.push(data);  
    }
    if(selections==="A-Z"){
        sortList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0))

    }else if(selections==="Z-A"){
        sortList.sort((a,b) => (a.name < b.name) ? 1 : ((b.name< a.name) ? -1 : 0))

    }else if(selections==="Newest First"){
        sortList.reverse();
    }
    for(let i=0;i<sortList.length;i++){

        let sortName=sortList[i].name;
        let sortEmail=sortList[i].email;
        let sortPhone=sortList[i].phone;
        createCard(sortName,sortEmail,sortPhone);
        fadeIn(document.getElementById(sortPhone));
    }
    
}
