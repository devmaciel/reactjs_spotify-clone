import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
  return (
    <div className="footer">
      
      <div className="footer__left">
        <img 
          className="footer__albumLogo"
          src="https://images-fe.ssl-images-amazon.com/images/I/61BH18erRPL._AC_UL600_SR600,600_.jpg" 
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Silly-Go-Round</h4>
          <p>FictionJunction YUUKA</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>

          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>

        </Grid>
      </div>

    </div>
  )
}

export default Footer
