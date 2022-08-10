const database = firebase.database().ref();

const allBlogs = document.getElementById("all-blogs");

database.on("child_added", addBlog);

function addBlog(rowData) {
    const blogObject = rowData.val();

    console.log(blogObject);

    let blogDiv = makeSingleBlogHTML(blogObject.TITLE, blogObject.USERNAME, blogObject.BODY);

    allBlogs.appendChild(blogDiv);
}

function makeSingleBlogHTML(titleTxt, usernameTxt, blogTxt) {
    // create a parent div to hold the entire title + username + body line
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("single-blog");

    let titleDisplay = document.createElement("p");
    titleDisplay.classList.add("single-blog-title");
    // update the inner HTML to include the username
    titleDisplay.innerHTML = titleTxt + " by " + usernameTxt;
    // put the username display inside the parent div
    parentDiv.appendChild(titleDisplay);

    // create box for message text
    let blogDisplay = document.createElement("p");
    blogDisplay.innerHTML = blogTxt;
    parentDiv.appendChild(blogDisplay);

    // return the entire username+message box
    return parentDiv;
}