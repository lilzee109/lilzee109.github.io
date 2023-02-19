const confertRp = (dataRp) => {
    let data = dataRp.toString().split("").reverse().join("");
    let rupiah = data.match(/\d{1,3}/g);
    rupiah = rupiah.join(".").split("").reverse().join("");

    return `Rp${rupiah}`
}

export default confertRp