const SCREEN_XSM = 180;
const SCREEN_SM = 250;
const SCREEN_MD = 400;
const SCREEN_LG = 700;


interface NumbersParams {
    font: string;
    fontSize: number;
    xTextPos: number;
    xTextPos0: number;
    yTextPos: number;
};

interface HandsParams {
    width: number;
    isTextVisible: boolean;
};

interface CenterParams {
    size: number;
};

function getNumberParams (size:number): NumbersParams {
    if (size < SCREEN_XSM) return {
        font:'bold 15px sans-serif',
        fontSize: 15,
        xTextPos: 2,
        xTextPos0: 5,
        yTextPos: 5
    };
    if (size < SCREEN_SM) return {
        font:'bold 25px sans-serif',
        fontSize: 20,
        xTextPos: 5,
        xTextPos0: 10,
        yTextPos: 10
    };
    if (size < SCREEN_MD) return {
        font:'bold 35px sans-serif',
        fontSize: 25,
        xTextPos: 10,
        xTextPos0: 15,
        yTextPos: 15
    };
    if (size < SCREEN_LG) return {
        font:'bold 50px sans-serif',
        fontSize: 35,
        xTextPos: 10,
        xTextPos0: 25,
        yTextPos: 20
    };
    return {
        font:'bold 60px sans-serif',
        fontSize: 40,
        xTextPos: 15,
        xTextPos0: 30,
        yTextPos: 20
    };
}

function getHandParams (size:number): HandsParams {
    if (size < SCREEN_SM) return {
        width: 5,
        isTextVisible: false
    };
    if (size < SCREEN_MD) return {
        width: 10,
        isTextVisible: false,
    };
    return {
        width: 20,
        isTextVisible: true
    };
}

function getCenterParams (size:number): CenterParams {
    if (size < SCREEN_SM) return {
        size: 5
    };
    if (size < SCREEN_MD) return {
        size: 10
    };
    return {
        size: 20
    };
}

export {
    getNumberParams,
    NumbersParams,
    getHandParams,
    HandsParams,
    getCenterParams,
    CenterParams
};