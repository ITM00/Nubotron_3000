import classNames from 'classnames';

import { Value } from '../../../redux/slices/types';

interface OxladitelProps {
    after1: Value;
    after2: Value;
    before1: Value;
    before2: Value;
}

export const Oxladitel = (props: OxladitelProps) => {
    return (
        <>
            <PopupGrad top={25} left={1318} content={props.after1} />
            <PopupGrad top={25} left={1232} content={props.before1} />
            <PopupGrad top={114.2} left={1148} content={props.after2} />
            <PopupGrad top={200} left={1275} content={props.before2} />
            <Img />
        </>
    );
};

interface PopupProps {
    top: number;
    left: number;
    content: Value;
}

const PopupGrad = (props: PopupProps) => {
    return (
        <div
            className={classNames(
                'absolute rounded bg-gray_green-600 px-2 py-1 text-white',
                props.content.state === 'danger' ? 'bg-red-800' : '',
                props.content.state === 'warning' ? 'bg-yellow-600' : '',
                props.content.state === 'normal' ? 'bg-gray_green-600' : '',
            )}
            style={{
                top: props.top,
                left: props.left,
            }}
        >
            {props.content.value ? Math.round(props.content.value) : '-'} <span className={'font-light'}>°С</span>
        </div>
    );
};

const Img = () => {
    return (
        <div
            style={{
                top: 97,
                left: 1250,
            }}
            className={'absolute flex flex-col items-center justify-center gap-2 font-light'}
        >
            <div className={'bg-gray-20 py-1 px-4'}>Охладитель</div>
            <svg width='93' height='30' viewBox='0 0 93 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M22.2335 3.98081C22.894 1.94942 24.7873 0.574219 26.9234 0.574219C30.2742 0.574219 32.6494 3.84418 31.6132 7.03075L25.3776 26.2078C24.717 28.2392 22.8238 29.6144 20.6877 29.6144C17.3369 29.6144 14.9617 26.3444 15.9979 23.1578L22.2335 3.98081Z'
                    fill='#677272'
                />
                <path
                    d='M33.3356 3.98081C33.9961 1.94942 35.8893 0.574219 38.0254 0.574219C41.3762 0.574219 43.7514 3.84418 42.7153 7.03075L36.4796 26.2078C35.8191 28.2392 33.9258 29.6144 31.7898 29.6144C28.439 29.6144 26.0638 26.3444 27.0999 23.1578L33.3356 3.98081Z'
                    fill='#677272'
                />
                <path
                    d='M44.4381 3.98081C45.0986 1.94942 46.9919 0.574219 49.128 0.574219C52.4788 0.574219 54.854 3.84418 53.8178 7.03075L47.5822 26.2078C46.9216 28.2392 45.0284 29.6144 42.8923 29.6144C39.5415 29.6144 37.1663 26.3444 38.2024 23.1578L44.4381 3.98081Z'
                    fill='#677272'
                />
                <path
                    d='M55.5401 3.98081C56.2007 1.94942 58.0939 0.574219 60.23 0.574219C63.5808 0.574219 65.956 3.84418 64.9199 7.03075L58.6842 26.2078C58.0237 28.2392 56.1304 29.6144 53.9944 29.6144C50.6436 29.6144 48.2683 26.3444 49.3045 23.1578L55.5401 3.98081Z'
                    fill='#677272'
                />
                <path
                    d='M66.6422 3.98081C67.3027 1.94942 69.196 0.574219 71.3321 0.574219C74.6829 0.574219 77.0581 3.84418 76.0219 7.03075L69.7863 26.2078C69.1257 28.2392 67.2325 29.6144 65.0964 29.6144C61.7456 29.6144 59.3704 26.3444 60.4065 23.1578L66.6422 3.98081Z'
                    fill='#677272'
                />
                <path
                    d='M10.8224 8.94531L0.362177 8.94531L15.0012 23.7759L17.7258 15.5281L10.8224 8.94531Z'
                    fill='#677272'
                />
                <path
                    d='M77.4387 5.01829L75.4074 11.5402L88.1171 11.5402L90.3216 4.94391L77.4387 5.01829Z'
                    fill='#677272'
                />
            </svg>
        </div>
    );
};
