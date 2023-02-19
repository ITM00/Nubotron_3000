export interface Value {
    value: number | null;
    state: 'danger' | 'normal' | 'warning';
}

export interface IBearing {
    1: {
        T: Value;
        B: Value;
        G: Value;
        O: Value;
    };
    2: {
        T: Value;
        B: Value;
        G: Value;
        O: Value;
    };
    3: {
        T: Value;
    };
    4: {
        T: Value;
    };
    5: {
        T: Value;
    };
    6: {
        T: Value;
    };
    7: {
        T: Value;
        B: Value;
        G: Value;
        O: Value;
    };
    8: {
        T: Value;
        B: Value;
        G: Value;
        O: Value;
    };
    9: {
        T: Value;
    };
}

export interface MasloBack {
    level: Value;
    pressure: Value;
}

export interface IExhauster {
    numberRoter: number | null; // номер ротора соответствует записи, внесенной в справочник роторов
    dateChangeRoter: Date | null; // указывает дату замены ротора на конкретном эксгаустере;
    lastChangeRoter: number | null; /// отображается суммарно время, которое установленный ротор был в работе
    bearing: IBearing;
    coolant: {
        after1: Value;
        after2: Value;
        before1: Value;
        before2: Value;
    };
    mainPrivod: {
        I: Value;
        IDvig: Value;
        URotor: Value;
        UStater: Value;
    };
    masloBack: MasloBack;
    truba: {
        vacuum: number | null;
        damper: number | null;
        temperature: number | null;
    };
    prognozRouter: {
        days: number | null; // отображается прогнозное время работы до отказа, дополнительная индикация в виде значков
        state: 'danger' | 'normal' | 'warning' | null;
    };
    status: 'run' | 'stop';
}

export interface IAglomachine {
    [exhausterName: string]: IExhauster;
}

export type IAglomachines = {
    [aglomachineseyName: string]: IAglomachine;
} & {
    moment: string | null;
};

export interface State {
    name?: {
        nameAglo: string;
        nameExh: string;
    };
    aglomachines?: IAglomachines;
}
