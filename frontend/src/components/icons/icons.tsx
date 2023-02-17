import { SVGAttributes, memo } from 'react';
import {
  FiCalendar,
  ImNotification,
  MdNotificationsNone,
  MdOutlineWaterDrop,
  RiArrowDownSLine, RiArrowLeftSLine,
  RiArrowRightSLine
} from "react-icons/all";
import { BsThermometerHalf } from 'react-icons/bs';
import { IoIosRadio } from 'react-icons/io';

export type IconProps = SVGAttributes<SVGElement>;

export function DocsIcon(props: IconProps) {
    return (
        <svg width='16' height='17' viewBox='0 0 16 17' fill='#000000' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.58579 1.77738C2.96086 1.4023 3.46957 1.19159 4 1.19159H9.33333C9.51015 1.19159 9.67971 1.26183 9.80474 1.38685L13.8047 5.38685C13.9298 5.51188 14 5.68144 14 5.85826V13.8583C14 14.3887 13.7893 14.8974 13.4142 15.2725C13.0391 15.6475 12.5304 15.8583 12 15.8583H4C3.46957 15.8583 2.96086 15.6475 2.58579 15.2725C2.21071 14.8974 2 14.3887 2 13.8583V3.19159C2 2.66116 2.21071 2.15245 2.58579 1.77738ZM4 2.52492C3.82319 2.52492 3.65362 2.59516 3.5286 2.72018C3.40357 2.84521 3.33333 3.01478 3.33333 3.19159V13.8583C3.33333 14.0351 3.40357 14.2046 3.5286 14.3297C3.65362 14.4547 3.82319 14.5249 4 14.5249H12C12.1768 14.5249 12.3464 14.4547 12.4714 14.3297C12.5964 14.2046 12.6667 14.0351 12.6667 13.8583V6.52492H9.33333C8.96514 6.52492 8.66667 6.22645 8.66667 5.85826V2.52492H4ZM10 3.46773L11.7239 5.19159H10V3.46773ZM4.66667 6.52492C4.66667 6.15673 4.96514 5.85826 5.33333 5.85826H6.66667C7.03486 5.85826 7.33333 6.15673 7.33333 6.52492C7.33333 6.89311 7.03486 7.19159 6.66667 7.19159H5.33333C4.96514 7.19159 4.66667 6.89311 4.66667 6.52492ZM4.66667 9.19159C4.66667 8.8234 4.96514 8.52492 5.33333 8.52492H10.6667C11.0349 8.52492 11.3333 8.8234 11.3333 9.19159C11.3333 9.55978 11.0349 9.85826 10.6667 9.85826H5.33333C4.96514 9.85826 4.66667 9.55978 4.66667 9.19159ZM4.66667 11.8583C4.66667 11.4901 4.96514 11.1916 5.33333 11.1916H10.6667C11.0349 11.1916 11.3333 11.4901 11.3333 11.8583C11.3333 12.2264 11.0349 12.5249 10.6667 12.5249H5.33333C4.96514 12.5249 4.66667 12.2264 4.66667 11.8583Z'
            />
        </svg>
    );
}

export const RadioIcon = memo(IoIosRadio);
export const ThermometerIcon = memo(BsThermometerHalf);
export const WaterIcon = memo(MdOutlineWaterDrop);
export const InfoIcon = memo(ImNotification);
export const NotificationIcon = memo(MdNotificationsNone);
export const ArrowRightIcon = memo(RiArrowRightSLine);
export const ArrowDownIcon = memo(RiArrowDownSLine);
export const ArrowLeftIcon = memo(RiArrowLeftSLine);

export const CalendarIcon = memo(FiCalendar);

export const ProgressIcon = memo(function ProgressIcon(props: IconProps) {
    return (
        <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <circle cx='8.75' cy='8.42554' r='7' stroke='#FEF1DB' strokeWidth='2' />
            <path
                d='M2.91519 12.2927C2.09644 11.0574 1.69089 9.59404 1.75696 8.11348C1.82303 6.63293 2.3573 5.21154 3.28283 4.05404C4.20835 2.89653 5.47738 2.06265 6.90712 1.67248C8.33687 1.28231 9.85356 1.35599 11.2388 1.8829'
                stroke='#FDC65F'
                strokeWidth='2'
            />
        </svg>
    );
});
