export interface Value {
    value: number;
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

export interface Scheme {
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
        URoter: Value;
        UStater: Value;
    };
    masloBack: MasloBack;
    truba: {
        level: Value;
        vacuum: Value;
        damper: number;
        temperature: number;
    };
}

export interface Exhauster {
    id: string;
    status: 'run' | 'stop';
    numberRoter: number; // номер ротора соответствует записи, внесенной в справочник роторов
    dateChangeRoter: Date; // указывает дату замены ротора на конкретном эксгаустере;
    lastChangeRoter: number; /// отображается суммарно время, которое установленный ротор был в работе
    prediction: {
        days: number; // отображается прогнозное время работы до отказа, дополнительная индикация в виде значков
        state: 'danger' | 'normal' | 'warning';
    };
    bearing: IBearing;
    masloBack: MasloBack;
}

export interface Aglomachine {
    name: string;
    exhausts: Exhauster[];
}

export interface State {
    name?: string;
    scheme?: Scheme;
    aglomachines?: Aglomachine[];
}
