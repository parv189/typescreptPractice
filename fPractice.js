function request(url) {
    return fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; })
        .catch(function (error) {
        throw error;
    });
}
request('data.json').then(function (_a) {
    var Name = _a.Name, Price = _a.Price, Location = _a.Location;
    console.log(Name, Price, Location);
});
