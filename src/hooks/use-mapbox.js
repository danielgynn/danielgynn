const TOKEN = process.env.MAPBOX_TOKEN;

export const useMapbox = (polyline) => {
    const polylineEncoded = encodeURIComponent(polyline)
    return `https://api.mapbox.com/styles/v1/danielgynn/ckk2ru6v93qfh17qwzzqf3v1r/static/path+f5a623(${polylineEncoded})/auto/500x300@2x?access_token=${TOKEN}&logo=false&attribution=false`
}