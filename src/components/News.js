import React, { useEffect,useState } from 'react'
import propTypes from 'prop-types';
import NewsItem from './NewsItem.js';
import Spinner from './Spinner.js';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)  => {
    
    const [article,setArticle] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);

     
        
        

    useEffect(() => {
        async function check(){
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=663e7945200645c5ad4d0269025bbb8c&page=${page}&pageSize=5`;
            setLoading(true);
            let data = await fetch(url);
            let jsonData = await data.json();
            setArticle(jsonData.articles);
            setTotalResults(jsonData.totalResults);
            setLoading(false);
    }
    
    check();
    },[])
    const fetchMoreData = async () =>{
        setPage(props.page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=663e7945200645c5ad4d0269025bbb8c&page=${page}&pageSize=5`;
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticle(article.concat(jsonData.articles));
        setTotalResults(jsonData.totalResults);
        console.log(article)
    }


 

        return (
                    <InfiniteScroll 
                        dataLength={article.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<Spinner />}>
                    <div className="mx-3">
                    <div className="container">
                    <div className="row" >
                        {article.map((element) => {
                            return <div className="container col-md-4" key={element.url}>
                            {loading && <Spinner />}
                                <NewsItem title={element.title} description={element.description}
                                    imageUrl={element.urlToImage}
                                    readMoreUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt ? element.publishedAt.slice(0, 10) : ".."} />
                            </div>
                        })}
                    </div>
                    </div>
                    </div>
                    
                    </InfiniteScroll>

        )
    
}

export default News;
