
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.getElementsByClassName('dummyDate').innerText = today.toLocaleString();

document.getElementById('postBtn').addEventListener('click',function(){
    let names = document.getElementById('name');
    let name = names.value;
    let comments = document.getElementById('comment');
    let comment = comments.value;

    let errorForName = document.getElementById('errorForName');
    let errorForComment = document.getElementById('errorForComment');

    let authorName = document.createElement('h5');
    authorName.classList.add('authorName');
    let commentPosted = document.createElement('p');

    //checking name
    if(name==''){
        errorForName.style.display = 'none';
        authorName.innerText= 'Anonymous';
    }else if(isNaN(name)!=true){
        errorForName.style.display = 'block';
        errorForName.innerText = 'Number not allowed';
    }else{
        errorForName.style.display = 'none';
        authorName.innerText = name;     //got the name here  
        
        //checking comment
    if(comment==''){        
        errorForComment.style.display = 'block';
        errorForComment.innerText = 'This field can not be empty';
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
    authorForSubcommentBox.appendChild(dateDiv);

    let commentAuthor = document.createElement('div');
    commentAuthor.classList.add('comment-author');
    commentAuthor.appendChild(authorForSubcommentBox);
    let span = document.createElement('span');
    span.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    commentAuthor.appendChild(span);
    subCommentBox.appendChild(commentAuthor);

    mainCommentBox.appendChild(subCommentBox);
    console.log(mainCommentBox);

    }

    

    //clearing the input field
    names.value = '';
    comments.value = '';

})