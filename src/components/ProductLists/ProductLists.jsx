import { useEffect, useState } from "react";
import { timeAgo, comma } from "../../utils";


const API = import.meta.env.VITE_PB_API;

async function fetchProducts(options) {
  try {
    const response = await fetch(
      `${API}/api/collections/products/records`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}
async function fetchLikes(options){
  try{
    const response = await fetch(`${API}/api/collections/likes/records`,options);
    const data = await response.json();
    return data;
  }catch(error){
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}
async function likeCount(products){
  fetchLikes().then((data)=>{
    const likeLists = data.items
    const likeProducts = likeLists.filter((like)=>{like.product === products.id })
    return likeProducts.length
  })
}

export default function ProductLists() {
  const productURL = '/src/pages/exchangeBoard/index.html#';
  const imgURL = `${API}/api/files/`
  const [productLists, setProductLists] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetchProducts({ signal: controller.signal }).then((data) => {
      setProductLists(data.items);
    });
    return () =>{
      controller.abort()
    }
  },[]);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetchLikes({ signal: controller.signal }).then((data) => {
      setLikes(data.items);
      console.log(likes);
    });
    
    return () =>{
      controller.abort()
    }
  },[]);

  const handleLinkCancle = (e) =>{
    e.preventDefault();
  }
 
  return (productLists.map((item)=>{
    return(
     <div className="exchange-board border-t border-Contents-contentSecondary flex items-center py-3 pl-3">
      <div className="exchange-img-wrapper relative w-[28.125%] pb-[28.125%] bg-gray-200 rounded-2xl">
        <a href={`${productURL}${item.id}`} onClick={handleLinkCancle}>
          <img src={`${imgURL}${item.collectionId}/${item.id}/${item.images}`} className="exchange-board-img absolute top-0 left-0 w-full h-full object-cover" alt="${item.alt}" />
        </a>
      </div>
      <div className="exchange-board-contents ml-2 text-base sm:text-xl flex-grow">
        <a href={`${productURL}${item.id}`} className="exchange-board-link" onClick={handleLinkCancle}>
          {item.title}
        </a>
        <div className="flex flex-col">
          <div className="text-sm text-Contents-contentTertiary font-normal sm:text-lg mb-1">
            <span className="exchange-board-location">마포구 신수동</span>
            <span className="exchange-board-time">ㆍ{timeAgo(item.created)}</span>
          </div>
          <div className="mb-2">
            <span className="exchange-board-state" />
            <span className="exchange-board-price text-base font-semibold leading-normal sm:text-xl">{comma(item.price)}원</span>
          </div>
        </div>
        <div className="exchange-board-heart flex flex-grow items-center justify-end self-end pr-3">
          <img src="${heartSvg}" className="w-[0.875rem] h-[0.875rem] sm:w-[1.25rem] sm:h-[1.25rem]" alt />
          <span className="exchange-board-like text-sm sm:text-lg"></span>
        </div>
      </div>
    </div>
    )
  }))
}
