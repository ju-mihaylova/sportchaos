const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mt-3" onClick={onClick}>
                Load More
            </button>
        </div>
    );
};

export default LoadMoreButton;
