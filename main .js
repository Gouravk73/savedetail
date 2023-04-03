
    // const name=event.target.username.value;
    // const email=event.target.emailId.value;
    // const phonenumber=event.target.phonenumber.value;
    // console.log(name," assa",email,phonenumber);
    // const obj={
    //     name,
    //     email,
    //     phonenumber
    // }
    var form=document.getElementById("addForm");
    var itemList = document.getElementById('items');
    form.addEventListener('submit',addItem);
    itemList.addEventListener('click', removeItem);
    //itemList.addEventListener('click', editItem);

    window.addEventListener("DOMContentLoaded" ,()=>{
        axios.get("https://crudcrud.com/api/ebe853ec3aaa4f7aa7030051df051fa7/userDetail")
             .then((reponse)=>{
                for(var i=0; i<reponse.length; i++){
                    
                }})
             .catch((error)=>{
                 console.log(error)
         })
    })
    
function addItem(event) {
    event.preventDefault();

    var li=document.createElement('li');
    var name=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var phonenumber=document.getElementById('phonenumber').value;
    li.className="list-group-item";
    li.appendChild(document.createTextNode(`name= ${name} email ID= ${email} `));
    console.log(li);
    var obj={
        name,
        email,
        phonenumber
    }
    axios.post("https://crudcrud.com/api/ebe853ec3aaa4f7aa7030051df051fa7/userDetail",obj)
        .then((reponse)=>{console.log(reponse)})
        .catch((err)=>{console.log(err)})

 
    //localStorage.setItem(email, JSON.stringify(obj));
 
    var del= document.createElement('button');
    del.className="btn";
    del.value="Delete";
    del.innerHTML="Delete"; //del.appendChild(document.createTextNode('X));
    
    var edi= document.createElement('button');
    edi.className="bt-edit";
    edi.value="Edit";
    edi.innerHTML="Edit"; 
    li.appendChild(edi);
    li.appendChild(del);

    //console.log(li);
     itemList.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('btn')){
    var li =e.target.parentElement;
    itemList.removeChild(li);
    }}
/*function editItem(e){
    if(e.target.classList.contains('bt-edit')){
        var li =e.target.parentElement;
        var x=li.innerHTML;
        var a="";
        var b="";
        var c="";
        var cnt=0;
        for(var i=0;i<x.length;i++){
            console.log(x[i]);
            if(x[i]=='<'){ break;}
            else if(x[i]=='-'){
                cnt=cnt + 1;
            }
            else if( cnt==0){
                a=a+x[i];
                
            }
            else if( cnt==1){
                b=b+x[i];
            }
            else if( cnt==2){
                c=c+x[i];
            }
        }
        console.log(a,"ok ",b);
        document.getElementById('item').value=a;
        document.getElementById('item2').value=b;
        itemList.removeChild(li);
}}*/
