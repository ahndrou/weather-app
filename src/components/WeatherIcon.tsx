import styled from "styled-components";
import drizzleIconSrc from "../assets/images/icon-drizzle.webp";
import fogIconSrc from "../assets/images/icon-fog.webp";
import overcastIconSrc from "../assets/images/icon-overcast.webp";
import partlyCloudyIconSrc from "../assets/images/icon-partly-cloudy.webp";
import rainIconSrc from "../assets/images/icon-rain.webp";
import snowIconSrc from "../assets/images/icon-snow.webp";
import stormIconSrc from "../assets/images/icon-storm.webp";
import sunnyIconSrc from "../assets/images/icon-sunny.webp";

const ICONS = {
  drizzle: drizzleIconSrc,
  fog: fogIconSrc,
  overcast: overcastIconSrc,
  partlyCloudy: partlyCloudyIconSrc,
  rain: rainIconSrc,
  snow: snowIconSrc,
  storm: stormIconSrc,
  sunny: sunnyIconSrc,
} as const;

export type Forecast = keyof typeof ICONS;

type WeatherIconProps = {
  forecast: Forecast;
};

export default function WeatherIcon({ forecast }: WeatherIconProps) {
  return <Icon src={ICONS[forecast]} />;
}

const Icon = styled.img`
  width: 60px;
`;
