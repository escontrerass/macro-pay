import { createContext, useState } from 'react'

export const appContext = createContext({})

export function AppContextProvider({ children }) {
  const [addCart, setAddCart] = useState({})
  const [modal, setModal] = useState(false)
  const [category, setCategory] = useState(1)
  const [articlesData, setArticlesData] = useState({})
  const [filterData, setFilterData] = useState([])

  return (
    <appContext.Provider
      value={{
        addCart,
        setAddCart,
        modal,
        setModal,
        category,
        setCategory,
        articlesData,
        setArticlesData,
        filterData,
        setFilterData,
      }}
    >
      {children}
    </appContext.Provider>
  )
}
