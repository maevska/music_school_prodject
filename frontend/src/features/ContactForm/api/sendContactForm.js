// TODO: подключить настоящий бэкенд, например:
// fetch("/api/contact", { method: "POST", headers: {...}, body: JSON.stringify(data) })
export const sendContactForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form sent:", data);
};