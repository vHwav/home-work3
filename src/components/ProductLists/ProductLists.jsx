import { useEffect, useState } from "react";

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

export default function ProductLists() {
  const [productLists, setProductLists] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetchProducts({ signal: controller.signal }).then((data) => {
      setProductLists(data.items);
      console.log(productLists);
    });
  }, []);
}
