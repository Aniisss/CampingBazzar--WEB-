import React, { useState, useMemo } from 'react';
import './GearPage.css';
import Header from '../header/header';

const gearItems = [
  { id: 1, name: 'Tent', category: 'Shelter', price: 150, description: 'Durable and weather-resistant tents.', imageUrl: '/assets/CampingTent.jpg', seller: 'John Doe' },
  { id: 2, name: 'Sleeping Bag', category: 'Sleep', price: 50, description: 'Stay warm and comfortable.', imageUrl: '/assets/sleeping-bag.jpg', seller: 'Jane Smith' },
  { id: 3, name: 'Camping Stove', category: 'Cooking', price: 80, description: 'Lightweight and efficient.', imageUrl: '/assets/stove.jpg', seller: 'Bob Johnson' },
  // Additional gearItems...
];

const GearPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('name');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userArticles, setUserArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: '', imageUrl: '', description: '', price: '' });
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Added state for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handler Functions
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const handleNewArticleChange = ({ target: { name, value } }) =>
    setNewArticle((prev) => ({ ...prev, [name]: value }));

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.imageUrl || !newArticle.description || !newArticle.price) {
      alert('Please fill out all fields!');
      return;
    }
    setUserArticles([...userArticles, newArticle]);
    setNewArticle({ title: '', imageUrl: '', description: '', price: '' });
    alert('Article submitted successfully!');
    setIsPopupOpen(false); // Close the popup after submission
  };

  const handleCardClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Filtered and Sorted Items (Optimized with useMemo)
  const filteredAndSortedItems = useMemo(() => {
    const filteredItems = gearItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filteredItems.sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'price') return a.price - b.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div>
      <Header />
      
      {/* Header Section */}
      <header className="gear-header">
        <h1>Explore Camping Gear</h1>
        <p>Discover top-notch equipment and share your gear with the community.</p>
      </header>

      {/* Filters Section */}
      <div className="gear-filters">
        <input
          type="text"
          placeholder="Search for gear..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="gear-search-input"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="gear-category-filter">
          <option value="All">All Categories</option>
          <option value="Shelter">Shelter</option>
          <option value="Sleep">Sleep</option>
          <option value="Cooking">Cooking</option>
        </select>
        <select value={sortOption} onChange={handleSortChange} className="gear-sort-filter">
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Gear Items Grid */}
      <section className="gear-grid">
        {filteredAndSortedItems.map((item) => (
          <div
            key={item.id}
            className="gear-card"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleCardClick(item)}
          >
            <img src={item.imageUrl} alt={item.name} className="gear-card-image" />
            <div className="gear-card-content">
              <h3>{item.name}</h3>
              <p className="gear-category">{item.category}</p>
            </div>
            {hoveredItem === item.id && (
              <div className="hover-details">
                <p>{item.description}</p>
                <p className="price">Price: ${item.price}</p>
                <button className="quick-buy-button">Quick Buy</button>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Detailed View Modal */}
      {selectedItem && (
        <div className="gear-modal">
          <div className="gear-modal-content">
            <span className="gear-modal-close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedItem.imageUrl} alt={selectedItem.name} className="gear-modal-image" />
            <h2>{selectedItem.name}</h2>
            <p className="gear-category">{selectedItem.category}</p>
            <p>{selectedItem.description}</p>
            <p className="price">Price: ${selectedItem.price}</p>
            <p className="seller">Seller: {selectedItem.seller}</p>
            <button className="quick-buy-button">Quick Buy</button>
          </div>
        </div>
      )}

      {/* New Add Gear Section */}
      <section className="add-gear-section">
        <button className="add-gear-button" onClick={() => setIsPopupOpen(true)}>
          Add New Gear
        </button>

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="gear-popup">
            <div className="gear-popup-content">
              <span className="popup-close" onClick={() => setIsPopupOpen(false)}>
                &times;
              </span>
              <h2>Submit Your Camping Gear</h2>
              <form onSubmit={handleArticleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newArticle.title}
                  onChange={handleNewArticleChange}
                  required
                />
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={newArticle.imageUrl}
                  onChange={handleNewArticleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={newArticle.description}
                  onChange={handleNewArticleChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={newArticle.price}
                  onChange={handleNewArticleChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Community Offers Section */}
      <section className="community-offers">
        <h2>Community Offers</h2>
        <div className="community-articles">
          {userArticles.map((article, index) => (
            <div key={index} className="community-article">
              <img src={article.imageUrl} alt={article.title} />
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p className="price">Price: ${article.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GearPage;
