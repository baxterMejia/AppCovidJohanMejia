import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminLayout from "../hoc/adminLayout";
import { allCountries, globalSummary, summaryByCountry } from "../services/services";

const HistoryCountry = () => {
  const params = useParams();
  const [country, setCountry] = useState(null);
  //Fecha Actual
  const today = new Date();
  const date = today.toLocaleDateString();
 
  useEffect(() => {
      //funcion que retorna historico por pais
    summaryByCountry(setCountry,params.id)
  }, []);

  return (
    <>
         <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">Historico de datos de  {params.id}</h5>
          </div>      
        </div>
        <p>Informacion de totales por dia.</p>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>País</th>
                <th>Fecha</th>                
                <th>Total Confirmados</th>
                <th>Total Muertes</th>
                <th>Total Recuperados</th>
              
              </tr>
            </thead>
            <tbody>
              {country != null
                ? country.map((country, index) => {
                    return (
                      <tr key={country.ID}>
                        <td>{country.Country}</td>
                        <td>{country.Date}</td>
                        <td>{country.Confirmed}</td>                       
                        <td>{country.Deaths}</td>
                        <td>{country.Recovered}</td>                        
                      </tr>
                    );
                  })
                :   
                <tr>
                <td>Sin Datos</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>                           
              </tr>}
            </tbody>
          </table>
        </div>        
      </div>
    </>
  );
};

export default adminLayout(HistoryCountry);
