import React from "react";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="product.png"
            alt="Album cover for the new album release" 
            className="object-cover "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">New Album Release: Beats of Serenity</h2>
          <p className="text-gray-700">
            Dive into the latest collection by top artists, filled with soothing tracks and upbeat rhythms. This album
            blends electronic sounds with traditional instruments, creating a unique experience for all music lovers.
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>High-quality studio recording</li>
              <li>Available on all major streaming platforms</li>
              <li>Includes 10 exclusive tracks</li>
              <li>Downloadable cover art</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Price:</h3>
            <p className="text-2xl font-bold text-blue-600">$12.99</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Reviews:</h3>
            <p className="text-gray-600">
              "An incredible blend of beats and melodies! A must-listen for anyone into ambient and electronic music." - <em>Music Weekly</em>
            </p>
          </div>

          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Listen on Spotiwhy</button>
            <button className="btn btn-secondary ml-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
