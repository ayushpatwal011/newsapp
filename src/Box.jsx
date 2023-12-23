export default function Box(props){
    return(<>
        <div className="box">
            <div className="boximg">
            <img src={props.article.urlToImage}/>
            </div>
            <div className="boxtitle">{props.article.title}
            </div>
            <div className="boxcontent">{props.article.content.substring(0,80).concat("....")}<a href={props.article.url} >Readmore</a>
            </div>
            <div className="boxdata">
            <p>Author:{props.article.author}</p>
            <p>{props.article.publishedAt}</p>
            </div>
        </div>
    </>)  
    }