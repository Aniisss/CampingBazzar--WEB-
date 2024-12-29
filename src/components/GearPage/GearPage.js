import React, { useState, useMemo } from "react";
import "./GearPage.css";
import Header from "../header/header";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../firebaseConfig"; //
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const storage = getStorage(app);
const firestore = getFirestore(app);

const GearPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("name");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userArticles, setUserArticles] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [gearItems, setGearItems] = useState([]);
  const navigate = useNavigate();

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const createdAt = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  };

  useEffect(() => {
    const fetchGearItems = async () => {
      try {
        const response = await fetch(
          "http://20.64.237.50:3000/api/items/getItems"
        );
        const data = await response.json();
        console.log(data);

        const transformedItems = data.items.map((item, index) => ({
          id: item.itemID,
          name: item.title,
          category: item.category,
          imageUrl: item.image,
          description: item.description,
          seller: {
            name: item.userName,
            contact: item.email,
            location: "Tunisia",
          },
          created: formatTimeAgo(item.createdAt._seconds),
        }));
        setGearItems(transformedItems);
      } catch (error) {
        console.error("Error fetching gear items:", error);
      }
    };

    fetchGearItems();
    setUserArticles([]);
  }, []);

  // Added state for popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newGear, setNewGear] = useState({
    title: "",
    description: "",
    price: "",
    imageFile: null,
    category: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGear((prevGear) => ({ ...prevGear, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewGear((prevGear) => ({ ...prevGear, imageFile: file }));
  };

  // Handle location fetching
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setNewGear((prevGear) => ({
            ...prevGear,
            location: `Latitude: ${latitude}, Longitude: ${longitude}`,
          }));
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to submit gear.");
      navigate("/login");
    }

    try {
      // upload image to backend api
      const formData = new FormData();
      formData.append("image", newGear.imageFile);

      const response = await fetch(
        "http://20.64.237.50:3000/api/items/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = response.json();
      const imageUrl = data.imageUrl;

      const response2 = await fetch(
        "http://20.64.237.50:3000/api/items/createItem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: newGear.title,
            description: newGear.description,
            price: newGear.price,
            image: imageUrl,
            category: newGear.category,
            location: newGear.location,
          }),
        }
      ).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit gear.");
        }
      })
      
      alert("Gear submitted successfully!");
      setIsPopupOpen(false);
      setNewGear({
        title: "",
        description: "",
        price: "",
        imageFile: null,
        category: "",
        location: "",
      });
    } catch (error) {
      console.error("Error submitting gear:", error);
      alert("Failed to submit gear. Please try again.");
    }

    setIsSubmitting(false);
  };

  // Handler Functions
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleCardClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Filtered and Sorted Items (Optimized with useMemo)
  const filteredAndSortedItems = useMemo(() => {
    const filteredItems = gearItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filteredItems.sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "price") return a.price - b.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortOption, gearItems]);

  return (
    <div>
      <Header />

      {/* Header Section */}
      <header className="gear-header">
        <h1>Explore Camping Gear</h1>
        <p>
          Discover top-notch equipment and share your gear with the community.
        </p>
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
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="gear-category-filter"
        >
          <option value="All">All Categories</option>
          <option value="Shelter">Shelter</option>
          <option value="Sleep">Sleep</option>
          <option value="Cooking">Cooking</option>
        </select>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="gear-sort-filter"
        >
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
            <img
              src={item.imageUrl}
              alt={item.name}
              className="gear-card-image"
            />
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
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
              className="gear-modal-image"
            />
            <h2>{selectedItem.name}</h2>
            <p className="gear-category">{selectedItem.category}</p>
            <p>{selectedItem.description}</p>
            <p className="price">Price: ${selectedItem.price}</p>
            <p className="seller">Seller: {selectedItem.seller}</p>
            <button className="quick-buy-button">Quick Buy</button>
          </div>
        </div>
      )}

      {/* Add Gear Section */}
      <section className="add-gear-section">
        <button
          className="add-gear-button"
          onClick={() => setIsPopupOpen(true)}
        >
          Add New Gear
        </button>

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="gear-popup">
            <div className="gear-popup-content">
              <span
                className="popup-close"
                onClick={() => setIsPopupOpen(false)}
              >
                &times;
              </span>
              <h2>Submit Your Camping Gear</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newGear.title}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={newGear.description}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={newGear.price}
                  onChange={handleInputChange}
                  required
                />
                <div className="file-upload-wrapper">
                  <label htmlFor="fileUpload" className="file-upload-label">
                    Upload an Image or Video
                    <span className="file-upload-hint">
                      (Accepted formats: .jpg, .png, .mp4, .mov)
                    </span>
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    name="imageFile"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    required
                    className="file-upload-input"
                  />
                </div>
                <button
                  type="button"
                  className="location-button"
                  onClick={fetchLocation}
                >
                  Add Location
                </button>
                {newGear.location && (
                  <p className="location-display">{newGear.location}</p>
                )}
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
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
