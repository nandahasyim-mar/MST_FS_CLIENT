import axios from 'axios'

export const fetchKodePosIndonesia = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/kode-pos`)
      .then(({data}) => {
        console.log(data, '<<<<< data di action')
        dispatch({
          type: "SET_KODE",
          payload: {
            kodePos: data
          }
        })
      })
      .catch(console.log)
  }
}