import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="relative ">
      <input
        type="text"
        className="relativ h-[59px] px-12 bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  placeholder:text-2xl  "
        style={{ backgroundColor: "#F0F0F0" }}
        placeholder="بحث"
      />
      <div className="FontAwesomeIcon hover:text-[red] absolute right-4 top-4 font-bold ">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" font-bold text-2xl "
          style={{ color: "#B0B0B0" }}
        />
      </div>
    </div>
  );
};

export default Search;
