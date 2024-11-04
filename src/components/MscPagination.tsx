const MscPagination = () => {
  return (
    <nav className="msc-pagination">
      <button className="msc-pagination-btn-text" disabled>
        <i className="fa-solid fa-chevron-left"></i>
        <p>Previous</p>
      </button>
      <button className="msc-pagination-btn msc-pagination-btn-active">
        1
      </button>
      <button className="msc-pagination-btn">2</button>
      <button className="msc-pagination-btn">3</button>
      <button className="msc-pagination-btn-ellipsis">
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      <button className="msc-pagination-btn">10</button>
      <button className="msc-pagination-btn-text">
        <p>Next</p>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </nav>
  );
};

export default MscPagination;
