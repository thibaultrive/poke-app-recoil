import {Chip} from '@mui/material';
import styles from "./versions.module.css";
import {useRecoilValue} from "recoil";
import {versionsState} from "../species/speciesStore";

export function Versions() {

    const versions = useRecoilValue(versionsState);

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