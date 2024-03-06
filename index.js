fetch('./data.json')
    .then(response => response.json())
    .then(myMovies => {
        loadMovies(myMovies);
    });
fetch('./data.json')
    .then(response => response.json())
    .then(myMovies => loadMoviesMarketing(myMovies));

// function loadMovies(myMovies){
//     for (let i = 0; i < myMovies.newMovies.length; i++){
//         let movie = myMovies.newMovies[i];
//         let containerId = `newMovie${i}`;
//         let mainContainer = document.getElementById(containerId);

//         if (mainContainer) {
//             let { title, year, url, rating } = movie;

//             let div = document.createElement("div");
//             div.innerHTML = `
//             <img src="${url}" width="200">
//             <h3>${title}</h3>
//             <p>${year}</p>
//             <p>${rating}</p>
//             <br><br>`;
//             mainContainer.appendChild(div);
//         }
//     }
// }

function loadMovies(myMovies) {
    for (let i = 0; i < myMovies.newMovies.length; i++) {
      let movie = myMovies.newMovies[i];
      let containerId = `newMovie${i}`;
      let movieContainer = document.getElementById(containerId);
  
      if (movieContainer) {
        let { title, year, url, rating } = movie;
  
        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie-content");
        movieDiv.innerHTML = `
        <img src="${url}" width="200">
            <h3>${title}</h3>
            <p>${year}</p>
            <p>${rating}</p>
            <br><br>
        `;

        movieContainer.appendChild(movieDiv);
      }
    }
  }

  function loadMoviesMarketing(myMovies){
    let marketingContainer = document.querySelector('.marketing .row');

    for (let i = 0; i < myMovies.newMovies.length; i++) {
        let movie = myMovies.newMovies[i];

        let { title, year, url, rating, description } = movie;

        let movieContainer = document.createElement('div');
        movieContainer.className = 'col-lg-4';
        movieContainer.innerHTML = `
            <img src="${url}" class="img-fluid" alt="${title}">
            <h2 class="fw-normal">${title}</h2>
            <p>${description}</p>
        `;

        marketingContainer.appendChild(movieContainer);
    }
  }