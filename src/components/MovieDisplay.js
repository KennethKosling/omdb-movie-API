export default function MovieDisplay({movie}){
    
    const loaded = () => {
        return(
            <div className="display">
                <div className="card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="inside">
                        <div className="container">
                            <h1>{movie.Title}</h1>
                            <h2>{movie.Genre}</h2>
                            <h5>{movie.Plot}</h5>
                            <h2>{movie.Year}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    const loading = () => {
        return <h1>No movie to display!</h1>
    }


    return movie && movie.Title ? loaded() : loading()
}