import { useState } from "react"

export default function Form(props) {
    const [formData, setFormData ] = useState({
        searchTerm: "",
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        props.movieSearch(formData.searchTerm)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    className="text"
                    type="text" 
                    name="searchTerm"
                    onChange={handleChange}
                    value={formData.searchTerm}
                />
                <input className="button" type="submit" value="Search for Movie" />
            </form>
        </div>
    )
}