const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(20).fill("").map((e, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-image"></div>
                    <div className="shimmer-text-line short"></div>
                    <div className="shimmer-text-line long"></div>
                    <div className="shimmer-text-line medium"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;