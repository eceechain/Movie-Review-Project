#!/usr/bin/env python3

from random import choice as rc
from app import app, db
from models import Movie, User, Review

def seed_movies():
    print("Seeding movies...")
    with app.app_context():
        # Delete existing data
        Movie.query.delete()
        User.query.delete()
        Review.query.delete()

        # Seed Movies
        movies_data = [
            {"title": "The Avengers", "genre": "Sci-Fi", "release_year": 2012, "director": "Christopher Nolan", "image": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
            {"title": "Avengers: Endgame", "genre": "Action", "release_year": 2019, "director": "Christopher Nolan", "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},
            {"title": "Avengers: Infinity War", "genre": "Drama", "release_year": 2018, "director": "Robert Zemeckis", "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},
            {"title": "Avengers: Age of Ultron", "genre": "Drama", "release_year": 2015, "director": "Frank Darabont", "image": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
            {"title": "Star Wars: Episode IV - A New Hope", "genre": "Crime", "release_year": 1994, "director": "Quentin Tarantino", "image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"},
            {"title": "Star Wars: Episode V - The Empire Strikes Back", "genre": "Sci-Fi", "release_year": 1999, "director": "The Wachowskis", "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
            {"title": "Star Wars: Episode VI - Return of the Jedi", "genre": "Romance", "release_year": 1997, "director": "James Cameron", "image":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" },
            {"title": "Star Wars: Episode VII - The Force Awakens", "genre": "War", "release_year": 2009, "director": "Quentin Tarantino", "image": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"},
            {"title": "Star Wars: Episode I - The Phantom Menace", "genre": "Crime", "release_year": 1972, "director": "Francis Ford Coppola", "image":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" },
            {"title": "Money Heist", "genre": "Fantasy", "release_year": 2011, "director": "Peter Jackson", "image": "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg"},
            {"title": "Money Heist: Korea - Joint Economic Area", "genre": "Drama", "release_year": 2022, "director": "David Fincher", "image": "https://m.media-amazon.com/images/M/MV5BZDdjYmZlMzQtN2JmZS00N2JkLTg4MGYtMGI3OGVhMWQ1MzMyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"},
            {"title": "Money Heist: The Phenomenon", "genre": "Sci-Fi", "release_year": 2019, "director": "Christopher Nolan", "image":"https://m.media-amazon.com/images/M/MV5BZjA4MWI4MGItMmZmYi00MmYyLTgyYTEtYjVkM2Q5OTIxYzAwXkEyXkFqcGdeQXVyMTE1OTI5NDg5._V1_SX300.jpg" },
            {"title": "Money Heist: From Tokyo to Berlin", "genre": "Comedy", "release_year": 2023, "director": "Wes Anderson", "image":  "https://m.media-amazon.com/images/M/MV5BM2JkMmNhY2MtMTM3MS00YzRmLTkyZGQtZGM4NTE3M2Y4N2M0XkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg"},
            {"title": "Money Heist X Free Fire: Summer Holiday Heist", "genre": "Adventure", "release_year": 2020, "director": "Alejandro G. Iñárritu", "image": "https://m.media-amazon.com/images/M/MV5BOWI3Yjg2ZjktNjgzMi00NTBhLTg2NDUtMTIwMzZkOTQ3MDg4XkEyXkFqcGdeQXVyODE4ODE1MDU@._V1_SX300.jpg"},
            {"title": "The Fast and the Furious", "genre": "Musical", "release_year": 2016, "director": "Damien Chazelle", "image":"https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" },
            {"title": "The Fast and the Furious: Tokyo Drift", "genre": "Fantasy", "release_year": 2007, "director": "Guillermo del Toro", "image":"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg" },
            {"title": "The Fast and the Furious", "genre": "Action", "release_year": 1958, "director": "Ryan Coogler", "image":"https://m.media-amazon.com/images/M/MV5BZmI3YmNhNzktOTMzNC00ODg4LTk3YmQtMGI2ZGQzNzcwZmRkXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" },
            {"title": "Jane the Virgin", "genre": "Thriller", "release_year": 2019, "director": "Bong Joon-ho", "image": "https://m.media-amazon.com/images/M/MV5BMTUxNDJhYjAtNDMyNi00NThhLWEwM2UtZDk4NzhmMjZjMjYwXkEyXkFqcGdeQXVyMTE3MTMwODEy._V1_SX300.jpg"},
            {"title": "Everything, Everything", "genre": "Drama", "release_year": 2017, "director": "David Fincher", "image": "https://m.media-amazon.com/images/M/MV5BMjAzMTE1NzQxNF5BMl5BanBnXkFtZTgwNjcwODY3MTI@._V1_SX300.jpg" },
            {"title": "Girls Trip", "genre": "Sci-Fi", "release_year": 2014, "director": "Christopher Nolan", "image": "https://m.media-amazon.com/images/M/MV5BMjMwNTEzODUwMV5BMl5BanBnXkFtZTgwNjE5NjA5MjI@._V1_SX300.jpg"},
            {"title": "The Gods Must Be Crazy", "genre": "Comedy", "release_year": 1980, "director": "Wes Anderson", "image": "https://m.media-amazon.com/images/M/MV5BMmExNTIzZTQtMmUxNC00NTUwLTg1MTgtMzUxYWE5ZjdmZGRmXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg"},
            {"title": "Young Sheldon", "genre": "Adventure", "release_year": 2015, "director": "Alejandro G. Iñárritu", "image": "https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg"},
            {"title": "You", "genre": "Musical", "release_year": 2024, "director": "Damien Chazelle", "image": "https://m.media-amazon.com/images/M/MV5BNGZjZDc3NjAtYjI1OC00NWUzLWIxOWItNzUyODc5NDIwMWRjXkEyXkFqcGdeQXVyNTQ4ODA2NzQ@._V1_SX300.jpg"},
            {"title": "Reacher", "genre": "Fantasy", "release_year": 2022, "director": "Guillermo del Toro", "image": "https://m.media-amazon.com/images/M/MV5BOWRiZjYwZjUtYmIwMy00ZDUzLTk2NjktZmJkZjRkNjU0MDE3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg" },
            {"title": "Mr.Bones", "genre": "Drama", "release_year": 2001, "director": "David Fincher", "image": "https://m.media-amazon.com/images/M/MV5BNTVhMjQ4NzItODhjZC00MGUyLThmMzQtYTFjZjI2Mzg1OWUzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"},
            {"title": "The Vampire Diaries", "genre": "Sci-Fi", "release_year": 2014, "director": "Christopher Nolan", "image":"https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg" },
            {"title": "The Originals", "genre": "Comedy", "release_year": 2018, "director": "Wes Anderson", "image": "https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg"},
            {"title": "Breaking Bad", "genre": "Adventure", "release_year": 2015, "director": "Alejandro G. Iñárritu", "image": "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg"},
            {"title": "Suits", "genre": "Musical", "release_year": 2016, "director": "Damien Chazelle", "image": "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
            {"title": "Love, Sex and 30 Candles", "genre": "Fantasy", "release_year": 2017, "director": "Guillermo del Toro", "image": "https://m.media-amazon.com/images/M/MV5BMTVlYWY2OTgtN2VjYS00MWRjLWJiMDEtZmI4NjI1YjAzNjYxXkEyXkFqcGdeQXVyMTQ4MDU2Mzg@._V1_SX300.jpg"},
            {"title": "Mr.Bones", "genre": "Drama", "release_year": 2001, "director": "David Fincher", "image": "https://m.media-amazon.com/images/M/MV5BNTVhMjQ4NzItODhjZC00MGUyLThmMzQtYTFjZjI2Mzg1OWUzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"},
            {"title": "Everything, Everything", "genre": "Drama", "release_year": 2017, "director": "David Fincher", "image": "https://m.media-amazon.com/images/M/MV5BMjAzMTE1NzQxNF5BMl5BanBnXkFtZTgwNjcwODY3MTI@._V1_SX300.jpg" },
        ]

        movies = []
        for movie_data in movies_data:
            movie = Movie(**movie_data)
            movies.append(movie)

        # Seed Users
        users_data = [
            {"username": "Cinephile123", "email": "cinephile@example.com", "password": "password123", "bio": "Passionate about movies", "is_active": True},
            {"username": "PopcornFanatic", "email": "popcornfanatic@example.com", "password": "password456", "bio": "Loves watching films", "is_active": True},
            {"username": "MovieBuff", "email": "moviebuff@example.com", "password": "password789", "bio": "Enjoys exploring different genres", "is_active": True},
            {"username": "FilmGeek", "email": "filmgeek@example.com", "password": "password101112", "bio": "Obsessed with cinema", "is_active": True},
            {"username": "CasualViewer", "email": "casualviewer@example.com", "password": "password131415", "bio": "Enjoys movies on weekends", "is_active": True},
            {"username": "ScreenSpectator", "email": "screenspectator@example.com", "password": "password161718", "bio": "Always in search of hidden gems", "is_active": True},
            {"username": "MovieManiac", "email": "moviemaniac@example.com", "password": "password192021", "bio": "Devoted to all things cinema", "is_active": True},
            {"username": "FilmFan", "email": "filmfan@example.com", "password": "password222324", "bio": "Dedicated to classic movies", "is_active": True},
            {"username": "SilverScreenAddict", "email": "silverscreenaddict@example.com", "password": "password252627", "bio": "Addicted to the big screen experience", "is_active": True},
            {"username": "MovieMaven", "email": "moviemaven@example.com", "password": "password282930", "bio": "Expert in all things related to film", "is_active": True}
                ]

        for user_data in users_data:
            user = User(**user_data)
            db.session.add(user)

        # Seed Reviews
        reviews_data = [
           {"content": "Mind-blowing concept and visuals!", "comments": "A must-watch for sci-fi fans.", "rating": 5, "movie_id": 1, "user_id": 1},
            {"content": "Heath Ledger's Joker steals the show.", "comments": "Nolan's masterpiece.", "rating": 5, "movie_id": 2, "user_id": 2},
            {"content": "Emotional rollercoaster with great performances.", "comments": "Tom Hanks is exceptional.", "rating": 4, "movie_id": 3, "user_id": 3},
            {"content": "Classic prison drama with a twist.", "comments": "Tim Robbins nailed it.", "rating": 4, "movie_id": 4, "user_id": 4},
            {"content": "Quentin Tarantino's signature style.", "comments": "Entertaining and unpredictable.", "rating": 4, "movie_id": 5, "user_id": 5},
            {"content": "Revolutionary sci-fi with iconic scenes.", "comments": "Changed the game for visual effects.", "rating": 5, "movie_id": 6, "user_id": 1},
            {"content": "Epic romance with a tragic ending.", "comments": "Leonardo DiCaprio and Kate Winslet shine.", "rating": 4, "movie_id": 7, "user_id": 2},
            {"content": "Quentin Tarantino's unique take on history.", "comments": "Brilliant storytelling and performances.", "rating": 5, "movie_id": 8, "user_id": 3},
            {"content": "A cinematic masterpiece with stellar performances.", "comments": "Marlon Brando's iconic role.", "rating": 5, "movie_id": 9, "user_id": 4},
            {"content": "Fantasy adventure with breathtaking visuals.", "comments": "Captivating from start to finish.", "rating": 5, "movie_id": 10, "user_id": 5},
        ]

        for review_data in reviews_data:
            review = Review(**review_data)
            db.session.add(review)

        db.session.add_all(movies)  # Moved outside the loop
        db.session.commit()

    print("Movie seeding completed.")

if __name__ == "__main__":
    seed_movies()
