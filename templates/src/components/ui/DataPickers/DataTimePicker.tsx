import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ChangeEventHandler, Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks';
import { ArrowDownIcon, CalendarIcon } from '../../icons';
import { Button } from '../Button';
import { Card } from '../Card';
import { Input } from '../Input';
import { ChangeMonthArrows } from './changeMonthArrows';
import { ChooseMonth } from './chooseMonth';
import { ChooseYear } from './chooseYear';

export interface DataTimePickerProps {
    initStart?: Date;
    initEnd?: Date;
}

interface ChooseDate {
    start: Date;
    end: Date;
}

export function DataTimePicker(props: DataTimePickerProps) {
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [currentTime, setCurrentTime] = useState<Date>(new Date(0, 0, 0, 0, 0));
    const [chooseDate, setChooseDate] = useState<ChooseDate>({
        start: props.initStart || new Date(),
        end: props.initEnd || new Date(),
    });
    const [calendarArray, setCalendarArray] = useState<Array<CellOfCalendarProps>>([]);

    const calendarRef = useRef(null);

    useOnClickOutside(calendarRef, () => {
        setCalendarIsOpen(false);
    });

    const onChangeYear = useCallback((year: number) => {
        setCurrentDate((prev) => {
            return new Date(prev.setFullYear(year));
        });
    }, []);

    const onChangeMonth = useCallback((month: number) => {
        setCurrentDate((prev) => {
            return new Date(prev.setMonth(month));
        });
    }, []);

    const onChangeNextMonth = useCallback(() => {
        setCurrentDate((prev) => {
            if (prev.getMonth() == 11) {
                return new Date(prev.getFullYear() + 1, 0, prev.getDay());
            } else {
                return new Date(prev.getFullYear(), prev.getMonth() + 1, prev.getDay());
            }
        });
    }, []);

    const onChangePrevMonth = useCallback(() => {
        setCurrentDate((prev) => {
            if (prev.getMonth() == 0) {
                return new Date(prev.getFullYear() - 1, 11, prev.getDay());
            } else {
                return new Date(prev.getFullYear(), prev.getMonth() - 1, prev.getDay());
            }
        });
    }, []);

    const onClickCell = useCallback(
        (date: Date) => () => {
            setChooseDate((prev) => {
                const newDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    currentTime.getHours(),
                    currentTime.getMinutes(),
                );
                if (date < prev.start && date < prev.end) {
                    return {
                        start: newDate,
                        end: prev.end,
                    };
                } else if (date > prev.start && date > prev.end) {
                    return {
                        start: prev.start,
                        end: newDate,
                    };
                } else if (deltaDate(date, prev.end) < deltaDate(date, prev.start)) {
                    return {
                        start: prev.start,
                        end: newDate,
                    };
                } else {
                    return {
                        start: newDate,
                        end: prev.end,
                    };
                }
            });
        },
        [currentTime],
    );

    const onCurrentTimeChange = useCallback((e: any) => {
        const [hours, minutes] = e.target.value.split(':').map((string: string) => Number(string));
        setCurrentTime(new Date(0, 0, 0, hours, minutes));
    }, []);

    const clickCurrentTime = useCallback(() => {
        setCurrentTime(new Date());
    }, []);

    // render calendar items
    useEffect(() => {
        // Первый день недели в выбранном месяце
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 7).getDay();
        // Последний день выбранного месяца
        const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        // Последний день предыдущего месяца
        const lastDayOfLastMonth =
            currentDate.getMonth() == 0
                ? new Date(currentDate.getFullYear() - 1, 11, 0).getDate()
                : new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

        const arr: CellOfCalendarProps[] = [];
        let i = 1;
        do {
            let dow = new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDay();
            // Если первый день недели не понедельник показать последние дни предыдущего месяца
            if (i == 1 && dow !== 1) {
                let k = lastDayOfLastMonth - firstDayOfMonth + 1;
                for (let j = 0; j < firstDayOfMonth; j++) {
                    const current = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, k);
                    if (dateInRange(current, chooseDate)) {
                        arr.push({
                            type: 'select',
                            disable: true,
                            date: current,
                        });
                    } else {
                        arr.push({
                            type: 'normal',
                            disable: true,
                            date: current,
                        });
                    }
                    k++;
                }
            }

            // Записываем текущий день в цикл
            const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            if (dateInRange(current, chooseDate)) {
                arr.push({
                    type: 'select',
                    date: current,
                });
            } else {
                arr.push({
                    type: 'normal',
                    date: current,
                });
            }

            // Если последний день месяца не воскресенье, показать первые дни следующего месяца
            if (i == lastDateOfMonth && dow !== 0) {
                let k = 1;
                for (dow; dow < 7; dow++) {
                    const current = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, k);
                    if (dateInRange(current, chooseDate)) {
                        arr.push({
                            type: 'select',
                            disable: true,
                            date: current,
                        });
                    } else {
                        arr.push({
                            type: 'normal',
                            disable: true,
                            date: current,
                        });
                    }
                    k++;
                }
            }
            i++;
        } while (i <= lastDateOfMonth);

        setCalendarArray(arr);
    }, [currentDate, chooseDate]);

    const onToggleCalendar = useCallback(() => {
        setCalendarIsOpen((state) => !state);
    }, []);

    return (
        <div className={'flex items-center gap-1'}>
            <Button onClick={onToggleCalendar} className={'flex items-center'}>
                Временной диапазон <ArrowDownIcon className={'h-5 w-5'} />
            </Button>
            <div className={'relative'}>
                <Button containerClassName={'flex items-center gap-2'} onClick={onToggleCalendar}>
                    <div>{rangeToString(chooseDate.start, chooseDate.end)}</div>
                    <div className={'h-4 border border-yellow-700'} />
                    <CalendarIcon className={'h-4 w-4'} />
                </Button>
                <Transition
                    show={calendarIsOpen}
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Card ref={calendarRef} className={'absolute top-[calc(100%+1rem)] w-max w-56 !bg-white shadow-md'}>
                        <div className={'relative flex items-center justify-between rounded bg-gray-20 p-2'}>
                            <ChooseYear current={currentDate} onSelect={onChangeYear} />
                            <ChooseMonth current={currentDate} onSelect={onChangeMonth} />
                            <ChangeMonthArrows onNext={onChangeNextMonth} onPrev={onChangePrevMonth} />
                        </div>
                        <DayOfTheWeek />
                        <div className={'grid grid-cols-[repeat(7,2rem)] gap-x-2 gap-y-2 p-2'}>
                            {calendarArray.map((item, index) => {
                                return <CellOfCalendar onClick={onClickCell(item.date)} key={index} {...item} />;
                            })}
                        </div>
                        <div className={'flex items-center justify-between gap-2 bg-gray-20  p-2'}>
                            <Input
                                fullWidth
                                onChange={onCurrentTimeChange}
                                value={`${dateGetHourString(currentTime)}:${dateGetMinutesString(currentTime)}`}
                                type='time'
                            />
                            <Button className={'w-full'} onClick={clickCurrentTime} theme={'outlined'}>
                                Текущее время
                            </Button>
                        </div>
                    </Card>
                </Transition>
            </div>
        </div>
    );
}

