//Make function that check url and import it here
document.addEventListener('DomContentLoaded',function(){
    const form = document.getElementById('urlForm');

    form.addEventListener('Submit', handleSubmit);
})
import { checkForURL } from './urlChecker';



function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;
    
    // Check if the URL is valid
    if(checkForURL(formText)){
        //if url vaild send it to server
        postData('/api',{url: formText})
            .then(response =>{
                console.log('server response',response);
            
            document.getElementById('results').innerHTML=response.score_tag;
        })
            .catch(error =>{
                console.error('Error:',error);
            });
            //handle error
    } else {
        alert('Invalid URL');
        console.log('Invalid URL');

    }
        // If the URL is valid, send it to the server
    
    
}

// Function to send data to the server
async function postData(url= '',data={}){
    try{
        const response=await fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch(error){
        throw error;
    }
}


export { handleSubmit };

