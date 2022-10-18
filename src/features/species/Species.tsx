import {ListItem, ListItemText, List} from '@mui/material';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generationsSelector} from "../generation/generationSlice";
import styles from "./species.module.css";
import {getSpecies, speciesSelector} from "./speciesSlice";
import {AppDispatch} from "../../app/store";

export function Species() {

    const dispatch = useDispatch<AppDispatch>();
    const { selectedGeneration } = useSelector(generationsSelector);
    const { species } = useSelector(speciesSelector);

    useEffect(() => {
        console.log("loading pokemons...");
            dispatch(getSpecies(selectedGeneration));
    }, [dispatch, selectedGeneration]);

    return(
      <div className={styles.list}>
          <List>
              {species.length > 0 &&
                  species.map( pokemon => {
                      return <ListItem key={pokemon.name}>
                          <ListItemText
                              primary={pokemon.name}/>
                      </ListItem>
                  }
              )}
          </List>
      </div>
    );
}