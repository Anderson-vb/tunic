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

  const postDiv = document.createElement('div');
  const post__imgDiv = document.createElement('div');
  const post__containerDiv = document.createElement('div');
  const post__titleDiv = document.createElement('div');
  const post__contentDiv = document.createElement('div');
  const img = document.createElement('img');
  const hr = document.createElement('hr');

  postDiv.classList.add('post');
  post__imgDiv.classList.add('post__img');
  post__containerDiv.classList.add('post__container');
  post__titleDiv.classList.add('post__title');
  post__contentDiv.classList.add('post__content');
  img.setAttribute('src', '../images/forum/avatar.png');
  img.setAttribute('alt', 'User');

  post__titleDiv.innerHTML = title;
  post__contentDiv.innerHTML = content;

  postDiv.appendChild(post__imgDiv);
  postDiv.appendChild(post__containerDiv);
  post__imgDiv.appendChild(img);
  post__containerDiv.appendChild(post__titleDiv);
  post__containerDiv.appendChild(post__contentDiv);
  post__containerDiv.appendChild(hr);

  const postsSection = document.querySelector('.post-content-section');
  postsSection.appendChild(postDiv);

};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const renderAllPosts = () => {
  removeAllChildNodes(document.querySelector('.post-content-section'));
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