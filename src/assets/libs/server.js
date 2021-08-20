export default function server(url){ //, settings = {}
    const defaultPath = 'https://api.themoviedb.org/3/movie';
    // const imagePath = 'https://image.tmdb.org/t/p/w500/';
    const API_KEY = '66b8b870af72b7757ad08dadd83b4db7';
    const language = 'ru'
    const _url = `${ defaultPath }/${url}?api_key=${API_KEY}&language=${language}&region=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}