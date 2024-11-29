var arrayOfQuotes = [
    {'author': '― OMark Twain', 
     'quote': 'If you tell the truth, you dont have to remember anything.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Martin Luther King', 
     'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you dont take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
];

function quote(){
   
    var randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);

  
    var quote = arrayOfQuotes[randomIndex].quote;
    var author = arrayOfQuotes[randomIndex].author;

   
    document.getElementById('content').innerHTML = '"' + quote + '"';
    document.getElementById('authorContent').innerHTML = '- ' + author ;

    

}















