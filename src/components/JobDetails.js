import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css'; // Add some custom CSS for styling

// Dummy job data (same data as Home.js, or fetch it from an API)
const jobs = [
  {
    id: 1,
    title: "I will create a responsive website",
    freelancer: "Mohammed Razik",
    rating: 4.8,
    price: "$100",
    description: "I am a professional web developer with 5 years of experience...",
    image:"https://static.vecteezy.com/system/resources/thumbnails/005/637/993/small_2x/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg" ,
  },
  {
    id: 2,
    title: "I will design a professional logo",
    freelancer: "Mohammed Rayyan",
    rating: 4.9,
    price: "$50",
    description: "I have been designing logos for 7 years, working with top brands...",
    image: "https://www.shutterstock.com/image-vector/aa-logo-design-white-letter-600nw-2498949063.jpg",
  },
  {
    id: 3,
    title: "I will write SEO content",
    freelancer: "Rahul Rao",
    rating: 4.7,
    price: "$30",
    description: "I specialize in writing SEO-optimized articles...",
    image: "https:www.searchenginejournal.com/wp-content/uploads/2021/08/9-tips-for-creating-your-best-seo-content-this-year-1-612e44a7bd9a9-sej.jpg",
  },
  {
    id: 4,
    title: "I will develop a mobile app",
    freelancer: "Samantha",
    rating: 4.6,
    price: "$200",
    category: "Web Development",
    image: "https://via.placeholder.com/300x200https://media.licdn.com/dms/image/D5612AQHdV7JF7Avgcw/article-cover_image-shrink_720_1280/0/1711964512962?e=2147483647&v=beta&t=1eat3uVu7d4KmWY6OBWadizbvrQDVhHxGhvxgJWv0xI",
  },
  {
    id: 5,
    title: "I will design business cards",
    freelancer: "Mrunnal Thakur",
    rating: 4.5,
    price: "$40",
    category: "Graphic Design",
    image: "https://a.storyblok.com/f/165154/1280x720/916b746b9b/02_minimalist-business-card-designs.jpg/m/",
  },
  {
    id: 6,
    title: "I will write blog posts",
    freelancer: "Neha Shetty",
    rating: 4.9,
    price: "$25",
    category: "Content Writing",
    image: "https://cariadmarketing.com/wp-content/uploads/2022/06/How-to-write-an-amazing-blog-post.jpg",
  },
  {
    id: 7,
    title: "I will manage your social media",
    freelancer: "Kavya",
    rating: 4.7,
    price: "$150",
    category: "Marketing",
    image: "https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg",
  },
  {
    id: 8,
    title: "I will create a branding package",
    freelancer: "Ravi",
    rating: 4.8,
    price: "$300",
    category: "Graphic Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPmE9FBUev6kHCGIb8U8C4M_MbuzbKNrJOQ&s",
  },
  {
    id: 9,
    title: "I will create SEO strategies",
    freelancer: "Murali",
    rating: 4.6,
    price: "$80",
    category: "Marketing",
    image: "https://jaro-website.s3.ap-south-1.amazonaws.com/2023/02/How-to-create-an-SEO-strategy-for-businesses.jpgttps://via.placeholder.com/300x200",
  },
];

const JobDetails = () => {
  const { id } = useParams();  // Get the job ID from the URL
  const job = jobs.find((job) => job.id === parseInt(id));  // Find the specific job by ID

  if (!job) {
    return <h2>Job not found</h2>;  // Handle case where the job doesn't exist
  }

  return (
    <div className="job-details-container">
      <img src={job.image} alt={job.title} className="job-image" />
      <div className="job-details-content">
        <h2>{job.title}</h2>
        <p>Freelancer: {job.freelancer}</p>
        <p>Rating: ⭐ {job.rating}</p>
        <p>Price: {job.price}</p>
        <p>{job.description}</p>
        <button className="hire-btn">Hire {job.freelancer}</button>
      </div>
    </div>
  );
};

export default JobDetails;
