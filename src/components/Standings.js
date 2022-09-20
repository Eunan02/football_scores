import axios from "axios";
import React, { useState, useEffect } from "react";
import {Rings} from "react-loader-spinner";


const Standings = () => {
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2022");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData([]);
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
      )
      .then((res) => {
        console.log(res.data.data.standings);
        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  return (
    <div className="standings-container">
      <div className="select-fields">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
          <option value="aus.1">Australian A-League</option>
          <option value="bra.1">Brazilian Serie A</option>
          <option value="chn.1">Chinese Super League</option>
          <option value="ned.1">Dutch Eredivisie</option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">French Ligue 1</option>
          <option value="ger.1">German Bundesliga</option>
          <option value="idn.1">Indonesian Liga 1</option>
          <option value="ita.1">Italian Serie A</option>
          <option value="jpn.1">Japanese J League</option>
          <option value="mys1">Malaysian Super League</option>
          <option value="mex.1">Mexican Liga BBVA MX</option>
          <option value="por.1">Portuguese Liga</option>
          <option value="rus.1">Russian Premier League</option>
          <option value="sgp.1">Singaporean Premier League</option>
          <option value="esp.1">Spanish Primera División</option>
          <option value="tha.1">Thai Premier League</option>
          <option value="tur.1">Turkish Super Lig</option>
          <option value="uga.1">Ugandan Super League</option>
        </select>
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2011">11/12</option>
          <option value="2012">12/13</option>
          <option value="2013">13/14</option>
          <option value="2014">14/15</option>
          <option value="2015">15/16</option>
          <option value="2016">16/17</option>
          <option value="2017">17/18</option>
          <option value="2018">18/19</option>
          <option value="2019">19/20</option>
          <option value="2020">20/21</option>
          <option value="2021">21/22</option>
          <option value="2022">22/23</option>
        </select>
      </div>

      <div className="ranking-div">
        {loading ? (
          <Rings color="#00BFFF" height={80} width={80} />
        ) : (
          data?.map((data, index) => (
            <div key={index} className="ranking-div-inner">
              <h1>
                <span>
                  {`${index + 1}.`}
                  <img
                    src={data.team.logos[0]?.href}
                    alt="#"
                    className="logo-small"
                  />
                  
                </span>{" "}
                {data.team.shortDisplayName}  Points: {data.stats[6].value}
                <p>Wins: {data.stats[0].value} Draws:{data.stats[2].value} Losses: {data.stats[1].value} Goal Difference: {data.stats[9].value}</p>
                 
                
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Standings;