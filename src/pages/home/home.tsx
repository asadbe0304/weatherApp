import { useState, useEffect } from 'react';
import { MdSunnySnowing } from "react-icons/md"
import { GiWaterDrop } from "react-icons/gi"
import { VscDebugBreakpointUnsupported } from "react-icons/vsc"
import { FormControl, MenuItem, Select, InputLabel, TextField, NativeSelect, Typography } from "@mui/material";
import "./style.scss"
import Header from "./../../components/header"
interface Region {
  id: number;
  name: string;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
}

const API_KEY = '4dd72529c6da8a8c4f2ebee293f23aa9';

const home = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegionId, setSelectedRegionId] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Fetch the list of regions from an API or a database
    const regionsData: Region[] = [
      { id: 1, name: 'Tashkent' },
      { id: 2, name: 'Andijan' },
      { id: 3, name: 'Bukhara' },
      { id: 4, name: 'Fergana' },
      { id: 5, name: "Jizzakh" },
      { id: 6, name: 'Namangan' },
      { id: 7, name: 'Navoiy' },
      { id: 8, name: 'Qashqadaryo' },
      { id: 9, name: 'Samarkand' },
      { id: 10, name: 'Sirdaryo' },
      { id: 12, name: 'Tashkent' },
      { id: 14, name: 'Karakalpakstan' },
    ];

    setRegions(regionsData);
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedRegionId > 0) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${regions[selectedRegionId - 1].name},uz&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [selectedRegionId]);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegionId(parseInt(event.target.value));
  };

  return (
    <>
      <Header />
      <div className="app-weather">
        <div className='app-inner'>
          <div className='temp-title'>
            <MdSunnySnowing  className='title icon'/>
            <Typography component="h2" className='title'>Harorat</Typography>
          </div>
          {
            weatherData ? (
              <h4 className='title' style={{ fontSize: "35px" }}>{
                `${weatherData.main.temp}°C`
              }
              </h4>
            ) :

              <h4 className='title' style={{ fontSize: "35px" }}>12°C</h4>
          }
          <Typography component="h2" className='title'>O'zbekiston Respublikasining ob-havo Malumotlari</Typography>
          <FormControl className='app-form'>

            <InputLabel className='input' variant="standard" htmlFor="uncontrolled-native">
              Viloyatni tanlang
            </InputLabel>
            <NativeSelect
              value={selectedRegionId} className='selectApp' onChange={handleRegionChange}
              defaultValue={regions}
              inputProps={{
                name: 'Tashkent',
                id: 'uncontrolled-native',
              }}
            >
              {regions.map((region) => (
                <option className='name-title' color='white' key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          {weatherData ? (
            <div className='info-weather'>
              <h2 className='title-info'>{weatherData.name}</h2>
              <p><MdSunnySnowing className='icons' /> Harorat: {weatherData.main.temp}°C</p>
              <p><VscDebugBreakpointUnsupported className='icons' /> Sezilish: {weatherData.main.feels_like}°C</p>
              <p><GiWaterDrop className='icons'/> Namlik: {weatherData.main.humidity}%</p>
            </div>
          ) : (
            <div className="lds-ellipsis"><div></div><div></div><div></div></div>
          )
          }
        </div>
      </div>
    </>

  );
};

export default home;