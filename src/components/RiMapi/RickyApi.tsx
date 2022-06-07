import styles from './RickyApi.module.scss';
import {useState, useEffect} from 'react'

export function RickyApi() {

  const [data, setData] = useState<null | []>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_LINK}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error:  is ${response.status}`
          );
        }
        let actualData = await response.json();
         setData(actualData.map((item: { image: string; }) => item.image));
         setError('')
      } catch(err)  {
        setError((err as Error).message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    })
   ()
  }, [])

  return (
      <div className={styles.container}>
        <div className={styles.text}>Section for fetching API (Ricky and Morty) homework</div>
        <div className={styles.api}>
        {loading && <div className={styles.otherText}> ...Loading </div>}
        {error && <div className={styles.otherText}> Ups...sorry something went wrong! </div>}
        {data && data.map((item) => {
          return <img key={item} alt={item} src={item} className={styles.images}/>
        })}
        </div>
      </div>
  )
}

