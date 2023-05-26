import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid, useTheme} from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch'

const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source} = noticia
    const theme = useTheme();
  return (
    <Grid item md={6} lg={4}>
        <Card>
         {urlToImage &&
            <Card>
              <CardMedia
                component="img"
                alt={`Imagen de la noticia ${title}`}
                image={urlToImage}
                height={250}
              />     
            </Card>
         }

         <CardContent>
            <Typography variant="body1" color="error">
              {source.name}
            </Typography>

            <Typography variant="h5">
              {title}
            </Typography>

            <Typography variant="body2">
              {description}
            </Typography>
         </CardContent>

          
    <CardActions>
      <Link
        href={url}
        target="_blank"
        variant="contained"
        width={'100%'}
        textAlign={'center'}
        endIcon={<LaunchIcon />}
        sx={{
          textDecoration: 'none',
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          boxShadow: theme.shadows[4],
          fontSize  :'2rem',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            transform: 'scale(1.05)' // Añade una animación de escala
          },
          transition: 'transform 0.2s ease-in-out' // Agrega una transición
        }}
      >
        Leer Noticia
      </Link>
    </CardActions>
        </Card>
    </Grid>
    
  )
}

export default Noticia


