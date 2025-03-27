import React from 'react';
import './ScrollablePage.css'; // We'll create this CSS file

const ScrollablePage: React.FC = () => {
    return (
        <div className="scrollable-container">
            <div className="scrollable-content">
                <div className="scrollable-text">
                    <h1>Page Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    {/* Add multiple paragraphs to enable scrolling */}
                    {[...Array(10)].map((_, index) => (
                        <p key={index}>
                            Paragraph {index + 1}: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollablePage;
