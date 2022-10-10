import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";
import { allCountries } from "../services/services";
import HistoryCountry from "../pages/HistoryCountry";

const DiaryCovid = () => {
  //Estados de consulta
  const [country, setCountry] = useState(null);
  const [searchCountries, setSearchCountries] = useState(null);
  const [tableCountries, setTableCountries] = useState(null);
  //Fecha Actual
  const today = new Date();
  const date = today.toLocaleDateString();
  const countryOff = "Colombia";
  //funcion que captura informacion de input de busqueda
  const handleChange = (e) => {
    setSearchCountries(e.target.value);
    filterCountries(e.target.value);
  };
  //funcion que aplica filtro a la tabla de totales por pais.
  const filterCountries = (countrySearch) => {
    var results = tableCountries.filter((country) => {
      if (
        country.Country.toString()
          .toLowerCase()
          .includes(countrySearch.toLowerCase())
      ) {
        return country;
      }
    });
    setCountry(results);
  };
  useEffect(() => {
    //Funcion que retorna totales por pais
    allCountries(setCountry);
    allCountries(setTableCountries);
  }, []);

  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">Datos mundiales de Covid {date}</h5>
          </div>
          <div className="col text-right">
            <input
              className="form-control inputSearch"
              value={searchCountries}
              placeholder="Busqueda de País"
              onChange={handleChange}
            />
            <button
              className="btn btn-default low-height-btn"
              onClick={handleChange}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <p>Informacion de totales de países con COVID.</p>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>País</th>
                <th>Nuevos Confirmados</th>
                <th>Nuevas Muertes</th>
                <th>Nuevos Recuperados</th>
                <th>Total Confirmados</th>
                <th>Total Muertes</th>
                <th>Total Recuperados</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {country != null
                ? country.map((country, index) => {
                    return (
                      <tr key={country.ID}>
                        <td>{country.Country}</td>
                        <td>{country.NewConfirmed}</td>
                        <td>{country.NewDeaths}</td>
                        <td>{country.NewRecovered}</td>
                        <td>{country.TotalConfirmed}</td>
                        <td>{country.TotalDeaths}</td>
                        <td>{country.TotalRecovered}</td>
                        <td>
                          <div className="dropdown table-action-dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              type="button"
                              id="dropdownMenuButtonSM"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i
                                className="fa fa-ellipsis-v"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButtonSM"
                            >
                              <li>
                                <a className="dropdown-item" href={`/historyCountry/${country.Slug}`}>
                                  <button
                                    className="btn btn-primary"                                  
                                  >
                                    <i className="fa fa-search"></i>
                                  </button>
                                  &nbsp;Ver Historico
                                </a>
                              </li>                           
                              <div className="dropdown-divider"></div>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                :   
                <tr>
                <td>Actualizacion en progreso intentalo mas tarde</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <div className="dropdown table-action-dropdown">
                    <button
                      className="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButtonSM"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i
                        className="fa fa-ellipsis-v"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButtonSM"
                    >
                      <li>
                        <a className="dropdown-item" href={`/historyCountry/${countryOff}`}>
                          <button
                            className="btn btn-primary"                                  
                          >
                            <i className="fa fa-search"></i>
                          </button>
                          &nbsp;Ver Historico
                        </a>
                      </li>                           
                      <div className="dropdown-divider"></div>
                    </ul>
                  </div>
                </td>
              </tr>}
            </tbody>
          </table>
        </div>        
      </div>
    </>
  );
};

export default adminLayout(DiaryCovid);
