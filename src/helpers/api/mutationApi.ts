export const mutationApi = async (
    method: string,
    token: string,
    url: string,
    payload: string,
    responses: any
) => {
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        method: method,
        headers,
        body: JSON.stringify(payload),
    })
    
    await fetch(request)
        .then((responses) => responses.json())
        .then(responses)
        .catch(err => console.log(err.message))
};