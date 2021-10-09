import {InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generationsSelector, getGenerations, selectGeneration} from "./generationSlice";
import styles from "./generation.module.css";

export function Generation() {

    const dispatch = useDispatch();
    const { selectedGeneration, generations } = useSelector(generationsSelector);

    const handleChange = (newGeneration: SelectChangeEvent<number>) => {
        dispatch(selectGeneration(newGeneration.target.value as number));
    };

    useEffect(() => {
        console.log("loading generations...");
            dispatch(getGenerations());
    }, [dispatch]);

    return(
      <div className={styles.select}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Génération</InputLabel>
              <Select
                  labelId="pokemon-generation-select-label"
                  id="pokemon-generation-select"
                  value={selectedGeneration}
                  label="Génération"
                  onChange={handleChange}>
                  {generations.length > 0 &&
                    generations.map(generation => {
                        return <MenuItem value={generation.index} key={generation.name}>{generation.name}</MenuItem>
                    })
                  }
              </Select>
          </FormControl>
      </div>
    );
}