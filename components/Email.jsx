import React from "react"

const Email = () => {

    const [form, setForm] = React.useState({
        email: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }))
    }

        function handleSubmit(event) {
            console.log(form)
            event.preventDefault()
        }

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" 
                id="email" 
                name="email" 
                onChange={handleChange}
                value={form.email}
                /><br/><br/>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Email