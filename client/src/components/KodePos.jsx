import React from 'react'
import { useDispatch } from 'react-redux'
import './KodePos.css'

export default (props) => {
  const { code } = props
  return(
    <div class="row">
      <div className="col-sm code">{code.nomorKode}</div>
      <div className="col-sm code">{code.kelurahan}</div>
      <div className="col-sm code">{code.kecamatan}</div>
      {/* <div className="col s2">{code.jenis}</div>
      <div className="col s2">{code.kabupaten}</div>
      <div className="col s2" style={{ width: "100%"}}>{code.propinsi}</div> */}
    </div>

  )
}