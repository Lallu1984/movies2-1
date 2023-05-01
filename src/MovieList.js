
const img_api = "https://image.tmdb.org/t/p/w500/"

function MovieList({filmid}) {
    return (
        filmid.map((film, index) => {
            return (
        
                <div className="onemovie"
                    key={index}
                >
                    <h5>{film.title}</h5>
                    ---------------------------------------------------------------
                    <br />
                    
                    <img src={img_api + film.poster_path} alt={film.title} /><br />
                    ---------------------------------------------------------------
                    <br />
                    <h6>Filmi kirjeldus:</h6>
                    <p><br />{film.overview}</p>
                </div>
            )
            })
    )
        }
            
    

export default MovieList;