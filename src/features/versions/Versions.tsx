import {Chip} from '@mui/material';
import {useSelector} from "react-redux";
import styles from "./versions.module.css";
import {speciesSelector} from "../species/speciesSlice";

export function Versions() {

    const { versions } = useSelector(speciesSelector);

    return(
      <div className={styles.list}>
          {versions.length > 0 &&
          versions.map( version => {
              return <Chip label={version.name} key={version.name}/>
          })
          }
      </div>
    );
}