"use client"
import React, { useEffect, useState } from "react";
import Card from "./component/Card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGenres, setFilteredGenres] = useState<Array<{
    id: number;
    image: string;
    title: string;
    description: string;
    color: string;
    link: string;
  }>>([]);

  const genres = [
    {
      id: 1,
      image: '/mystery.png',
      title: 'Mystery',
      description: 'Solving puzzles and crimes.',
      color: '#080A0B',
      link: 'https://drive.google.com/drive/folders/1gVLW9gZiKUr1tHtt_FzjqiE7LeXQaybi'
    },
    {
      id: 2,
      image: '/science fiction.png',
      title: 'Fiction',
      description: 'Imagining futuristic and otherworldly scenarios.',
      color: '#7C9DB2',
      link: 'https://drive.google.com/drive/folders/1gTA1QbeGQXeECn0zDP55_EXE7cmtHaBd'
    },
    {
      id: 3,
      image: '/fantasy.png',
      title: 'Fantasy',
      description: 'Exploring magical realms and mythical creatures.',
      color: '#215A8E',
      link: 'https://drive.google.com/drive/folders/1gQfkOn9gWQYgujEUtdOWlOJBw6WjNmf3'
    },
    {
      id: 4,
      image: '/adventure.png',
      title: 'Adventure',
      description: 'Keeping readers in suspense with high tension.',
      color: '#161C1E',
      link: 'https://drive.google.com/drive/folders/1gEXluPDX3etDuVAjJS7jTiHqSAUR2lj7'
    },
    {
      id: 5,
      image: '/biography.png',
      title: 'Biography',
      description: 'Tells the reader about a person.',
      color: '#161C1E',
      link: 'https://drive.google.com/drive/folders/1gFZltkqwFEbtLgXIQ7EAg6oUZx-C90Mv'
    },
  ];

  useEffect(() => {
    const filtered = genres.filter((genre) =>
      genre.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGenres(filtered);
  }, [searchQuery]);

  return (
    <>
      <div className="pt-10 px-10">
        <h1 className="text-2xl font-semibold">Books</h1>
        <p className="text-[#898989]">{genres.length} Genres</p>
        <div>
          <input
            placeholder="Search for genres"
            className="outline-none border border-[#E3E3E3] my-2 placeholder:text-[#C0C0C0] rounded-full px-4 py-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex p-10 gap-5 flex-wrap">
        {filteredGenres.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredGenres.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              color={card.color}
              link={card.link}
            />
          ))
        )}
      </div>
    </>
  );
}
