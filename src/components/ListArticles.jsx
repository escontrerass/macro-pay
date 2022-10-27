import { useContext, useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { InputSearch } from '../components/InputSearch'
import { ArticleCard } from '../components/ArticleCard'
import { appContext } from '../context/appContext'
import bd from '../../BD/data.json'

export function ListArticles() {
  const { data } = bd
  const { category, articlesData, setArticlesData, filterData, setFilterData } = useContext(appContext)

  useEffect(() => {
    const aux = data.filter(cat => cat.categoryId === category)
    Boolean(aux.length > 0) && setArticlesData(aux[0])
  }, [category])

  useEffect(() => {
    setFilterData(articlesData.list)
  }, [articlesData])

  return (
    <Container
      disableGutters={true}
      maxWidth='1260px'
      sx={{ marginLeft: '47px', width: '1260px', height: '900px', overflowY: 'scroll' }}
    >
      <InputSearch />
      <Grid container mt={3} gap={4}>
        {Boolean(filterData !== undefined) &&
          filterData.map(article => (
            <Grid key={article.id} item sx={{ width: '385px', height: '605px' }}>
              <ArticleCard {...article} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
