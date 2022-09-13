let posts = [];

const createPostBtn = document.querySelector('#create-post-btn');

const addPost = (title, content) => {
  let maxId = 0;
  if (posts.length != 0) {
    const ids = posts.map(post => post.id);
    maxId = Math.max(...ids);
  }
  
  const post = {
    id: maxId + 1,
    title: title,
    content: content,
  }
  posts = posts.concat(post);
}

const createPostElement = (id, title, content) => {
  const postContainer = document.createElement('div');
  postContainer.classList.add('posts-container');
  postContainer.classList.add('m-3');

  const pTitle = document.createElement('p');
  const aTitle = document.createElement('a');
  
  aTitle.setAttribute('data-bs-toggle', 'collapse');
  aTitle.setAttribute('href', '#collapse' + id);
  aTitle.setAttribute('role', 'button');
  aTitle.setAttribute('aria-expanded', 'false');
  pTitle.appendChild(aTitle);
  
  const aTitleDiv = document.createElement('div');
  const aTitleDiv2 = document.createElement('div');
  aTitleDiv2.classList.add('card-body');
  aTitleDiv.appendChild(aTitleDiv2);
  aTitle.appendChild(aTitleDiv);
  const h5Title = document.createElement('h5');
  h5Title.classList.add('card-title');
  h5Title.classList.add('text-primary');
  h5Title.innerHTML = title;
  aTitleDiv2.appendChild(h5Title);
  
  const divCollapse = document.createElement('div');
  divCollapse.classList.add('collapse');
  divCollapse.classList.add('m-3');
  divCollapse.setAttribute('id', 'collapse' + id);
  const divCollapseCard = document.createElement('div');
  divCollapseCard.classList.add('card');
  divCollapseCard.classList.add('card-body');
  divCollapseCard.innerHTML = content;

  divCollapse.appendChild(divCollapseCard);
  pTitle.appendChild(divCollapse);
  postContainer.appendChild(pTitle)
  
  document.querySelector('.posts').appendChild(postContainer)
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const renderAllPosts = () => {
  removeAllChildNodes(document.querySelector('.posts'));
  postElements = posts.map(post => {
    return createPostElement(post.id, post.title, post.content, post.img);
  });
};

createPostBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title-input');
  const contentInput = document.querySelector('#content-input');


  addPost(titleInput.value, contentInput.value);
  renderAllPosts();
  titleInput.value = '';
  contentInput.value = '';
});