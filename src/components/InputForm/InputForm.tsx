import styles from './InputForm.module.scss';
import  {useState, useCallback, useEffect} from 'react'
import Airtable from 'airtable'


// ADRESS_URL = https://api.airtable.com/v0/appIq0Ys3vXY5NgHH/inputvalue?api_key=keyIWvtHI6VuPFmzZ

interface InputFormProps {
  defaultValue?: string,
}

const storageFormKey = 'inputValue';

const apiKey : string = (process.env.REACT_APP_AIRTABLE_API_KEY as string)
const dataBase : string = (process.env.REACT_APP_AIRTABLE_API_DATABASE as string)


const base  = new Airtable({apiKey: apiKey }).base(dataBase)
const table = base('inputvalue')

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: apiKey
})


export const  InputForm = ( props?: InputFormProps) => {
  const [displayError, setDisplayError] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [apiValues, setApiValues] = useState<any[] | any>([]) 





  const formReadyToSubmit = (displayError || !inputValue)


useEffect(() => {

base('inputvalue').select({
  maxRecords: 100,
 view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  setApiValues(records)
//   records.forEach(function (record) {
//     console.log('Retrived', record.get('inputvalue'));
//  })

 fetchNextPage()
}, function done(err) {
 if (err) {console.error(err); return}
})
},[])



  const handleInput = (event: React.ChangeEvent<HTMLInputElement> ) => {
      const specialCharacters = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/
      const values = event.target.value
      const inputMsgLength = event.target.value.length
      setInputValue(event.target.value)
      if(inputMsgLength < 3 || inputMsgLength > 20 || specialCharacters.test(values) ) {
        if(inputMsgLength < 3){
          setErrorMsg('Dammnnn it is too short!')
        } 
        if(inputMsgLength > 20) {
          setErrorMsg('Yeye all okey, but too long now!')
        }
        if(specialCharacters.test(values)) {
          setErrorMsg('No,no,no! No special characters in this one.')
        }
        setDisplayError(true)
      }
       else {
        setDisplayError(false)
        setErrorMsg('')
      }
  }


  const handleSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement> ) => {
    const createRecord = async (fields: any) => {
      const createdRecord = await table.create(fields)
      console.log(createdRecord)
    }
    e.preventDefault()
    if(!formReadyToSubmit) {
      localStorage.setItem(storageFormKey, inputValue)}
      createRecord({
        'inputvalue': inputValue}
      )
  },[formReadyToSubmit, inputValue])


  useEffect(() => {
    let valueToSet = '';
    const localStorageData = localStorage.getItem(storageFormKey)
    if(!!localStorageData) {
      valueToSet = localStorageData;
    } else {
      if(!!props?.defaultValue) {
        valueToSet = props?.defaultValue;
      }
    }
    setInputValue(valueToSet)
  },[])


  return (
    <div>
      <div className={styles.form}>
        <label className={styles.title}>Task number 2</label>
        <label className={styles.label}>Write something between 3 and 20 letters and without special characters:</label>
        <input onInput={handleInput} value={inputValue}  className={styles.inputForm} />
        <div className={styles.errorSpan}>{displayError && <div className={styles.error}>{errorMsg}</div>} </div>
        <button  onClick={handleSubmit} className={styles.submitBtn} disabled={formReadyToSubmit}>Submit</button>
      </div>
      <div>
        Records
        <ul className={styles.list}> 
          {apiValues.map(((obj: any) => { return <li key={obj.id}>{obj.fields.inputvalue}</li>}))}
        </ul>
      
      </div>
   </div>

  )
}


