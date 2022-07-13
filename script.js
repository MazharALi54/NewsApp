let apiKey = '308e1bfd6eeb444da9e220642528c69c';
let source = 'the-times-of-india';

let newsAccordion = document.getElementById('newsAccordion');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `
            <div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}"><span class="badge badge-danger">New</span>
                            ${element.title}
                        </button>
                    </h2>
                </div>

                <div id="collapse${index}" class="collapse row align-items-center justify-content-center" aria-labelledby="heading${index}"data-parent="#newsAccordion">
                    <div class="col sm-4">
                       <img src="${element.urlToImage} width="100" height="250""</img>
                    </div>
                    <div class=" col pr-sm-5 sm-8">${element.description}.<a href="${element.url}">Read More Here</a></div>
                </div>
            </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some erroe occured");
    }
}

xhr.send()