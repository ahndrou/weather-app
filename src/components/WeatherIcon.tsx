import styled from "styled-components";
import drizzleIconSrc from "../assets/images/icon-drizzle.webp";
import fogIconSrc from "../assets/images/icon-fog.webp";
import overcastIconSrc from "../assets/images/icon-overcast.webp";
import partlyCloudyIconSrc from "../assets/images/icon-partly-cloudy.webp";
import rainIconSrc from "../assets/images/icon-rain.webp";
import snowIconSrc from "../assets/images/icon-snow.webp";
import stormIconSrc from "../assets/images/icon-storm.webp";
import sunnyIconSrc from "../assets/images/icon-sunny.webp";

const WEATHER_CODES = {
  0: sunnyIconSrc,
  1: sunnyIconSrc,
  2: partlyCloudyIconSrc,
  3: overcastIconSrc,
  45: fogIconSrc,
  48: fogIconSrc,
  51: drizzleIconSrc,
  53: drizzleIconSrc,
  55: drizzleIconSrc,
  // Freezing drizzle
  56: drizzleIconSrc,
  57: drizzleIconSrc,
  // ---------------
  61: rainIconSrc,
  63: rainIconSrc,
  65: rainIconSrc,
  // Freezing rain
  66: rainIconSrc,
  67: rainIconSrc,
  // ---------------
  71: snowIconSrc,
  73: snowIconSrc,
  75: snowIconSrc,
  // Snow grains
  77: snowIconSrc,
  // ---------------
  // Rain showers
  80: rainIconSrc,
  81: rainIconSrc,
  82: rainIconSrc,
  // ---------------
  // Snow showers
  85: snowIconSrc,
  86: snowIconSrc,
  // ---------------
  95: stormIconSrc,
  // Storms with hail
  96: stormIconSrc,
  99: stormIconSrc,
  // ---------------
} as const;

export type WeatherCode = keyof typeof WEATHER_CODES;

type WeatherIconProps = {
  forecast: WeatherCode | null;
  size?: "small" | "medium" | "large";
};

export default function WeatherIcon({
  forecast,
  size = "small",
}: WeatherIconProps) {
  if (forecast === null) return "N/A";

  let sizePx = 40;

  if (size === "medium") {
    sizePx = 60;
  } else if (size === "large") {
    sizePx = 120;
  }

  return <Icon src={WEATHER_CODES[forecast]} $size={sizePx} />;
}

interface IconProps {
  $size: number;
}

const Icon = styled.img<IconProps>`
  width: ${(p) => p.$size + "px"};
`;
