import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";

export interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <Box sx={styles.container}>
      <Paper component="form" sx={styles.inputContainer}>
        <IconButton type="button" sx={styles.searchIcon} aria-label="search">
          <LuSearch size={14} />
        </IconButton>
        <InputBase
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setSearchValue(e.target.value)}
          value={searchValue}
          sx={styles.input}
        />
      </Paper>

      <IconButton type="button" sx={styles.filterIcon} aria-label="filter">
        <FiFilter size={20} />
      </IconButton>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    my: 2,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    height: 25,
    width: "50%",
    borderRadius: "999px",
  },
  searchIcon: {
    color: "#88dada",
    padding: "unset",
    paddingLeft: 1,
  },
  input: {
    ml: 1,
    flex: 1,
    color: "#88dada",
    fontSize: 14,
  },
  filterIcon: {
    color: "white",
    padding: "unset",
    paddingLeft: 1,
  },
};

export default SearchBar;
