import styles from './InputForm.module.scss';
import  {useState, useCallback, useEffect} from 'react'
import Airtable from 'airtable'





interface InputFormProps {
  defaultValue?: string,
  // apiValues?: ReactNode
  // setApiValues?: Records<FieldSet>
 
}

const storageFormKey = 'inputValue';

const apiKey : string = (process.env.REACT_APP_AIRTABLE_API_KEY as string)
const dataBase : string = (process.env.REACT_APP_AIRTABLE_API_DATABASE as string)


const base  = new Airtable({apiKey: apiKey }).base(dataBase)


export const  InputForm = ( props?: InputFormProps) => {
  const [displayError, setDisplayError] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [apiValues, setApiValues] = useState<any[] | any>([]) 
  const [updates, setUpdates] = useState([])

  const formReadyToSubmit = (displayError || !inputValue)


useEffect(() => {
base('inputvalue').select({
  maxRecords: 50,
 view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  setApiValues(records)
  records.forEach(function (record) {
    console.log('Retrived', record.get('inputvalue'));
 })


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
    e.preventDefault()
    if(!formReadyToSubmit) {
      localStorage.setItem(storageFormKey, inputValue)}
  }, [inputValue])


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


// console.log(apiValues)

// let changen = apiValues.map((obj: { fields: any; }) => 
//   {return obj.fields.inputvalue})

//   console.log(changen)

//   let changens = apiValues.map((obj: { id: any; }) => 
//   {return obj.id})

//   console.log(changens)


  return (
    <div>
      <div className={styles.form}>
        <label className={styles.title}>Task number 2</label>
        <label className={styles.label}>Write something between 3 and 20 letters and without special characters:</label>
        <input onInput={handleInput} value={inputValue}  className={styles.inputForm} />
        <div className={styles.errorSpan}>{displayError && <div className={styles.error}>{errorMsg}</div>} </div>
        <button onClick={handleSubmit} className={styles.submitBtn} disabled={formReadyToSubmit}>Submit</button>
      </div>
      <div>
        Records
        <ul> 
          {apiValues.slice(0).reverse().map(((obj: any) => { return <li key={obj.id}>{obj.fields.inputvalue}</li>}))}
        </ul>
      
      </div>
   </div>

  )
}

export default InputForm

