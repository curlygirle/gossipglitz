//importing style sheet to apply to the search bar
import "../styles/Search.css";

//this is the search component
//it provides a serach bar to search through gossip
export default function Search({
  searchTerm, //the current search term (pretty self-explanitory)
  handleSearch, //handles search input
}) {
  return (
    //the search section
    <section className="search">
      <main className="search-bar">
        <input
          type="text"
          placeholder="search gossip"
          value={searchTerm}
          onChange={handleSearch}
        />
      </main>
    </section>
  );
}
