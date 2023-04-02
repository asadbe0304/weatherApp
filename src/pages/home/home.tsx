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
      { id: 2, name: 'Samarkand' },
      { id: 3, name: 'Bukhara' },
      { id: 4, name: 'Khiva' },
      { id: 6, name: 'Andijan' },
      { id: 7, name: 'Namangan' },
      { id: 8, name: 'Navoiy' },
      { id: 9, name: 'Fergana' },
      { id: 10, name: 'Karakalpakstan' },
      { id: 11, name: 'Samarqand' }
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
          <Typography component="h2" className='title'>O'zbekiston Respublikasining ob-havo Malumotlari</Typography>
          <FormControl className='app-form'>

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Select
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
              <p><MdSunnySnowing /> Harorat: {weatherData.main.temp}°C</p>
              <p><VscDebugBreakpointUnsupported /> Sezilish: {weatherData.main.feels_like}°C</p>
              <p><GiWaterDrop /> Namlik: {weatherData.main.humidity}%</p>
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