import React from "react"

const Email = () => {
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

        function handleSubmit(event) {
            console.log(event)
        }

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" /><br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Email