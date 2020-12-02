export function getResults() {

    return fetch('https://stryk.herokuapp.com/tipset')
        .then((response) => response.json())
        .then((data) => data.results)
}
