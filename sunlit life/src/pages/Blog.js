import React from 'react';
import Layout from './Layout';

const BlogPost = ({ title, date, excerpt }) => (
  <div className="mb-8 p-6 bg-sand rounded-lg">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">{date}</p>
    <p>{excerpt}</p>
    <a href="#" className="text-organic-orange hover:underline">Read more</a>
  </div>
);

const Blog = () => {
  const posts = [
    { title: "My Latest Photography Project", date: "June 1, 2024", excerpt: "In this post, I talk about my recent adventure photographing local wildlife..." },
    { title: "5 Tips for Better Photo Retouching", date: "May 15, 2024", excerpt: "Improve your photo retouching skills with these 5 essential tips..." },
    { title: "Exploring Color Theory in Graphic Design", date: "May 1, 2024", excerpt: "Understanding color theory can greatly enhance your graphic design work..." },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-organic-orange">Blog</h1>
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;