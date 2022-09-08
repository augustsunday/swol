export default function AuthModule() {
    // eslint-disable-next-line
    let token = "";

    this.setToken = (value) => {
        this.token = value
    }

    this.fetch = async (URI, options) => {
        console.log(URI)
        const auth = await this.token
        const newOptions = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth}`,
            },
        }
        return await fetch(URI, newOptions);
    }
}