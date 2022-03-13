const numberWithCommas = (value: string | number) => {
    if (!value) return "";
    if (typeof value == "string") value = parseFloat(value);

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatTvl = (value: string | number) => {
    if (!value) return 0;
    if (typeof value == "string") value = parseFloat(value);

    return Number(value.toFixed(2));
};

const numberToMillion = (val: number) => {
    return parseFloat((val / 1000000).toString()).toFixed(2);
};

export { numberWithCommas, formatTvl, numberToMillion };
