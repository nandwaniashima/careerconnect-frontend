import React, { useRef, useState } from 'react';
import './blogsection.css';

const BlogSection = () => {
    const blogGridRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollLeft = () => {
        if (activeIndex > 0) {
            const newIndex = activeIndex - 1;
            setActiveIndex(newIndex);
            blogGridRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (activeIndex < 10) {  // Assuming there are 4 cards
            const newIndex = activeIndex + 1;
            setActiveIndex(newIndex);
            blogGridRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="blog-section">
            <div className="blog-header">
                <h1>The blog</h1>
                <p>Stay informed with the latest insights and trends shaping today’s job market to make strategic career decisions.</p>
                <button className="blog-button">DISCOVER OUR PRODUCTS</button>
            </div>
            <div className="blog-container">
                <div className="blog-grid" ref={blogGridRef}>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">CALL FOR PROJECTS</div>
                        <h2 className='article-heading'>How to respond to a call for projects in 2024?</h2>
                        <p className='article-description'>Whether you’re a start-up, a major corporation, an association, a university...</p>
                        <div className="article-footer">
                            <span className="date">15/5/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">LONG-DISTANCE RACE(S)</div>
                        <h2 className='article-heading'>The keys to business success</h2>
                        <p className='article-description'>A company’s path to success is rarely linear. It is made up of a multitude of...</p>
                        <div className="article-footer">
                            <span className="date">10/5/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">INNOVATION MARKETING</div>
                        <h2 className='article-heading'>How do you market your innovation?</h2>
                        <p className='article-description'>In this article, we’ll explore the concept of innovation marketing. We’ll break the...</p>
                        <div className="article-footer">
                            <span className="date">29/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">EUROPEAN AIDS</div>
                        <h2 className='article-heading'>Businesses: European grants and aids</h2>
                        <p className='article-description'>In today’s world, economic development and innovation are closely tied to...</p>
                        <div className="article-footer">
                            <span className="date">26/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">INNOVATION MARKETING</div>
                        <h2 className='article-heading'>How do you market your innovation?</h2>
                        <p className='article-description'>In this article, we’ll explore the concept of innovation marketing. We’ll break the...</p>
                        <div className="article-footer">
                            <span className="date">29/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">INNOVATION MARKETING</div>
                        <h2 className='article-heading'>How do you market your innovation?</h2>
                        <p className='article-description'>In this article, we’ll explore the concept of innovation marketing. We’ll break the...</p>
                        <div className="article-footer">
                            <span className="date">29/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">INNOVATION MARKETING</div>
                        <h2 className='article-heading'>How do you market your innovation?</h2>
                        <p className='article-description'>In this article, we’ll explore the concept of innovation marketing. We’ll break the...</p>
                        <div className="article-footer">
                            <span className="date">29/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                    <div className="blog-card">
                        <div className="article-label">ARTICLE</div>
                        <div className="article-category">EUROPEAN AIDS</div>
                        <h2 className='article-heading'>Businesses: European grants and aids</h2>
                        <p className='article-description'>In today’s world, economic development and innovation are closely tied to...</p>
                        <div className="article-footer">
                            <span className="date">26/4/2024</span>
                            <span className="read-time">5 min.</span>
                        </div>
                        <a href="#" className="see-more">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="scroller">
                <button className="scroll-arrow left" onClick={scrollLeft}>❮</button>
                <div className="dots">
                    {[0, 1, 2, 3, 4, 5 ,6 , 7].map((dot, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                        ></span>
                    ))}
                </div>
                <button className="scroll-arrow right" onClick={scrollRight}>❯</button>
            </div>
        </section>
    );
};

export default BlogSection;
