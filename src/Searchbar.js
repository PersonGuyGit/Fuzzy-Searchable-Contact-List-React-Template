import "./Searchbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";

const Searchbar = ({searchQuery, setSearchQuery}) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    navigate(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <div className="flex-gap">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <FormControl
          value={searchQuery}
          onChange={setSearchQuery}
          type="search"
          id="header-search"
          placeholder="Search Contacts"
          name="searchbarObject"
        />
      </div>
    </form>
  );
};

export default Searchbar;
