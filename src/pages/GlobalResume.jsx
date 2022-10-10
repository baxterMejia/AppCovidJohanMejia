import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminLayout from "../hoc/adminLayout";
import { allCountries , globalSummary } from "../services/services";

const GlobalResume = () => { 
  const [infoCovid, setinfoCovid] = useState(null);
  //Fecha Actual
  const today = new Date();
  const date = today.toLocaleDateString();

  useEffect(() => {
      //funcion que retorna resumen global
    globalSummary(setinfoCovid);
  }, []);

  return (
    <>    
    <div>Hoy:</div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-ambulance"></i>
              </div>
              <div className="mr-5">{infoCovid != null ? infoCovid.TotalConfirmed : 0 } Casos Confirmados!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-heartbeat"></i>
              </div>
              <div className="mr-5">{infoCovid != null ? infoCovid.TotalDeaths : 0} Muertes!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-wheelchair-alt"></i>
              </div>
              <div className="mr-5">{infoCovid != null ? infoCovid.TotalRecovered : 0} Recuperados!</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>   
      </div>
    </>
  );
};

export default adminLayout(GlobalResume);
