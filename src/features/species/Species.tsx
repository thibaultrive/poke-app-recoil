import {ListItem, ListItemText, List} from '@mui/material';
import styles from "./species.module.css";
import {useRecoilValue} from "recoil";
import {speciesState} from "./speciesStore";

export function Species() {

    const species = useRecoilValue(speciesState);

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