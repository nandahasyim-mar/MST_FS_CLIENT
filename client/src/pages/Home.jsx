import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKodePosIndonesia } from '../store/actions/actionKodePosIndonesia'
import KodePos from '../components/KodePos'
import './Home.css'
import { Form } from 'react-bootstrap'

const Home = () => {
  const dispacth = useDispatch()
  const codes = useSelector((state) => state.kodePosIndonesia)
  const [localCode, setLocalCode] = useState([])
  // const [kabupaten, setKabupaten] = useState([])

  useEffect(() => {
    dispacth(fetchKodePosIndonesia())
  }, [])

  useEffect(() => {
    setLocalCode(codes)
  }, [codes])

  const filterFunction = (provinsi) => {
    if (provinsi == 'all') {
      setLocalCode(codes)
    } else {
      setLocalCode(codes.filter(el => el.propinsi === provinsi))
    }
  }

  // const filterKabupaten = (kabupaten) => {
  //   if(kabupaten == '-') {
  //     setLocalCode('-')
  //   } else {
  //     setKabupaten(localCode.filter(el => el.kabupaten === kabupaten))
  //   }
  // }

  return (
    <div className="container">
      <div className="row">
        <h2>Provinsi</h2>
        <select onChange={(e) => filterFunction(e.target.value)} class="form-select" style={{width: "30rem"}} aria-label="Default select example">
          <option value="all" selected>Open this select menu</option>
          <option value="Nanggroe Aceh Darussalam (NAD)">Nanggroe Aceh Darussalam (NAD)</option>
          <option value="Jawa Tengah">Jawa Tengah</option>
        </select>
      </div>
      <div class="row">
        <div class="col-sm point" style={{ textAlign: "center" }}>Kode Pos</div>
        <div class="col-sm point" style={{ textAlign: "center" }}>Kelurahan</div>
        <div class="col-sm point" style={{ textAlign: "center" }}>Kecamatan</div>
        {/* <div class="col s2">Jenis</div>
        <div class="col s2">Kabupaten</div>
        <div class="col s2">Provinsi</div> */}
      </div>

      {localCode?.map(code => {
        return <KodePos code={code} key={code.id} />
      })}
    </div>
  )
}

export default Home;