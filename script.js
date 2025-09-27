// minimal JS: handles form submit to download a sample response and mimic integration
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('leadForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((v,k)=>obj[k]=v);
    // Here you'd send data to your CRM/HubSpot via fetch to endpoint or integrate with forms
    // For the MVP we'll show a simple confirmation and generate an example PDF link
    alert('Thanks, ' + (obj.name || '') + '! We received your request. You will get a confirmation email with scheduling link.');
    form.reset();
    // open Calendly or your scheduling link automatically (optional)
    // window.open('https://calendly.com/', '_blank');
  });
});
