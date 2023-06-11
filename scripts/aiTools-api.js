const apiPath = "https://2023-engineer-camp.zeabur.app";

let worksData = []; //存取 work 裡面的資料陣列
let pagesData = []; //存取頁面 works 資料陣列

//取得資料
function getData() {
  const apiUrl = `${apiPath}/api/v1/works`;
  axios.get(apiUrl).then((res) => {
    worksData = res.data.ai_works.data;
    // console.log(worksData);

    pagesData = res.data.ai_works.page;
    // console.log(pagesData);

    renderList();
  });
}
getData();

//渲染畫面
let list = document.querySelector(".aiTools__toolList");

function renderList() {
  let works = "";
  worksData.forEach((item) => {
    works += /*html*/ `
              <li class="card toolList__card">
                <div class="toolList__card-layer">
                  <img src="${item.imageUrl}" alt="AItool img">
                </div>
                <div class="toolList__card-body toolList__card-body__info">
                  <h4 class="toolList__card-title">${item.title}</h4>
                  <p class="toolList__card-description">${item.description}</p>
                </div>
                <div class="toolList__card-body">
                  <p class="toolList__card-subtitle">AI 模型</p>  
                  <p class="toolList__card-model">${item.model}</p>
                </div>
                <div class="toolList__card-body">
                  <p class="toolList__card-type">#${item.type}</p>
                  <a class="toolList__card-link" href="${item.link}" target="_blank">
                    <span class="material-icons">share</span>
                  </a>  
                </div>
              </li>
    `;
  });
  list.innerHTML = works;
}