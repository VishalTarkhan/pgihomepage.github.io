$(document).ready(function(){
let count=0;

$("#btnSubmit").click(function(){

if($("#name").val().trim()=="")
{
bootbox.alert("Enter name first.");
return;
}
if($("#email").val().trim()=="")
{
  bootbox.alert("Enter email first.");
return;
}
if($("#mobileNo").val().trim()=="")
{
  bootbox.alert("Enter Mobile number first.");
return;
}
if($("#ddlProgram").val()==0)
{
  bootbox.alert("Select Program first");
return;
}


let Name = $("#name").val().trim();
let Mail = $("#email").val().trim();
let MobileNo = $("#mobileNo").val().trim();
let Program = $("#ddlProgram").val();
let InterMediateStream = $("#ddlStream").val();
let InterMediatePercent = $("#txtPercent").val().trim();
let Source = "1";





window.location.href = 'http://localhost:52357/api/BlAcceptLead/EnquiryLead?Name='+Name+'&Mail='+Mail+'&MobileNo='+MobileNo+'&Program='+Program+'&InterMediateStream='+InterMediateStream+'&InterMediatePercent='+InterMediatePercent+'&Source='+Source+'';
})








$("#btncollapse").click(function(){


if(count%2 == 0)
{
    $("#tblCourse").hide(200);
    $("#btncollapse").html("Expand");
    document.getElementById("btncollapse").classList.remove('btn-danger');
    document.getElementById("btncollapse").classList.add('btn-warning');
    const inputElement = document.getElementById('tblCourse');
    inputElement.focus();

}
else{
    $("#tblCourse").show(200);
    $("#btncollapse").html("Collapse");
    document.getElementById("btncollapse").classList.remove('btn-warning');
    document.getElementById("btncollapse").classList.add('btn-danger');
    const inputElement = document.getElementById('btncollapse');
      inputElement.focus();
}
count++;


})


    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
    
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
    
        const increment = target / 200;
        
    
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target+"+";
        }
      };
    
      updateCounter();
    });
    


})


// function send(Name)
// {
// $.getJSON("http://localhost:52357/api/BlAcceptLead/EnquiryLead" + Name)
// bootbox.alert("Enquiry submitted successfully");


// }

