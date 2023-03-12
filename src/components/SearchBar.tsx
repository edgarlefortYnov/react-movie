import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchQueryHome, setSearchQueryHome] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchQueryHome);
        navigate("/all_films", {state: searchQueryHome});
      };

    return (
        <div>
        <div className="search">
            <form onSubmit={handleSearch}>
            <TextField
                variant="outlined"
                label="Search movies"
                fullWidth
                value={searchQueryHome}
                onChange={(e) => setSearchQueryHome(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Search
            </Button>
            </form>
        </div>
        </div>
    );
};

export default SearchBar;
