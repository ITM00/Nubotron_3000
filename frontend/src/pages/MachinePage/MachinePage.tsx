import { useCallback, useState } from 'react';

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

type MachineTabs = 'scheme' | 'graph';

export function MachinePage() {
    const [activeTab, setActiveTab] = useState<MachineTabs>('scheme');

    const onChangeTab = useCallback(
        (tab: MachineTabs) => () => {
            setActiveTab(tab);
        },
        [],
    );

    return (
        <div>
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
            <Card>
                <PageHeaderLayout className={'mt-2 flex items-center justify-between'}>
                    <div className={'flex items-center gap-4'}>
                        <div className={'rounded-lg bg-yellow-600 p-2 text-white'}>
                            <DocsIcon className={'h-4 w-4 fill-yellow-300'} />
                        </div>
                        <div className={'text-sm font-medium'}>Эксгаустер Х-172</div>
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

function Graph() {
    const [timeValue, setTimeValue] = useState(possibleTime[0]);

    return (
        <div className={'grid grid-cols-[300px_1fr] p-4'}>
            <div className={'border-r border-gray-100 px-1'}>
                <div className={'grid grid-cols-[1.5rem_1fr_70px] gap-x-1'}>
                    <div className={'border-b-2 border-gray-80'}>
                        <DisclosureButton isActive={false} />
                    </div>
                    <div className={'flex items-center border-b-2 border-gray-80 text-sm text-gray-500'}>Агрегат</div>
                    <div className={'flex items-center border-b-2 border-gray-80 text-sm text-gray-500'}>Значение</div>
                </div>
                <div className={'mt-1'}>
                    <Disclosure
                        initOpen
                        classNameTitle={'bg-gray-20 border border-gray-60 rounded w-full text-sm py-1 px-2'}
                        classNameBody={'flex flex-col gap-2 text-sm'}
                        title={'Подшипнки'}
                    >
                        <Disclosure
                            initOpen
                            classNameTitle={'bg-gray-20 border border-gray-60 rounded w-full text-sm py-1 px-2'}
                            classNameBody={'flex flex-col gap-2'}
                            title={'1 ПС'}
                        >
                            <div className={'w-full rounded border border-gray-60 bg-gray-20 py-1 px-2 text-sm'}>
                                <Checkbox classNameLabel={'w-full'}>
                                    <div className={'flex w-full items-center justify-between'}>
                                        <div className={'text-sm'}>T, °С</div>
                                        <div className={'text-black rounded px-2'}>0000</div>
                                    </div>
                                </Checkbox>
                            </div>
                            <div className={'w-full rounded border border-gray-60 bg-gray-20 py-1 px-2 text-sm'}>
                                <Checkbox classNameLabel={'w-full'}>
                                    <div className={'flex w-full items-center justify-between'}>
                                        <div className={'text-sm'}>T, °С</div>
                                        <div className={'rounded bg-red-200 px-2 text-red-1000'}>0000</div>
                                    </div>
                                </Checkbox>
                            </div>
                        </Disclosure>
                    </Disclosure>
                </div>
            </div>
            <div className={'px-1'}>
                <div className={'flex items-center justify-end'}>
                    <Select value={timeValue} items={possibleTime} onChange={setTimeValue} />
                </div>
            </div>
        </div>
    );
}

function Scheme() {
    return <div className={'grid grid-cols-[300px_1fr] p-4'}>schema</div>;
}
