import {InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material';
import styles from "./generation.module.css";
import {useRecoilState, useRecoilValue} from "recoil";
import {generationsState, selectedGenerationState} from "./generationStore";

export function Generation() {

    const generations = useRecoilValue(generationsState);
    const [selectedGeneration, setSelectedGeneration] = useRecoilState(selectedGenerationState);

    const handleChange = (newGeneration: SelectChangeEvent<number>) => {
        setSelectedGeneration(newGeneration.target.value as number);
    };

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