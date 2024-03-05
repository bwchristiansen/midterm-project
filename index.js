fetch('./data.json')
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

// function loadMovies(myMovies) {
//     for (let i = 0; i < myMovies.newMovies.length; i++) {
//         let test = "newMovie" + i;
//         var mainContainer = document.getElementById(test);
//         let title = myMovies.newMovies[i].title;
//         let year = myMovies.newMovies[i].year;
//         let url = myMovies.newMovies[i].url;
//         let rating = myMovies.newMovies[i].rating;

//         let div = document.createElement("div");
//         div.innerHTML = `<img src=${url} width = "200"> <h3>${title}</h3> <br> <br>`;
//         mainContainer.appendChild(div);
//         console.log(div)
//     }
// }

function loadMovies(myMovies){
    for (let i = 0; i < myMovies.newMovies.length; i++){
        let movie = myMovies.newMovies[i];
        let containerId = `newMovie${i}`;
        let mainContainer = document.getElementById(containerId);

        if (mainContainer) {
            let { title, year, url, rating } = movie;

            let div = document.createElement("div");
            div.innerHTML = `
            <img src="${url}" width="200">
            <h3>${title}</h3>
            <p>${year}</p>
            <p>${rating}</p>
            <br><br>`;
            mainContainer.appendChild(div);
        }
    }
}

// function loadMovies(myMovies) {
//     var mainContainer = document.getElementById("newMovie1");
//     let title0 = myMovies.newMovies[0].title;
//     // let year0 = myMovies.newMovies[0].year;
//     let url0 = myMovies.newMovies[0].url;
//     // let rating0 = myMovies.newMovies[0].rating;

//     let div0 = document.createElement("div");
//     div0.innerHTML = ` <img src=${url0} width = "200"><h3>${title0}</h3> <br> <br>`;
//     mainContainer.appendChild(div0);
//     console.log(div0)

//     var mainContainer = document.getElementById("newMovie2");
//     let title1 = myMovies.newMovies[1].title;
//     // let year1 = myMovies.newMovies[1].year;
//     let url1 = myMovies.newMovies[1].url;
//     // let rating1 = myMovies.newMovies[1].rating;

//     let div1 = document.createElement("div");
//     div1.innerHTML = `<h3>${title1}</h3><img src=${url1} width = "200"> <br> <br>`;
//     mainContainer.appendChild(div1);
//     console.log(div1)

//     var mainContainer = document.getElementById("newMovie3");
//     let title2 = myMovies.newMovies[2].title;
//     // let year2 = myMovies.newMovies[2].year;
//     let url2 = myMovies.newMovies[2].url;
//     // let rating2 = myMovies.newMovies[2].rating;

//     let div2 = document.createElement("div");
//     div2.innerHTML = `<h3>${title2}</h3> <img src=${url2} width = "200"> <br> <br>`;
//     mainContainer.appendChild(div2);
//     console.log(div2)
// }