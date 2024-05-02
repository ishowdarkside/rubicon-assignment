export interface MovieType {
  adult: number;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  origin_country: string[];
  release_date: Date;
  name?: string;
  video: boolean | string;
  title?: string;
  vote_average: number;
  first_air_date?: Date;
  vote_count: number;
}

export interface SearchQueryType {
  page: number;
  results: MovieType[];
  total_page: number;
  total_results: number;
}
