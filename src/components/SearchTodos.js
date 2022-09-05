import React, { useEffect } from "react";
import useFormInput from "../hooks/useFormInput";
import styles from "./SearchTodos.module.css";

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
    <form onSubmit={handleSearch} className={styles.SearchTodos}>
      <i className={`fas fa-search ${styles.search_icon}`} />
      <input
        type="search"
        placeholder="Search Task"
        value={searchQuery}
        onChange={setSearchQuery}
      />
    </form>
  );
}
