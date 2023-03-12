import { useLocation, useNavigation } from "react-router";
import DetailsFilm from "../components/DetailFilm";

const DescrFilm = () => {
    const { search } = useLocation();
    const url = new URLSearchParams(search);
    const movieId = url.get('movieId') ?? '';

    return (
        <>
            <DetailsFilm id = { movieId } apiKey = {"ae1098c7af94ab11d9a8b077daac4007"} />
        </>
    )
};

export default DescrFilm