export function locationDataBuilder(data) {
    // console.log(data);
    let return_data = {
        city: data.city
    }

    if(data.localityInfo.administrative){
        return_data.province = (data.localityInfo.administrative[2]) ? data.localityInfo.administrative[2].name : "";
        return_data.region =   (data.localityInfo.administrative[1]) ? data.localityInfo.administrative[1].name : "";
        return_data.country =  (data.localityInfo.administrative[0]) ? data.localityInfo.administrative[0].name : "";
    }else{
         return_data.province = "";
        return_data.region    = "";
        return_data.country   = "";
    }

    return return_data;
}
