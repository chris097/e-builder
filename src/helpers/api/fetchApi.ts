export const fetchApi = (url:string) => {
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        // authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        headers,
    });

    return fetch(request)
        .then(response => response.json())
        .then(data => data)
}