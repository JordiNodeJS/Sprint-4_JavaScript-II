// import movies from './data.js';
// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = 0;
  result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesOfDirector =  movies.filter( movie => movie.director === director )
  console.log('EXERCICE 2 ->', moviesOfDirector);
  return moviesOfDirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesOfDirector = getMoviesFromDirector(movies, director)
  const scores = moviesOfDirector.map( movie => movie.score)
  console.log('EXERCICE 3 ->', scores);
	let totalSum = 0
 	scores.forEach(score => totalSum += score);
  const average = totalSum/scores.length
  console.log('ex 3: media ->', average)
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const titleMovies = movies.map( movie => movie.title)
  return titleMovies.sort().filter((movie,i)=> i < 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const newmovies = [...movies]
  return newmovies
    .sort((a, b) => { if (a.title < b.title) return -1})
    .sort((a, b)=> a.year - b.year)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
