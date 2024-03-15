import { SeriesListCard } from "./SeriesListCard"

export const SeriesList = ({contents}: {contents: any}) => {

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 m-8 sm:grid-cols-2 2xl:grid-cols-5 tv:grid-cols-7">
            {contents.map((content:any, index:number)=> {
                return (
                    <SeriesListCard content={content} key={index}/>
                )
            })}
        </div>
    )
}