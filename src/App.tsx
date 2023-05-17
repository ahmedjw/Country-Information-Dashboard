import React, { useEffect, useState } from "react";
import { GET_DATA } from "./api/quieries";
import { useQuery } from "@apollo/client";
import NavBar from "./components/shared/NavBar";
import DataWraper from "./components/shared/DataWrapper";
import { SortingOptions } from "./utils/consts";
import SortSelect from "./components/shared/SortSelect";
import { country } from "./components/shared/DataWrapper/interfaces";

function App() {
  //we can use redux or context for state manangment but the state managment is not complex so I handle it with just a state
  const { loading, error, data } = useQuery(GET_DATA);
  const [contries, setContries] = useState([]);
  const [limit, setLimit] = useState(30);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = React.useState("");

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
      document.documentElement.offsetHeight
    )
      setLimit((prevCount) => prevCount + 10);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  useEffect(() => {
    if (searchValue === "") {
      if (sortValue === "Name Asc") {
        setContries(
          [...contries]?.sort((a: country, b: country) =>
            a.name.localeCompare(b.name)
          )
        );
      }
      if (sortValue === "Name Dsc") {
        setContries(
          [...contries]?.sort((a: country, b: country) =>
            b.name.localeCompare(a.name)
          )
        );
      } else {
        setContries(data?.countries);
      }
    } else {
      setContries(
        data?.countries.filter((country: country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [data, limit, searchValue, sortValue]);

  useEffect(() => {
    //veritualizaion for lazy loading using local State because Endpoint doesn't has the option for lazy loading
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SortSelect
        value={sortValue}
        options={SortingOptions}
        onChange={handleSortChange}
      />
      <DataWraper
        loading={loading}
        error={error}
        contries={contries}
        limit={limit}
      />
    </div>
  );
}

export default App;
