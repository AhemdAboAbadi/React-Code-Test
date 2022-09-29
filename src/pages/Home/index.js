/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import getTechnology from "../../api/getTechnology";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [shouldTriggerSearch, setShouldTriggerSearch] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    getTechnology({ query: search, perPage, page }).then((res) => {
      const photo = res?.photo.map((item) => ({
        ...item,
        url: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
      }));
      (async () => {
        setData({ ...res, photo });
      })()
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [shouldTriggerSearch, perPage, page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-page">
      <SearchBar
        setSearch={setSearch}
        search={search}
        setShouldTriggerSearch={setShouldTriggerSearch}
      />
      <div className="options">
        <div className="selectButton">
          <label htmlFor="imagesPerPage">Images per page</label>
          <select
            name="perPage"
            id="imagesPerPage"
            onChange={(e) => setPerPage(e.target.value)}
          >
            <option value={10}>10 Per page</option>
            <option value={20}>20 Per page</option>
            <option value={50}>50 Per page</option>
          </select>
        </div>
        <button>
          <Link to="/myFavorites">My Favorite</Link>
        </button>
      </div>
      <div className="item-body">
        {!data?.photo?.length ? <>no images</> : <Card data={data} />}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={data.pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Home;
