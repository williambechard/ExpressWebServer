let Form = document.getElementById("blog-form");

Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('formData', formData);

    const data = {};
    data["author"] = formData.get("author");
    data["content"] = formData.get("content");

    console.log('data ', data);
    console.log("data stringify", JSON.stringify(data));
    postData(data).then((response)=>{console.log(response)});
})

const postData = async (data)=>{
    const response = await fetch(
        'http://localhost:3000/form',
        {
            method: "Post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "manual",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        }
    )
    return response;
}

