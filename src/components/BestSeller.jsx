import { useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ArticleCard } from '../components/ArticleCard'
import { appContext } from '../context/appContext'
import bd from '../../BD/data.json'

export function BestSeller(props) {
  const { data } = bd
  const { category } = useContext(appContext)
  const [listData, setListData] = useState({})

  useEffect(() => {
    const aux = data.filter(cat => cat.categoryId === category)
    setListData(aux[0].list.slice(0, 4))
  }, [category])

  return (
    <Container maxWidth='1620px' disableGutters={true} sx={{ marginTop: '74px', width: '1620px', marginX: '0' }}>
      <Typography color='#2B3445' fontWeight='bold' fontSize='22px' textAlign='center'>
        {props.title}
      </Typography>
      <Grid sx={{ marginTop: '44px', columnGap: '28px' }} flexWrap='nowrap' justifyContent='flex-start' container>
        {Boolean(listData.length > 0) &&
          listData.map(article => (
            <Grid key={article.id} item sx={{ width: '385px', height: '605px' }}>
              <ArticleCard {...article} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
