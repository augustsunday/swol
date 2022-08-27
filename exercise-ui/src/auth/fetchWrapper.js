const fetchWrapper = async (URI, options) => {
    const auth = "dummy"
    const newOptions = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`,
        },
    }
    return await fetch(URI, newOptions);
}

export default fetchWrapper;