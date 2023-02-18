import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { DocsIcon } from '../../components/icons';
import { PageHeaderLayout } from '../../components/layouts/PageHeaderLayout';
import {
    Button,
    Card,
    Checkbox,
    DataTimePicker,
    Disclosure,
    DisclosureButton,
    Select,
    SelectItem,
} from '../../components/ui';
import { useAppSelector } from '../../redux/hooks';
import { Scheme } from './Scheme';

type MachineTabs = 'scheme' | 'graph';

export function MachinePage() {
    const current = useAppSelector((state) => state.current);
    const [activeTab, setActiveTab] = useState<MachineTabs>('scheme');

    const onChangeTab = useCallback(
        (tab: MachineTabs) => () => {
            setActiveTab(tab);
        },
        [],
    );

    return (
        <div className={'m-4 flex  h-full flex-col gap-2 overflow-hidden'}>
            <div className={'flex items-center justify-between'}>
                {activeTab === 'scheme' ? (
                    <div></div>
                ) : (
                    <Card className={'item-center flex gap-2 p-2'}>
                        <DataTimePicker />
                    </Card>
                )}

                <Card className={'flex gap-2 p-2'}>
                    <Button theme={activeTab === 'scheme' ? 'contained' : 'text'} onClick={onChangeTab('scheme')}>
                        Мнемосхема
                    </Button>
                    <Button theme={activeTab === 'graph' ? 'contained' : 'text'} onClick={onChangeTab('graph')}>
                        График
                    </Button>
                </Card>
            </div>
            <Card className={' flex  h-full h-full flex-col overflow-hidden'}>
                <PageHeaderLayout className={'flex items-center justify-between'}>
                    <div className={'flex items-center gap-4'}>
                        <div className={'rounded-lg bg-yellow-600 p-2 text-white'}>
                            <DocsIcon className={'h-4 w-4 fill-yellow-300'} />
                        </div>
                        <div className={'text-sm font-medium'}>{`Эксгаустер ${current.name?.nameExh || '****'}`}</div>
                    </div>
                    {activeTab === 'graph' ? <Button theme={'gray'}>Сохранить в Excel</Button> : ''}
                </PageHeaderLayout>
                {activeTab === 'graph' ? <Graph /> : <Scheme />}
            </Card>
        </div>
    );
}

const possibleTime: SelectItem[] = [
    {
        id: 1,
        title: '1 мин',
    },
    {
        id: 2,
        title: '10 мин',
    },
    {
        id: 3,
        title: '30 мин',
    },
    {
        id: 4,
        title: '60 мин',
    },
];

const aggregates = [
    {
        title: 'Подшипнки',
        id: 1,
        types: [
            {
                title: '1 ПС',
                id: 1,
                indicators: [
                    {
                        id: 1,
                        title: 'T, °С',
                        value: '0000',
                        type: 'normal',
                    },
                    {
                        id: 2,
                        title: 'Верт, мм/с',
                        value: '0000',
                        type: 'normal',
                    },
                    {
                        id: 3,
                        title: 'Гориз, мм/с',
                        value: '0000',
                        type: 'danger',
                    },
                    {
                        id: 4,
                        title: 'Ось, мм/с',
                        value: '0000',
                        type: 'normal',
                    },
                ],
            },
            {
                title: '3 ПС',
                id: 2,
                indicators: [
                    {
                        id: 1,
                        title: 'T, °С',
                        value: '0000',
                        type: 'normal',
                    },
                ],
            },
        ],
    },
];

function Graph() {
    const [timeValue, setTimeValue] = useState(possibleTime[0]);

    const data = [
        {
            name: 'день 1',
            first: 100,
            second: 200,
        },
        {
            name: 'день 2',
            first: 200,
            second: 300,
        },
        {
            name: 'день 3',
            first: 300,
            second: 100,
        },
        {
            name: 'день 4',
            first: 400,
            second: 500,
        },
        {
            name: 'день 5',
            first: 500,
            second: 600,
        },
        {
            name: 'день 6',
            first: 600,
            second: 100,
        },
    ];

    return (
        <div className={'flex h-full overflow-hidden p-2'}>
            <div className={'flex w-72 flex-col gap-1 border-r border-gray-100 px-1'}>
                <div className={'grid grid-cols-[1.5rem_1fr_70px] gap-x-1'}>
                    <div className={'border-b-2 border-gray-80'}>
                        <DisclosureButton isActive={false} />
                    </div>
                    <div className={'flex items-center border-b-2 border-gray-80 text-sm text-gray-500'}>Агрегат</div>
                    <div className={'flex items-center border-b-2 border-gray-80 text-sm text-gray-500'}>Значение</div>
                </div>
                <div className={'scrollbar mt-1 flex flex-col gap-1 overflow-y-auto pr-2'}>
                    {aggregates.map((aggregate) => {
                        return (
                            <Disclosure
                                key={aggregate.id}
                                initOpen
                                classNameTitle={'bg-gray-20 border border-gray-60 rounded w-full text-sm py-1 px-2'}
                                classNameBody={'flex flex-col gap-2 text-sm'}
                                title={aggregate.title}
                            >
                                {aggregate.types.map((type) => {
                                    return (
                                        <Disclosure
                                            key={type.id}
                                            initOpen
                                            classNameTitle={
                                                'bg-gray-20 border border-gray-60 rounded w-full text-sm py-1 px-2'
                                            }
                                            classNameBody={'flex flex-col gap-2'}
                                            title={type.title}
                                        >
                                            {type.indicators.map((indicator) => {
                                                return (
                                                    <div
                                                        key={indicator.id}
                                                        className={
                                                            'w-full rounded border border-gray-60 bg-gray-20 py-1 px-2 text-sm'
                                                        }
                                                    >
                                                        <Checkbox classNameLabel={'w-full'}>
                                                            <div className={'flex w-full items-center justify-between'}>
                                                                <div className={'text-sm'}>{indicator.title}</div>
                                                                <div
                                                                    className={classNames(
                                                                        indicator.type === 'danger'
                                                                            ? 'bg-red-200 text-red-1000'
                                                                            : 'text-black',
                                                                        'rounded px-2',
                                                                    )}
                                                                >
                                                                    {indicator.value}
                                                                </div>
                                                            </div>
                                                        </Checkbox>
                                                    </div>
                                                );
                                            })}
                                        </Disclosure>
                                    );
                                })}
                            </Disclosure>
                        );
                    })}
                </div>
            </div>
            <div className={'flex max-w-[100%] flex-1 flex-col px-1'}>
                <div className={'mb-2 flex items-center justify-end border-b-2 border-gray-60 pb-2'}>
                    <Select value={timeValue} items={possibleTime} onChange={setTimeValue} />
                </div>
                <ResponsiveContainer width={5000} height='100%' className={'max-w-[100%] overflow-y-scroll'}>
                    <LineChart width={5000} height={500} data={data}>
                        <Line
                            type='monotone'
                            dataKey='first'
                            strokeWidth={3}
                            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                        <Line
                            type='monotone'
                            dataKey='second'
                            strokeWidth={3}
                            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip content={<div>123</div>} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
