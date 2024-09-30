import React from 'react';

const GradientBackground = () => {
    // Define base styles for the circles
    const circleStyle = {
        position: 'absolute',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', // Example gradient
        opacity: 0.7,
        width: '200px', // Adjust the size as needed
        height: '200px',
    };

    // Individual position styles for each circle
    const circles = [
        { className: 'circle1' },
        { className: 'circle2' },
        { className: 'circle3' },
        { className: 'circle4' },
        { className: 'circle5' },
        { className: 'circle6' },
        { className: 'circle7' },
        { className: 'circle8' },
        { className: 'circle9' },
        { className: 'circle10' },
        { className: 'circle11' },
        { className: 'circle12' },
    ];

    return (
        <div className="gradient-background-container">
            {circles.map((circle, index) => (
                <div
                    key={index}
                    className={`gradient-background ${circle.className}`} // Use both CSS class for positioning and background
                    style={{
                        ...circleStyle, // Apply base circle style
                    }}
                ></div>
            ))}
        </div>
    );
};

export default GradientBackground;
