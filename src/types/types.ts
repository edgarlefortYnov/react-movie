export interface Movie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;
}

export interface MovieResults {
    results: Movie[];
}

export enum SortOption {
    Popularity = 'popularity.desc',
    Rating = 'vote_average.desc',
    ReleaseDate = 'release_date.desc',
    Alphabetical = 'original_title.asc',
    Name = 'name.asc',
    Birthday = 'birthday.desc',
}

export interface SearchParams {
    query?: string;
    SortOption?: SortOption;
}

export interface FilmsProps {
    apiKey: string;
}

export interface Actor {
    id: number;
    name: string;
    profile_path: string | undefined;
    character: string;
  }
  
  export interface ActorsResponse {
    page: number;
    total_pages: number;
    results: Actor[];
  }
  