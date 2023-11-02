const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fcac02f79644762eec5732de1317f201',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;