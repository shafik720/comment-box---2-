
let timeElapsed = Date.now();
let today = new Date(timeElapsed);
document.getElementById('dummyDate').innerText = today.toLocaleString();

document.getElementById('postBtn').addEventListener('click',function(){
    //date and time
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);

    let names = document.getElementById('name');
    let name = names.value;
    let comments = document.getElementById('comment');
    let comment = comments.value;

    let errorForName = document.getElementById('errorForName');
    let errorForComment = document.getElementById('errorForComment');

    let authorName = document.createElement('h5');
    authorName.classList.add('authorName');
    let commentPosted = document.createElement('p');
    
    function proceed(){
            //checking comment
    if(comment==''){        
        errorForComment.style.display = 'block';
        errorForComment.innerText = 'This field can not be empty';
        return;
    }else{
        errorForComment.style.display = 'none';
        commentPosted.innerText = comment;  //got the comment here        
    }

    let mainCommentBox = document.getElementById('mainCommentBox');
    let subCommentBox = document.createElement('div');
    subCommentBox.classList.add('subCommentBox');
    let comment2 = document.createElement('div');
    comment2.classList.add('comment');
    comment2.appendChild(commentPosted);
    subCommentBox.appendChild(comment2); //-------

    let authorForSubcommentBox = document.createElement('div');
    authorForSubcommentBox.classList.add('comment-author-name');
    authorForSubcommentBox.appendChild(authorName);
    let dateDiv = document.createElement('p');
    dateDiv.classList.add('dummyDate')
    dateDiv.innerText = today.toLocaleString();
    authorForSubcommentBox.appendChild(dateDiv);

    let commentAuthor = document.createElement('div');
    commentAuthor.classList.add('comment-author');
    commentAuthor.appendChild(authorForSubcommentBox);
    let span = document.createElement('span');
    span.classList.add('delete');
    span.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    commentAuthor.appendChild(span);
    subCommentBox.appendChild(commentAuthor);

    mainCommentBox.appendChild(subCommentBox);
    }

    
        
    
    //checking name
    if(name==''){
        errorForName.style.display = 'none';
        authorName.innerText= 'Anonymous';

        proceed();
    }else if(isNaN(name)!=true){
        errorForName.style.display = 'block';
        errorForName.innerText = 'Number not allowed';
    }else{
        errorForName.style.display = 'none';
        authorName.innerText = name;     //got the name here  
        
        proceed();
    }

    

    //clearing the input field
    names.value = '';
    comments.value = '';

    
})


let deleteElement = document.getElementsByClassName('delete');
        for(let element of deleteElement){            
            element.addEventListener('click',function(event){
                event.target.parentNode.parentNode.parentNode.parentNode.removeChild(subCommentBox);
                // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
            })
        }