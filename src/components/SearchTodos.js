import React, { useEffect } from "react";
import useFormInput from "../hooks/useFormInput";

export default function SearchTodos({ setSearch }) {
  const [searchQuery, setSearchQuery, reset] = useFormInput("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchQuery);
    reset();
  };

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery, setSearch]);

  return (
    <form onSubmit={handleSearch} className="SearchTodos">
      <input
        type="search"
        placeholder="Search Todos"
        value={searchQuery}
        onChange={setSearchQuery}
      />
    </form>
  );
}
