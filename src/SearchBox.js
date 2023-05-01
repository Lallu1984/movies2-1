const SearchBox = (props) => {
    return (
        <div className="col col-sm-10">
            <input className="form-control"
            value={props.value} 
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Sisesta filmi nimi ..."></input>

        </div>
    )
}

export default SearchBox