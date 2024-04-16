import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open links in new tabs
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`;
    const instagramLink = `https://instagram.com`;
    const discordLink = `https://discord.com`;

    window.open(twitterLink, '_blank');
    window.open(instagramLink, '_blank');
    window.open(discordLink, '_blank');

    // Scroll to the bottom of the blog page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    // Reset form fields
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;