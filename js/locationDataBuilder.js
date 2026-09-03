export function locationDataBuilder(data) {
    console.log(data);
    let return_data = {
        city: data.city,
        province: data.localityInfo.administrative[2].name,
        region: data.localityInfo.administrative[1].name,
        country: data.localityInfo.administrative[0].name
    }

    return return_data;
}
