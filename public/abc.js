function submit () {
    var nametext = document.getElementById("name").value;
    var emailtext = document.getElementById("email").value;
    var phonetext = document.getElementById("phone").value;
    //新增檔案、上傳檔案
    var Ref = firebase.storage().ref().child("reply/secret-message-"+nametext+".txt");
    Ref.putString(nametext+";"+emailtext+";"+phonetext).then(function(snapshot) {
        console.log("成功上傳純⽂字檔案")
    })

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    alert("thanks for your reply");
}
function totop(){
    window.scrollTo(0, 0);
}

function mouseOver(x){
    x.style.backgroundColor="gray";
}
function mouseOut(x){
    x.style.backgroundColor="lightgray";
}
var hi = document.getElementById("hi");
var dbRef = firebase.database().ref().child("title/hi");
dbRef.on("value", snap => hi.innerText = snap.val());