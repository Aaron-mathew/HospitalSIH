import React from "react";
import Button from "../components/partials/Button";
import BlogCard from "../components/partials/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import Footer from './Footer'
const Blogs = () => {

  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className=" text-4xl font-semibold text-center lg:text-start">
              Latest Post
            </h1>
            <p className=" mt-2 text-center lg:text-start">
              Stay updated with our latest news, insights, and articles.
            </p>
          </div>
          <div className=" mt-4 lg:mt-0">
            <Button title="Our Articles" />
          </div>
        </div>
        <div className="my-8">
          <div className=" flex flex-wrap justify-center gap-5">
            <BlogCard className="" img={img1} headlines="Unraveling the Mysteries of Sleep" para="Sleep is more than just a time to rest—it's a critical process that rejuvenates the mind and body, but how much do we really know about its hidden mechanisms?" />
            <BlogCard img={img2} headlines="The Heart-Healthy Diet" para="A balanced diet can do wonders for your heart, but finding the right mix of nutrients is key to long-term cardiovascular health."/>
            <BlogCard
              img={img3}
              headlines="Understanding Pediatric Vaccinations" para="Vaccinations play a crucial role in protecting children from life-threatening diseases, but navigating the schedule and benefits can feel overwhelming."
            />
            <BlogCard img={img4} headlines="Navigating Mental Health" para="Mental health is as important as physical health, yet recognizing the signs and finding support often remain overlooked in our busy lives."/>
            <BlogCard img={img5} headlines="The Importance of Regular Exercise" para="Staying active isn't just about losing weight—regular exercise strengthens your heart, improves mental clarity, and boosts your overall well-being." />
            <BlogCard img={img6} headlines="Skin Health 101" para="Your skin is your body's largest organ, and maintaining its health requires more than just a good moisturizer—it’s about a complete skincare routine." />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
