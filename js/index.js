import { api } from "./settings/api.js";

const route = "articles";

const url = api + route;
const articleList = document.querySelector(".article-list");

(async function () {
  

    try
     {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        articleList.innerHTML = "";

        json.forEach(function (data) {
            articleList.innerHTML += `                                    
                                    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${data.author}</h6>
    <p class="card-text">${data.summary}</p>
    <a href=""detail.html?id=${data.id}"" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
                                    `;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();