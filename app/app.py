from flask import Flask, make_response, jsonify, request
from flask_restful import Api, Resource
from flask_migrate import Migrate
from models import db, Movie, User, Review 
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///movies.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

api = Api(app)

class HomeResource(Resource):
    def get(self):
        response_dict = {
            'Message': 'Hello World'
        }

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

api.add_resource(HomeResource, '/')

class MovieResource(Resource):
    def get(self):
        movies = []
        for movie in Movie.query.all():
            movie_dict = {
                "id": movie.id,
                "title": movie.title, 
                "genre": movie.genre,
                "release_year": movie.release_year, 
                "image": movie.image,
                "director": movie.director
            }
            movies.append(movie_dict)

        response = make_response(
            jsonify(movies),
            200
        )

        return response

api.add_resource(MovieResource, '/movies')

class MovieResourceById(Resource):
    def get(self, id):
        movie = Movie.query.get(id)

        if movie:
            movie_dict = {
                "id": movie.id,
                "title": movie.title,
                "image": movie.image,
                "genre": movie.genre,
                "release_year": movie.release_year,
                "director": movie.director
            }

            response = make_response(
                jsonify(movie_dict),
                200
            )

            return response
        else:
            response = make_response(
                jsonify({"error": "Movie not found"}),
                404
            )

            return response

api.add_resource(MovieResourceById, '/movies/<int:id>')

class UserResource(Resource):
    def get(self):
        users = []
        for user in User.query.all():
            user_dict = {
                "id": user.id,
                "username": user.username,
                "bio": user.bio,
                "is_active": user.is_active
            }
            users.append(user_dict)

        response = make_response(
            jsonify(users),
            200
        )

        return response

    def post(self):
        data = request.get_json()
        new_user = User(
            username=data.get('username'),
            bio=data.get('bio'),
            is_active=data.get('is_active')
        )

        db.session.add(new_user)
        db.session.commit()

        response = make_response(
            jsonify({"message": "User added successfully"}),
            201
        )

        return response

    def delete(self):
        data = request.get_json()
        user_id = data.get('id')
        user = User.query.get(user_id)

        if user:
            db.session.delete(user)
            db.session.commit()
            response = make_response(
                jsonify({"message": "User deleted successfully"}),
                200
            )
        else:
            response = make_response(
                jsonify({"error": "User not found"}),
                404
            )

        return response

api.add_resource(UserResource, '/users')

class UserResourceById(Resource):
    def get(self, id):
        user = User.query.get(id)

        if user:
            user_dict = {
                "id": user.id,
                "username": user.username,
                "bio": user.bio,
                "is_active": user.is_active
            }

            response = make_response(
                jsonify(user_dict),
                200
            )

            return response
        else:
            response = make_response(
                jsonify({"error": "User not found"}),
                404
            )

            return response

api.add_resource(UserResourceById, '/users/<int:id>')

class ReviewResource(Resource):
    def get(self):
        reviews = []
        for review in Review.query.all():
            review_dict = {
                "id": review.id,
                "content": review.content,
                "comments": review.comments,
                "rating": review.rating
            }
            reviews.append(review_dict)

        response = make_response(
            jsonify(reviews),
            200
        )

        return response

    def post(self):
        data = request.get_json()
        new_review = Review(
            content=data.get('content'),
            comments=data.get('comments'),
            rating=data.get('rating')
        )

        db.session.add(new_review)
        db.session.commit()

        response = make_response(
            jsonify({"message": "Review added successfully"}),
            201
        )

        return response

    def delete(self):
        data = request.get_json()
        review_id = data.get('id')
        review = Review.query.get(review_id)

        if review:
            db.session.delete(review)
            db.session.commit()
            response = make_response(
                jsonify({"message": "Review deleted successfully"}),
                200
            )
        else:
            response = make_response(
                jsonify({"error": "Review not found"}),
                404
            )

        return response

api.add_resource(ReviewResource, '/reviews')

class ReviewResourceById(Resource):
    def get(self, id):
        review = Review.query.get(id)

        if review:
            review_dict = {
                "id": review.id,
                "content": review.content,
                "comments": review.comments,
                "rating": review.rating
            }

            response = make_response(
                jsonify(review_dict),
                200
            )

            return response
        else:
            response = make_response(
                jsonify({"error": "Review not found"}),
                404
            )

            return response

api.add_resource(ReviewResourceById, '/reviews/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
