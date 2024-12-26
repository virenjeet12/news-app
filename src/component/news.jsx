import { useEffect, useState } from "react"
import { GridBox} from "./box_layout"


export function News(props) {
    const catgory = props.catgory

    const [articles, setarticles] = useState([])


    const getdata = async () => {
        const data = await fetch(`https://newsdata.io/api/1/news?apikey=pub_357470cb23738599c70486defb6fd80e90092&country=in&language=en&category=${catgory}`)

        const res = await data.json()
        setarticles(res.results)

    }

    useEffect(() => {
        getdata()
    }, [catgory])
    // console.log(articles[0]);

    return (
        <div style={{ display:"grid" , gridTemplateColumns : "repeat(4,1fr)" , margin: "50px" , gap: "50px" ,}}>
            {articles.map((article) => {
                return (

                    <div key={article.article_id} >
                        <GridBox source={article.source_id}
                            heading={article.title}
                            imageSrc={article.image_url ? article.image_url : Image}
                            link={article.link}>
                        </GridBox>
                    </div>
                )
            })}
        </div>
    )

}