const DayOfTheWeek = memo(function DayOfTheWeek() {
    return (
        <div className={'grid grid-cols-7 gap-1 bg-gray-20 p-2 text-gray-100'}>
            <div className={'px-2'}>Пн</div>
            <div className={'px-2'}>Вт</div>
            <div className={'px-2'}>Ср</div>
            <div className={'px-2'}>Чт</div>
            <div className={'px-2'}>Пт</div>
            <div className={'px-2 text-gray-200'}>Сб</div>
            <div className={'px-2 text-gray-200'}>Вс</div>
        </div>
    );
});

export interface CellOfCalendarProps {
    type: 'select' | 'normal';
    disable?: boolean;
    today?: boolean;
    date: Date;
    onClick?: () => void;
}

const CellOfCalendar = memo(function CellOfCalendar(props: CellOfCalendarProps) {
    return (
        <div
            onClick={props.onClick}
            className={classNames(
                'h-8 w-8 cursor-pointer rounded border border-transparent p-2 text-center text-sm',
                props.today ? 'bg-gray-20 text-gray-600' : '',
                props.type === 'normal' ? 'text-gray-1000 hover:!border-yellow-600' : '',
                props.type === 'select' ? 'bg-yellow-600 text-gray-1000 hover:!bg-yellow-800' : '',
                props.disable ? 'text-gray-600' : '',
            )}
        >
            {props.date.getDate()}
        </div>
    );
});

function deltaDate(first: Date, second: Date): number {
    //@ts-ignore
    return Math.abs(first - second);
}

function dateInRange(date: Date, range: ChooseDate): boolean {
    return dateWithoutTime(date) <= dateWithoutTime(range.end) && dateWithoutTime(date) >= dateWithoutTime(range.start);
}

function dateWithoutTime(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function rangeToString(start: Date, end: Date): string {
    return `${dateToFullString(start)} - ${dateToFullString(end)}`;
}

export function dateToFullString(date: Date): string {
    return `${dateGetDayString(date)}.${dateGetMonthString(date)}.${date.getFullYear()}, ${dateGetHourString(
        date,
    )}:${dateGetMinutesString(date)}`;
}

function dateGetMonthString(date: Date): string {
    return date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
}

function dateGetDayString(date: Date): string {
    return date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
}

function dateGetHourString(date: Date): string {
    return date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
}

function dateGetMinutesString(date: Date): string {
    return date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
}
