
import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct"
import ProductList from "./productList"
import MyForm from "./MyForm";
const Products = () => {
  const [components, setComponents] = useState([ProductList, AddProduct]);

  function addComponent() {

  }
  return ( /////flex
    <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductList />
      <AddProduct />
      <MyForm />
    </Box>
  )
}
export default Products