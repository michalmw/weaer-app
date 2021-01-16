## UI
Css inspired by: https://dribbble.com/shots/1999409-Weather-widgets
Responsive: manually

## External Libraries
None

## Show details on click (weather by hours)
None - Right now this working in payed api. If will be for free (in past was for free) then I will write this function in service.
`
getDetailsByCoord(lat: number, lon: number): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.apiUrl}oneCall?lat=${lat}&lon=${lon}&exclude=hourly&appId=${environment.apiKey}`);
}
`

## Tests:
check by: `npm run test`
I testing not mockup response because this is external API. If something will change test can fast help what is change and where is problem.
In normal service (in our backend api) i mockup response.


